const scheduleData = {
  timeline: {
    startTime: "07:00",
    endTime: "23:00",
    interval: 30 // in minutes
  },
  days: [
    {
      id: "day0",
      name: "Sunday",
      date: "2024-06-23",
      halls: [
        {
          id: "FESTIVAL HALL A",
          name: "FESTIVAL HALL A",
          events: [
            {
              id: "0-0-0",
              name: "hall opening",
              subname: "",
              group: "",
              startTime: "07:00",
              endTime: "07:30",
              type: "info",
              description: ""
            },
            {
              id: "0-0-1",
              name: "stream, sound, electronics, stage set-up",
              subname: "",
              group: "",
              startTime: "07:30",
              endTime: "10:00",
              type: "info",
              description: ""
            },
            {
              id: "0-0-2",
              name: "stream, sound, stage test with ensemble",
              subname: "",
              group: "",
              startTime: "10:00",
              endTime: "12:00",
              type: "soundcheck",
              description: ""
            },
            {
              id: "0-0-3",
              name: "buffer",
              subname: "",
              group: "",
              startTime: "12:00",
              endTime: "12:30",
              type: "soundcheck",
              description: ""
            },
            {
              id: "0-0-4",
              name: "hall closing",
              subname: "",
              group: "",
              startTime: "12:30",
              endTime: "13:00",
              type: "info",
              description: ""
            }
          ]
        },
        {
          id: "FESTIVAL HALL C",
          name: "FESTIVAL HALL C",
          events: [
            {
              id: "0-0-0",
              name: "hall opening",
              subname: "",
              group: "",
              startTime: "07:00",
              endTime: "07:30",
              type: "info",
              description: ""
            },
            {
              id: "0-0-1",
              name: "hall set-up",
              subname: "",
              group: "",
              startTime: "07:30",
              endTime: "08:30",
              type: "info",
              description: ""
            },
            {
              id: "0-0-2",
              name: "REHEARSAL",
              subname: "percept.concept.percept \n Group C",
              group: "C",
              startTime: "08:30",
              endTime: "15:00",
              type: "rehersal",
              description: ""
            },
            {
              id: "0-0-3",
              name: "REHEARSAL",
              subname: "percept.concept.percept \n Group A",
              group: "A",
              startTime: "18:00",
              endTime: "19:00",
              type: "rehersal",
              description: ""
            },
            {
              id: "0-0-4",
              name: "hall closing",
              subname: "",
              startTime: "19:00",
              endTime: "19:30",
              type: "info",
              description: ""
            }
          ] 
        },
        {
          id: "IEDC library",
          name: "IEDC library",
          events: [
            {
              id: "0-0-0",
              name: "space opening, set-up",
              subname: "",
              group: "",
              startTime: "08:00",
              endTime: "08:30",
              type: "info",
              description: ""
            },
            {
              id: "0-0-1",
              name: "REHERSAL",
              subname: "percept.concept.percept \n Group B",
              group: "B",
              startTime: "08:30",
              endTime: "15:00",
              type: "rehersal",
              description: ""
            },
            {
              id: "0-0-2",
              name: "REHERSAL",
              subname: "percept.concept.percept \n Group B",
              group: "B",
              startTime: "18:00",
              endTime: "19:00",
              type: "rehersal",
              description: ""
            },
            {
              id: "0-0-3",
              name: "hall closing",
              subname: "",
              group: "",
              startTime: "19:00",
              endTime: "19:30",
              type: "info",
              description: ""
            }
          ]
        },
        {
          id: "MG center",
          name: "MG center",
          events: [
            {
              id: "0-0-0",
              name: "space opening, set-up",
              subname: "",
              group: "",
              startTime: "08:00",
              endTime: "08:30",
              type: "info",
              description: ""
            },
            {
              id: "0-0-1",
              name: "REHERSAL",
              subname: "percept.concept.percept \n Group A",
              group: "A",
              startTime: "08:30",
              endTime: "15:00",
              type: "rehersal",
              description: ""
            },
            {
              id: "0-0-2",
              name: "REHERSAL",
              subname: "percept.concept.percept \n Group C",
              group: "C",
              startTime: "18:00",
              endTime: "19:00",
              type: "rehersal",
              description: ""
            },
            {
              id: "0-0-3",
              name: "space closing",
              subname: "",
              group: "",
              startTime: "19:00",
              endTime: "19:30",
              type: "info",
              description: ""
            }
          ]
        },
        {
          id: "ST. MARTIN'S CHURCH",
          name: "ST. MARTIN'S CHURCH",
          events: [
            {
              id: "0-0-0",
              name: "PRE-FESTIVAL EVENT",
              subname: "",
              group: "",
              startTime: "16:00",
              endTime: "18:00",
              type: "event",
              description: ""
            }
          ]
        },
        {
          id: "BLED ISLAND",
          name: "BLED ISLAND",
          events: [
            {
              id: "0-0-0",
              name: "PRE-FESTIVAL EVENT",
              subname: "",
              group: "",
              startTime: "16:00",
              endTime: "18:00",
              type: "event",
              description: ""
            }
          ]
        },
      ]
    },
    {
      id: "day1",
      name: "Monday",
      date: "2024-06-23",
      halls: [
        {
          id: "FESTIVAL HALL A",
          name: "FESTIVAL HALL A",
          events: [
            {
              id: "0-0-0",
              name: "hall opening",
              subname: "",
              group: "",
              startTime: "07:00",
              endTime: "07:30",
              type: "info",
              description: ""
            },
            {
              id: "0-0-1",
              name: "electronics set-up + piano tuning",
              subname: "silence in the hall!",
              group: "",
              startTime: "07:30",
              endTime: "09:00",
              type: "info",
              description: ""
            },
            {
              id: "0-0-2",
              name: "electronics set-up + rehersals",
              subname: "",
              group: "",
              startTime: "09:00",
              endTime: "12:00",
              type: "rehersal",
              description: ""
            },
            {
              id: "0-0-3",
              name: "SOUNDCHECKS",
              subname: "percept.concept.percept \n .abeceda [String Quartet] \n click for schedule",
              group: "",
              startTime: "12:00",
              endTime: "16:00",
              type: "soundcheck",
              description: "",
              pdf: "assets/pdfs/2.pdf"
            },
            {
              id: "0-0-4",
              name: "piano tuning",
              subname: "silence in the hall!",
              group: "",
              startTime: "16:00",
              endTime: "17:00",
              type: "info",
              description: ""
            },
            {
              id: "0-0-5",
              name: "CONCERT",
              subname: "percept.concept.percept \n click for schedule",
              group: "",
              startTime: "17:00",
              endTime: "18:30",
              type: "event",
              description: "",
              link: "https://abeceda.io/Bled-Contemporary-Music-Week/"
            },
            {
              id: "0-0-6",
              name: "hall set-up",
              subname: "",
              group: "",
              startTime: "18:30",
              endTime: "19:00",
              type: "info",
              description: ""
            },
            {
              id: "0-0-7",
              name: "CONCERTS",
              subname: ".abeceda [New Music Ensemble] \n .abeceda [String Quartet] \n click for schedule",
              group: "",
              startTime: "19:00",
              endTime: "23:00",
              type: "event",
              description: "",
              link: "https://abeceda.io/Bled-Contemporary-Music-Week/"
            },
            {
              id: "0-0-8",
              name: "hall closing",
              subname: "",
              group: "",
              startTime: "23:00",
              endTime: "23:30",
              type: "info",
              description: ""
            }
          ]
        },
        {
          id: "FESTIVAL HALL B",
          name: "FESTIVAL HALL B",
          events: [
            {
              id: "0-0-0",
              name: "hall opening",
              subname: "",
              group: "",
              startTime: "07:00",
              endTime: "07:30",
              type: "info",
              description: ""
            },
            {
              id: "0-0-1",
              name: "lecturers projection and audio test",
              subname: "please arrange with maj in advance",
              group: "",
              startTime: "11:00",
              endTime: "13:00",
              type: "soundcheck",
              description: ""
            },
            {
              id: "0-0-2",
              name: "hall set-up",
              subname: "",
              group: "",
              startTime: "13:00",
              endTime: "14:00",
              type: "info",
              description: ""
            },
            {
              id: "0-0-3",
              name: "LECTURES",
              subname: "Claudia Sofía A. Cuba \n Aleksandra N. Potisk \n Victor Arul",
              group: "",
              startTime: "14:00",
              endTime: "17:00",
              type: "event",
              description: ""
            },
            {
              id: "0-0-4",
              name: "hall set-up",
              subname: "",
              group: "",
              startTime: "18:00",
              endTime: "18:30",
              type: "info",
              description: ""
            },
            {
              id: "0-0-5",
              name: "PRE-CONCERT GATHERING",
              subname: "",
              group: "",
              startTime: "18:30",
              endTime: "19:00",
              type: "event",
              description: ""
            },
            {
              id: "0-0-6",
              name: "hall closing",
              subname: "",
              group: "",
              startTime: "23:00",
              endTime: "23:30",
              type: "info",
              description: ""
            }
          ]
        },
        {
          id: "FESTIVAL HALL C",
          name: "FESTIVAL HALL C",
          events: [
            {
              id: "0-0-0",
              name: "hall opening",
              subname: "",
              group: "",
              startTime: "07:00",
              endTime: "07:30",
              type: "info",
              description: ""
            },
            {
              id: "0-0-1",
              name: "hall set-up",
              subname: "",
              group: "",
              startTime: "07:30",
              endTime: "08:00",
              type: "info",
              description: ""
            },
            {
              id: "0-0-2",
              name: "REHERSAL",
              subname: "percept.concept.percept \n Group C \n click for schedule",
              group: "C",
              startTime: "08:00",
              endTime: "14:00",
              type: "rehersal",
              description: "",
              pdf: "assets/pdfs/3.pdf"
            },
            {
              id: "0-0-3",
              name: "hall set-up",
              subname: "",
              group: "",
              startTime: "18:30",
              endTime: "19:00",
              type: "info",
              description: ""
            },
            {
              id: "0-0-4",
              name: "REHERSAL",
              subname: "percept.concept.percept \n Group A",
              group: "A",
              startTime: "19:00",
              endTime: "22:00",
              type: "rehersal",
              description: "",
              pdf: "assets/pdfs/3.pdf"
            },
            {
              id: "0-0-5",
              name: "hall closing",
              subname: "",
              group: "",
              startTime: "23:00",
              endTime: "23:30",
              type: "info",
              description: ""
            }
          ]
        },
        {
          id: "FESTIVAL HALL D",
          name: "FESTIVAL HALL D",
          events: [
            {
              id: "0-0-0",
              name: "hall opening",
              subname: "",
              group: "",
              startTime: "07:00",
              endTime: "07:30",
              type: "info",
              description: ""
            },
            {
              id: "0-0-1",
              name: "hall set-up",
              subname: "",
              group: "",
              startTime: "07:30", 
              endTime: "08:00",
              type: "info",
              description: ""
            },
            {
              id: "0-0-2",
              name: "REHERSAL",
              subname: ".codex – \n .abeceda [Youth New Music Ensemble]",
              group: "",
              startTime: "08:00",
              endTime: "11:00",
              type: "rehersal",
              description: ""
            },
            {
              id: "0-0-3",
              name: "REHERSAL",
              subname: ".codex – \n .abeceda [Sound Installation Ensemble]",
              group: "",
              startTime: "11:00",
              endTime: "14:00",
              type: "rehersal",
              description: ""
            },
            
            {
              id: "0-0-4",
              name: "piano tuning",
              subname: "silence in the hall!",
              group: "",
              startTime: "15:00",
              endTime: "16:00",
              type: "info",
              description: ""
            },
            {
              id: "0-0-5",
              name: "hall closing",
              subname: "",
              group: "",
              startTime: "23:00",
              endTime: "23:30",
              type: "info",
              description: ""
            }
          ]
        },
        {
          id: "IEDC library",
          name: "IEDC library",
          events: [
            {
              id: "0-0-0",
              name: "space opening, set-up",
              subname: "",
              group: "",
              startTime: "07:30",
              endTime: "08:00",
              type: "info",
              description: ""
            },
            {
              id: "0-0-1",
              name: "REHERSAL",
              subname: "percept.concept.percept \n Group B \n click for schedule",
              group: "B",
              startTime: "08:00",
              endTime: "14:00",
              type: "rehersal",
              description: "",
              pdf: "assets/pdfs/3.pdf"
            },
            {
              id: "0-0-2",
              name: "INDIVIDUAL PRACTICE",
              subname: "Please book a practice room in advance",
              group: "",
              startTime: "14:00",
              endTime: "15:00",
              type: "individual-rehersal",
              description: ""
            },
            {
              id: "0-0-3",
              name: "space closing",
              subname: "",
              group: "",
              startTime: "15:00",
              endTime: "15:30",
              type: "info",
              description: ""
            }
          ]
        },
        {
          id: "IDEC conference rooms 1",
          name: "IDEC conference rooms 1",
          events: [
            {
              id: "0-0-0",
              name: "space opening, set-up",
              subname: "",
              group: "",
              startTime: "07:30",
              endTime: "08:00",
              type: "info",
              description: ""
            },
            {
              id: "0-0-1",
              name: "REHERSAL",
              subname: ".codex – \n .abeceda [Youth String Quartet]",
              group: "",
              startTime: "08:00",
              endTime: "12:00",
              type: "rehersal",
              description: ""
            },
            {
              id: "0-0-2",
              name: "REHERSAL",
              subname: ".codex – \n .abeceda [Accordion Sextet]",
              group: "",
              startTime: "12:00",
              endTime: "14:00",
              type: "rehersal",
              description: ""
            },
            {
              id: "0-0-3",
              name: "INDIVIDUAL PRACTICE",
              subname: "Please book a practice room in advance",
              group: "",
              startTime: "14:00",
              endTime: "15:00",
              type: "individual-rehersal",
              description: ""
            },
            {
              id: "0-0-4",
              name: "space closing",
              subname: "",
              group: "",
              startTime: "15:00",
              endTime: "15:30",
              type: "info",
              description: ""
            }
          ]
        },
        {
          id: "IDEC conference rooms 2",
          name: "IDEC conference rooms 2",
          events: [
            {
              id: "0-0-0",
              name: "space opening, set-up",
              subname: "",
              group: "",
              startTime: "07:30",
              endTime: "08:00",
              type: "info",
              description: ""
            },
            {
              id: "0-0-1",
              name: "REHERSAL",
              subname: ".codex – \n .abeceda [Vocal Ensemble]",
              group: "",
              startTime: "08:00",
              endTime: "10:00",
              type: "rehersal",
              description: ""
            },
            {
              id: "0-0-2",
              name: "REHERSAL",
              subname: ".codex – \n .abeceda [String Quartet]",
              group: "",
              startTime: "10:00",
              endTime: "12:00",
              type: "rehersal",
              description: ""
            },
            {
              id: "0-0-3",
              name: "INDIVIDUAL PRACTICE",
              subname: "Please book a practice room in advance",
              group: "",
              startTime: "12:00",
              endTime: "15:00",
              type: "individual-rehersal",
              description: ""
            },
            {
              id: "0-0-4",
              name: "space closing",
              subname: "",
              group: "",
              startTime: "15:00",
              endTime: "15:30",
              type: "info",
              description: ""
            }
          ]
        },
        {
          id: "MG center",
          name: "MG center",
          events: [
            {
              id: "0-0-0",
              name: "space opening, set-up",
              subname: "",
              group: "",
              startTime: "08:00",
              endTime: "08:30",
              type: "info",
              description: ""
            },
            {
              id: "0-0-1",
              name: "INDIVIDUAL PRACTICE",
              subname: "Please book a practice room in advance",
              group: "",
              startTime: "08:30",
              endTime: "09:30",
              type: "individual-rehersal",
              description: ""
            },
            {
              id: "0-0-2",
              name: "REHERSAL",
              subname: "percept.concept.percept \n Group A \n click for schedule",
              group: "A",
              startTime: "09:30",
              endTime: "14:00",
              type: "rehersal",
              description: "",
              pdf: "assets/pdfs/3.pdf"
            },
            {
              id: "0-0-3",
              name: "piano tuning",
              subname: "silence in the hall!",
              group: "",
              startTime: "14:00",
              endTime: "15:00",
              type: "info",
              description: ""
            },
            {
              id: "0-0-4",
              name: "space closing",
              subname: "",
              group: "",
              startTime: "15:00",
              endTime: "15:30",
              type: "info",
              description: ""
            }
          ]
        }
      ]
    },

    {
      id: "day2",
      name: "Tuesday",
      date: "2024-06-24",
      halls: [
        {
          id: "FESTIVAL HALL A",
          name: "FESTIVAL HALL A",
          events: [
            {
              id: "0-0-0",
              name: "hall opening",
              subname: "",
              group: "",
              startTime: "07:00",
              endTime: "07:30",
              type: "info",
              description: ""
            },
            {
              id: "0-0-1",
              name: "hall set-up",
              subname: "",
              group: "",
              startTime: "07:30",
              endTime: "08:00",
              type: "info",
              description: ""
            },
            {
              id: "0-0-2",
              name: "REHERSAL",
              subname: "percept.concept.percept \n Group A \n click for schedule",
              group: "A",
              startTime: "08:00",
              endTime: "11:00",
              type: "rehersal",
              description: "",
              pdf: "assets/pdfs/4.pdf"
            },
            {
              id: "0-0-3",
              name: "piano tuning",
              subname: "silence in the hall!",
              group: "",
              startTime: "11:00",
              endTime: "13:00",
              type: "info",
              description: ""
            },
            {
              id: "0-0-4",
              name: "SOUNDCHECKS",
              subname: "percept.concept.percept \n .abeceda [String Quartet] \n .abeceda [New Music Ensemble] \n (click for schedule)",
              group: "",
              startTime: "13:00",
              endTime: "17:00",
              type: "soundcheck",
              description: "",
              pdf: "assets/pdfs/t-s.pdf"
            },
            {
              id: "0-0-5",
              name: "CONCERT",
              subname: "percept.concept.percept \n click for program",
              group: "",
              startTime: "17:00",
              endTime: "18:30",
              type: "event",
              description: "",
              link: "https://abeceda.io/Bled-Contemporary-Music-Week/"
            },
            {
              id: "0-0-6",
              name: "hall set-up",
              subname: "",
              group: "",
              startTime: "18:30",
              endTime: "19:00",
              type: "info",
              description: ""
            },
            {
              id: "0-0-7",
              name: "CONCERTS",
              subname: ".abeceda [String Quartet] \n .abeceda [New Music Ensemble] \n click for program",
              group: "",
              startTime: "19:00",
              endTime: "22:30",
              type: "event",
              description: "",
              link: "https://abeceda.io/Bled-Contemporary-Music-Week/"
            },
            {
              id: "0-0-8",
              name: "hall closing",
              subname: "",
              group: "",
              startTime: "23:00",
              endTime: "23:30",
              type: "info",
              description: ""
            }
          ]
        },
        {
          id: "FESTIVAL HALL B",
          name: "FESTIVAL HALL B",
          events: [
            {
              id: "0-0-0",
              name: "hall opening",
              subname: "",
              group: "",
              startTime: "07:00",
              endTime: "07:30",
              type: "info",
            },
            {
              id: "0-0-2",
              name: "hall set-up",
              subname: "",
              group: "",
              startTime: "13:00",
              endTime: "14:00",
              type: "info",
              description: ""
            },
            {
              id: "0-0-3",
              name: "LECTURES",
              subname: "Fernando Egido - Busevin \n James Pecore \n Julius Von Lorentz",
              group: "",
              startTime: "14:00",
              endTime: "17:00",
              type: "event",
              description: "",
            },
            {
              id: "0-0-4",
              name: "hall set-up",
              subname: "",
              group: "",
              startTime: "18:00",
              endTime: "18:30",
              type: "info",
              description: ""
            },
            {
              id: "0-0-5",
              name: "PRE-CONCERT GATHERING",
              subname: "",
              group: "",
              startTime: "18:30",
              endTime: "19:00",
              type: "event",
              description: "",
            },
            {
              id: "0-0-6",
              name: "hall closing",
              subname: "",
              group: "",
              startTime: "23:00",
              endTime: "23:30",
              type: "info",
              description: ""
            }
          ]
        },
        {
          id: "FESTIVAL HALL C",
          name: "FESTIVAL HALL C",
          events: [
            {
              id: "0-0-0",
              name: "hall opening",
              subname: "",
              group: "",
              startTime: "07:00",
              endTime: "07:30",
              type: "info",
              description: ""
            },
            {
              id: "0-0-1",
              name: "hall set-up",
              subname: "",
              group: "",
              startTime: "07:30", 
              endTime: "08:00",
              type: "info",
              description: ""
            },
            {
              id: "0-0-2",
              name: "piano tuning",
              subname: "silence in the hall!",
              group: "",
              startTime: "09:00",
              endTime: "11:00",
              type: "info",
              description: ""
            },
            {
              id: "0-0-3",
              name: "REHERSAL",
              subname: "percept.concept.percept \n Group A \n click for schedule",
              group: "A",
              startTime: "11:30",
              endTime: "13:30",
              type: "rehersal",
              description: "",
              pdf: "assets/pdfs/4.pdf"
            },
            {
              id: "0-0-4",
              name: "hall set-up",
              subname: "",
              group: "",
              startTime: "18:30",
              endTime: "19:00",
              type: "info",
              description: ""
            },
            {
              id: "0-0-5",
              name: "REHERSAL",
              subname: "percept.concept.percept \n Group A \n click for schedule",
              group: "A",
              startTime: "19:00",
              endTime: "22:00",
              type: "rehersal",
              description: "",
              pdf: "assets/pdfs/4.pdf"
            },
            {
              id: "0-0-6",
              name: "hall closing",
              subname: "",
              group: "",
              startTime: "23:00",
              endTime: "23:30",
              type: "info",
              description: ""
            }
          ]
        },
        {
          id: "FESTIVAL HALL D",
          name: "FESTIVAL HALL D",
          events: [
            {
              id: "0-0-0",
              name: "hall opening",
              subname: "",
              group: "",
              startTime: "07:00",
              endTime: "07:30",
              type: "info",
              description: ""
            },
            {
              id: "0-0-1",
              name: "hall set-up",
              subname: "",
              group: "",
              startTime: "07:30",
              endTime: "08:00",
              type: "info",
              description: ""
            },
            {
              id: "0-0-2",
              name: "REHERSAL",
              subname: ".codex – \n .abeceda [Youth New Music Ensemble]",
              group: "",
              startTime: "08:00",
              endTime: "11:30",
              type: "rehersal",
              description: ""
            },
            {
              id: "0-0-3",
              name: "hall set-up",
              subname: "",
              group: "",
              startTime: "11:30",
              endTime: "12:00",
              type: "info",
              description: ""
            },
            {
              id: "0-0-4",
              name: "WORKSHOP",
              subname: "'Vstopi v sodobno glasbo'",
              group: "",
              startTime: "12:00",
              endTime: "14:00",
              type: "event",
              description: ""
            },
            {
              id: "0-0-5",
              name: "hall closing",
              subname: "",
              group: "",
              startTime: "23:00",
              endTime: "23:30",
              type: "info",
              description: ""
            }
          ]
        },
        {
          id: "IEDC library",
          name: "IEDC library",
          events: [
            {
              id: "0-0-0",
              name: "space opening, set-up",
              subname: "",
              group: "",
              startTime: "07:30",
              endTime: "08:00",
              type: "info",
              description: ""
            },
            {
              id: "0-0-1",
              name: "REHERSAL",
              subname: "percept.concept.percept \n Group B \n click for schedule",
              group: "B",
              startTime: "08:00",
              endTime: "14:00",
              type: "rehersal",
              description: "",
              pdf: "assets/pdfs/4.pdf"
            },
            {
              id: "0-0-2",
              name: "REHERSAL",
              subname: ".codex – \n .abeceda [Vocal Ensemble]",
              group: "",
              startTime: "14:00",
              endTime: "17:00",
              type: "rehersal",
              description: ""
            },
            {
              id: "0-0-3",
              name: "space closing",
              subname: "",
              group: "",
              startTime: "17:00",
              endTime: "17:30",
              type: "info",
              description: ""
            }
          ]
        },
        {
          id: "IDEC conference rooms 1",
          name: "IDEC conference rooms 1",
          events: [
            {
              id: "0-0-0",
              name: "space opening, set-up",
              subname: "",
              group: "",
              startTime: "07:30",
              endTime: "08:00",
              type: "info",
              description: ""
            },
            {
              id: "0-0-1",
              name: "REHERSAL",
              subname: ".codex – \n .abeceda [Accordion Sextet]",
              group: "",
              startTime: "08:00",
              endTime: "11:00",
              type: "rehersal",
              description: ""
            },
            {
              id: "0-0-2",
              name: "REHERSAL",
              subname: ".codex – \n .abeceda [Sound Installation Ensemble]",
              group: "",
              startTime: "11:00",
              endTime: "14:00",
              type: "rehersal",
              description: ""
            },
            {
              id: "0-0-3",
              name: "REHERSAL",
              subname: ".codex – \n .abeceda [Youth String Quartet]",
              group: "",
              startTime: "14:00",
              endTime: "17:30",
              type: "rehersal",
              description: ""
            },
            {
              id: "0-0-4",
              name: "space closing",
              subname: "",
              group: "",
              startTime: "17:30",
              endTime: "18:00",
              type: "info",
              description: ""
            }
          ]
        },
        {
          id: "IDEC conference rooms 2",
          name: "IDEC conference rooms 2",
          events: [
            {
              id: "0-0-0",
              name: "space opening, set-up",
              subname: "",
              group: "",
              startTime: "07:30",
              endTime: "08:00",
              type: "info",
              description: ""
            },
            {
              id: "0-0-1",
              name: "INDIVIDUAL PRACTICE",
              subname: "Please book a practice room in advance",
              group: "",
              startTime: "08:00",
              endTime: "17:00",
              type: "individual-rehersal",
              description: ""
            },
            {
              id: "0-0-2",
              name: "space closing",
              subname: "",
              group: "",
              startTime: "17:00",
              endTime: "17:30",
              type: "info",
              description: ""
            }
          ]
        },
        {
          id: "MG center",
          name: "MG center",
          events: [
            {
              id: "0-0-0",
              name: "space opening, set-up",
              subname: "",
              group: "",
              startTime: "08:00",
              endTime: "08:30",
              type: "info",
              description: ""
            },
            {
              id: "0-0-1",
              name: "REHERSAL",
              subname: "percept.concept.percept \n Group C \n click for schedule",
              group: "C",
              startTime: "08:30",
              endTime: "14:00",
              type: "rehersal",
              description: "",
              pdf: "assets/pdfs/4.pdf"
            },
            {
              id: "0-0-2",
              name: "REHERSAL",
              subname: ".codex – \n .abeceda [Disciplinary Improvisation Ensemble]",
              group: "",
              startTime: "14:00",
              endTime: "17:00",
              type: "rehersal",
              description: ""
            },
            {
              id: "0-0-3",
              name: "space closing",
              subname: "",
              group: "",
              startTime: "17:00",
              endTime: "17:30",
              type: "info",
              description: ""
            }
          ]
        }
      ]
    },
  ]
}; 