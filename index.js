const keys = document.querySelectorAll(".key");
const note = document.querySelector(".nowplaying");
const hints = document.querySelectorAll(".hints");

function playNote(e) {
  if (e.repeat) return;
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!key) {
    console.log("i am here");
    note.innerHTML = `${e.key}×`;
    note.classList.add("notDefined");
    return;
  }

  const keyNote = key.getAttribute("data-note");

  key.classList.add("playing");
  note.innerHTML = keyNote;

  if (note.classList.contains("notDefined")) {
    note.classList.remove("notDefined");
  }

  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function hintsOn(e, index) {
  e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
}

hints.forEach(hintsOn);

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playNote);

/* window.addEventListener("keypress", (e) => console.log(e.key)); */

/* window.dispatchEvent(new KeyboardEvent("keypress", { key: "i" })); */

/* window.addEventListener("load", () => {
  console.log("I am here");
  timerId = setInterval(() => {
    for (let i = 0; i < keys.length / 2; i++) {
      let index = Math.floor(Math.random() * keys.length);
      const keyNote = keys[index].getAttribute("data-key");
      setTimeout(() => {
        document.dispatchEvent(
          new KeyboardEvent("keydown", { keyCode: keyNote, bubbles: true })
        );
      }, (i + 1) * 100);
    }
  }, 5000);
});
 */
