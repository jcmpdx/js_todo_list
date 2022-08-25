// Close icon unicode - search: https://unicode-table.com/en/
// \u{1D76C} = X, 1D5B7 = math_x
var unicodechar = "\u{1D5B7}";

// Create a close button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode(unicodechar);
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a checked symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the add button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";


  var span = document.createElement("SPAN");
  var txt = document.createTextNode(unicodechar);
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// ENTER click event on 'myInput'
document.getElementById("myInput").addEventListener("keyup", function (event) {
    if (event.keyCode==13) { 
        document.getElementById("addButton").click();
    }
});

// Remove all checked listed items
function closeXbtns() {
    const elements = document.getElementsByClassName('checked');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}