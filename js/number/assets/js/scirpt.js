

$(document).ready(()=>{
  let a = parseInt(prompt("How many input boxes do you want? (Max 10)", "5"));

  if (isNaN(a) || a <= 0) {
    alert("Invalid number! Defaulting to 5 boxes.");
    a = 5;
  } else if (a > 10) {
    alert("not create more than 10. default is 5");
    a = 100;
  }
    
let result=document.getElementById('result');
    if (isNaN(a) || a <= 0 || a > 10) {
        alert("sorry not more than 10");
        a = 5;
    }

    for (let i = 1; i <= a; i++) {
        $(".icontainer").append(`<input type="number" id="box${i}" class="input-box">`);
    }

    $('#sum').on('click', () => {
        let total = 0;
        for (let i = 1; i <= a; i++) {
            let sume = parseInt($(`#box${i}`).val());
            if (!isNaN(sume)) total += sume;
        }
        result.innerHTML="Total sum is"+total;  
    });
 $("#min").on("click", function () {
    let min = Infinity, minId = null;
 
    for (let i = 1; i <= a; i++) {
      let val = parseInt($(`#box${i}`).val());
      if (!isNaN(val) && val < min) { min = val; minId = `#box${i}`; }
    }
 
    $("#result").text(`Min: ${min}`);
  });
 $("#max").on("click", function () {
    let max = -Infinity, maxId = null;

    for (let i = 1; i <= a; i++) {
      let val = parseInt($(`#box${i}`).val());
      if (!isNaN(val) && val > max) { max = val; maxId = `#box${i}`; }
    }

    $("#result").text(`Max: ${max}`);
  });
$("#average").on("click", function () {
    let sum = 0, count = 0;

    for (let i = 1; i <= a; i++) {
      let val = parseInt($(`#box${i}`).val());
      if (!isNaN(val)) { sum += val; count++; }
    }
    let avg = count ? (sum / count).toFixed(2) : 0;
    $("#result").text(`Average: ${avg}`);
  });
  $('#clear').on('click',function(){
   $('.input-box').val(" ");
   $('#result').text('');
  })

  
  $("#random").on("click", function () {
  
    for (let i = 1; i <= a; i++) {
      $(`#box${i}`).val(Math.floor(Math.random() * 100));
    }
    $("#result").text("");
  });

  $("#clear").on("click", function () {
    $(".input-box").val("");
   
    $("#result").text("");
  });
});




