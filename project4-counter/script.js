let count = 0;
let countText = document.getElementById("count");  //take button from html
countText.innerText = count;
let plusbtn=document.getElementById("plus")
let minusBtn = document.getElementById("minus");
let resetBtn = document.getElementById("reset");
plusbtn.onclick=function(){  // when button click this code run
count =count+1;   // increase value 
countText.innerText=count;   // show new value on screen 
};
minusBtn.onclick = function () {
    if (count>0) {
      count = count - 1;             //If count is greater than 0 → decrease
    countText.innerText = count;     //If count is 0 → do nothing
    }
    
};
resetBtn.onclick = function () {
    count = 0;
    countText.innerText = count;
    alert("Counter reset!");
};
