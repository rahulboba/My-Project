document.addEventListener("DOMContentLoaded", rovingtabindex(), activedescendant(), Multiselectactivedescendant(), Rovingmultiselect())
// Roving TabIndex
function rovingtabindex() {
document.addEventListener("DOMContentLoaded", function() {
  let state = document.querySelectorAll('.state-list [role="option"]');
  state.forEach((state, index) => {
    state.addEventListener("keydown", navigation);
    state.addEventListener("click", setActiveItem);
    state.setAttribute("data-index", index);
  });

  function navigation(e) {
    let target = e.key;
    let currentIndex = parseInt(this.getAttribute("data-index"));
    let nextIndex = (target === "ArrowDown") ? currentIndex + 1 : (target === "ArrowUp") ? currentIndex - 1 : currentIndex;
    if (nextIndex >= 0 && nextIndex < state.length) {
      state[currentIndex].removeAttribute("tabindex");
      state[currentIndex].removeAttribute("aria-selected");
      state[nextIndex].setAttribute("tabindex", "0");
      state[nextIndex].setAttribute("aria-selected", "true");
      state[nextIndex].focus();
    }
    if (target === "ArrowDown" || target === "ArrowUp") {
      e.preventDefault();
    }
  }

  function setActiveItem(e) {
    let clickItem = e.target;
    state.forEach((state) => {
      if (state === clickItem) {
        state.setAttribute("tabindex", "0");
        state.setAttribute("aria-selected", "true");
        state.focus();
      } else {
        state.setAttribute("tabindex", "-1");
        state.setAttribute("aria-selected", "false");
      }
    });
  }
});
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
function setActiveItem(stateitem) {
  activeItem.removeAttribute('aria-selected');
  activeItem.setAttribute('tabindex', '-1');
  stateitem.setAttribute('aria-selected', 'true');
  stateitem.removeAttribute('tabindex');
  listbox.setAttribute('aria-activedescendant', stateitem.id);
  activeItem = stateitem;
}
}

// Multiselect
function Multiselectactivedescendant() {
let selectlistbox = document.querySelector('.listboxM');
let selectitems = Array.from(selectlistbox.children);
selectlistbox.setAttribute('role', 'listbox');
selectlistbox.setAttribute('tabindex', '0');
selectlistbox.setAttribute('aria-labelledby', 'listbox-label');
selectlistbox.addEventListener('keydown', e => {
  let currentIndexM = selectitems.findIndex(itemM => itemM === document.activeElement);
  if (e.key === 'ArrowUp' && currentIndexM > 0) {
    selectitems[currentIndexM - 1].focus();
  }
  if (e.key === 'ArrowDown' && currentIndexM < selectitems.length - 1) {
    selectitems[currentIndexM + 1].focus();
  }
  if (e.key === ' ' || e.key === 'Enter') {
    toggleSelection(document.activeElement);
  }
});

selectlistbox.addEventListener('click', e => {
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

// // Roving TabIndex
// function rovingtabindex() {
//   let stateitems = document.querySelectorAll('[id="stategroup"]');
//   stateitems.forEach((state) => {
//     state.addEventListener("keydown", navigation);
//   })

//   function navigation(e) {
//     let target = e.target;
//     let nextTarget = target.nextElementSibling;
//     let currentTarget = e.target;
//     let prevTarget = target.previousElementSibling;

//     if (e.key === "ArrowDown") {
//       target.setAttribute("tabindex", "-1");
//       nextTarget.setAttribute("tabindex", "0");
//       nextTarget.focus();
//     }
//     if (e.key === "ArrowUp") {
//       target.setAttribute("tabindex", "-1");
//       prevTarget.setAttribute("tabindex", "0");
//       prevTarget.focus();
//     }
//   }
// }

// // aria-activedescendant
// function activedescendant() {
// let listbox = document.querySelector('.listbox');  
// let items = Array.from(listbox.children);
// let activeItem = items.find(item => item.getAttribute('aria-selected') === 'true');
// listbox.setAttribute('tabindex', '0');
// listbox.addEventListener('keydown', e => {
//   let currentIndex1 = items.indexOf(activeItem);
//   if (e.key === 'ArrowUp' && currentIndex1 > 0) {
//     setActiveItem(items[currentIndex1 - 1]);
//   }
//   if (e.key === 'ArrowDown' && currentIndex1 < items.length - 1) {
//     setActiveItem(items[currentIndex1 + 1]);
//   }
// });

// listbox.addEventListener('click', e => {
//   let clickedItem = e.target;
//   if (clickedItem.classList.contains('listbox-item')) {
//     setActiveItem(clickedItem);
//   }
// });

// function setActiveItem(itemA) {
//   activeItem.removeAttribute('aria-selected');
//   activeItem.setAttribute('tabindex', '-1');
//   itemA.setAttribute('aria-selected', 'true');
//   itemA.removeAttribute('tabindex');
//   listbox.setAttribute('aria-activedescendant', itemA.id);
//   activeItem = itemA;
// }
// }

// // Multiselect
// function Multiselectactivedescendant() {
// let multiselectedlistbox = document.querySelector('.listboxM');
// let multiselecteditems = Array.from(multiselectedlistbox.children);
  
// multiselectedlistbox.setAttribute('role', 'listboxM');
// multiselectedlistbox.setAttribute('tabindex', '0');
// multiselectedlistbox.setAttribute('aria-labelledby', 'listbox-label');

//   multiselectedlistbox.addEventListener('keydown', e => {
//     let currentIndexM = multiselecteditems.findIndex(itemM => itemM === document.activeElement);
//     if (e.key === 'ArrowUp' && currentIndexM > 0) {
//       multiselecteditems[currentIndexM - 1].focus();
//     }
//     if (e.key === 'ArrowDown' && currentIndexM < multiselecteditems.length - 1) {
//       multiselecteditems[currentIndexM + 1].focus();
//     }
//     if (e.key === ' ' || e.key === 'Enter') {
//       toggleSelection(document.activeElement);
//     }
//   });

//   multiselectedlistbox.addEventListener('click', e => {
//     let clickedItemM = e.target;
//     if (clickedItemM.classList.contains('listbox-itemM')) {
//       toggleSelection(clickedItemM);
//     }
//   });
// function toggleSelection(itemM) {
//   let isSelected = itemM.getAttribute('aria-selected') === 'true';
//   if (isSelected) {
//     itemM.setAttribute('aria-selected', 'false');
//   } else {
//     itemM.setAttribute('aria-selected', 'true');
//   }
// }
// }








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