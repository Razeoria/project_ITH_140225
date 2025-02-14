const eventsMain = [
    {
        title: "Day Trading Idea and Strategy",
        description: "Business",
        date: new Date(2024, 2, 18, 19, 0), // MON, MAR 18 - 7:00 PM PDT
        image: "../../img/events/post1.png",
        type: "offline",
        attendees: 1,
        category: "Business",
        distance: 5
    },
    {
        title: "Let's Talk Networking: JPMorgan Chase in Palo Alto",
        description: "Business",
        date: new Date(2024, 2, 19, 17, 0), // TUE, MAR 19 - 5:00 PM PDT
        image: "../../img/events/post2.png",
        type: "offline",
        attendees: 41,
        category: "Business",
        distance: 25
    },
    {
        title: "Tech Talks & Quiz: Next-Gen Database Solutions for Emerging Use Cases",
        description: "Technology",
        date: new Date(2024, 2, 13, 18, 0), // WED, MAR 13 - 6:00 PM PDT
        image: "../../img/events/post3.png",
        type: "online",
        attendees: 40,
        category: "Technology",
        distance: 0
    },
    {
        title: "INFORMS San Francisco Chapter In-Person Event",
        description: "Health and Wellbeing",
        date: new Date(2024, 2, 28, 17, 0), // THU, MAR 28 - 5:00 PM PDT
        image: "../../img/events/post4.png",
        type: "offline",
        attendees: 41,
        category: "Health and Wellbeing",
        distance: 50
    },
    {
        title: "AI Wednesdays - Meet and Greet!",
        description: "Technology",
        date: new Date(2024, 2, 13, 18, 30), // WED, MAR 13 - 6:30 PM PDT
        image: "../../img/events/post5.png",
        type: "offline",
        attendees: 29,
        category: "Technology",
        distance: 5
    },
    {
        title: "ROS By-The-Bay March 2024",
        description: "Social Activities",
        date: new Date(2024, 2, 21, 18, 0), // THU, MAR 21 - 6:00 PM PDT
        image: "../../img/events/post6.png",
        type: "online",
        attendees: 51,
        category: "Social Activities",
        distance: 0
    },
    {
        title: "Free Christian Singles' Dinner",
        description: "Hobbies and Passions",
        date: new Date(2024, 2, 29, 18, 0), // FRI, MAR 29 - 6:00 PM PDT
        image: "../../img/events/post7.png",
        type: "offline",
        attendees: 11,
        category: "Hobbies and Passions",
        distance: 10
    },
    {
        title: "In-person: Deep Dive into RAG Architectures (Food served)",
        description: "Hobbies and Passions",
        date: new Date(2024, 2, 14, 17, 0), // THU, MAR 14 - 5:00 PM PDT
        image: "../../img/events/post8.png",
        type: "offline",
        attendees: 16,
        category: "Hobbies and Passions",
        distance: 50
    }
];

// Функция форматирования: 
    // new Date(2024, 2, 14, 17, 30) => "THU, MAR 14 - 5:30 PM PDT"
    function formatEventDate(date) {
      const daysShort = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
      const monthsShort = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
                           "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

      const dayOfWeek = daysShort[date.getDay()];
      const month = monthsShort[date.getMonth()];
      const dayOfMonth = date.getDate();

      let hour = date.getHours();        // 0–23
      let minute = date.getMinutes();    // 0–59
      const ampm = hour >= 12 ? "PM" : "AM";
      hour = hour % 12;                  // переходим к 0–11
      if (hour === 0) hour = 12;         // полночь/полдень => 12
      const minuteStr = minute.toString().padStart(2, "0");

      // Для упрощения всегда "PDT". 
      // Если нужна реальная зона — используйте Intl.DateTimeFormat
      return `${dayOfWeek}, ${month} ${dayOfMonth} - ${hour}:${minuteStr} ${ampm} PDT`;
    }

    document.addEventListener("DOMContentLoaded", () => {
      const eventsMainContainer = document.getElementById("eventsMain");

      eventsMainContainer.innerHTML = eventsMain.map(event => {
        // Получаем форматированную дату
        const formattedDate = formatEventDate(event.date);

        return `
    
    <div class="event">
    
      <div class="image-wrapper">
      <!-- Для десктопа: метка поверх картинки -->
      ${event.type === "online" 
      ? '<span class="online-label desktop"><span class="video_ic"></span> Online Event</span>' 
      : ''}
      <img src="${event.image}" alt="${event.title}">
      </div>
      <div class="event-details">
      <!-- Для мобильной версии: метка рядом с текстом -->
      ${event.type === "online" 
      ? '<span class="online-label mobile type-block"><span class="video_ic"></span> Online Event</span>' 
      : ''}
      
      <h3 class="title-block">${event.title}</h3>
      <div class="card-footer-span category-block">
      <!-- только категория, без расстояния -->
      <span id="event-category">${event.category}</span>
      </div>
      <div class="card-footer-span formattedDate-block">
      <span class="icon_small_cards">
        <img src="img/banner/calendar_icon.svg" alt="calendar icon" class="calen">
        ${formattedDate}
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
        `;
      }).join("");

});








const onlineEvents = [
  {
      title: "Amazing On-Demand 15 Min Interviews with Top Coaches and Speakers",
      description: "Business",
      date: new Date(2024, 2, 14, 18, 0), // THU, MAR 14 - 6:00 PM PDT
      image: "../../img/events/post1.1.png",
      type: "online",
      attendees: 3,
      category: "Business",
      distance: 25
  },
  {
      title: "Vision Pro Developers Online Meetup",
      description: "Technology",
      date: new Date(2024, 2, 13, 19, 0), // WED, MAR 13 - 7:00 PM PDT
      image: "../../img/events/post1.2.png",
      type: "online",
      attendees: 51,
      category: "Technology",
      distance: 0
  },
  {
      title: "Significant Musical Moments",
      description: "Hobbies and Passions",
      date: new Date(2024, 2, 13, 18, 0), // WED, MAR 13 - 6:00 PM PDT
      image: "../../img/events/post1.3.png",
      type: "online",
      attendees: 16,
      category: "Hobbies and Passions",
      distance: 10
  },
  {
      title: "FREE Webinar: Introduction to Power BI",
      description: "Technology",
      date: new Date(2024, 2, 14, 17, 30), // THU, MAR 14 - 5:30 PM PDT
      image: "../../img/events/post1.4.png",
      type: "online",
      attendees: 33,
      category: "Technology",
      distance: 0
  }
];

// Функция форматирования: 
    // new Date(2024, 2, 14, 17, 30) => "THU, MAR 14 - 5:30 PM PDT"
    function formatEventDate(date) {
      const daysShort = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
      const monthsShort = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
                           "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

      const dayOfWeek = daysShort[date.getDay()];
      const month = monthsShort[date.getMonth()];
      const dayOfMonth = date.getDate();

      let hour = date.getHours();        // 0–23
      let minute = date.getMinutes();    // 0–59
      const ampm = hour >= 12 ? "PM" : "AM";
      hour = hour % 12;                  // переходим к 0–11
      if (hour === 0) hour = 12;         // полночь/полдень => 12
      const minuteStr = minute.toString().padStart(2, "0");

      // Для упрощения всегда "PDT". 
      // Если нужна реальная зона — используйте Intl.DateTimeFormat
      return `${dayOfWeek}, ${month} ${dayOfMonth} - ${hour}:${minuteStr} ${ampm} PDT`;
    }

    document.addEventListener("DOMContentLoaded", () => {
      const onlineEventsContainer = document.getElementById("onlineEvents");

      onlineEventsContainer.innerHTML = onlineEvents.map(event => {
        // Получаем форматированную дату
        const formattedDate = formatEventDate(event.date);

        return `
    
    <div class="event">
      <div class="image-wrapper">
      <!-- Для десктопа: метка поверх картинки -->
      ${event.type === "online" 
      ? '<span class="online-label desktop"><span class="video_ic"></span> Online Event</span>' 
      : ''}
      <img src="${event.image}" alt="${event.title}">
      </div>
      <div class="event-details">
      <!-- Для мобильной версии: метка рядом с текстом -->
      ${event.type === "online" 
      ? '<span class="online-label mobile type-block"><span class="video_ic"></span> Online Event</span>' 
      : ''}
      
      <h3 class="title-block">${event.title}</h3>
      <div class="card-footer-span category-block">
      <!-- только категория, без расстояния -->
      <span id="event-category">${event.category}</span>
      </div>
      <div class="card-footer-span formattedDate-block">
      <span class="icon_small_cards">
        <img src="img/banner/calendar_icon.svg" alt="calendar icon" class="calen">
        ${formattedDate}
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



        `;
      }).join("");

});