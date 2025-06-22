class ConferenceScheduleGenerator {
  constructor(scheduleData) {
    this.data = scheduleData;
    this.selectedDays = [];
    this.selectedHalls = [];
    this.selectedGroups = [];
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
    this.generateGroupFilter();
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

    Array.from(allHalls)
      .map(hallStr => JSON.parse(hallStr))
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }))
      .forEach(hall => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-lg-3 mb-2';
        
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-outline-primary hall-filter-btn';
        button.textContent = hall.name;
        button.dataset.hallId = hall.id;
        button.addEventListener('click', () => this.toggleHallFilter(hall.id));
        
        col.appendChild(button);
        hallFilter.appendChild(col);
      });
  }

  generateGroupFilter() {
    const groupFilter = document.getElementById('groupFilter');
    if (!groupFilter) return;
    groupFilter.innerHTML = '';

    // Get unique groups across all events
    const allGroups = new Set();
    this.data.days.forEach(day => {
      day.halls.forEach(hall => {
        hall.events.forEach(event => {
          if (event.group && event.group.trim() !== '') {
            allGroups.add(event.group);
          }
        });
      });
    });

    Array.from(allGroups)
      .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
      .forEach(group => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-lg-3 mb-2';
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-outline-primary group-filter-btn';
        button.textContent = group;
        button.dataset.group = group;
        button.addEventListener('click', () => this.toggleGroupFilter(group));
        col.appendChild(button);
        groupFilter.appendChild(col);
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
    const button = document.querySelector(`[data-hall-id="${hallId}"]`);
    if (this.selectedHalls.includes(hallId)) {
      this.selectedHalls = this.selectedHalls.filter(id => id !== hallId);
      button.classList.remove('btn-primary');
      button.classList.add('btn-outline-primary');
    } else {
      this.selectedHalls.push(hallId);
      button.classList.remove('btn-outline-primary');
      button.classList.add('btn-primary');
    }
    this.generateSchedule();
  }

  toggleGroupFilter(group) {
    const button = document.querySelector(`[data-group="${group}"]`);
    if (this.selectedGroups.includes(group)) {
      this.selectedGroups = this.selectedGroups.filter(g => g !== group);
      button.classList.remove('btn-primary');
      button.classList.add('btn-outline-primary');
    } else {
      this.selectedGroups.push(group);
      button.classList.remove('btn-outline-primary');
      button.classList.add('btn-primary');
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

    // Re-initialize event handlers after schedule regeneration
    this.initializeEventHandlers();
  }

  createDaySection(day) {
    const dayRow = document.createElement('div');
    dayRow.className = 'mb-5';
    
    // Day title
    const dayTitle = document.createElement('div');
    dayTitle.className = 'day-title mb-3';
    dayTitle.innerHTML = `
      <h2 class="day-name">${day.name}</h2>
      <p class="day-date text-muted">${day.date}</p>
    `;
    dayRow.appendChild(dayTitle);

    // Get halls for this specific day
    let dayHalls = this.selectedHalls.length > 0
      ? day.halls.filter(hall => this.selectedHalls.includes(hall.id))
      : day.halls;
    // Further filter halls: only keep halls that have at least one event matching the group filter
    if (this.selectedGroups.length > 0) {
      dayHalls = dayHalls.filter(hall =>
        hall.events.some(event => event.group && this.selectedGroups.includes(event.group))
      );
    }

    if (dayHalls.length === 0) {
      const noHallsMsg = document.createElement('div');
      noHallsMsg.innerHTML = '<div class="alert alert-warning">No halls available for this day with current filters.</div>';
      dayRow.appendChild(noHallsMsg);
    } else {
      // Schedule table
      const scheduleTable = this.createScheduleTable([day], dayHalls);
      dayRow.appendChild(scheduleTable);
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
        <div class="hall-header">\n          <div class="hall-name">${hall.name}</div>\n        </div>\n      `;
      headerRow.appendChild(hallHeader);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Create table body
    const tbody = document.createElement('tbody');
    
    // Generate time slots
    const timeSlots = this.generateTimeSlots();
    // For each hall, keep track of which time slots are covered by an event
    const hallCoveredSlots = {};
    halls.forEach(hall => {
      hallCoveredSlots[hall.id] = {};
    });
    
    // For each time slot (row)
    for (let rowIdx = 0; rowIdx < timeSlots.length; rowIdx++) {
      const timeSlot = timeSlots[rowIdx];
      const row = document.createElement('tr');
      
      // Time column
      const timeCell = document.createElement('td');
      timeCell.className = 'time-cell';
      timeCell.textContent = timeSlot;
      row.appendChild(timeCell);
      
      // Hall columns
      halls.forEach(hall => {
        // If this slot is covered by a previous event, skip rendering a cell
        if (hallCoveredSlots[hall.id][timeSlot]) {
          return;
        }
        // Find if an event starts at this time in this hall
        let event = this.findEventStartingAt(days, hall.id, timeSlot);
        // Group filter: skip event if it doesn't match selected groups
        if (event && this.selectedGroups.length > 0 && (!event.group || !this.selectedGroups.includes(event.group))) {
          event = null;
        }
        if (event) {
          // Calculate rowspan (number of slots this event covers)
          const startTime = this.parseTime(event.startTime);
          const endTime = this.parseTime(event.endTime);
          const slotDuration = this.data.timeline.interval * 60000;
          const numSlots = Math.round((endTime - startTime) / slotDuration);
          // Mark all covered slots for this hall
          let slotTime = startTime;
          for (let i = 1; i < numSlots; i++) {
            slotTime += slotDuration;
            const coveredSlot = this.formatTime(new Date(slotTime));
            hallCoveredSlots[hall.id][coveredSlot] = true;
          }
          // Render the event cell with rowspan
          const hallCell = document.createElement('td');
          hallCell.className = 'hall-cell';
          hallCell.rowSpan = numSlots;
          hallCell.appendChild(this.createEventElementWithTime(event));
          row.appendChild(hallCell);
        } else {
          // Render empty cell
          const hallCell = document.createElement('td');
          hallCell.className = 'hall-cell';
          row.appendChild(hallCell);
        }
      });
      tbody.appendChild(row);
    }
    
    table.appendChild(tbody);
    scrollContainer.appendChild(table);
    tableContainer.appendChild(scrollContainer);

    // --- Floating time column logic ---
    setTimeout(() => {
      this.createFloatingTimeColumn(tableContainer, scrollContainer, table);
    }, 0);
    // --- End floating time column logic ---

    return tableContainer;
  }

  findEventStartingAt(days, hallId, timeSlot) {
    for (const day of days) {
      const hall = day.halls.find(h => h.id === hallId);
      if (hall) {
        for (const event of hall.events) {
          if (event.startTime === timeSlot) {
            return { ...event, day: day.name };
          }
        }
      }
    }
    return null;
  }

  createEventElementWithTime(event) {
    const eventDiv = document.createElement('div');
    eventDiv.className = `cd-schedule__event event-${event.type}`;
    eventDiv.style.position = 'relative';
    eventDiv.style.height = '100%';
    eventDiv.style.width = '100%';
    eventDiv.style.display = 'flex';
    eventDiv.style.flexDirection = 'column';
    eventDiv.style.alignItems = 'center';
    eventDiv.style.justifyContent = 'center';
    eventDiv.style.textAlign = 'center';
    eventDiv.style.zIndex = '10';

    const eventLink = document.createElement('a');
    eventLink.href = '#0';
    eventLink.setAttribute('data-start', event.startTime);
    eventLink.setAttribute('data-end', event.endTime);
    eventLink.setAttribute('data-event', event.type);
    eventLink.setAttribute('data-description', event.description);
    eventLink.style.height = '100%';
    eventLink.style.width = '100%';
    eventLink.style.display = 'flex';
    eventLink.style.flexDirection = 'column';
    eventLink.style.alignItems = 'center';
    eventLink.style.justifyContent = 'center';
    eventLink.style.textAlign = 'center';

    const eventName = document.createElement('em');
    eventName.className = 'cd-schedule__name';
    eventName.textContent = event.name;
    eventName.style.fontSize = '0.8rem';
    eventName.style.lineHeight = '1.2';
    eventName.style.padding = '4px';
    eventLink.appendChild(eventName);

    // Add subname below the main name if present
    if (event.subname && event.subname.trim() !== "") {
      const eventSubname = document.createElement('span');
      eventSubname.className = 'cd-schedule__subname';
      eventSubname.textContent = event.subname;
      eventSubname.style.fontSize = '0.7rem';
      eventSubname.style.opacity = '0.85';
      eventSubname.style.lineHeight = '1.1';
      eventSubname.style.whiteSpace = 'pre-line';
      eventSubname.style.padding = '2px 4px 0 4px';
      eventLink.appendChild(eventSubname);
    }

    if (event.pdf) {
      eventLink.setAttribute('data-pdf', event.pdf);
    }

    if (event.link) {
      eventLink.setAttribute('data-link', event.link);
    }

    eventDiv.appendChild(eventLink);
    return eventDiv;
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

  setupEventListeners() {
    // Clear filters button
    document.getElementById('clearFilters').addEventListener('click', () => {
      this.selectedDays = [];
      this.selectedHalls = [];
      this.selectedGroups = [];
      // Reset day buttons
      document.querySelectorAll('#dayFilter .btn').forEach(btn => {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline-primary');
      });
      // Reset hall buttons
      document.querySelectorAll('#hallFilter button').forEach(btn => {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline-primary');
      });
      // Reset group buttons
      const groupFilter = document.getElementById('groupFilter');
      if (groupFilter) {
        groupFilter.querySelectorAll('button').forEach(btn => {
          btn.classList.remove('btn-primary');
          btn.classList.add('btn-outline-primary');
        });
      }
      this.generateSchedule();
    });

    // Collapsible filter functionality
    const filterToggle = document.getElementById('filterToggle');
    const filterToggleBtn = document.getElementById('filterToggleBtn');
    const filterContent = document.getElementById('filterContent');
    const filterIcon = filterToggleBtn.querySelector('.filter-icon');
    
    // Initialize filter state (collapsed by default)
    let isFilterCollapsed = true;
    
    // Set initial state
    filterContent.classList.add('collapsed');
    // Don't add rotated class initially - icon should be horizontal when collapsed
    
    const toggleFilter = () => {
      isFilterCollapsed = !isFilterCollapsed;
      
      if (isFilterCollapsed) {
        filterContent.classList.add('collapsed');
        filterIcon.classList.remove('rotated');
      } else {
        filterContent.classList.remove('collapsed');
        filterIcon.classList.add('rotated');
      }
    };
    
    // Add click event to both the header and the button
    filterToggle.addEventListener('click', (e) => {
      // Don't trigger if clicking on the button itself (to avoid double triggering)
      if (e.target === filterToggleBtn || filterToggleBtn.contains(e.target)) {
        return;
      }
      toggleFilter();
    });
    
    filterToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent the header click from also triggering
      toggleFilter();
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
      const modalDate = modal.querySelector('.cd-schedule-modal__date');
      const closeButton = modal.querySelector('.cd-schedule-modal__close');
      const coverLayer = document.querySelector('.cd-schedule__cover-layer');

      events.forEach(event => {
        event.addEventListener('click', (e) => {
          const linkUrl = event.getAttribute('data-link');
          const pdfUrl = event.getAttribute('data-pdf');
          console.log('Clicked event:', { linkUrl, pdfUrl });
          if (linkUrl) {
            const urlToOpen = this.resolveUrl(linkUrl);
            window.open(urlToOpen, '_blank');
            return;
          }
          if (pdfUrl) {
            const urlToOpen = this.resolveUrl(pdfUrl);
            window.open(urlToOpen, '_blank');
            return;
          }
          e.preventDefault();
          const description = event.getAttribute('data-description');
          const name = event.querySelector('.cd-schedule__name').textContent;
          const start = event.getAttribute('data-start');
          const end = event.getAttribute('data-end');

          // Update modal content
          modalHeader.textContent = name;
          modalDate.textContent = `${start} - ${end}`;
          modalBody.innerHTML = `<div>${description}</div>`;

          // Show modal and cover layer, and ensure all CodyHouse classes are set
          modal.classList.add('cd-schedule-modal--open', 'cd-schedule-modal--animation-completed', 'cd-schedule-modal--content-loaded');
          coverLayer.classList.add('cd-schedule__cover-layer--visible');
        });
      });

      // Close modal when clicking the close button or cover layer
      const closeModal = () => {
        modal.classList.remove('cd-schedule-modal--open', 'cd-schedule-modal--animation-completed', 'cd-schedule-modal--content-loaded');
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

  resolveUrl(url) {
    if (/^https?:\/\//i.test(url)) {
      return url; // Absolute URL
    }
    if (url.startsWith('/')) {
      // Root-relative path
      return window.location.origin + url;
    }
    // Relative path (relative to current page)
    return window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/') + url;
  }

  /**
   * Creates a floating time column that mimics the time column and stays on the left when scrolling horizontally.
   */
  createFloatingTimeColumn(tableContainer, scrollContainer, table) {
    // Remove any previous floating column
    const prev = tableContainer.querySelector('.floating-time-column');
    if (prev) prev.remove();

    // Get all time cells (header and body)
    const timeHeader = table.querySelector('th.time-column');
    const timeCells = Array.from(table.querySelectorAll('td.time-cell'));
    if (!timeHeader || timeCells.length === 0) return;

    // Create floating column container
    const floatingCol = document.createElement('div');
    floatingCol.className = 'floating-time-column';
    floatingCol.style.position = 'absolute';
    floatingCol.style.top = '0';
    floatingCol.style.left = '0';
    floatingCol.style.width = timeHeader.offsetWidth + 'px';
    floatingCol.style.pointerEvents = 'none';
    floatingCol.style.zIndex = '100';
    floatingCol.style.background = 'none';
    floatingCol.style.display = 'none';

    // Clone header
    const headerClone = timeHeader.cloneNode(true);
    headerClone.style.height = timeHeader.offsetHeight + 'px';
    headerClone.style.display = 'flex';
    headerClone.style.alignItems = 'center';
    headerClone.style.justifyContent = 'center';
    headerClone.style.background = '#f8f9fa';
    headerClone.style.fontWeight = 'bold';
    headerClone.style.borderRight = '1px solid #dee2e6';
    headerClone.style.boxShadow = '2px 0 6px -2px rgba(0,0,0,0.08)';
    floatingCol.appendChild(headerClone);

    // Clone each time cell
    timeCells.forEach(cell => {
      const cellClone = cell.cloneNode(true);
      cellClone.style.height = cell.offsetHeight + 'px';
      cellClone.style.display = 'flex';
      cellClone.style.alignItems = 'center';
      cellClone.style.justifyContent = 'center';
      cellClone.style.background = '#f8f9fa';
      cellClone.style.borderRight = '1px solid #dee2e6';
      cellClone.style.boxShadow = '2px 0 6px -2px rgba(0,0,0,0.08)';
      floatingCol.appendChild(cellClone);
    });

    // Add to container
    tableContainer.appendChild(floatingCol);
    // Position floating column
    floatingCol.style.left = scrollContainer.offsetLeft + 'px';
    floatingCol.style.top = scrollContainer.offsetTop + 'px';
    floatingCol.style.height = scrollContainer.offsetHeight + 'px';
    floatingCol.style.position = 'absolute';

    // Sync vertical scroll
    scrollContainer.addEventListener('scroll', () => {
      if (scrollContainer.scrollLeft > 0) {
        floatingCol.style.display = 'block';
        floatingCol.style.transform = `translateY(${-scrollContainer.scrollTop}px)`;
      } else {
        floatingCol.style.display = 'none';
      }
    });
    // Also sync on vertical scroll
    scrollContainer.addEventListener('scroll', () => {
      floatingCol.style.transform = `translateY(${-scrollContainer.scrollTop}px)`;
    });
    // Initial state
    if (scrollContainer.scrollLeft > 0) {
      floatingCol.style.display = 'block';
    }
  }
}

// Initialize when the page is fully loaded
window.addEventListener('load', () => {
  const generator = new ConferenceScheduleGenerator(scheduleData);
});