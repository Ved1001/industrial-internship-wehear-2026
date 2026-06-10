const names = [];

function add(q) {
  const nameValue = q.value;
  names.push({ id: Date.now(), value: nameValue });

  display();

  document.getElementById("name").value = "";
}
function updateName() {

    const id = document.getElementById('name').getAttribute("ids1");

    const ids = names.find((item) => item.id == id);

    const updatefield = document.getElementById("name");

    ids.value = updatefield.value;

    display();

    document.getElementById("btn1").style.visibility="visible";
    document.getElementById("btn2").style.visibility="hidden";

    updatefield.value = "";
}

//crud operations
function display() {
  const element = document.getElementById("display");
  element.innerHTML = "";

  for (let i = 0; i < names.length; i++) {
    const para = document.createElement("label");
    const del = document.createElement("button");
    const update = document.createElement("button");
    const br = document.createElement("br");

    const node = document.createTextNode(names[i].value);

    para.appendChild(node);
    element.appendChild(para);

    del.innerText = "Delete Name";

    del.onclick = function deleteName(e) {
      e.preventDefault();
      const idx = names.find((item) => item.id === names[i].id);
      const index = names.findIndex((item) => item.id === idx.id);

      console.log(index);
      if (index !== -1) {
        names.splice(index, 1);
        display();
        // document.getElementById("display").innerHTML = names.join("<br>");
      }
    };

    element.appendChild(del);
    update.innerHTML="update";

    update.onclick = function updateName(e) {
      e.preventDefault();

      document.getElementById("name").value = names[i].value;
      document.getElementById("name").setAttribute("ids1",names[i].id);
      
      document.getElementById("btn1").style.visibility="hidden";
      document.getElementById("btn2").style.visibility="visible";


    };

    element.appendChild(update);
    element.appendChild(br);
  }
}

/*
    //crud operations
    function display(){

        const element = document.getElementById("div1");
        element.innerHTML = "";

        for(let i = 0; i < names.length; i++){

            const para = document.createElement("label");
            const deleteButton = document.createElement("button");
            const br = document.createElement("br");
            para.id = Date.now(); 
            deleteButton.id = Date.now(); 
            const node = document.createTextNode(names[i]);

            para.appendChild(node);

            element.appendChild(para);

            deleteButton.innerText = "Delete Name";
            deleteButton.onclick = function deleteName() {
                const buttonid =  document.getElementById("");
                const index = names.indexOf();
                if (index !== -1) {
                    names.splice(index, 1);
                    display();
                }
            };
            element.appendChild(deleteButton);
            element.appendChild(br);


        }
    }
    */
