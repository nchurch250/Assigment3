// fetch("http://localhost:8081/")
//     .then(function (response) {
//         return response.json();
//     })

import React, { useState } from "react";
import { useForm } from "react-hook-form";




function App() {
  const [viewer, setViewer] = useState(0);

  const setView = (view) =>{
    setViewer(view)
  }

  function View1(){


    return (<div>
        <h1>Add Products</h1>
      </div>);
  }

  function View2(){


    return (<div>
        <h1>View Porducts</h1>
      </div>);
  }

  function View3(){


    return (<div>
        <h1>Update Product</h1>
      </div>);
  }

  function View4(){


    return (<div>
        <h1>Delete Product</h1>
      </div>);
  }

  function View5(){


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