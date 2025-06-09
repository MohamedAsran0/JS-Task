
var productNameElement = document.getElementById("productName");
var productPriceElement = document.getElementById("productPrice");
var productCategoryElement = document.getElementById("productCategory");
var productImageElement = document.getElementById("productImage");
var productDescriptionElement = document.getElementById("productDescription");

var productCardsElement = document.getElementById("productCards");

var buttonElement = document.getElementById("button");

var allProducts = [];

function addProduct() {
    var product = {
        name: productNameElement.value,
        price: Number(productPriceElement.value),
        category: productCategoryElement.value,
        image: productImageElement.value,
        description: productDescriptionElement.value
    };

    allProducts.push(product);

    console.log(allProducts);

    clearProducts();

    displayProducts();
}


function clearProducts() {
    productNameElement.value = null;
    productPriceElement.value = null;
    productCategoryElement.value = null;
    productImageElement.value = null;
    productDescriptionElement.value = null;
}


function displayProducts(){
    var container = "";

    for(var i=0; i<allProducts.length; i++)
    {
        container +=`<div class="col-md-3">
                        <div class="card">
                            <img src="./images/work-1.jpg" class="card-img-top" alt="product">
                            <div class="card-body">
                                <h4 class="card-title text-primary text-center">${allProducts[i].name}</h4>
                                <h5>${allProducts[i].price}</h5>
                                <h6 class="text-secondary">${allProducts[i].category}</h6>
                                <p class="card-text">${allProducts[i].description}</p>
                                <button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button>
                                <button onclick="updateProduct(${i})" class="btn btn-warning float-end">Update</button>
                            </div>
                        </div>
                    </div>`
    }

    productCardsElement.innerHTML = container;
}

function deleteProduct(index){
    allProducts.splice(index, 1);

    displayProducts();

    console.log(allProducts);
}

function updateProduct(index){
    productNameElement.value = allProducts[index].name;
    productPriceElement.value = allProducts[index].price;
    productCategoryElement.value = allProducts[index].category;
    productImageElement.value = allProducts[index].image;
    productDescriptionElement.value = allProducts[index].description;

    buttonElement.innerHTML = `<button onclick="updateProductValues(${index})" class="btn btn-outline-warning w-25">Update</button>`
}


function updateProductValues(index){
    allProducts[index].name = productNameElement.value;
    allProducts[index].price = Number(productPriceElement.value);
    allProducts[index].category = productCategoryElement.value;
    allProducts[index].image = productImageElement.value;
    allProducts[index].description = productDescriptionElement.value;

    buttonElement.innerHTML = `<button onclick="addProduct()" class="btn btn-outline-primary w-25">Add</button>`

    console.log(allProducts);

    clearProducts();

    displayProducts();
}
