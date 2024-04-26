import React, { useState } from "react";



function App() {
  const [viewer, setViewer] = useState(0);
  const [products, setProducts] = useState([]);

  const setView = (view) => {
    setViewer(view)

    switch (view) {
      case 0:

        break;

      case 1:
        fetch("http://localhost:8081/read")
          .then(response => response.json())
          .then(data => setProducts(data))
        break;

      case 2:

        break;

      case 3:

        break;
    }
  }

  function View1() {


    return (<div>
      <h1>Add Products</h1>
    </div>);
  }

  function View2() {

    var cards = [];

    for (let i = 0; i < products.length; i++) {
      const product = products[i]

      cards.push(
        <div class="productCard">
          <div id="products" class="card shadow-sm">
            <img src={product.image} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <p class="card-text"> {product.id} <strong>{product.title}</strong> ${product.price}</p>
              <p class="card-text">Rating: {product.rating.rate} out of {product.rating.count} reviews</p>
              <p class="card-text"> <strong>Category: {product.category}</strong></p>
              <p class="card-text">{product.description}</p>
              <small class="text-body-secondary"></small>
            </div>
          </div>
        </div>
      );
    }

    return (<div>
      <h1>View Products</h1>
        <div id="products">{cards}</div>
    </div>);
  }

  function View3() {


    return (<div>
      <h1>Update Product</h1>
    </div>);
  }

  function View4() {


    return (<div>
      <h1>Delete Product</h1>
    </div>);
  }

  function View5() {


    return (<div>
      <h1>Student Info</h1>
    </div>);
  }

  return (<div>
    <button onClick={() => setView(0)}>Add Products</button>
    <button onClick={() => setView(1)}>View Products</button>
    <button onClick={() => setView(2)}>Update Products</button>
    <button onClick={() => setView(3)}>Delete Products</button>
    <button onClick={() => setView(4)}>Authors</button>

    {viewer === 0 && <View1 />}
    {viewer === 1 && <View2 />}
    {viewer === 2 && <View3 />}
    {viewer === 3 && <View4 />}
    {viewer === 4 && <View5 />}
  </div>);
}

export default App;