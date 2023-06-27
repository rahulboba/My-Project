let stateitems = document.querySelectorAll('[role="option"]');
stateitems.forEach((state)=>{
    state.addEventListener("keydown",navigation);
})

function navigation(e){
    let target = e.target;
    let nextTarget = target.nextElementSibling;
    let currentTarget = e.target;
    let prevTarget = currentTarget.previousElementSibling;

    if (e.key === "ArrowDown"){
        target.setAttribute("tabindex", "-1");
        nextTarget.setAttribute("tabindex","0");
        nextTarget.focus();      
    }
    if (e.key === "ArrowUp"){
        currentTarget.setAttribute("tabindex", "-1");
        prevTarget.setAttribute("tabindex","0");
        prevTarget.focus();
    }
}