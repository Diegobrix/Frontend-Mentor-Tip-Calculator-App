const btnCustom = document.querySelector("#btn-custom");
const customWrapper = document.querySelector(".custom-tip-wrapper");

function CustomTipShowHandler() 
{
    let tip = document.createElement("input");
    tip.setAttribute("name", "tip");
    tip.setAttribute("id", "custom-tip");

    if(customWrapper.getAttribute("clicked") == "false")
    {
        customWrapper.appendChild(tip);
        customWrapper.setAttribute("clicked", "true");
    }
}