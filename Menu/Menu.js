/* This is the data we will be using, study it but don't change anything, yet. */
window.addEventListener('load', (e) => {

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
const body = document.querySelector('body');



body.appendChild(createMeau(menuItems));

function createMeau(itemsArray) {
  const menudiv = document.createElement('div');
  const ul = document.createElement('ul');

body.appendChild(menudiv);
menudiv.appendChild(ul);

menudiv.classList.add('menu')

  itemsArray.forEach(e => {
    const li = document.createElement('li');
    li.classList.add('li')
    li.textContent = e;
    ul.appendChild(li);
  });
  

  const menubutton = document.querySelector('.menu-button');

  menubutton.addEventListener('click', e => {
    menudiv.classList.toggle('menu--open');
  })

  
return menudiv;
}
})