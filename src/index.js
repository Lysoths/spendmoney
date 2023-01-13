import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Products from "./Products.json";
import Product from "./Components/Product";
import Basket from "./Components/Basket";

const App = () => {
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState([]);
  let toplam = 0;
  const [lastTotal, setLastTotal] = useState(toplam);
  useEffect(() => {
    setTotal(basket.map((item) => (toplam += item.price)));
    setLastTotal(toplam);
  }, [basket]);
  return (
    <div className='container'>
      <div className='products'>
        {Products.map((item) => (
          <Product
            item={item}
            key={item.id}
            basket={basket}
            setBasket={setBasket}
            total={total}
            setTotal={setTotal}
          />
        ))}
      </div>
      <div className='basketContainer'>
        <div className='basket'>
          {basket &&
            basket.map((item) => (
              <Basket
                total={total}
                setTotal={setTotal}
                key={item.id}
                item={item}
              />
            ))}
        </div>
        <div className='total'>
          {lastTotal === 0 ? (
            <>Sepetiniz Boş</>
          ) : (
            <>Ödeceyeceğiniz Tutar = {lastTotal} ₺</>
          )}
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
