// display specific field
const catalogs = [{
    name: 'baju',
    stock: 10,
    price: 300000,
    description: 'baju lumoshive'
},{
    name: 'tas',
    stock: 5,
    price: 100000,
    description: 'tas lumoshive'
},{
    name: 'celana',
    stock: 7,
    price: 200000,
    description: 'celana lumoshive'
}]

// console.log(`name : ${catalogs[1].name}`);
// console.log(`price : ${catalogs[0].price}`);
// console.log(`stock : ${catalogs[2].stock}`);

// change text when click the button
document.getElementById('btn').addEventListener('click', function() {
    const texts = [
        'Lumoshive Academy',
        'Programmer handal',
        'Aku pasti bisa jadi programmer'
    ];
    let myText = document.getElementById('myText');

    if(myText.innerHTML === texts[0]) {
        myText.innerHTML = texts[1];
    } else if (myText.innerHTML === texts[1]){
        myText.innerHTML = texts[2];
    } else {
        myText.innerHTML = texts[0];
    }
});

// add new item from input
document.getElementById('btnSubmit').addEventListener('click', function(){
    // get value from input
    const textInput = document.getElementById('newText').value; 
    // get list id
    let list = document.getElementById('list');

    // create list item with text from input and add remove button
    let item = document.createElement('li');
    const text = document.createTextNode(`${textInput}   `);

    let removeButton = document.createElement('button');

    // set content and attribute for remove button
    removeButton.textContent = 'x';
    removeButton.setAttribute('id', 'removeButton');

    // add text and button to item
    item.appendChild(text);
    item.appendChild(removeButton);

    // set to empty string after submit new item
    document.getElementById('newText').value = '';

    // add item to list
    list.appendChild(item);
    // remove item from list
    removeButton.addEventListener('click', function(){
        item.remove();
    });
});