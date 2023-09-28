const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4"

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 7}px`;
    }
  }

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers, 10);

    if(left < 360) {
        dodger.style.left = `${left + 7}px`
    }
}

function moveDodgerUp() {
    const upNumbers = dodger.style.bottom.replace("px","");
    const up = parseInt(upNumbers, 10)

    if (up < 380) {
        dodger.style.bottom = `${up + 7}px`
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight"){
        moveDodgerRight();
    } else if (e.key === "ArrowUp"){
        moveDodgerUp();
    }
  });  



// document.addEventListener("keydown", function(event){
//     if (event.key === "ArrowRight"){
//         moveDodgerRight();
//     }
// })
