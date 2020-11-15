// Custom Alert class UI

class AlertUI {
  constructor(message, type = "default", mode = "default") {
    this.state = {
      message,
      type,
      mode,
    };
    this.createUI();
  }

  createUI = () => {
    const alertBox = document.createElement("div");
    const alertContent = document.createElement("div");
    const span = document.createElement("span");
    const close = document.createElement("button");

    if (this.state.mode !== "default") {
      alertBox.classList.add("alert-box", "alert-active", `${this.state.mode}`);
    } else {
      alertBox.classList.add("alert-box", "alert-active");
    }
    alertContent.classList.add("alert-content");
    close.classList.add("close");

    alertContent.textContent = this.state.message.toUpperCase();
    close.innerHTML = "&times;";

    close.addEventListener("click", (e) => this.closeUI(e));

    alertBox.prepend(alertContent);
    alertBox.append(span);
    alertBox.append(close);

    document.querySelector("body").prepend(alertBox);
  };

  closeUI = ({ target }) => {
    const { parentElement } = target;
    parentElement.classList.add("alert-inactive");
    setTimeout(() => parentElement.remove(), 1000);
  };
}

/* 
Event codes (How to use)

onClick, onHover, onScroll events etc. to instantiate Class
takes in three (3) parameters

pass message param (the text to be displayed)
// new AlertUI("Success is Key!!");

pass type param (either green or red) else it would return the default
// new AlertUI("Success is Key!!", "green");

pass mode style param (night-mode or day-mode) else it would return the default
// new AlertUI("Success is Key!!", "green", "night-mode");

Pass the "undefined" keyword to skip the param and move to the next
// new AlertUI("Success is Key!!", undefined, "night-mode");

*/

document
  .querySelector(".oh")
  .addEventListener("click", () => new AlertUI("Oh wow!!"));

document
  .querySelector(".good")
  .addEventListener(
    "click",
    () => new AlertUI("Good Work!!", undefined, "day-mode")
  );
