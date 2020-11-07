function handleKeydown(e) {
  keyboardEventsHandler(e)
}

function handleKeyup(e) {
  keyboardEventsHandler(e)
}

function handleKeypress(e) {
  keyboardEventsHandler(e)
}

function keyboardEventsHandler(e) {
  if (e.keyCode === 83 && e.ctrlKey) {
    e.preventDefault();
    // call your API here
    alert("Data saved properly");
  }
  const { type, ctrlKey, shiftKey, altKey, code, key, keyCode, target: { localName } } = event;
  const myjson = JSON.stringify({ type, code, key, keyCode, target: localName, ctrlKey, shiftKey, altKey, }, undefined, 4);
  document.getElementById("event-val").innerHTML = myjson;
}

document.addEventListener('keydown', (event) => {
  keyboardEventsHandler(event)
});

document.addEventListener('keypress', (event) => {
  keyboardEventsHandler(event)
});

document.addEventListener('keyup', (event) => {
  keyboardEventsHandler(event)
});