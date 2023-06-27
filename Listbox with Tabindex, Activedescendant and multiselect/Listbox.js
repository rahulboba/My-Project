// Listbox with tabindex
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

// Listbox with aria-activedescendant
let listbox = document.querySelector('.listbox');
let items = Array.from(listbox.children);
let activeItem = items.find(item => item.getAttribute('aria-selected') === 'true');

listbox.setAttribute('role', 'listbox');
listbox.setAttribute('tabindex', '0');
listbox.setAttribute('aria-labelledby', 'listbox-label');

listbox.addEventListener('keydown', e => {
  let currentIndex = items.indexOf(activeItem);

  if (e.key === 'ArrowUp' && currentIndex > 0) {
    setActiveItem(items[currentIndex - 1]);
    e.preventDefault();
  }
  if (e.key === 'ArrowDown' && currentIndex < items.length - 1) {
    setActiveItem(items[currentIndex + 1]);
    e.preventDefault();
  }
});

listbox.addEventListener('click', e => {
  let clickedItem = e.target;
  if (clickedItem.classList.contains('listbox-item')) {
    setActiveItem(clickedItem);
  }
});

function setActiveItem(item) {
  activeItem.removeAttribute('aria-selected');
  activeItem.setAttribute('tabindex', '-1');
  item.setAttribute('aria-selected', 'true');
  item.removeAttribute('tabindex');
  listbox.setAttribute('aria-activedescendant', item.id);
  activeItem = item;
}

// Multiselected
