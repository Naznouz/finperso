/*
 * Validate element using checkCbk callback.
 * checkCbk is a function that takes the element Value and
 * check it.
 */
function validate (elem, checkCbk) {
  if (!checkCbk(elem.value)) {
    elem.classList.add('invalid')
    return false
  }
  elem.classList.remove('invalid')
  return true
}

function validateDate () {
  const elemDate = document.querySelector('#date')
  return validate(elemDate, (value) => value !== '')
}

function validateMontant () {
  const elemMontant = document.querySelector('#montant')
  return validate(elemMontant, (value) => +value !== 0)
}

function validateType () {
  const elemType = document.querySelector('#type')
  return validate(elemType, (value) => value !== '')
}

function deleteData (index) {
  const appState = useState()
  console.log('Delete index: ', index)
  const data = appState.state.data
  data.splice(index, 1)
  appState.state.data = data
  afficheData()
}

function deleteButton (index) {
  const deleteBtn = document.createElement('button')
  deleteBtn.innerText = 'Supprimer'
  deleteBtn.addEventListener('click', () => deleteData(index))

  return deleteBtn
}

function rowFrom (depense, index) {
  const rowElem = document.createElement('tr')
  const idCell = document.createElement('td')
  const typeCell = document.createElement('td')
  const montantCell = document.createElement('td')
  const dateCell = document.createElement('td')
  const deleteCell = document.createElement('td')

  idCell.innerText = index
  typeCell.innerText = depense.type
  montantCell.innerText = depense.montant
  dateCell.innerText = depense.date
  deleteCell.appendChild(deleteButton(index))

  rowElem.appendChild(idCell)
  rowElem.appendChild(dateCell)
  rowElem.appendChild(typeCell)
  rowElem.appendChild(montantCell)
  rowElem.appendChild(deleteCell)

  console.log(rowElem)
  return rowElem
}

function saveData () {
  const appState = useState()
  const data = appState.state.data

  const type = document.querySelector('#type').value
  const montant = +document.querySelector('#montant').value
  const date = document.querySelector('#date').value

  if (validateType() && validateMontant() && validateDate()) {
    data.push({
      type,
      montant,
      date
    })

    appState.state = { data }
    afficheData()
  }
}

