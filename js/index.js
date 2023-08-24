const ROWS = 10;
const COLUMNS = 10;

const table = document.getElementById("numberTable");

let number = 1;

for (let i = 0; i < ROWS; i++) {
  const row = document.createElement("tr");
  
  for (let j = 0; j < COLUMNS; j++) {
    const cell = document.createElement("td");
    cell.textContent = number;
    cell.className = 'tg-0pky';
    row.appendChild(cell);
    number++;
    
    if (number > 100)
      break;
  }
  
  table.appendChild(row);
}
