const countValue = document.querySelector('#counter');



// function increment(){  yese bhi write kar sakte hai
const increment = () =>{
    // get the value from UI and as int
     let value = parseInt(countValue.innerText);
     // Update the value
     value = value+1;
    //  Set the value onto UI
     countValue.innerText = value;
};

const decrement = () => {
      // get the value from UI and as int
     let value = parseInt(countValue.innerText);
     // Update the value
     value = value- 1;
    //  Set the value onto UI
     countValue.innerText = value;
};
