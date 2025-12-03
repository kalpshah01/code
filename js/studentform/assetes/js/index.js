    $(document).ready(function () {
        $("#btn").on("click", function (e) {
          e.preventDefault();
          // alert("form submitted successfully");
          let name = document.getElementById("username").value.trim();
          let email = document.getElementById("email").value.trim();
          let age = document.getElementById("age").value.trim();
          let course = document.getElementById("course").value.trim();
          let cno = document.getElementById("cno").value.trim();
          let pass = document.getElementById("pass").value.trim();
          let conpass = document.getElementById("conpass").value.trim();
          let gender = $('input[name="gender"]:checked').val();
        let hobbies= $('input[name="hobby"]:checked').length;

          if (name === "") {
            Swal.fire({
              icon: "error",
              title: "You forgot to enter username",
              text: "Username is required!",
            });
            return 0;
          }
          let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
          if (!emailPattern.test(email)) {
            Swal.fire({
              icon: "error",
              title: "Invalid Email",
              text: "Email is required!",
            });
            return;
          }
          if (age < 18 || age > 101) {
            Swal.fire({
              icon: "error",
              title: "Age must be more than 18 and less than 101",
              text: "Please enter a valid age",
            });
            return;
          }
           if(!gender){
          Swal.fire({
            icon: "error", 
            title:" Gender not selected",
            text:"Please select your gender!"
          });
          return;
        }
        
          if (course === "select any course") {
            Swal.fire({
              icon: "error",
              title: "No Course Selected",
              text: "Please select a course!",
            });
            return;
          }

          let cnoregex = /^[0-9]{10}$/;
          if (cno === " " || !cnoregex.test(cno)) {
            Swal.fire({
              icon: "error",
              title: "Contact Number Must be 10 digits",
              text: "Please enter your contact number!",
            });
            return;
          }
          if(hobbies === 0){
          Swal.fire({
            icon: "error", 
            title:" No Hobby selected",
            text:"Please select at least one hobby!"
          });
          return;
        }
          let passregx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
          if (pass === "" || !passregx.test(pass)) {
            Swal.fire({
              icon: "error",
              title:
                "Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number",
              text: "Please enter your password!",
            });
            return;
          }

          if (pass !== conpass) {
            Swal.fire({
              icon: "error",
              title: "Password Mismatch",
              text: "Passwords do not match!",
            });
            return;
          }
           
          console.log("succesfully submited");
          Swal.fire({
            icon: "success",
            title: "Form Submitted",
            text: "Your form has been submitted successfully!",
          });
      
      
      
      
        });
      
      });
    