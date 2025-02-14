const events = [
    {
      title: "INFJ Personality Type - Coffee Shop Meet & Greet",
      description: "Being an INFJ",
      date: new Date(2024, 2, 23, 15),
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772",
      type: "offline",
      attendees: 99,
      category: "Hobbies and Passions",
      distance: 50,
    },
    {
      title: "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
      description: "New York AI Users",
      date: new Date(2024, 2, 23, 11, 30),
      image: "https://images.unsplash.com/photo-1696258686454-60082b2c33e2",
      type: "offline",
      attendees: 43,
      category: "Technology",
      distance: 25,
    },
    {
      title: "Book 40+ Appointments Per Month Using AI and Automation",
      description: "New Jersey Business Network",
      date: new Date(2024, 2, 16, 14),
      image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4",
      type: "online",
      category: "Technology",
    },
    {
      title: "Dump writing group weekly meetup",
      description: "Dump writing group",
      date: new Date(2024, 2, 13, 11),
      image: "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "online",
      attendees: 77,
      category: "Business",
    },
    {
      title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
      description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
      date: new Date(2024, 2, 14, 11),
      image: "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "online",
      attendees: 140,
      category: "Social Activities",
    },
    {
      title: "All Nations - Manhattan Missions Church Bible Study",
      description: "Manhattan Bible Study Meetup Group",
      date: new Date(2024, 2, 14, 11),
      image: "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "offline",
      category: "Health and Wellbeing",
      distance: 15,
    },
  ];
  
  function formatEventDate(date) {
    const daysShort = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const monthsShort = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
                         "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  
    const dayOfWeek = daysShort[date.getDay()];
    const month = monthsShort[date.getMonth()];
    const dayOfMonth = date.getDate();
  
    let hour = date.getHours();
    let minute = date.getMinutes();
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    if (hour === 0) hour = 12;
    const minuteStr = minute.toString().padStart(2, "0");
  
    return `${dayOfWeek}, ${month} ${dayOfMonth} - ${hour}:${minuteStr} ${ampm} PDT`;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const eventContainer = document.getElementById("events");
    const dateInput = document.getElementById("date");
    const typeInput = document.getElementById("type");
    const categoryInput = document.getElementById("category");
    const distanceInput = document.getElementById("distance");
  
    function populateDateFilter() {
      const uniqueDates = [...new Set(events.map(event => event.date.toISOString().split('T')[0]))];
      dateInput.innerHTML = '<option value="">Any date</option>' + uniqueDates.map(date => `<option value="${date}">${date}</option>`).join('');
    }
  
    function updateEventList() {
      const filteredEvents = events.filter(event => {
        return (!dateInput.value || event.date.toISOString().split('T')[0] === dateInput.value) &&
               (!typeInput.value || event.type === typeInput.value) &&
               (!categoryInput.value || event.category === categoryInput.value) &&
               (!distanceInput.value || event.distance === parseInt(distanceInput.value, 10));
      });
  
      eventContainer.innerHTML = filteredEvents.map(event => `
         
           <div class="event">
        <div class="image-wrapper">
        
        <img src="${event.image}" alt="${event.title}">
        </div>
        <div class="event-details">
        
        <h3 class="title-block">${event.title}</h3>
        <div class="card-footer-span category-block">
        <!-- только категория, без расстояния -->
        <span id="event-category">${event.category}</span>
        </div>
        <div class="card-footer-span formattedDate-block">
        <span class="icon_small_cards">
          <img src="img/banner/calendar_icon.svg" alt="calendar icon" class="calen">
          ${formatEventDate(event.date)}
        </span>
        </div>
        <div class="card-footer-span attendees-block">
        <span class="icon_small_cards">
          <img src="img/banner/check_round.svg" alt="checkbox icon" class="chek2">
          ${event.attendees} going
        </span>
        <span class="icon_small_cards" id="tick2">
          <img src="img/banner/ticket_icon.svg" alt="ticket icon">
          Free
        </span>
        </div>
      </div>
      </div>
        `).join("");
      }
    
      [dateInput, typeInput, categoryInput, distanceInput].forEach(input => {
        input.addEventListener("change", updateEventList);
      });
    
      populateDateFilter();
      updateEventList();
    });