const keyboardChars1 = [
    "ा", "ि", "ी", "ु", "ू", "ृ", "ॄ", "ॅ", "ॆ", "े", "ै", "ॉ",
    "ॊ", "ो", "ौ","क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड",
    "ढ", "ण", "त", "थ"
];

const keyboardChars2 = [
    "अ", "आ", "इ", "ई", "उ", "ऊ", "ए", "ऐ", "ओ", "औ", "अं", "अः",
    "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य",
    "र", "ल", "व", "श", "ष", "स", "ह", "क्ष", "त्र", "ज्ञ",  "ऋ", "ॠ"
];

const gridsContainer = document.getElementById('grids-container');
const keyboardPart1 = document.getElementById('keyboard-part-1');
const keyboardPart2 = document.getElementById('keyboard-part-2');

const question = "यो शब्द मिठो हो।";
const answerArray = ["ने", "पा", "ल"];

document.getElementById('hint').textContent = question;

keyboardChars1.forEach(char => {
    let btn = document.createElement('button');
    btn.textContent = char;
    btn.onclick = function() {
        fillCell(btn.textContent);
    };
    keyboardPart1.appendChild(btn);
});

keyboardChars2.forEach(char => {
    let btn = document.createElement('button');
    btn.textContent = char;
    btn.onclick = function() {
        fillCell(btn.textContent);
    };
    keyboardPart2.appendChild(btn);
});

document.getElementById('toggle-keyboard').addEventListener('click', function() {
    if(keyboardPart1.style.display === "none") {
        keyboardPart1.style.display = "block";
        keyboardPart2.style.display = "none";
    } else {
        keyboardPart1.style.display = "none";
        keyboardPart2.style.display = "block";
    }
});

function createGrid(word) {
    let grid = document.createElement('div');
    grid.className = 'grid';
    for (let i = 0; i < word.length; i++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.expected = word[i];
        grid.appendChild(cell);
    }
    gridsContainer.appendChild(grid);
}

function fillCell(character) {
    const emptyCells = document.querySelectorAll(".cell:not([data-filled])");
    if (emptyCells.length > 0) {
        const currentCell = emptyCells[0];
        currentCell.textContent = character;
        currentCell.setAttribute("data-filled", true);
        validateCell(currentCell);
    }
}

function validateCell(cell) {
    if (cell.textContent === cell.dataset.expected) {
        cell.style.backgroundColor = "green";
    } else if (answerArray.includes(cell.textContent)) {
        cell.style.backgroundColor = "yellow";
    } else {
        cell.style.backgroundColor = "red";
    }
}

createGrid(answerArray);
