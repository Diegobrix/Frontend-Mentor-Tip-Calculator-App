const btnCustom = document.querySelector("#btn-custom");
const customWrapper = document.querySelector(".custom-tip-wrapper");
const resultTotalPerPerson = document.querySelector(".result-totalPerPerson");
const resultTipPerPerson = document.querySelector(".result-tipPerPerson");

function CustomTipShowHandler() 
{
    let tip = document.createElement("input");
    tip.setAttribute("name", "tip");
    tip.setAttribute("id", "custom-tip");
    tip.setAttribute("placeholder", "0");
    tip.classList.add("custom-tip");

    if(customWrapper.getAttribute("clicked") == "false")
    {
        customWrapper.appendChild(tip);
        customWrapper.setAttribute("clicked", "true");
    }
}

//Clear all data of bill.
function ResetBill() 
{
    resultTotalPerPerson.innerHTML("0.00");
    resultTipPerPerson.innerHTML("0.00");
}