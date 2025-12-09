
    let count = 0;

    function reset() {
      count = 0;
      for (let i = 1; i <= 9; i++) {
        document.getElementById(`til${i}`).innerText = "";
        document.getElementById(`til${i}`).classList.remove("x-color","o-color");
      }
    }

    let xcount = 0;
    let ocount = 0;

    function fire(player) {
      Swal.fire({
        icon: "success",
        title: "Congratulations...",
        text: `Player ${player} has won the game!`,
      });
      if (player == "X") {
        xcount++;
        console.log(xcount);
         document.getElementById("xscore").innerText= `X Wins:-${xcount}  O Wins:- ${ocount}`;
      } else {
        ocount++;
        console.log(ocount);
        // document.getElementById("oscore").innerText=` O Wins:-${ocount}`;
            document.getElementById("xscore").innerText= `X Wins:-${xcount}  O Wins:- ${ocount}`;
      }
      

 
    }

    function wincheck(player) {
      // 1st row
      console.log(player);

      let winflag = true;
      for (let i = 1; i <= 3; i++) {
        let symbol = document.getElementById(`til${i}`).innerText;
        // console.log(symbol);
        if (symbol != player) {
          winflag = false;
          break;
        }
      }
      if (winflag) {
        fire(player);
        return winflag;
      }

      // 2 row
      winflag = true;
      for (let i = 4; i <= 6; i++) {
        let symbol = document.getElementById(`til${i}`).innerText;
        // console.log(symbol);
        if (symbol != player) {
          winflag = false;
          break;
        }
      }
      if (winflag) {
        fire(player);
        return winflag;
      }

      // 3rd row
      winflag = true;
      for (let i = 7; i <= 9; i++) {
        let symbol = document.getElementById(`til${i}`).innerText;
        // console.log(symbol);
        if (symbol != player) {
          winflag = false;
          break;
        }
      }
      if (winflag) {
        fire(player);
        return winflag;
      }

      //  1st column
      winflag = true;
      for (let i = 1; i <= 7; i += 3) {
        let symbol = document.getElementById(`til${i}`).innerText;
        // console.log(symbol);
        if (symbol != player) {
          winflag = false;
          break;
        }
      }
      if (winflag) {
        fire(player);
        return winflag;
      }

      //  2st column
      winflag = true;
      for (let i = 2; i <= 8; i += 3) {
        let symbol = document.getElementById(`til${i}`).innerText;
        // console.log(symbol);
        if (symbol != player) {
          winflag = false;
          break;
        }
      }
      if (winflag) {
        fire(player);
        return winflag;
      }

      //  3st column
      winflag = true;
      for (let i = 3; i <= 9; i += 3) {
        let symbol = document.getElementById(`til${i}`).innerText;
        // console.log(symbol);
        if (symbol != player) {
          winflag = false;
          break;
        }
      }
      if (winflag) {
        fire(player);
        return winflag;
      }

      //  1st cross
      winflag = true;
      for (let i = 1; i <= 9; i += 4) {
        let symbol = document.getElementById(`til${i}`).innerText;
        // console.log(symbol);
        if (symbol != player) {
          winflag = false;
          break;
        }
      }
      if (winflag) {
        fire(player);
        return winflag;
      }

      // 2st cross
      winflag = true;
      for (let i = 3; i <= 7; i += 2) {
        let symbol = document.getElementById(`til${i}`).innerText;
        // console.log(symbol);
        if (symbol != player) {
          winflag = false;
          break;
        }
      }
      if (winflag) {
        fire(player);
        return winflag;
      }

      // console.log(player, winflag, count)

      return false;
    } // function end

    $(document).ready(function () {

 $(".X").on("click",()=>{
  count=0;
  console.log(count);
 document.getElementById('x').classList.add("start") ;
 document.getElementById('o').classList.remove("start") ;
 });  

$('#o').on("click",()=>{
  count=1;
  console.log(count);
document.getElementById('o').classList.add("start") ;
 document.getElementById('x').classList.remove("start") ;
 } );
 

      $(".tile").on("click", function () {

        let tile = this;
        //   tile.innerText = "X";
        //   console.log(tile);

        if (tile.innerText === "") {
          if (count % 2 == 0) {
            tile.innerText = "X";
          // tile.style.backgroundColor="red";
          // tile.style.color="white";
          tile.classList.add("x-color");

          } else {
            tile.innerText = "O";
          //   tile.style.backgroundColor="green";
          // tile.style.color="white";
          tile.classList.add("o-color");
          }

          count++;
        } else {
          Swal.fire({
            title: "you can not overwrite your move?",
            text: "Are you sure you want to reset the game?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Start new game!",
            // confirmButtonWidth: '200px',
            // confirmButtonHeight: '120px'
          }).then((result) => {
            if (result.isConfirmed) {
              reset();
            }
          });
        }

        if (count >= 5) {
          let win = wincheck(tile.innerText);
          if (win) {
            reset();
          }
          if (win == false && count == 9) {
            Swal.fire({
              icon: "info",
              title: "Game Draw",
              text: "No one wins the game",
            });
            reset();
          }
        }
      });
    });
  