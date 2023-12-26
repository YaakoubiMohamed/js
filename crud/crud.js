const productform = document.getElementById("product-form");
const productList = document.getElementById("product-list");

document.addEventListener('submit', function(event){
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;

    // console.log(name, price)
    if((name == "") || (price == "")){
        // alert('veuillez remplir tous les champs');
        document.getElementById("error").innerHTML = "veuillez remplir tous les champs";
    }else{
        const product = {
            name: name,
            price: price
        }
        // console.log(product);
        addProduct(product);
        saveProduct(product);
        productform.reset()
    }
});


function addProduct(product){
    const productItem = document.createElement('div');
    productItem.classList.add('product');
    productItem.innerHTML = `<strong>${product.name}</strong> - ${product.price} 
    <button class="edit-btn">Modifier</button>  
      <button class="delete-btn">Supprimer</button>`;
    productList.appendChild(productItem);
}

function saveProduct(product){
    let produits = JSON.parse(localStorage.getItem('produits')) || [];
    produits.push(product);
    localStorage.setItem('produits',JSON.stringify(produits))
}


function loadProducts(){
    let produits = JSON.parse(localStorage.getItem('produits')) || [];
    produits.forEach( function (produit){
        addProduct(produit)
    })
}

loadProducts();


productList.addEventListener('click', function(event){
    if(event.target.classList.contains('edit-btn')){
        const productItem = event.target.parentElement;
        // console.log(productItem);
        const productName = productItem.firstChild.textContent;
        // console.log(productName);
        const productPrice = productItem.textContent.split(' - ')[1].split(' ')[0];
        // console.log(productPrice);
        ShowEditModal(productName,productPrice)
    }

    if(event.target.classList.contains('delete-btn')){
        document.getElementById('deleteModal').style.display = 'block';
        const productItem = event.target.parentElement;
        // console.log(productItem);
        const productName = productItem.firstChild.textContent;
        document.getElementById('deleteName').value = productName;
    }
})

function ShowEditModal(productName,productPrice){
    document.getElementById('editName').value = productName;
    document.getElementById('oldName').value = productName;
    document.getElementById('editPrice').value = productPrice;
    document.getElementById('editModal').style.display = 'block';
}


document.getElementById('saveEdit').addEventListener('click', function () {
    const name = document.getElementById('editName').value;
    console.log('new name', name);
    const price = document.getElementById('editPrice').value;
    console.log('new price', price);
    const oldName = document.getElementById('oldName').value;
    console.log('old name', oldName);

    let products = JSON.parse(localStorage.getItem('produits')) || [];//
    console.log(products)

    for(let i=0;i < products.length; i++){
        if(oldName == products[i].name)
        {
            products[i].name = name;
            products[i].price = price;
        }
    }
    localStorage.setItem('produits',JSON.stringify(products))
    productList.innerHTML = ''
    loadProducts();
    document.getElementById('editModal').style.display = 'none';
})

document.getElementById('confirmDelete').addEventListener('click', function () {
    const deleteName = document.getElementById('deleteName').value;
    console.log('old name', deleteName);

    let products = JSON.parse(localStorage.getItem('produits')) || [];//
    console.log(products)

    
    products = products.filter(function (product){
        return product.name !== deleteName;
    });


    localStorage.setItem('produits',JSON.stringify(products))
    productList.innerHTML = ''
    loadProducts();
    document.getElementById('deleteModal').style.display = 'none';
})

document.getElementById('cancelDelete').addEventListener('click', function () {
    document.getElementById('deleteModal').style.display = 'none';
})


// localStorage.clear() 