// console.log('connected');

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


  

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  //  var saveBtn = document.querySelector('.saveBtn')
 
  //  console.log(textEl);
   

// saveBtn.addEventListener('click', function(event) {
//   event.preventDefault();
//   localStorage.setItem('textArea', JSON.parse.textEl);
// })



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  const currentTime = parseInt(dayjs().format('HH')); //defines current hour
// console.log(currentTime);
  function myFunction(word){
    console.log(word);
  }

  $(function () { 
    let allTimeBlock = $('.time-block');
    allTimeBlock.on('click', '.saveBtn', function(event){
    var timeBlock = event.currentTarget.parentElement;
    var textEl = timeBlock.querySelector('.description');

      localStorage.setItem(timeBlock.id, textEl.value);
      // console.log(timeBlock.id);

    })
    




//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   for(var i = 9; i < 18; i++) {
    
//   }


})

  // TODO: Add code to display the current date in the header of the page.
// DISPLAYS CURRENT DATE
function todaysDate() {
  let currentDay = dayjs().format('dddd, MMMM D');
  document.getElementById('currentDay').textContent = "Today's date: " + currentDay;
}

todaysDate();




//render function-or- init function
//getItem
//local storage when item is saved

