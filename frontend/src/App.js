import React, { useState } from "react";


function App() {
  const [viewer, setViewer] = useState(0);

  const setView = (view) => {
    setViewer(view)

    switch (view) {
      case 0:

        break;

      case 1:
        fetch("http://localhost:8081/read")
          .then(response => response.json())
          .then(data => View2(data))
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

  function View2(products) {

    var CardProduct = document.getElementById("products");

    var cards = [];

    for (let i = 0; i < products.length; i++) {
      let id = products[i].id;
      let name = products[i].name;
      let price = products[i].price;
      let description = products[i].description;
      let url = products[i].imageUrl;

      let card = "card" + i.toString();

      let AddCardProduct = document.createElement("div");

      AddCardProduct.innerHTML = `
            <div id=${card} class="card shadow-sm">
                <img src=${url} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <p class="card-text"> ${id} <strong>${name}</strong> $${price}</p>
                    <p class="card-text"> ${description} </p>
                    <small class="text-body-secondary"></small>
                </div>
            </div>
        </div>
        `;

      CardProduct.appendChild(AddCardProduct);

      let ccard = document.getElementById(card);
      cards.push(ccard);

      console.log(card);
    }

    console.log(cards);

    return (<div>
      <h1>View Porducts</h1>
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
    <button onClick={() => setView(0)}>View 1</button>
    <button onClick={() => setView(1)}>View 2</button>
    <button onClick={() => setView(2)}>View 3</button>
    <button onClick={() => setView(3)}>View 4</button>
    <button onClick={() => setView(4)}>View 5</button>

    {viewer === 0 && <View1 />}
    {viewer === 1 && <View2 />}
    {viewer === 2 && <View3 />}
    {viewer === 3 && <View4 />}
    {viewer === 4 && <View5 />}
  </div>);
}

export default App;