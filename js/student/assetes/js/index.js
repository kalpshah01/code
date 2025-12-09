
      class Student {
        constructor(rno, name, gen, cno, course, email) {
          this.rno = rno;
          this.name = name;
          this.gen = gen;
          this.cno = cno;
          this.course = course;
          this.email = email;
        }
      }

      class StudentManagement {
        constructor() {
          this.classroom = [];
          this.editidx = null;
        }
        addStudent() {
          let rno = document.getElementById("rno").value;
          let name = document.getElementById("name").value;
          let gen =
            document.querySelector('input[name="gender"]:checked')?.value || "";
          let cno = document.getElementById("cno").value;
          let course = document.getElementById("course").value;
          let email = document.getElementById("email").value;
          console.log(rno, name, gen, cno, course, email);
          // this.display();
          let std = new Student(rno, name, gen, cno, course, email);
          if (this.editidx != null) {
            this.classroom[this.editidx] = std;
            this.editidx = null;
          } else {
            this.classroom.push(std);
          }
          this.display();
        }
        display() {
          let tbdy = document.getElementById("tabledata");
          tbdy.innerHTML = "";
          this.classroom.forEach((std, idx) => {
            tbdy.innerHTML += `<tr>
            <td>${idx + 1}</td>
            <td>${std.name}</td>
            <td>${std.gen}</td>
            <td>${std.cno}</td>
            <td>${std.course}</td>
            <td>${std.email}</td>
            <td><button onclick="obj.edit(${idx})"> <i class="fa-solid fa-pen"></i> Edit</button> <br><button onclick="obj.deletestudent(${idx})"> <i class="fa-solid fa-trash-can"></i>Delete</button></td>
        </tr>`;
          });
          this.reset();
          console.log(this.classroom);
        }

        reset() {
          document.getElementById("rno").value = "";
          document.getElementById("name").value = "";
          document.getElementById("male").checked = false;
          document.getElementById("female").checked = false;

          document.getElementById("cno").value = "";
          document.getElementById("course").value = "";
          document.getElementById("email").value = "";
        }
        deletestudent(idx) {
          const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "confirm-btn",
    cancelButton: "cancel-btn"
  },
  buttonsStyling: false
});
swalWithBootstrapButtons.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Yes, delete it!",
  cancelButtonText: "No, cancel!",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    swalWithBootstrapButtons.fire({
      title: "Deleted!",
      text: "Your Record has been deleted.",
      icon: "success"
    });
    this.classroom.splice(idx, 1);
    this.display();
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire({
      title: "Cancelled",
      text: "Your Record  file is safe :)",
      icon: "error"
    });
  }
});

        }
        edit(idx) {
                Swal.fire({
  title: "Edited?",
  text: "You want to edit this Record?",
  icon: "question"
});
          let s = this.classroom[idx];
          console.log(idx);
          document.getElementById("rno").value = s.rno;
          document.getElementById("name").value = s.name;
          document.getElementById("male").checked = s.gen === "Male";
          document.getElementById("female").checked = s.gen === "Female";
          document.getElementById("cno").value = s.cno;
          document.getElementById("course").value = s.course;
          document.getElementById("email").value = s.email;
          this.editidx = idx;
          // this.addStudent(editidx);
        }
      }
      let obj = new StudentManagement();
      let btn = document
        .getElementById("btn")
        .addEventListener("click", function (e) {
          e.preventDefault();
          let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          let rno = document.getElementById("rno").value.trim();
          let name = document.getElementById("name").value.trim();
          let gen =
            document.querySelector('input[name="gender"]:checked')?.value || "";
          let cno = document.getElementById("cno").value.trim();
          let course = document.getElementById("course").value.trim();
          let email = document.getElementById("email").value.trim();

          if (rno === "") {
             Swal.fire({
              icon: "error",
              title: "Rollno Required",
              text: "Please enter your Roll No",
            });
            
            return;
          }
          if (name === "") {
             Swal.fire({
              icon: "error",
              title: "name Required",
              text: "Please enter your name",
            });
            
            return;
          }
          if (!gen) {
 Swal.fire({
              icon: "error",
              title: "Gender Required",
              text: "Please Checked your Gender",
            });
            
            return;
          }
          if (cno === "") {
             Swal.fire({
              icon: "error",
              title: "Contact No Required",
              text: "Please enter your Contact No",
            });
            
            return;
          }
          if (course === "") {
             Swal.fire({
              icon: "error",
              title: "Course Required",
              text: "Please Select one Course",
            });
            
            return;
          }
          if (!emailregex.test(email)) {
             Swal.fire({
              icon: "error",
              title: "email Required",
              text: "Please enter Valid email",
            });
            
            return;
          }
          Swal.fire({
  title: "Submited Successfully!",
  icon: "success",
  draggable: true
});
          obj.addStudent();
        });
   
