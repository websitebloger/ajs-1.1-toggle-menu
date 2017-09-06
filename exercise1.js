var primaryNav = document.getElementById('primary-nav'),
    navMenu = document.getElementById('menu'),
    buttonNode, //Or buttonNode = ();
    toggleButton; // Or toggleButton = ();

//Defensive programming, just in case the nav element or the menu within it are not present

if (primaryNav !== null && navMenu !== null) {
    //Make the button but remember that this creates it in memory, doesn't add it to the page/dom
    buttonNode = document.createElement('span');
    //Add some text  to the button element
    buttonNode.textContent = 'Show menu';
    //Add the appropriate class to the button element
    buttonNode.classList.add('menu-toggle');

    // Now we can insert the button into the page/dom
    // It will be placed after the primary nav's opening tag.
    //ButtonNode is a SPAN element, it visually contains the info inline, as opposed to div (block-level)
    toggleButton = primaryNav.insertAdjacentElement('afterbegin', buttonNode);
    navMenu.classList.add('menu-closed');

    //Add event listener for "clicks" on the button we just added
    //By simply toggling the class that shows/hides the menu:
    // e.g.
    // if menu is closed (i.e. it has the class)
    //   - user clicks button
    //   - "toggle" removes the class (i.e. shows menu)
    // if menu is open (i.e. it doesn't have the class)
    //   - user clicks button
    //   - "toggle" adds the class (i.e. hides menu)
    toggleButton.addEventListener('click', function () {

        // This one line does all the work!
        navMenu.classList.toggle('menu-closed');

        // Toggle the button text
        // NB: this is a very crude solution to the problem... could it be more dynamic?
        // Here you check for text with operator ===
        if (toggleButton.textContent === 'Show menu') {
            //Here you REASSIGN with =
            toggleButton.textContent = 'Hide menu'
        } else {
            toggleButton.textContent = 'Show menu'
        }
    });

}

