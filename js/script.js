document.addEventListener("DOMContentLoaded", () => {
  const imgBox = document.querySelector(".imgBox");
  const leftSide = document.querySelector(".left-side");
  const rightSide = document.querySelector(".right-side");

  let zoomed = false;

  leftSide.addEventListener("click", () => {
    if (!zoomed) {
      imgBox.classList.remove("zoom-right");
      imgBox.classList.add("zoom-left");
      zoomed = true;
    } else {
      imgBox.classList.remove("zoom-left");
      zoomed = false;
    }
  });

  rightSide.addEventListener("click", () => {
    if (!zoomed) {
      imgBox.classList.remove("zoom-left");
      imgBox.classList.add("zoom-right");
      zoomed = true;
    } else {
      imgBox.classList.remove("zoom-right");
      zoomed = false;
    }
  });
});
