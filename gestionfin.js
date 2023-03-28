/*
 * Validate element using checkCbk callback.
 * checkCbk is a function that takes the element Value and
 * check it.
 */
function validate(elem, checkCbk) {
    if (!checkCbk(elem.value)) {
        elem.classList.add("invalid");
        return false;
    }
    elem.classList.remove("invalid");
    return true;
}

function validateDate() {
    const elemDate = document.querySelector("#date");
    return validate(elemDate, (value) => value !== "");
}

function validateMontant() {
    const elemMontant = document.querySelector("#montant");
    return validate(elemMontant, (value) => +value !== 0);
}

function validateType() {
    const elemType = document.querySelector("#type");
    return validate(elemType, (value) => value !== "");
}

function saveData() {
    const appState = useState();
    const data = appState.state.data;

    const type = document.querySelector("#type").value;
    const montant = +document.querySelector("#montant").value;
    const date = document.querySelector("#date").value;

    if (validateType() && validateMontant() && validateDate()) {
        data.push({
            type,
            montant,
            date,
        });

        appState.state = { data };
        afficheData();
    }

    window.location.reload();
}
