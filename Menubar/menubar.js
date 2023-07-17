document.addEventListener('keydown', handleNavigation);
document.addEventListener('keydown', handleSubmenuNavigation);
document.addEventListener('keydown', handleSubNavigation);
// document.addEventListener('keydown', handleSubNavigation);

// Function to handle keyboard navigation
      function handleNavigation(event) {
        const key = event.key;
        const currentLink = event.target;
        const parentItem = currentLink.parentNode;
        const submenu = parentItem.querySelector('.submenu');

        if (key === 'ArrowDown' || key === 'Enter' || key === ' ') {
          if (submenu) {
            event.preventDefault();
            
            submenu.style.display = 'block';
            submenu.setAttribute('aria-expanded', 'true');
            const submenuLinks = submenu.querySelectorAll('a');
            if (submenuLinks.length > 0) {
              submenuLinks[0].focus();
            }
          }
        } else if (key === 'ArrowUp') {
          if (submenu && submenu.style.display !== 'block') {
            event.preventDefault();
            // closeSubmenus();
            submenu.style.display = 'block';
            submenu.setAttribute('aria-expanded', 'true');
            const submenuLinks = submenu.querySelectorAll('a');
            if (submenuLinks.length > 0) {
              submenuLinks[submenuLinks.length - 1].focus();
            }
          }
        } else if (key === 'ArrowRight') {
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
          closeSubmenu();
          const prevItem = parentItem.previousElementSibling;
          if (prevItem) {
            prevItem.focus();
          } else {
            document.querySelector('.menubar a').focus();
          }
      }}

// Function to handle submenu navigation
      function handleSubmenuNavigation(event) {
        const key = event.key;
        const currentLink = event.target;
        const parentItem = currentLink.parentNode.parentNode;
        const submenu = parentItem.querySelector('.submenu');
        
        if (key === 'ArrowDown' || key === 'ArrowUp') {
          event.preventDefault();
          const submenuLinks = submenu.querySelectorAll('a');
          const currentLinkIndex = Array.from(submenuLinks).indexOf(currentLink);
          let nextIndex;

          if (key === 'ArrowDown') {
            nextIndex = currentLinkIndex + 1;
            if (nextIndex >= submenuLinks.length) {
              nextIndex = 0;
            }
          } else if (key === 'ArrowUp') {
            nextIndex = currentLinkIndex - 1;
            if (nextIndex < 0) {
              nextIndex = submenuLinks.length - 1;
              nextIndex.focus();
            }
          }
          submenuLinks[nextIndex].focus();
          
          } 
          else if (key === 'ArrowRight') {
          event.preventDefault();
          openSubmenu();
          const nextItem = parentItem.nextElementSibling;
          const nextLink = nextItem.querySelector('a');
          if (nextItem) {
            nextLink.focus();
          }
          if (key === 'ArrowDown' || key === 'ArrowUp') {
            event.preventDefault();
            const submenuLinks = submenu.querySelectorAll('a');
            const currentLinkIndex = Array.from(submenuLinks).indexOf(currentLink);
            let nextIndex;
        
            if (key === 'ArrowDown') {
              nextIndex = currentLinkIndex + 1;
              if (nextIndex >= submenuLinks.length) {
                nextIndex = 0;
              }
            } else if (key === 'ArrowUp') {
              nextIndex = currentLinkIndex - 1;
              if (nextIndex < 0) {
                nextIndex = submenuLinks.length - 1;
                nextIndex.focus();
              }
            }
            submenuLinks[nextIndex].focus();
            
            } 
          submenu.style.display = 'none';
          submenu.setAttribute('aria-expanded', 'false');
          } 
          else if (key === 'ArrowLeft') {
          const prevItem = parentItem.previousElementSibling;
          const prevLink = prevItem.querySelector('a');
          if (prevItem) {
            prevLink.focus();
          }
          submenu.style.display = 'none';
          submenu.setAttribute('aria-expanded', 'false');
        }
      }

//Function to handle submenu navigation of our vision
      function handleSubNavigation(event) {
        const key = event.key;
        const currentLink = event.target;
        const parentItem = currentLink.parentNode.parentNode.parentNode;
        const submenu = parentItem.querySelectorAll('.submenuitem');

      
        if (key === 'ArrowRight') {
          event.preventDefault();
          openSubmenu();
          const nextItem = parentItem.nextElementSibling;
          const nextLink = nextItem.querySelector('.submenuitem a');
          if (nextItem) {
            nextLink.focus();
            document.querySelector('.submenuitem a').focus();
          }
         
        } else if (key === 'Escape') {
          closeSubmenu();
          const prevItem = parentItem.previousElementSibling;
          if (prevItem) {
            prevItem.focus();
          } else {
            document.querySelector('.submenuitems3').focus();
          }
    }
    }

//Function to handle submenu items navigation of our vision
      function handleSubItemsNavigation(event) {
        const key = event.key;
        const currentLink = event.target;
        const parentItem = currentLink.parentNode;
        const submenu = parentItem.querySelector('.submenuitem');
        
        if (key === 'ArrowDown' || key === 'ArrowUp') {
          event.preventDefault();
          const submenuLinks = submenu.querySelectorAll('.submenuiten a');
          const currentLinkIndex = Array.from(submenuLinks).indexOf(currentLink);
          let nextIndex;

          if (key === 'ArrowDown') {
            nextIndex = currentLinkIndex + 1;
            if (nextIndex >= submenuLinks.length) {
              nextIndex = 0;
            }
          } else if (key === 'ArrowUp') {
            nextIndex = currentLinkIndex - 1;
            if (nextIndex < 0) {
              nextIndex = submenuLinks.length - 1;
              nextIndex.focus();
            }
          }
          submenuLinks[nextIndex].focus();
          } 
        }


// Function to close all submenus
function closeSubmenus() {
  const submenus = document.querySelectorAll('.submenu');
  submenus.forEach((submenu) => {
    submenu.style.display = 'none';
    submenu.setAttribute('aria-expanded', 'false');
  });
}

function closeSubmenu() {
  const submenus = document.querySelectorAll('.submenuitem');
  submenus.forEach((submenu) => {
    if(submenu){
    submenu.style.display = 'none';
    submenu.setAttribute('aria-expanded', 'false');
}})}

function openSubmenu() {
  const submenus = document.querySelectorAll('.submenuitem');
  submenus.forEach((submenus) => {
    if(submenus){
    submenus.style.display = 'block';
    submenus.setAttribute('aria-expanded', 'true');
    }})}


// Attach event listeners to menu items
const menuItems = document.querySelectorAll('.menubar a[role="menuitem"]');
menuItems.forEach((item) => {
  item.addEventListener('keydown', handleNavigation);
});

// Attach event listeners to submenu items
const submenuItems = document.querySelectorAll('.submenu a[role="menuitem"]');
submenuItems.forEach((item) => {
  item.addEventListener('keydown', handleSubmenuNavigation);
});

// Attach event listeners to submenu items of our vision
const subItems = document.querySelectorAll('.submenuitem a[role="menuitem"]');
subItems.forEach((item) => {
  item.addEventListener('keydown', handleSubNavigation);
});

// handleSubItemsNavigation
// Attach event listeners to submenu items of our vision
const menusubItems = document.querySelectorAll('.submenuitem a[role="menuitem"]');
menusubItems.forEach((item) => {
  item.addEventListener('keydown', handleSubItemsNavigation);
});