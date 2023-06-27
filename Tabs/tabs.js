let tabs = Array.from(document.querySelectorAll('[role="tab"]'));
let panels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

// Add event listeners to tab buttons
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        activateTab(index);
    });

    tab.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            activateTab(index);
            e.preventDefault();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            focusTab(index - 1);
            e.preventDefault();
        } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            focusTab(index + 1);
            e.preventDefault();
        }
    });


    // Add focus event listener to prevent announcing tab as selected on focus
    tab.addEventListener('focus', () => {
        if (!tab.getAttribute('aria-selected')) {
            tab.setAttribute('aria-selected', 'false');
        }
    });
});

// Function to activate a tab
function activateTab(index) {
    tabs.forEach((tab) => {
        tab.setAttribute('aria-selected', 'false');
        tab.setAttribute('tabindex', '-1');
    });

    panels.forEach((panel) => {
        panel.setAttribute('aria-hidden', 'true');
        panel.setAttribute('tabindex', '-1');
    });

    const tab = tabs[index];
    const panel = panels[index];

    tab.setAttribute('aria-selected', 'true');
    tab.setAttribute('tabindex', '0');
    tab.focus();

    panel.setAttribute('aria-hidden', 'false');
    panel.setAttribute('tabindex', '0');
}

// Function to focus on a tab
function focusTab(index) {
    if (index < 0) {
        focusTab(tabs.length - 1);
    } else if (index >= tabs.length) {
        focusTab(0);
    } else {
        tabs[index].focus();
    }
}