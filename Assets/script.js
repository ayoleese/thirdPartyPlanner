const currentTime = parseInt(dayjs().format('HH')); //defines current hour

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
 
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

var container = $('#container');
console.log(container);

$(document).ready(function() {
  var container = $('#container');
  var currentTime = dayjs().hour(); 

  var timeRanges = [];

  for (var i = 9; i < 24; i++) {
    var timeClass = currentTime > i ? 'past' : currentTime === i ? 'present' : 'future';
    timeRanges.push({ start: i, label: i, class: timeClass });
}

  function createTimeBlock(start, label, timeClass) {
    var timeBlock = $('<div>')
      .attr('id', 'hour-' + start)
      .addClass('row time-block ' + timeClass);

    var hourColumn = $('<div>')
      .addClass('col-2 col-md-1 hour text-center py-3')
      .text(label);

    var descriptionTextarea = $('<textarea>')
      .addClass('col-8 col-md-10 description')
      .attr('rows', '3');

    var saveButton = $('<button>')
      .addClass('btn saveBtn col-2 col-md-1')
      .attr('aria-label', 'save')
      .html('<i class="fas fa-save" aria-hidden="true"></i>');

    timeBlock.append(hourColumn, descriptionTextarea, saveButton);
    container.append(timeBlock);
  }

  // Loop through time ranges and create time-blocks
  for (var i = 0; i < timeRanges.length; i++) {
    var range = timeRanges[i];
    var timeClass = currentTime > range.start ? 'past' : currentTime === range.start ? 'present' : 'future';
    createTimeBlock(range.start, range.label, timeClass);
  }
});


 // TODO: Add a listener for click events on the save button. This code should
  $(function () { 
    let allTimeBlock = $('.time-block');
    // console.log(allTimeBlock);
    allTimeBlock.on('click', '.saveBtn', function(event){
    var timeBlock = event.currentTarget.parentElement;
    var textEl = timeBlock.querySelector('.description');

      localStorage.setItem(timeBlock.id, textEl.value);
      // console.log(timeBlock.id);

    })
  

});

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

