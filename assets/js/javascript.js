// Navbar toggle bottom 

const toggleButton = document.getElementsByClassName ('toggle')[0];
const navbarItem = document.getElementsByClassName ('navbar-items');
toggleButton.addEventListener('click',function() {
    for(let i = 0; i < navbarItem.length; i++) {
        navbarItem[i].classList.toggle('active');
    }
})

var button = document.getElementById("myBtn");
var dropdown = document.getElementById("myDropdown");

// Toggle the dropdown menu when the button is clicked
button.addEventListener("click", function() {
  dropdown.classList.toggle("show");
});

// Close the dropdown menu if the user clicks outside of it
window.addEventListener("click", function(event) {
  if (!event.target.matches("#myBtn")) {
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
  }
});