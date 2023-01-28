const btnCustom = document.querySelector("#btn-custom");
const customWrapper = document.querySelector(".custom-tip-wrapper");
const resultTotalPerPerson = document.querySelector(".result-totalPerPerson");
const resultTipPerPerson = document.querySelector(".result-tipPerPerson");
const billTotal = document.querySelector("#txtBill");

const tipSelector = document.querySelectorAll("input[name='std-tip']");

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

        tip.addEventListener("blur", () => {
            GenerateValue(tip.value);
        });
    }
}

tipSelector.forEach((item) => {
    item.addEventListener("click", () => {
        GenerateValue(item.getAttribute("data-value"));
    });
});


function GenerateValue(percentage) 
{
    console.log(percentage);
}

//Clear all data of bill.
function ResetBill() 
{
    resultTotalPerPerson.innerHTML("0.00");
    resultTipPerPerson.innerHTML("0.00");
}