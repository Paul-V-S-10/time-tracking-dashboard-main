
const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ];
  

  const cardContainer = document.querySelector('.card-container');
  const buttons = document.querySelectorAll('.timeframes button');
  

  function renderCards(timeframe) {
    cardContainer.innerHTML = ''; 
    data.forEach(activity => {
      const { title, timeframes } = activity;
      const { current, previous } = timeframes[timeframe];
  
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h3>${title}</h3>
        <p>${current}hrs</p>
        <small>Last ${timeframe.charAt(0).toUpperCase() + timeframe.slice(1)} - ${previous}hrs</small>
      `;
      cardContainer.appendChild(card);
    });
  }
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const timeframe = button.dataset.timeframe;
      renderCards(timeframe);
    });
  });
  

  renderCards('weekly');
  