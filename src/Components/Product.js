import "./Product.css";

function Product({ item, basket, setBasket, total, setTotal }) {
  const checkBasket = basket.find((element) => element.id === item.id);
  const addItem = () => {
    const checkBasket = basket.find((element) => element.id === item.id);

    if (checkBasket) {
      checkBasket.amount += 1;
      checkBasket.price = checkBasket.amount * item.price;
      setBasket([
        ...basket.filter((element) => element.id !== item.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        { id: item.id, name: item.title, amount: 1, price: item.price },
      ]);
    }
  };

  const removeItem = () => {
    const checkBasket = basket.find((element) => element.id === item.id);

    if (checkBasket.amount > 1) {
      checkBasket.amount -= 1;
      checkBasket.price -= item.price;
      setBasket([
        ...basket.filter((element) => element.id !== item.id),
        checkBasket,
      ]);
    } else {
      setBasket([...basket.filter((element) => element.id !== item.id)]);
    }
  };

  return (
    <div className='all-items'>
      <div className='image'>
        <img src={item.image} alt='' />
      </div>
      <div className='item-info'>
        <h5>{item.title}</h5>

        <div className='buttons'>
          <button onClick={addItem}>+</button>

          <button disabled={!checkBasket} onClick={removeItem}>
            -
          </button>
        </div>
      </div>
      <div className='price'> Fiyat : {item.price} ₺</div>
    </div>
  );
}

export default Product;
