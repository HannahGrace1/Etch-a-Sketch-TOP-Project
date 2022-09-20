const container = document.querySelector(".container");
const resetButton = document.querySelector('.reloadPage')

resetButton.addEventListener('click',() => location.reload());

  function makeGrid() {
    for (i = 0; i < 275; i++) {
      const row = document.createElement("div");
      row.className = "row";
      container.appendChild(row);
      //row.textContent = i;

      
  row.addEventListener('mouseenter',() => {
    row.style.backgroundColor = 'black';
    
  })

    }
  }

  makeGrid();


 