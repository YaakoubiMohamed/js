document.addEventListener('DOMContentLoaded', function () {
    const productForm = document.getElementById('product-form');
    const productList = document.getElementById('product-list');

    productForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;

        if (name && price) {
            const product = {
                name: name,
                price: price
            };

            addProduct(product);
            saveProduct(product);
            productForm.reset();
        } else {
            alert('Veuillez remplir tous les champs.');
        }
    });

    function addProduct(product) {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `<strong>${product.name}</strong> - ${product.price} <button class="edit-btn">Éditer</button> <button class="delete-btn">Supprimer</button>`;
        productList.appendChild(productItem);
    }

    function saveProduct(product) {
        let products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
    }

    function loadProducts() {
        let products = JSON.parse(localStorage.getItem('products')) || [];
        console.log('Loading products',products);
        products.forEach(function (product) {
            addProduct(product);
        });
    }

    loadProducts();

    productList.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-btn')) {
            const productItem = event.target.parentElement;
            const productName = productItem.firstChild.textContent;
            showDeleteModal(productName);
        }

        if (event.target.classList.contains('edit-btn')) {
            const productItem = event.target.parentElement;
            const productName = productItem.firstChild.textContent;
            const productPrice = productItem.textContent.split(' - ')[1].split(' ')[0];
            showEditModal(productName, productPrice);
        }
    });

    function showEditModal(name, price) {
        document.getElementById('editName').value = name;
        document.getElementById('editPrice').value = price;
        showModal();
    }

    document.getElementById('cancelDelete').addEventListener('click', function () {
        hideDeleteModal();
    });

    // Event listener for the confirm button in the delete confirmation modal
    document.getElementById('confirmDelete').addEventListener('click', function () {
        const productItem = document.querySelector('.product-item-confirm-delete');
        const productName = document.getElementById('deleteName').value;

        // Perform the delete operation
        deleteProduct(productName);

        // Hide the modal
        hideDeleteModal();
    });

    function deleteProduct(name) {
        let products = JSON.parse(localStorage.getItem('products')) || [];
        console.log('before delete product', products);
        products = products.filter(function (product) {
            return product.name !== name;
        });
        console.log('after delete product', products);
        localStorage.setItem('products', JSON.stringify(products));
        loadProducts();
    }

    // Event listener for the save button in the modal
document.getElementById('saveEdit').addEventListener('click', function() {
    const newName = document.getElementById('editName').value;
    const newPrice = document.getElementById('editPrice').value;
    // Update the product with the new values
    editProduct(newName,newPrice)
    // Hide the modal
    hideModal();
  });
    function editProduct(newName,newPrice) {
        // const newName = document.getElementById('editName').value;
        // const newPrice = document.getElementById('editPrice').value;

        if (newName && newPrice) {
            const products = JSON.parse(localStorage.getItem('products')) || [];
            const updatedProducts = products.map(function (product) {
                if (product.name === name) {
                    product.name = newName;
                    product.price = newPrice;
                }
                return product;
            });

            localStorage.setItem('products', JSON.stringify(updatedProducts));
            productList.innerHTML = '';
            loadProducts();
            hideModal();
        } else {
            alert('Veuillez remplir tous les champs.');
        }
    }

    // Show the modal
    function showModal() {
        document.getElementById('editModal').style.display = 'block';
    }

    // Hide the modal
    function hideModal() {
        document.getElementById('editModal').style.display = 'none';
    }

    function showDeleteModal(name) {
        document.getElementById('deleteName').value = name;
        document.getElementById('deleteModal').style.display = 'block';
    }

    // Hide the delete confirmation modal
    function hideDeleteModal() {
        document.getElementById('deleteModal').style.display = 'none';
    }
});
