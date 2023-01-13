import "./Basket.css";

function Basket({ item, total, setTotal }) {
  return (
    <div className='basketContainer'>
      <span>{item.name}</span>
      <p>({item.amount} adet)</p>
    </div>
  );
}

export default Basket;
