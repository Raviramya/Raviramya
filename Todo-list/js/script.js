



  document.querySelector("#input").addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
      const input = document.querySelector("#input");
      addItem(input.value);
    } 
  });
  
  document.querySelector("#add_item").addEventListener("click", () => {
    const input = document.querySelector("#input");
    addItem(input.value);
  });
  
  addItem = (input) => {
    const item = document.createElement("div");
    const div = document.createElement("div");
    const trashIcon = document.createElement("i");
    const text = document.createElement("p");
  
     item.className = "item";
      text.textContent = input;
  
  
    trashIcon.className = "fas fa-trash";
    trashIcon.style.color = "red";
    trashIcon.style.position = "relative";
    trashIcon.style.bottom = "30px";
    trashIcon.style.left = "90px";

    trashIcon.addEventListener("click", () => {
      item.remove();
    })
    div.appendChild(trashIcon);
  
    item.appendChild(text);
    item.appendChild(div);
  
    document.querySelector("#to_do_list").appendChild(item);
    document.querySelector("#input").value = "";
  }