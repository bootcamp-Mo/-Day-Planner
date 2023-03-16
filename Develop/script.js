
$(document).ready(function () {

  var today = dayjs()
  var formattedDate = dayjs(today).format('dddd, MMMM D, YYYY h:mm A')
  $("header #currentDay").text("Today's date is " + formattedDate)

  $(".saveBtn").on("click", function () {
    // 'this' refers to the button element that was clicked, 
    // and closest(".time-block") looks for the closest ancestor 
    // of that element that has the class "time-block". 
    // The attr("id") method is then used to get the value 
    // of the id attribute of that element.
    var timeBlockId = $(this).closest(".time-block").attr("id")
    var textAreaValue = $(this).siblings(".description").val()
    localStorage.setItem(timeBlockId, textAreaValue)
    console.log(timeBlockId, textAreaValue)
  });

  function updateTimeBlocks() {
    $(".time-block").each(function () {
      var currentHour = dayjs().hour()
      var timeBlockHour = parseInt($(this).attr("id").split("-")[1])
      // 'this' is referring to each individual '.time-block' 
      // element that is being iterated over by the 'each()' method, 
      // and '$(this).attr("id")' gets the id attribute of 
      // that element. The 'split("-")[1]' method is then used to
      //  get the second part of the id attribute 
      //  (which is separated by a hyphen), 
      //  and 'parseInt()' is used to convert it to an integer.
      console.log('current hour:', currentHour);

      if (timeBlockHour > currentHour) {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
        // 'this' refers to each individual
        // '.time-block' element being iterated over by the 
        // 'each()' method. The'addClass()' and 'removeClass()' methods 
        // are used to modify the classes on the element, adding or 
        // removing the classes ".future", ".past", and ".present" 
        // as appropriate.
      }
      else if (timeBlockHour === currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");;
      }
      else {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }

    })
  }


  $(".time-block").each(function () {
    // 'this' refers to each '.time-block'
    var timeBlockId = $(this).attr("id")
    var savedText = localStorage.getItem(timeBlockId)
    if (savedText) {
      $(this).find(".description").val(savedText)
    }
  })
  // ! it takes a minute to load correctly I'm not sure why
  setInterval(updateTimeBlocks, 10000)
})

/**========================================================================
 * *                                INFO
 *
 * ?                           I know nothing
 * ?                           here are words
 *
 *========================================================================**/

// parseInt(): A JavaScript function that parses a string argument and returns an integer.

// each(): A jQuery method that iterates over a collection of elements and executes a 
// function for each element

// addClass(): A jQuery method that adds one or more classes to the selected elements. 

// removeClass(): A jQuery method that removes one or more classes from the selected elements. 

// find(): A jQuery method that searches for descendants of the selected elements that match 
// a specified selector.

// val(): A jQuery method that gets or sets the value of form fields. 

// attr(): A jQuery method that gets or sets the value of an attribute on the selected elements.

// split(): A JavaScript method that splits a string into an array of substrings based 
// on a specified separator.

// $ : shorthand for the jQuery object, which is a JavaScript library that makes it 
// easier to work with HTML documents

// $(document): A jQuery function that returns a jQuery object representing the entire 
// HTML document.

// ready(): A jQuery method that specifies a function to execute when the document is fully loaded.

// localStorage: A JavaScript object that provides a way to store key-value pairs in 
// the browser. Data stored in localStorage persists even after the browser is closed.

// setItem(): A method of the localStorage object that sets a key - value pair.

// closest(): A jQuery method that searches for the closest ancestor element that 
// matches a specified selector.

// siblings(): A jQuery method that returns all sibling elements of the selected elements.

// text(): A method that is used to retrieve the text content of an element, or set 
// the text content of an element.


