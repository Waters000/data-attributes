var container = document.querySelector(".container");
var dataNumberEl = document.querySelector(".box");
var hidden;

container.addEventListener("click", function(event) {
  var element = event.target;

console.log(element);
  // TODO: Complete function
if (element.getAttribute("data-state") === "hidden") {
  element.textContent = element.getAttribute("data-number");
  element.setAttribute("data-state", "shown");
} else if (element.getAttribute("data-state") === "shown") {
  element.textContent = "";
  element.setAttribute("data-state", "hidden");
}

});


// questionContainerEl.classList.remove('hide')