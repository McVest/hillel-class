document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const tableContainer = document.getElementById("table-container");
  
  document.getElementById("save-button").addEventListener("click", function () {
    const formData = new FormData(form);
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
    
    for (const [key, value] of formData.entries()) {
      const row = document.createElement("tr");
      const keyCell = document.createElement("td");
      const valueCell = document.createElement("td");
      
      keyCell.textContent = key;
      valueCell.textContent = value;
      
      row.appendChild(keyCell);
      row.appendChild(valueCell);
      
      tbody.appendChild(row);
    }
    
    table.appendChild(tbody);
    tableContainer.innerHTML = "";
    tableContainer.appendChild(table);
    form.style.display='none';
  });
});
