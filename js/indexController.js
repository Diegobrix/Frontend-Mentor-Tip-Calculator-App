//Elements References
const billWrapper = document.querySelector(".bill-group");
const personsWrapper = document.querySelector(".person-group"); 

const txtPerson = document.querySelector("#txtPeople");

const customTipWrapper = document.querySelector(".custom-tip-wrapper");
const btnCustomTipHandler = document.querySelector("#btn-custom");

const btnTips = document.querySelectorAll("input[name='std-tip']");

const btnReset = document.querySelector(".btn-reset");

let percentage;
let bill;
let persons;

//
btnCustomTipHandler.addEventListener("click", GenerateCustomTipInput);

//Functions



//Change to the clicked tip button
btnTips.forEach((button) => {
    button.addEventListener("click", () => {
        btnTips.forEach(b => b.classList.remove("active-tip"));
        button.classList.add("active-tip");

        GenerateValue(button);
    });
});


//Generate a custom tip input
function GenerateCustomTipInput() 
{
    const customTip = document.createElement("input");
    customTip.setAttribute("type", "text");
    customTip.setAttribute("name", "tip");
    customTip.classList.add("custom-tip");
    customTip.setAttribute("placeholder", "0");

    if(customTipWrapper.getAttribute("clicked") == "false")
    {
        customTipWrapper.appendChild(customTip);
        customTipWrapper.setAttribute("clicked", "true");
    }
}

function GenerateValue(elementHandled) 
{
    percentage = elementHandled.getAttribute("data-value");
    console.log(percentage);

    PersonGroupChecker()
}

function PersonGroupChecker() 
{
    if((txtPerson.value != "") && (txtPerson.value != "0")) 
    {
        persons = txtPerson.value;
    }
    else 
    {
        personsWrapper.setAttribute("err-status", "true");   
    }
}