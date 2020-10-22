import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./product-mf-decl.d.ts";
import "./index.css";
import ProductView from "product-mf/product";


function App() {
    const [amount, setAmount] = useState(0)
    
    let toggleClickHandler = () => {
      setAmount(amount + 10)
  }

  

  
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <h1 style={{display: "inline", marginLeft: "600px"}}>Navigation</h1>
            <div style={{ float: "right", marginRight: "200px", marginTop: "20px", marginBottom: "20px"}}>
              {amount}€  Cart
          </div>
          </nav>
        
        </header>
        <ProductView ClickHandler={toggleClickHandler}/>
      
        
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById("app"));
