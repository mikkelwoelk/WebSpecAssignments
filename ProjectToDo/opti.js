// ElementById shortcut
const $ = function(id){return document.getElementById(id);}

// Declarations
let todoList = $('todoItemList');
let addBtn = $('addItem');
let textField = $('inputText');
let todo = $('todo');
let todoListItms = $('todoItemList').childNodes;

// Adds item with everything in it to the list
const addItem = function () {
    createListItem();
    createListItemDivs();
    createListItemBtns();
    appendElements();
    console.log('item added');
}

// Creates a new list item with classname
const createListItem = function () {
    const newLi = document.createElement('li');
    newLi.setAttribute('class', 'todoItem');
    console.log('list item created');
}

// Creates two divs inside the new list item with classnames
const createListItemDivs = function () {
    const liText = document.createElement('div');
    liText.setAttribute('class', 'liText');

    const liBtns = document.createElement('div');
    liBtns.setAttribute('class', 'liBtns');
    console.log('inner divs created');
}

// Creates an edit button and a delete button with classnames and icons
const createListItemBtns = function () {
    const newDeleteBtn = document.createElement('button');
    newDeleteBtn.setAttribute('class', 'deleteBtn');
    newDeleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    
    const newEditBtn = document.createElement('button');
    newEditBtn.setAttribute('class', 'editBtn');
    newEditBtn.innerHTML = '<i class="fas fa-pencil-alt"></i>';
    console.log('inner buttons created');
}

// Creates a textnode from input
const createText = function () {
    const liUserText = document.createTextNode(textInput);
    
}

// Appends everything
const appendElements = function () {
    liText.appendChild(liUserText);
    liBtns.append(newEditBtn, newDeleteBtn);
    newLi.append(liText, liBtns);
    todoList.append(newLi);
    console.log('elements appended');
}

// Adds event listeners to each li element and their buttons
/*todoListItms.forEach(function() {
    newDeleteBtn.addEventListener('click', deleteItem);
    newLi.addEventListener('click', crossItem);
    newEditBtn.addEventListener('click', editItem);
    console.log('event listeners added');
});*/

// Deletes a list item
function deleteItem () {
    newLi.remove();
}

// Delete all list items
const deleteAllItems = function () {
    todoListItms.forEach(function() {
        newLi.remove();
    })
}

// Highlight a list item
const highlightItem = function () {
    if (newLi.classList.contains('done')){
        newLi.classList.remove('done');
    } else {
        newLi.classList.add('done');
    }
}

// Ability to edit list item

// Resets and focuses input
const resetAndFocus = function () {
    // Resets the focus back onto the input field
    textField.focus();
    // Resets the input field
    textField.value = '';
}

// Adds item if input field is not empty

addBtn.addEventListener('click', addItem);