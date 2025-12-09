      let editidx = null;
      let eventlist = [
        {
          id: 1,
          name: "mahendi",
          venue: "gadvi party port",
          date: "2025-01-15",
        },
        {
          id: 2,
          name: "haldi",
          venue: "gadvi party port",
          date: "2025-01-16",
        },
        {
          id: 3,
          name: "ring-ceremony",
          venue: "Royal hotel",
          date: "2025-01-17",
        },
        {
          id: 4,
          name: "DJ-sangeet",
          venue: "TR ground",
          date: "2025-01-19",
        },
        {
          id: 5,
          name: "Marriage",
          venue: "The Taj hotel",
          date: "2025-01-20",
        },
      ];
      let ebody = document.getElementById("eventbody");

      function displayEvent() {
        ebody.innerHTML = "";
        eventlist.forEach((event, idx) => {
          ebody.innerHTML += `<tr>
                <td>${idx + 1}</td>
                <td>${event.name}</td>
                <td>${event.venue}</td>
                <td>${event.date}</td>
                <td>
                  <button onclick="deleteEvent(${idx})"> <i class="fa-solid fa-trash-can"></i> </button> <br /><br>
                  <button onclick="editEvent(${idx})"><i class="fa-solid fa-pen"></i></button>
                </td>
              </tr>`;
        });
      }

      function editEvent(idx) {
        Swal.fire({
  title: "Edited?",
  text: "You want to edit this Record?",
  icon: "question"
});
  let s = eventlist[idx];
  editidx = idx;
        document.getElementById("ename").value = s.name;
        document.getElementById("evenue").value = s.venue;
        document.getElementById("edate").value = s.date;
        let s1 = {
          id: s.id,
          name: document.getElementById("ename").value,
          venue: document.getElementById("evenue").value,
          date: document.getElementById("edate").value,
        };
        eventlist.splice(idx, 1, s1);
        displayEvent();
      }
      function deleteEvent(idx) {
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "confirm-btn",
            cancelButton: "cancel-btn",
          },
          buttonsStyling: false,  
        });
        swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your Record has been deleted.",
                icon: "success",
              });
              eventlist.splice(idx, 1);
              displayEvent();
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your Record  is safe :)",
                icon: "error",
              });
            }
          });
        }
        displayEvent();
        
        let btn = document
        .getElementById("btn")
        .addEventListener("click", function (e) {
          let ename = document.getElementById("ename").value.trim();
          let evenue = document.getElementById("evenue").value.trim();
          let edate = document.getElementById("edate").value;
          e.preventDefault();
          if (ename === "") {
            Swal.fire({
              icon: "error",
              title: "name Required",
              text: "Please enter your name",
            });
            return;
          }
          if (evenue === "") {
            Swal.fire({
              icon: "error",
              title: "Venue Required",
              text: "Please enter your Venue",
            });
            return;
          }
          if (edate === "") {
            Swal.fire({
              icon: "error",
              title: "Date Required",
              text: "Please enter your Date",
            });
            return;
          } else {
            if (editidx != null) {
              eventlist[editidx] = {
                id: eventlist[editidx].id,
                name: ename,
                venue: evenue,
                date: edate,
              };
              editidx = null;
            } else {
              eventlist.push({
                id: Date.now(),
                name: ename,
                venue: evenue,
                date: edate,
              });
            }
          }
                 Swal.fire({
  title: "Submited Successfully!",
  icon: "success",
  draggable: true
});
          displayEvent();
          console.log(ename, evenue, edate);
        });