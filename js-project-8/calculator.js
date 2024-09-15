const billInputField = document.getElementById("bill");
const tipInputField = document.getElementById("tip");
const buttonCal = document.getElementById("calculate");
const totalAmount = document.getElementById("total");

function calculateAmount()
{
    const billTotalValue = billInputField.value;
    //console.log(billTotalValue);
    const tipTotalValue = tipInputField.value;
    //console.log(tipTotalValue);
    const totalvalue = billTotalValue * (1 + tipTotalValue /100);
    totalAmount.innerHTML = totalvalue.toFixed(2);
}
buttonCal.addEventListener("click", calculateAmount);