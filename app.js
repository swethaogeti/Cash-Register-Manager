const billAmount = document.querySelector("#bill-amount")
const nextBtn = document.querySelector("#next-btn");
const LabelCashGiven = document.querySelector("#label-cash-given");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const errorMessage = document.querySelector("#error-message");
const returnChange=document.querySelector("#return-change");
const changeTable = document.querySelector(".change-table");
const onOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

function hideMessage() {
    errorMessage.style.display = "none";
}

function showMessage(msg) {
    errorMessage.style.display = "block";
    errorMessage.innerText = msg;
}

function hideCashTable() {
    changeTable.style.display = "none";
}


function nextBtnHandler() {
    var bill = Number(billAmount.value);
    if (billAmount.value !== "") {
        if (Math.sign(bill) === 1) {
            LabelCashGiven.style.display = "block";
            cashGiven.style.display = "block";
            nextBtn.style.display = "block";
            checkBtn.style.display = "block";
            hideMessage();
        
            hideCashTable();
        } else {
            showMessage("Enter greater values");
            LabelCashGiven.style.display = "none";
            cashGiven.style.display = "none";
            checkBtn.style.display = "none"
            hideCashTable();
        }
    } else {
        showMessage("Bill Amount can't be empty")
        LabelCashGiven.style.display = "none";
        cashGiven.style.display = "none";
        checkBtn.style.display = "none";
        hideCashTable();
    }
}



function checkBtnHandler() {
    checkBtn.style.display = "block";
    var bill = Number(billAmount.value);
    var cash = Number(cashGiven.value);
    if ((billAmount.value !== "") && (cashGiven.value !== "")) {
        if ((Math.sign(bill) === 1) && (Math.sign(cash) === 1)) {
            changeTable.style.display = "block"
            hideMessage();
            validation(bill, cash);
        } else if ((bill < 0) || (cash < 0)) {
            showMessage("Input fields can't be negative enter positive values.");
            hideCashTable();
        } else if ((bill === 0) || (cash === 0)) {
            showMessage("Input fields can't be zeroes enter valid values");
            hideCashTable();
        }
    } else if ((billAmount.value === "") && (cashGiven.value === "")) {
        showMessage("Enter all the three inputs fields.");
        hideCashTable();
    } else if ((billAmount.value === "") || (cashGiven.value === "")) {
        showMessage("Insuffient input fields enter all the values.");
        hideCashTable();
    }
}


function validation(bill, cash) {
    if (cash > bill) {
        let rc = cash - bill;
        console.log(rc);
        calculateChange(rc);
        
        calculateChange
    } else {
        showMessage("cash provided must be grater than bill amount")
        hideCashTable();
    }
}


function calculateChange(returnChange) {
    for (let i = 0; i < availableNotes.length; i++) {
        var getNotes = Math.trunc(returnChange / availableNotes[i]);
        onOfNotes[i].innerHTML = getNotes;
        returnChange = returnChange % availableNotes[i];
        console.log(getNotes);
    }
}

nextBtn.addEventListener("click", nextBtnHandler)
checkBtn.addEventListener("click", checkBtnHandler);