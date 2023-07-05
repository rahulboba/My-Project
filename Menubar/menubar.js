
document.addEventListener('keydown', handleNavigation, handleSubmenuNavigation);
// Function to handle keyboard navigation
function handleNavigation(event) {
    const key = event.key;
    const currentLink = event.target;
    const parentItem = currentLink.parentNode;
    const submenu = parentItem.querySelector('.submenu');
  
    if (key === 'ArrowDown') {
      if (submenu && submenu.style.display !== 'block') {
        event.preventDefault();
        closeSubmenus();
        submenu.style.display = 'block';
        const submenuLinks = submenu.querySelectorAll('a');
        if (submenuLinks.length > 0) {
          submenuLinks[0].focus();
        }
      }
    }
    else if(key === 'ArrowUp') {
        if (submenu && submenu.style.display !== 'block') {
          event.preventDefault();
          closeSubmenus();
          submenu.style.display = 'block';
          const submenuLinks = submenu.querySelectorAll('a');
          if (submenuLinks.length > 0) {
            submenuLinks[2].focus();
          }
        }
      }
    
    else if (key === 'ArrowRight') {
      event.preventDefault();
      const nextItem = parentItem.nextElementSibling;
      const nextLink = nextItem.querySelector('a');
      if (nextItem) {
        nextLink.focus();
      }
    } else if (key === 'ArrowLeft') {
      event.preventDefault();
      const prevItem = parentItem.previousElementSibling;
      const prevLink = prevItem.querySelector('a');
      if (prevItem) {
        prevLink.focus();
      }
    } else if (key === 'Escape') {
      event.preventDefault();
      closeSubmenus();
      const prevItem = parentItem.previousElementSibling;
      if (prevItem) {
        prevItem.focus();
      }else {
        document.querySelector('.menubar a');
      }
    }
}

// Function to handle submenu navigation
function handleSubmenuNavigation(event) {
  const key = event.key;
  const currentLink = event.target;
  const parentItem = currentLink.parentNode.parentNode;
  const submenu = parentItem.querySelector('.submenu');
  
  if (key === 'ArrowDown') {
    event.preventDefault();
    const nextLink = currentLink.nextElementSibling;
    if (nextLink) {
      nextLink.focus();
    } else {
      const firstLink = submenu.querySelector('a');
      if (firstLink) {
        firstLink.focus();
      }
    }
  } else if (key === 'ArrowUp') {
    event.preventDefault();
    const prevLink = currentLink.previousElementSibling;
    if (prevLink) {
      prevLink.focus();
    } else {
        document.querySelector('.submenuitem3').focus();
        document.querySelector('.submenuitems3').focus();
    }
  }
  // when we press right arrow it will goes to next 'menubar' element
  else if (key === 'ArrowRight') {
    event.preventDefault();
    const nextItem = parentItem.nextElementSibling;
    const nextLink = nextItem.querySelector('a');
    if (nextItem) {
      nextLink.focus();
    }
    submenu.style.display= 'none';
  } 
  else if (key === 'ArrowLeft') {
    event.preventDefault();
    const prevItem = parentItem.previousElementSibling;
    const prevLink = prevItem.querySelector('a');
    if (prevItem) {
      prevLink.focus();
    }
    submenu.style.display= 'none';
  }
}

// Function to close all submenus
function closeSubmenus() {
  const submenus = document.querySelectorAll('.submenu');
  submenus.forEach((submenu) => {
    submenu.style.display = 'none';    
  });
}

// Attach event listeners to menu items
const menuItems = document.querySelectorAll('.menubar a');
menuItems.forEach((item) => {
  item.addEventListener('keydown', handleNavigation);
});

// Attach event listeners to submenu items
const submenuItems = document.querySelectorAll('.submenu a');
submenuItems.forEach((item) => {
  item.addEventListener('keydown', handleSubmenuNavigation);
});
