//your JS code here. If required.
function updateTextWithDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello, world!');
    }, 1000);
  });
}

// Example usage
const outputElement = document.getElementById('output');

updateTextWithDelay()
  .then((text) => {
    outputElement.textContent = text;
  })
  .catch((error) => {
    console.error(error);
  });
