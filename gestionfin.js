/*
* Validate element using checkCbk callback.
* checkCbk is a function that takes the element Value and 
* check it.
*/
function validate(elem, checkCbk) {
  if(!checkCbk(elem.value)) {
    elem.classList.add("invalid");
    return false;
  }
  elem.classList.remove("invalid");
  return true;
}

function validateDate() {
  let elemDate = document.querySelector("#date");
  return validate(elemDate, (value => value !== ""));
}

function validateMontant() {
  let elemMontant = document.querySelector("#montant");
  return validate(elemMontant, (value => +value !== 0));
}

function validateType() {
  let elemType = document.querySelector("#type");
  return validate(elemType, (value => value !== ""));
}

function deleteData(index) {
  console.log("Delete index: ", index);
  const data = JSON.parse(localStorage.getItem("data"));
  data.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(data));
  afficheData();
}

function deleteButton(index) {
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Supprimer";
  deleteBtn.addEventListener("click", () => deleteData(index));

  return deleteBtn;
}

function rowFrom(depense, index) {
  const rowElem = document.createElement("tr");
  const idCell = document.createElement("td");
  const typeCell = document.createElement("td");
  const montantCell = document.createElement("td");
  const dateCell = document.createElement("td");
  const deleteCell = document.createElement("td");

  idCell.innerText = index;
  typeCell.innerText = depense.type;
  montantCell.innerText = depense.montant;
  dateCell.innerText = depense.date;
  deleteCell.appendChild(deleteButton(index));

  rowElem.appendChild(idCell);
  rowElem.appendChild(dateCell);
  rowElem.appendChild(typeCell);
  rowElem.appendChild(montantCell);
  rowElem.appendChild(deleteCell);

  console.log(rowElem);
  return rowElem;
}

function afficheData() {
  const data = JSON.parse(localStorage.getItem("data"));
  const tbodyElem = document.querySelector("#depenses > tbody");
  tbodyElem.innerHTML = "";

  data.forEach((depense, index) => {
    tbodyElem.appendChild(rowFrom(depense, index));
  });
}

function initData() {
  const data = localStorage.getItem("data");
  if(!data) {
    localStorage.setItem("data", JSON.stringify([]));
  }
  afficheData();
  return JSON.parse(data);
}

function saveData() {
  const data = initData();
  
  const type = document.querySelector("#type").selectedOptions[0].value;
  const montant = +document.querySelector("#montant").value;
  const date = document.querySelector("#date").value;

  if(validateType()
    && validateMontant()
    && validateDate()
  ) {
    data.push({
      type,
      montant,
      date
    });
  
    localStorage.setItem("data", JSON.stringify(data));
    afficheData();
  }
}

initData();