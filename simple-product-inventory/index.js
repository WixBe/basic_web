const posts = [];

function addProduct(id, name, price, type) {
    const newPost = {
        id: id,
        name: name,
        price: price,
        type: type
    };
    posts.push(newPost);
    updateTable();
}

function updateTable() {
    const tabBody = document.getElementsByClassName('table')[0].getElementsByTagName('tbody')[0];
    tabBody.innerHTML = '';
    posts.forEach((post, index) => {
        const row = tabBody.insertRow();
        const idCell = row.insertCell(0);
        const nameCell = row.insertCell(1);
        const priceCell = row.insertCell(2);
        const typeCell = row.insertCell(3);
        const optionsCell = row.insertCell(4);

        idCell.textContent = post.id;
        nameCell.textContent = post.name;
        priceCell.textContent = post.price;
        typeCell.textContent = post.type;

        const updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        updateButton.onclick = () => updateProduct(index);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteProduct(index);

        optionsCell.appendChild(updateButton);
        optionsCell.appendChild(deleteButton);
    });
}

function updateProduct(index) {
    const post = posts[index];
    document.getElementsByName('id')[0].value = post.id;
    document.getElementsByName('name')[0].value = post.name;
    document.getElementsByName('price')[0].value = post.price;
    document.getElementsByName('type')[0].value = post.type;

    deleteProduct(index);
}

function deleteProduct(index) {
    posts.splice(index, 1);
    updateTable();
}

document.getElementsByClassName('form')[0].addEventListener('submit', function(event){
    event.preventDefault();
    
    const id = document.getElementsByName('id')[0].value;
    const name = document.getElementsByName('name')[0].value;
    const price = document.getElementsByName('price')[0].value;
    const type = document.getElementsByName('type')[0].value;

    addProduct(id, name, price, type);

    document.getElementsByClassName('form')[0].reset();
});