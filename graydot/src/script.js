document.addEventListener("DOMContentLoaded", function() {
    const draggableItems = document.querySelectorAll(".draggable-item");
    const targetContainer = document.querySelector("#container2");
    const resetButton = document.querySelector("#resetBtn");
  
    draggableItems.forEach(function(item) {
      item.addEventListener("dragstart", dragStart);
      item.addEventListener("dragend", dragEnd);
    });
  
    targetContainer.addEventListener("dragover", dragOver);
    targetContainer.addEventListener("dragenter", dragEnter);
    targetContainer.addEventListener("dragleave", dragLeave);
    targetContainer.addEventListener("drop", dragDrop);
  
    resetButton.addEventListener("click", resetContainers);
  
    let draggedItem = null;
  
    function dragStart() {
      draggedItem = this;
      setTimeout(function() {
        draggedItem.style.display = "none";
      }, 0);
    }
  
    function dragEnd() {
      draggedItem.style.display = "block";
      draggedItem = null;
    }
  
    function dragOver(e) {
      e.preventDefault();
    }
  
    function dragEnter(e) {
      e.preventDefault();
      this.classList.add("dragging");
    }
  
    function dragLeave() {
      this.classList.remove("dragging");
    }
  
    function dragDrop() {
      this.classList.remove("dragging");
      this.appendChild(draggedItem);
      displaySuccessMessage();
    }
  
    function displaySuccessMessage() {
      const message = document.createElement("p");
      message.classList.add("success-message");
      message.textContent = "Item dropped successfully!";
      targetContainer.appendChild(message);
    }
  
    function resetContainers() {
      targetContainer.innerHTML = "";
      document.getElementById("container1").innerHTML = `
        <div class="draggable-item" draggable="true">Item 1</div>
        <div class="draggable-item" draggable="true">Item 2</div>
        <div class="draggable-item" draggable="true">Item 3</div>
      `;
    }
  });
  