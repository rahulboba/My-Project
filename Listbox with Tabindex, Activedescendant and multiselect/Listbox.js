document.addEventListener("DOMContentLoaded", rovingtabindex(), activedescendant(), Multiselectactivedescendant())

// Roving TabIndex
function rovingtabindex() {
  let stateitems = document.querySelectorAll('[id="stategroup"]');
  stateitems.forEach((state) => {
    state.addEventListener("keydown", navigation);
  })

  function navigation(e) {
    let target = e.target;
    let nextTarget = target.nextElementSibling;
    let currentTarget = e.target;
    let prevTarget = target.previousElementSibling;

    if (e.key === "ArrowDown") {
      target.setAttribute("tabindex", "-1");
      nextTarget.setAttribute("tabindex", "0");
      nextTarget.focus();
    }
    if (e.key === "ArrowUp") {
      target.setAttribute("tabindex", "-1");
      prevTarget.setAttribute("tabindex", "0");
      prevTarget.focus();
    }
  }
}

// aria-activedescendant
function activedescendant() {
let listbox = document.querySelector('.listbox');  
let items = Array.from(listbox.children);
let activeItem = items.find(item => item.getAttribute('aria-selected') === 'true');
listbox.setAttribute('tabindex', '0');
listbox.addEventListener('keydown', e => {
  let currentIndex1 = items.indexOf(activeItem);
  if (e.key === 'ArrowUp' && currentIndex1 > 0) {
    setActiveItem(items[currentIndex1 - 1]);
  }
  if (e.key === 'ArrowDown' && currentIndex1 < items.length - 1) {
    setActiveItem(items[currentIndex1 + 1]);
  }
});

listbox.addEventListener('click', e => {
  let clickedItem = e.target;
  if (clickedItem.classList.contains('listbox-item')) {
    setActiveItem(clickedItem);
  }
});

function setActiveItem(itemA) {
  activeItem.removeAttribute('aria-selected');
  activeItem.setAttribute('tabindex', '-1');
  itemA.setAttribute('aria-selected', 'true');
  itemA.removeAttribute('tabindex');
  listbox.setAttribute('aria-activedescendant', itemA.id);
  activeItem = itemA;
}
}

// Multiselect
function Multiselectactivedescendant() {
let multiselectedlistbox = document.querySelector('.listboxM');
let multiselecteditems = Array.from(multiselectedlistbox.children);
  
multiselectedlistbox.setAttribute('role', 'listboxM');
multiselectedlistbox.setAttribute('tabindex', '0');
multiselectedlistbox.setAttribute('aria-labelledby', 'listbox-label');

  multiselectedlistbox.addEventListener('keydown', e => {
    let currentIndexM = multiselecteditems.findIndex(itemM => itemM === document.activeElement);
    if (e.key === 'ArrowUp' && currentIndexM > 0) {
      multiselecteditems[currentIndexM - 1].focus();
    }
    if (e.key === 'ArrowDown' && currentIndexM < multiselecteditems.length - 1) {
      multiselecteditems[currentIndexM + 1].focus();
    }
    if (e.key === ' ' || e.key === 'Enter') {
      toggleSelection(document.activeElement);
    }
  });

  multiselectedlistbox.addEventListener('click', e => {
    let clickedItemM = e.target;
    if (clickedItemM.classList.contains('listbox-itemM')) {
      toggleSelection(clickedItemM);
    }
  });
function toggleSelection(itemM) {
  let isSelected = itemM.getAttribute('aria-selected') === 'true';
  if (isSelected) {
    itemM.setAttribute('aria-selected', 'false');
  } else {
    itemM.setAttribute('aria-selected', 'true');
  }
}
}







// document.addEventListener("DOMContentLoaded", rovingtabindex(), activedescendant(), Multiselectactivedescendant())

//   // Roving TabIndex
//   function rovingtabindex() {
//     let stateitems = document.querySelectorAll('[role="options"]');
//     stateitems.forEach((state) => {
//       state.addEventListener("keydown", navigation);
//     })
  
//     function navigation(e) {
//       let target = e.target;
//       let nextTarget = target.nextElementSibling;
//       let currentTarget = e.target;
//       let prevTarget = target.previousElementSibling;
  
//       if (e.key === "ArrowDown") {
//         target.setAttribute("tabindex", "-1");
//         nextTarget.setAttribute("tabindex", "0");
//         nextTarget.focus();
//       }
//       if (e.key === "ArrowUp") {
//         target.setAttribute("tabindex", "-1");
//         prevTarget.setAttribute("tabindex", "0");
//         prevTarget.focus();
//       }
//     }
//   }

//   // aria-activedescendant
//   function activedescendant() {
//   let listbox = document.querySelector('.listbox');  
//   let items = Array.from(listbox.children);
//   let activeItem = items.find(item => item.getAttribute('aria-selected') === 'true');
//   listbox.setAttribute('tabindex', '0');
//   listbox.addEventListener('keydown', e => {
//     let currentIndex1 = items.indexOf(activeItem);
//     if (e.key === 'ArrowUp' && currentIndex1 > 0) {
//       setActiveItem(items[currentIndex1 - 1]);
//     }
//     if (e.key === 'ArrowDown' && currentIndex1 < items.length - 1) {
//       setActiveItem(items[currentIndex1 + 1]);
//     }
//   });

//   listbox.addEventListener('click', e => {
//     let clickedItem = e.target;
//     if (clickedItem.classList.contains('listbox-item')) {
//       setActiveItem(clickedItem);
//     }
//   });

//   function setActiveItem(itemA) {
//     activeItem.removeAttribute('aria-selected');
//     activeItem.setAttribute('tabindex', '-1');
//     itemA.setAttribute('aria-selected', 'true');
//     itemA.removeAttribute('tabindex');
//     listbox.setAttribute('aria-activedescendant', itemA.id);
//     activeItem = itemA;
//   }
// }

//   // Multiselect
// function Multiselectactivedescendant() {
//   let multiselectedlistbox = document.querySelector('.listboxM');
//   let multiselecteditems = Array.from(multiselectedlistbox.children);
    
//   multiselectedlistbox.setAttribute('role', 'listboxM');
//   multiselectedlistbox.setAttribute('tabindex', '0');
//   multiselectedlistbox.setAttribute('aria-labelledby', 'listbox-label');

//     multiselectedlistbox.addEventListener('keydown', e => {
//       let currentIndexM = multiselecteditems.findIndex(itemM => itemM === document.activeElement);
//       if (e.key === 'ArrowUp' && currentIndexM > 0) {
//         multiselecteditems[currentIndexM - 1].focus();
//       }
//       if (e.key === 'ArrowDown' && currentIndexM < multiselecteditems.length - 1) {
//         multiselecteditems[currentIndexM + 1].focus();
//       }
//       if (e.key === ' ' || e.key === 'Enter') {
//         toggleSelection(document.activeElement);
//       }
//     });

//     multiselectedlistbox.addEventListener('click', e => {
//       let clickedItemM = e.target;
//       if (clickedItemM.classList.contains('listbox-itemM')) {
//         toggleSelection(clickedItemM);
//       }
//     });
//   function toggleSelection(itemM) {
//     let isSelected = itemM.getAttribute('aria-selected') === 'true';
//     if (isSelected) {
//       itemM.setAttribute('aria-selected', 'false');
//     } else {
//       itemM.setAttribute('aria-selected', 'true');
//     }
//   }
//  }