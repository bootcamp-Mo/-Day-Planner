$(document).ready(function () {

  var today = dayjs();
  var formattedDate = dayjs(today).format('dddd, MMMM D, YYYY h:mm A')
  $("header #currentDay").text("Today's date is " + formattedDate);

  $(".saveBtn").on("click", function () {
    var timeBlockId = $(this).closest(".time-block").attr("id");
    var textAreaValue = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, textAreaValue);
  });

  function updateTimeBlocks() {
    $(".time-block").each(function () {
      var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
      var currentHour = dayjs().hour(); // declare currentHour inside updateTimeBlocks
  
      if (timeBlockHour > currentHour) {
        $(this).addClass("future").removeClass("past present");
      } else if (timeBlockHour === currentHour) {
        $(this).addClass("present").removeClass("past future");
      } else {
        $(this).addClass("past").removeClass("present future");
      }
    });

    $(".time-block").each(function () {
      var timeBlockId = $(this).attr("id");
      var savedText = localStorage.getItem(timeBlockId);
      if (savedText) {
        $(this).find(".description").val(savedText);
      }
    });

    setInterval(updateTimeBlocks, 60000);
  }

  updateTimeBlocks(); // call updateTimeBlocks once to initialize
}); 


// ! Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// ! the code isn't run until the browser has finished rendering all the elements
// ! in the html.

  // TODO: Add a listener for click events on the save button. This code should
  //? use the id in the containing time-block as a key to save the user input in
  //? local storage. HINT: What does `this` reference in the click listener
  //? function? How can DOM traversal be used to get the "hour-x" id of the
  //? time-block containing the button that was clicked? How might the id be
  //? useful when saving the description in local storage?
  
  // TODO: Add code to apply the past, present, or future class to each time
  //? block by comparing the id to the current hour. HINTS: How can the id
  //? attribute of each time-block be used to conditionally add or remove the
  //? past, present, and future classes? How can Day.js be used to get the
  //? current hour in 24-hour time?
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  //? the values of the corresponding textarea elements. HINT: How can the id
  // ?attribute of each time-block be used to do this?
  





//* The $(document) selector selects the entire HTML document, 
//*  and the .ready() function is called on it to indicate that we're waiting for 
//*  the document to be ready.

//*  By wrapping your code in this call to jQuery, 
//*  you can ensure that your code won't try to manipulate the DOM 
//*  until it's fully loaded and ready to be manipulated.


// This code is a template for a scheduling application where the user can save tasks 
// for different times of the day. The code is written in jQuery and has several 
// task items that need to be completed. Let's break them down:




// TODO: Add a listener for click events on the save button.
// The first TODO item is asking you to add a click event listener to the save button. 
// When the user clicks on the save button, the code should use the id attribute of 
// the containing time-block as a key to save the user's input in local storage. 
// The 'this' keyword in the click listener function refers to the save button that was clicked. 
// You can use DOM traversal to get the id of the containing time-block by finding 
// the closest parent element with a specific class, such as 
// $(this).closest(".time-block").attr("id").



// TODO: Add code to apply the past, present, or future class to each time block.
// The second TODO item is asking you to add code to apply the past, present, or future class 
// to each time-block. This is based on comparing the id of the time-block to the current hour. 
// You can use the id attribute of each time-block to conditionally add or remove the past, 
// present, and future classes. You can use Day.js library to get the current hour in 24-hour time.




// TODO: Add code to get any user input that was saved in localStorage.
// The third TODO item is asking you to add code to get any user input that was previously 
// saved in local storage and set the values of the corresponding textarea elements. 
// You can use the id attribute of each time-block to retrieve the saved value from local storage.



// TODO: Add code to display the current date in the header of the page.
// The last TODO item is asking you to add code to display the current date in the 
// header of the page. You can use Day.js library to get the current date and format it as desired, 
// then use jQuery to set the text of an element in the header with the current date.


