let nameList = [];
let formInput = document.getElementById('formInputContainer');
let list = document.getElementById('listNama');

// show input form
const displayFormInput = () => {
    if(formInput.style.display === 'none' && list.style.display === 'block') {
        formInput.style.display = 'block';
        list.style.display = 'none'
    } else {
        formInput.style.display = 'none';
        list.style.display = 'block'
    }
}

const saveName = () => {
    const nameInput = document.getElementById('name').value;
    if(nameInput === '') {
        alert('Please enter a name');
    } else {
        nameList.push(nameInput);
        document.getElementById('name').value = '';
        console.log(`${nameInput} is saved`);
        alert('berhasil disimpan');
    }

};

const showData = () => {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = '<h1>Daftar Nama</h1>';
    if(list.style.display === 'none' && formInput.style.display === 'block') {
        list.style.display = 'block';
        formInput.style.display = 'none'
    } else {
        list.style.display = 'none';
        formInput.style.display = 'block'
    }

    if(nameList && nameList.length) {
        for(let name of nameList) {
            let paragraph = document.createElement('p');
            paragraph.setAttribute('class', 'nameItem');
            paragraph.innerHTML = name;
            dataContainer.appendChild(paragraph);
        };
    } else {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = 'Data belum ada ...';
        dataContainer.append(paragraph);
    };
};