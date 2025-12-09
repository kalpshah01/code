
      let totalSeconds = 0;
      let timerId = null;
      let isRunning = false;
      let isPaused = false;

      const music = document.getElementById("music");
      const boom = document.getElementById("stop");
      const clock = document.getElementById("clock");

      const quotes = [
        "Mistake could not afford like forgot ; at line ",
        "The fronted is heart and backend is mind",
        "Tea,laptop and high wifi dream of coder",
        "Dream big and dare to fail.",
        "Your only limit is your mind.",
        "Your biggesst failure is you not try to solve problem",
        "No one see your code only show your result",
        "It is normal to mistake but accpet mistake and solve it",
      ];

     function formatTime(totalseconds) {
       hr = parseInt(totalseconds / 3600); 
       minus = parseInt((totalseconds % 3600) / 60); 
       sec = totalseconds % 60;
        console.log(hr, minus, sec); 
      return `${hr}: ${minus}:${sec}` 
    }

      function showQuotePopup() {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById("quoteText").innerText = randomQuote;
        document.getElementById("quoteModal").style.display = "block";
      }

      function closePopup() {
        document.getElementById("quoteModal").style.display = "none";
      }

      function clearTimer() {
        if (timerId !== null) {
          clearInterval(timerId);
          timerId = null;
        }
        isRunning = false;
      }

      function tick() {
        if (totalSeconds > 0) {
          clock.innerHTML = formatTime(totalSeconds);
          totalSeconds--;
          music.play();
        } else {
         
          clock.innerHTML = "";
          music.pause();
          music.currentTime = 0;
          clearTimer();
          boom.play();
          showQuotePopup(); 
        }
      }

      document.getElementById("btn").addEventListener("click", function () {
       
        if (isRunning) {
          return;
        }
      
        if (!isPaused) {
          const hr = parseInt(document.getElementById("hour").value) || 0;
          const min = parseInt(document.getElementById("minus").value) || 0;
          const sec = parseInt(document.getElementById("seconds").value) || 0;

          if (hr === 0 && min === 0 && sec === 0) {
            alert("Please select at least one second.");
            return;
          }

          totalSeconds = hr * 3600 + min * 60 + sec;
        }

      
        clock.innerHTML = formatTime(totalSeconds);
        timerId = setInterval(tick, 1000);
        isRunning = true;
        isPaused = false;

        
        document.getElementById("hour").value = "";
        document.getElementById("minus").value = "";
        document.getElementById("seconds").value = "";
      });

      
      document.getElementById("pau").addEventListener("click", function () {
        if (!isRunning) {
      
          return;
        }
        clearTimer();
        music.pause();
        isPaused = true; 
      });

      
      function resetTimer() {
        clearTimer();
        music.pause();
        music.currentTime = 0;
        boom.pause();
        boom.currentTime = 0;

        totalSeconds = 0;
        isPaused = false;
        clock.innerHTML = "";

      
        document.getElementById("hour").value = "";
        document.getElementById("minus").value = "";
        document.getElementById("seconds").value = "";

        closePopup();
      }