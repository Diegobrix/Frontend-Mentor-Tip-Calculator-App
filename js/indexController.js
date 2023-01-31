//Elements References
const billWrapper = document.querySelector(".bill-group");
const personsWrapper = document.querySelector(".person-group"); 

const txtBill = document.querySelector("#txtBill");
const txtPerson = document.querySelector("#txtPeople");

const displayTipValue = document.querySelector(".result-tipPerPerson");
const displayBillValue = document.querySelector(".result-totalPerPerson");

const customTipWrapper = document.querySelector(".custom-tip-wrapper");
const btnCustomTipHandler = document.querySelector("#btn-custom");

const btnTips = document.querySelectorAll("input[name='std-tip']");

const btnReset = document.querySelector(".btn-reset");

let percentage;
let bill;
let persons;
let tipValue;
let perPerson;
let billForEach;
let billAndTip;

//
btnCustomTipHandler.addEventListener("click", GenerateCustomTipInput);
txtBill.addEventListener("change", GenerateValue);
txtPerson.addEventListener("change", GenerateValue);
btnReset.addEventListener("click", BillReset);

//Functions

//Change to the clicked tip button
btnTips.forEach((button) => {
    button.addEventListener("click", () => {
        btnTips.forEach(b => b.classList.remove("active-tip"));
        button.classList.add("active-tip");

        percentage = button.getAttribute("data-value");
        GenerateValue();
    });
});


//Generate a custom tip input
function GenerateCustomTipInput() 
{
    btnTips.forEach(btn => btn.classList.remove("active-tip"));

    const customTip = document.createElement("input");
    customTip.setAttribute("type", "text");
    customTip.setAttribute("name", "tip");
    customTip.classList.add("custom-tip");
    customTip.setAttribute("placeholder", "0");

    if(customTipWrapper.getAttribute("clicked") == "false")
    {
        customTipWrapper.appendChild(customTip);
        customTipWrapper.setAttribute("clicked", "true");

        customTip.addEventListener("change", () => {
            percentage = customTip.value;
            GenerateValue();
        });
    }
}

function GenerateValue() 
{
    BillGroupChecker();
    PersonGroupChecker();

    ValueChecker(percentage, persons, bill);
}

function PersonGroupChecker()
{
    if((txtPerson.value != "") && (txtPerson.value != "0")) 
    {
        personsWrapper.setAttribute("err-status", "false");
        persons = txtPerson.value;
    }
    else 
    {
        personsWrapper.setAttribute("err-status", "true");   
    }
}

function BillGroupChecker()
{
    if((txtBill.value != "") && (txtBill.value != "0")) 
    {
        billWrapper.setAttribute("err-status", "false"); 
        bill = txtBill.value;
    }
    else 
    {
        billWrapper.setAttribute("err-status", "true");   
    }
}

function ValueChecker(_percentage, _persons, _bill) 
{
    if(typeof _percentage != "undefined")
    {
        if(typeof _persons != "undefined") 
        {
            if(typeof _bill != "undefined")
            {
                CalculateTipPerPerson(_percentage, _persons, _bill);
                CalculateBillPerPerson(_percentage, _persons, _bill);

                btnReset.setAttribute("activated", "true");
            }
        }
    }
}

function CalculateTipPerPerson(_percent, _person, _bill) 
{
    tipValue = (_bill * (_percent / 100));
    perPerson = (tipValue / _person);

    displayTipValue.innerHTML = perPerson.toFixed(2);
}

function CalculateBillPerPerson(_percent, _person, _bill) 
{
    billForEach = (_bill / _person);
    billAndTip = (billForEach + perPerson)

    displayBillValue.innerHTML = billAndTip.toFixed(2);
}

function BillReset() 
{
    let customTipInput = document.querySelector(".custom-tip");

    if(customTipInput.parentNode) 
    {
        customTipInput.parentNode.removeChild(customTipInput);
    }

    customTipWrapper.setAttribute("clicked", "false");

    displayTipValue.innerHTML = "0.00";
    displayBillValue.innerHTML = "0.00";

    txtBill.value = "";
    txtPerson.value = "";

    btnTips.forEach(btn => btn.classList.remove("active-tip"));
    
    btnReset.setAttribute("activated", "false");
}