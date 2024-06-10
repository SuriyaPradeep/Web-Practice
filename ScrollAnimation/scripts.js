const boxes = document.querySelectorAll(".box");

const checkBoxes = () => {
  //  window.innerHeight:
  // This represents the height of the browser window viewport.

  // window.innerHeight / 5:
  // Divides the height of the viewport by 5, effectively creating five equal sections vertically.

  // * 4:
  // Multiplies the result of the previous step by 4.
  // This effectively calculates the height of four-fifths of the viewport, which is approximately 80% of the viewport's height.

  // triggerBottom:
  // Stores the calculated value, which represents a point located approximately 80% from the top of the viewport.
  // In other words, it's a vertical distance from the top of the viewport where an event might be triggered, such as triggering an animation, showing additional content, or executing some other JavaScript functionality when the user scrolls down to this point.

  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    //  box.getBoundingClientRect():
    // This method returns the size of the element and its position relative to the viewport.
    // It returns a DOMRect object containing properties such as top, left, right, and bottom, representing the distances between the edges of the element and the edges of the viewport.

    // .top:
    // Accesses the top property of the DOMRect object returned by getBoundingClientRect().
    // This property represents the distance between the top edge of the element and the top edge of the viewport.

    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) box.classList.add("show");
    else box.classList.remove("show");
  });
};

// window.addEventListener("scroll", checkBoxes);:
// window.addEventListener: This method attaches an event listener to the window object.
// "scroll": Specifies the event type to listen for. In this case, it's the scroll event, which fires whenever the user scrolls the page.
// checkBoxes: Specifies the function (checkBoxes) to be called when the scroll event occurs.

window.addEventListener("scroll", checkBoxes);
checkBoxes();
