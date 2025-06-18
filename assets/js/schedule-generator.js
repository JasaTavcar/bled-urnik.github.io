class ConferenceScheduleGenerator {
  constructor(scheduleData) {
    this.data = scheduleData;
    this.selectedDays = [];
    this.selectedHalls = [];
    this.init();
  }

  init() {
    this.generateFilters();
    this.generateSchedule();
    this.setupEventListeners();
  }

  generateFilters() {
    this.generateDayFilter();
    this.generateHallFilter();
  }

  generateDayFilter() {
    const dayFilter = document.getElementById('dayFilter');
    dayFilter.innerHTML = '';

    this.data.days.forEach(day => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'btn btn-outline-primary';
      button.textContent = day.name;
      button.dataset.dayId = day.id;
      button.addEventListener('click', () => this.toggleDayFilter(day.id));
      dayFilter.appendChild(button);
    });
  }

  generateHallFilter() {
    const hallFilter = document.getElementById('hallFilter');
    hallFilter.innerHTML = '';

    // Get unique halls across all days
    const allHalls = new Set();
    this.data.days.forEach(day => {
      day.halls.forEach(hall => {
        allHalls.add(JSON.stringify({ id: hall.id, name: hall.name }));
      });
    });

    allHalls.forEach(hallStr => {
      const hall = JSON.parse(hallStr);
      const col = document.createElement('div');
      col.className = 'col-md-4 col-lg-3 mb-2';
      
      const formCheck = document.createElement('div');
      formCheck.className = 'form-check';
      
      const input = document.createElement('input');
      input.className = 'form-check-input';
      input.type = 'checkbox';
      input.id = `hall-${hall.id}`;
      input.dataset.hallId = hall.id;
      input.addEventListener('change', () => this.toggleHallFilter(hall.id));
      
      const label = document.createElement('label');
      label.className = 'form-check-label';
      label.htmlFor = `hall-${hall.id}`;
      label.textContent = hall.name;
      
      formCheck.appendChild(input);
      formCheck.appendChild(label);
      col.appendChild(formCheck);
      hallFilter.appendChild(col);
    });
  }

  toggleDayFilter(dayId) {
    const button = document.querySelector(`[data-day-id="${dayId}"]`);
    if (this.selectedDays.includes(dayId)) {
      this.selectedDays = this.selectedDays.filter(id => id !== dayId);
      button.classList.remove('btn-primary');
      button.classList.add('btn-outline-primary');
    } else {
      this.selectedDays.push(dayId);
      button.classList.remove('btn-outline-primary');
      button.classList.add('btn-primary');
    }
    this.generateSchedule();
  }

  toggleHallFilter(hallId) {
    const checkbox = document.getElementById(`hall-${hallId}`);
    if (checkbox.checked) {
      if (!this.selectedHalls.includes(hallId)) {
        this.selectedHalls.push(hallId);
      }
    } else {
      this.selectedHalls = this.selectedHalls.filter(id => id !== hallId);
    }
    this.generateSchedule();
  }

  generateSchedule() {
    const container = document.getElementById('scheduleContainer');
    container.innerHTML = '';

    // Filter days
    const filteredDays = this.selectedDays.length > 0 
      ? this.data.days.filter(day => this.selectedDays.includes(day.id))
      : this.data.days;

    if (filteredDays.length === 0) {
      container.innerHTML = '<div class="alert alert-info">Please select at least one day to view the schedule.</div>';
      return;
    }

    // Create a separate table for each day
    filteredDays.forEach(day => {
      const daySection = this.createDaySection(day);
      container.appendChild(daySection);
    });
  }

  createDaySection(day) {
    const dayRow = document.createElement('div');
    dayRow.className = 'row mb-5';
    
    // Day title column
    const titleCol = document.createElement('div');
    titleCol.className = 'col-12 mb-3';
    
    const dayTitle = document.createElement('div');
    dayTitle.className = 'day-title';
    dayTitle.innerHTML = `
      <h2 class="day-name">${day.name}</h2>
      <p class="day-date text-muted">${day.date}</p>
    `;
    titleCol.appendChild(dayTitle);
    dayRow.appendChild(titleCol);

    // Get halls for this specific day
    const dayHalls = this.selectedHalls.length > 0
      ? day.halls.filter(hall => this.selectedHalls.includes(hall.id))
      : day.halls;

    if (dayHalls.length === 0) {
      const noHallsCol = document.createElement('div');
      noHallsCol.className = 'col-12';
      noHallsCol.innerHTML = '<div class="alert alert-warning">No halls available for this day with current filters.</div>';
      dayRow.appendChild(noHallsCol);
    } else {
      // Schedule table column
      const scheduleCol = document.createElement('div');
      scheduleCol.className = 'col-12';
      
      const scheduleTable = this.createScheduleTable([day], dayHalls);
      scheduleCol.appendChild(scheduleTable);
      dayRow.appendChild(scheduleCol);
    }

    return dayRow;
  }

  createScheduleTable(days, halls) {
    const tableContainer = document.createElement('div');
    tableContainer.className = 'schedule-table-container';
    
    // Add horizontal scroll for many halls
    const scrollContainer = document.createElement('div');
    scrollContainer.className = 'table-responsive';
    
    const table = document.createElement('table');
    table.className = 'table table-bordered schedule-table';
    
    // Create table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    // Time column header
    const timeHeader = document.createElement('th');
    timeHeader.className = 'time-column';
    timeHeader.textContent = 'Time';
    headerRow.appendChild(timeHeader);
    
    // Hall column headers
    halls.forEach(hall => {
      const hallHeader = document.createElement('th');
      hallHeader.className = 'hall-column';
      hallHeader.innerHTML = `
        <div class="hall-header">
          <div class="hall-name">${hall.name}</div>
          <small class="text-muted">Capacity: ${hall.capacity}</small>
        </div>
      `;
      headerRow.appendChild(hallHeader);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Create table body
    const tbody = document.createElement('tbody');
    
    // Generate time slots
    const timeSlots = this.generateTimeSlots();
    
    timeSlots.forEach(timeSlot => {
      const row = document.createElement('tr');
      
      // Time column
      const timeCell = document.createElement('td');
      timeCell.className = 'time-cell';
      timeCell.textContent = timeSlot;
      row.appendChild(timeCell);
      
      // Hall columns
      halls.forEach(hall => {
        const hallCell = document.createElement('td');
        hallCell.className = 'hall-cell';
        
        // Find events for this hall and time slot
        const events = this.findEventsForTimeSlot(days, hall.id, timeSlot);
        
        if (events.length > 0) {
          events.forEach(event => {
            const eventElement = this.createEventElement(event);
            hallCell.appendChild(eventElement);
          });
        }
        
        row.appendChild(hallCell);
      });
      
      tbody.appendChild(row);
    });
    
    table.appendChild(tbody);
    scrollContainer.appendChild(table);
    tableContainer.appendChild(scrollContainer);
    
    return tableContainer;
  }

  generateTimeSlots() {
    const timeSlots = [];
    const startTime = this.parseTime(this.data.timeline.startTime);
    const endTime = this.parseTime(this.data.timeline.endTime);
    const interval = this.data.timeline.interval;

    for (let time = startTime; time <= endTime; time += interval * 60000) {
      const timeStr = this.formatTime(new Date(time));
      timeSlots.push(timeStr);
    }

    return timeSlots;
  }

  findEventsForTimeSlot(days, hallId, timeSlot) {
    const events = [];
    
    days.forEach(day => {
      const hall = day.halls.find(h => h.id === hallId);
      if (hall) {
        hall.events.forEach(event => {
          if (event.startTime === timeSlot) {
            events.push({ ...event, day: day.name });
          }
        });
      }
    });
    
    return events;
  }

  createEventElement(event) {
    const eventDiv = document.createElement('div');
    eventDiv.className = `cd-schedule__event event-${event.type}`;
    
    const eventLink = document.createElement('a');
    eventLink.href = '#0';
    eventLink.setAttribute('data-start', event.startTime);
    eventLink.setAttribute('data-end', event.endTime);
    eventLink.setAttribute('data-event', event.type);
    eventLink.setAttribute('data-description', event.description);
    
    const eventName = document.createElement('em');
    eventName.className = 'cd-schedule__name';
    eventName.textContent = event.name;
    
    eventLink.appendChild(eventName);
    eventDiv.appendChild(eventLink);
    
    return eventDiv;
  }

  setupEventListeners() {
    // Clear filters button
    document.getElementById('clearFilters').addEventListener('click', () => {
      this.selectedDays = [];
      this.selectedHalls = [];
      
      // Reset day buttons
      document.querySelectorAll('#dayFilter .btn').forEach(btn => {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline-primary');
      });
      
      // Reset hall checkboxes
      document.querySelectorAll('#hallFilter input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
      });
      
      this.generateSchedule();
    });

    // Initialize event handlers after schedule generation
    this.initializeEventHandlers();
  }

  initializeEventHandlers() {
    // Wait for DOM to be updated
    setTimeout(() => {
      const events = document.querySelectorAll('.cd-schedule__event a');
      const modal = document.querySelector('.cd-schedule-modal');
      const modalBody = modal.querySelector('.cd-schedule-modal__event-info');
      const modalHeader = modal.querySelector('.cd-schedule-modal__name');
      const closeButton = modal.querySelector('.cd-schedule-modal__close');
      const coverLayer = document.querySelector('.cd-schedule__cover-layer');

      events.forEach(event => {
        event.addEventListener('click', (e) => {
          e.preventDefault();
          const description = event.getAttribute('data-description');
          const name = event.querySelector('.cd-schedule__name').textContent;
          
          // Update modal content
          modalHeader.textContent = name;
          modalBody.innerHTML = `<div>${description}</div>`;
          
          // Show modal and cover layer
          modal.classList.add('cd-schedule-modal--open');
          coverLayer.classList.add('cd-schedule__cover-layer--visible');
        });
      });

      // Close modal when clicking the close button or cover layer
      const closeModal = () => {
        modal.classList.remove('cd-schedule-modal--open');
        coverLayer.classList.remove('cd-schedule__cover-layer--visible');
      };

      closeButton.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal();
      });

      coverLayer.addEventListener('click', closeModal);
    }, 100);
  }

  parseTime(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date.getTime();
  }

  formatTime(date) {
    return date.toTimeString().slice(0, 5);
  }
}

// Initialize when the page is fully loaded
window.addEventListener('load', () => {
  const generator = new ConferenceScheduleGenerator(scheduleData);
}); 