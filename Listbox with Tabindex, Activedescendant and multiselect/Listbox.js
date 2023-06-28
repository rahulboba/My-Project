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
        let Listbox = document.querySelector('.listbox1');
        let Items = Array.from(Listbox.children);
        Listbox.setAttribute('role', 'listbox-1');
        Listbox.setAttribute('tabindex', '0');
        Listbox.setAttribute('aria-labelledby', 'listbox-label');

        Listbox.addEventListener('keydown', e => {
        let index1 = Items.findIndex(Item => Item === document.activeElement);

        if (e.key === 'ArrowUp' && index > 0) {
            e.preventDefault();
            Items[index1 - 1].focus();
        }
        if (e.key === 'ArrowDown' && index < Items.length - 1) {
            e.preventDefault();
            Items[index1 + 1].focus();
        }
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            toggleSelection(document.activeElement);
        }
        });

        Listbox.addEventListener('click', e => {
        let clickedItem = e.target;
        if (clickedItem.classList.contains('listbox-item-1')) {
            toggleSelection(clickedItem);
        }
        });

        function toggleSelection(item) {
        let isSelected = item.getAttribute('aria-selected') === 'true';

        if (isSelected) {
            item.setAttribute('aria-selected', 'false');
        } else {
            item.setAttribute('aria-selected', 'true');
        }
        }