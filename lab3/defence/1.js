const MAX_CHARS = 200;

const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
const wordCount = document.getElementById("word-count");
const warning = document.getElementById("limit-warning");
const clearBtn = document.getElementById("clear-btn");

function updateCounts() {
  const text = textInput.value;

  // Characters
  const chars = text.length;
  charCount.textContent = `Characters: ${chars} / ${MAX_CHARS}`;

  // Words
  let words = 0;
  if (text.trim() !== "") {
    words = text.trim().split(/\s+/).length;
  }
  wordCount.textContent = `Words: ${words}`;

  // Warning logic
  warning.classList.remove("warning", "danger");
  warning.textContent = "";

  if (chars >= MAX_CHARS) {
    warning.classList.add("danger");
    warning.textContent = "Character limit reached!";
  } else if (chars >= MAX_CHARS * 0.8) {
    warning.classList.add("warning");
    warning.textContent = "Approaching limit!";
  }
}

// Live update
textInput.addEventListener("input", updateCounts);

// Clear button
clearBtn.addEventListener("click", () => {
  textInput.value = "";
  updateCounts();
});

// Initial state
updateCounts();
