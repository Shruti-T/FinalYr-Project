function showContent(id) {
  // Get all content elements
  var contents = document.getElementsByClassName("content");
  // Hide all content elements
  for (var i = 0; i < contents.length; i++) {
    contents[i].classList.remove("active");
  }
  // Show the selected content element
  document.getElementById(id).classList.add("active");
  // Get all button elements
  var buttons = document.getElementsByClassName("button");
  // Remove the active class from all buttons
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  // Add the active class to the selected button
  event.target.classList.add("active");
}
