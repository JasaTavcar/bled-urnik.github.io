const scheduleData = {
  timeline: {
    startTime: "08:00",
    endTime: "18:00",
    interval: 30 // in minutes
  },
  days: [
    {
      id: "day1",
      name: "Monday",
      date: "2024-04-01",
      halls: [
        {
          id: "main-auditorium",
          name: "Main Auditorium",
          capacity: 500,
          events: [
            {
              id: "day1-main-keynote",
              name: "Opening Keynote",
              startTime: "09:00",
              endTime: "10:00",
              type: "event-1",
              description: "Opening Keynote. Join us for an inspiring opening session that sets the tone for the entire conference. This session will feature industry leaders sharing insights about the future of technology and innovation."
            },
            {
              id: "day1-main-panel",
              name: "Industry Panel Discussion",
              startTime: "14:00",
              endTime: "15:30",
              type: "event-2",
              description: "Industry Panel Discussion. An engaging panel featuring experts from various fields discussing current trends and future directions in the industry."
            }
          ]
        },
        {
          id: "workshop-room-1",
          name: "Workshop Room 1",
          capacity: 50,
          events: [
            {
              id: "day1-workshop1-1",
              name: "Hands-on Workshop A",
              startTime: "10:30",
              endTime: "12:00",
              type: "event-3",
              description: "Hands-on Workshop A. A practical session where participants can learn new skills through interactive exercises and real-world examples."
            },
            {
              id: "day1-workshop1-2",
              name: "Advanced Techniques",
              startTime: "15:30",
              endTime: "17:00",
              type: "event-4",
              description: "Advanced Techniques. Deep dive into advanced concepts and techniques for experienced practitioners."
            }
          ]
        },
        {
          id: "workshop-room-2",
          name: "Workshop Room 2",
          capacity: 50,
          events: [
            {
              id: "day1-workshop2-1",
              name: "Hands-on Workshop B",
              startTime: "10:30",
              endTime: "12:00",
              type: "event-3",
              description: "Hands-on Workshop B. Another practical session focusing on different aspects of the technology stack."
            }
          ]
        },
        {
          id: "breakout-room-1",
          name: "Breakout Room 1",
          capacity: 30,
          events: [
            {
              id: "day1-breakout1-1",
              name: "Networking Session",
              startTime: "11:00",
              endTime: "12:00",
              type: "event-5",
              description: "Networking Session. Connect with fellow attendees and industry professionals in an informal setting."
            }
          ]
        },
        {
          id: "breakout-room-2",
          name: "Breakout Room 2",
          capacity: 30,
          events: [
            {
              id: "day1-breakout2-1",
              name: "Lightning Talks",
              startTime: "13:00",
              endTime: "14:00",
              type: "event-1",
              description: "Lightning Talks. Quick 5-minute presentations on various topics from conference attendees."
            }
          ]
        },
        {
          id: "exhibition-hall",
          name: "Exhibition Hall",
          capacity: 200,
          events: [
            {
              id: "day1-exhibition-1",
              name: "Exhibition & Networking",
              startTime: "12:00",
              endTime: "14:00",
              type: "event-5",
              description: "Exhibition & Networking. Visit sponsor booths and network with industry professionals."
            }
          ]
        },
        {
          id: "meeting-room-1",
          name: "Meeting Room 1",
          capacity: 20,
          events: [
            {
              id: "day1-meeting1-1",
              name: "Roundtable Discussion",
              startTime: "16:00",
              endTime: "17:30",
              type: "event-2",
              description: "Roundtable Discussion. Intimate discussion group focusing on specific industry challenges."
            }
          ]
        },
        {
          id: "meeting-room-2",
          name: "Meeting Room 2",
          capacity: 20,
          events: [
            {
              id: "day1-meeting2-1",
              name: "Q&A Session",
              startTime: "16:00",
              endTime: "17:00",
              type: "event-4",
              description: "Q&A Session. Open question and answer session with conference speakers."
            }
          ]
        }
      ]
    },
    {
      id: "day2",
      name: "Tuesday",
      date: "2024-04-02",
      halls: [
        {
          id: "main-auditorium",
          name: "Main Auditorium",
          capacity: 500,
          events: [
            {
              id: "day2-main-session",
              name: "Morning Plenary",
              startTime: "09:00",
              endTime: "10:30",
              type: "event-1",
              description: "Morning Plenary. Start your day with an informative session covering the latest developments in the field."
            },
            {
              id: "day2-main-closing",
              name: "Closing Ceremony",
              startTime: "16:00",
              endTime: "17:30",
              type: "event-2",
              description: "Closing Ceremony. Wrap up the conference with a memorable closing session featuring highlights and future announcements."
            }
          ]
        },
        {
          id: "workshop-room-1",
          name: "Workshop Room 1",
          capacity: 50,
          events: [
            {
              id: "day2-workshop1-1",
              name: "Interactive Workshop C",
              startTime: "11:00",
              endTime: "12:30",
              type: "event-3",
              description: "Interactive Workshop C. Engage in hands-on learning with practical exercises and group activities."
            },
            {
              id: "day2-workshop1-2",
              name: "Case Study Analysis",
              startTime: "14:00",
              endTime: "15:30",
              type: "event-4",
              description: "Case Study Analysis. Deep dive into real-world case studies and their solutions."
            }
          ]
        },
        {
          id: "workshop-room-2",
          name: "Workshop Room 2",
          capacity: 50,
          events: [
            {
              id: "day2-workshop2-1",
              name: "Interactive Workshop D",
              startTime: "11:00",
              endTime: "12:30",
              type: "event-3",
              description: "Interactive Workshop D. Another hands-on session focusing on different aspects."
            }
          ]
        },
        {
          id: "breakout-room-1",
          name: "Breakout Room 1",
          capacity: 30,
          events: [
            {
              id: "day2-breakout1-1",
              name: "Expert Q&A",
              startTime: "13:00",
              endTime: "14:00",
              type: "event-5",
              description: "Expert Q&A. Direct question and answer session with industry experts."
            }
          ]
        },
        {
          id: "breakout-room-2",
          name: "Breakout Room 2",
          capacity: 30,
          events: [
            {
              id: "day2-breakout2-1",
              name: "Poster Presentations",
              startTime: "13:00",
              endTime: "14:30",
              type: "event-1",
              description: "Poster Presentations. View and discuss research posters from conference participants."
            }
          ]
        },
        {
          id: "exhibition-hall",
          name: "Exhibition Hall",
          capacity: 200,
          events: [
            {
              id: "day2-exhibition-1",
              name: "Exhibition & Networking",
              startTime: "12:00",
              endTime: "14:00",
              type: "event-5",
              description: "Exhibition & Networking. Visit sponsor booths and network with industry professionals."
            }
          ]
        },
        {
          id: "meeting-room-1",
          name: "Meeting Room 1",
          capacity: 20,
          events: [
            {
              id: "day2-meeting1-1",
              name: "Focus Group",
              startTime: "15:00",
              endTime: "16:30",
              type: "event-2",
              description: "Focus Group. Small group discussion on specific industry topics."
            }
          ]
        },
        {
          id: "meeting-room-2",
          name: "Meeting Room 2",
          capacity: 20,
          events: [
            {
              id: "day2-meeting2-1",
              name: "Mentoring Session",
              startTime: "15:00",
              endTime: "16:00",
              type: "event-4",
              description: "Mentoring Session. One-on-one mentoring opportunities with industry leaders."
            }
          ]
        }
      ]
    },
    {
      id: "day3",
      name: "Wednesday",
      date: "2024-04-03",
      halls: [
        {
          id: "main-auditorium",
          name: "Main Auditorium",
          capacity: 500,
          events: [
            {
              id: "day3-main-keynote",
              name: "Special Keynote",
              startTime: "09:00",
              endTime: "10:00",
              type: "event-1",
              description: "Special Keynote. A special keynote presentation from a renowned industry leader."
            }
          ]
        },
        {
          id: "workshop-room-1",
          name: "Workshop Room 1",
          capacity: 50,
          events: [
            {
              id: "day3-workshop1-1",
              name: "Final Workshop",
              startTime: "10:30",
              endTime: "12:00",
              type: "event-3",
              description: "Final Workshop. The last workshop session of the conference."
            }
          ]
        },
        {
          id: "workshop-room-2",
          name: "Workshop Room 2",
          capacity: 50,
          events: [
            {
              id: "day3-workshop2-1",
              name: "Advanced Workshop",
              startTime: "10:30",
              endTime: "12:00",
              type: "event-4",
              description: "Advanced Workshop. Advanced level workshop for experienced participants."
            }
          ]
        },
        {
          id: "breakout-room-1",
          name: "Breakout Room 1",
          capacity: 30,
          events: [
            {
              id: "day3-breakout1-1",
              name: "Final Networking",
              startTime: "13:00",
              endTime: "14:00",
              type: "event-5",
              description: "Final Networking. Last networking opportunity of the conference."
            }
          ]
        },
        {
          id: "breakout-room-2",
          name: "Breakout Room 2",
          capacity: 30,
          events: [
            {
              id: "day3-breakout2-1",
              name: "Feedback Session",
              startTime: "13:00",
              endTime: "14:00",
              type: "event-1",
              description: "Feedback Session. Share your feedback about the conference."
            }
          ]
        },
        {
          id: "exhibition-hall",
          name: "Exhibition Hall",
          capacity: 200,
          events: [
            {
              id: "day3-exhibition-1",
              name: "Final Exhibition",
              startTime: "12:00",
              endTime: "14:00",
              type: "event-5",
              description: "Final Exhibition. Last chance to visit sponsor booths and network."
            }
          ]
        },
        {
          id: "meeting-room-1",
          name: "Meeting Room 1",
          capacity: 20,
          events: [
            {
              id: "day3-meeting1-1",
              name: "Planning Session",
              startTime: "15:00",
              endTime: "16:30",
              type: "event-2",
              description: "Planning Session. Plan for future conferences and collaborations."
            }
          ]
        },
        {
          id: "meeting-room-2",
          name: "Meeting Room 2",
          capacity: 20,
          events: [
            {
              id: "day3-meeting2-1",
              name: "Wrap-up Meeting",
              startTime: "15:00",
              endTime: "16:00",
              type: "event-4",
              description: "Wrap-up Meeting. Final meeting to wrap up the conference."
            }
          ]
        }
      ]
    }
  ]
}; 