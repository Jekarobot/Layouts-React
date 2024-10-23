/* eslint-disable react/prop-types */
const ShopItem = ({ product }) => {
    return (
      <div className="shopItem">
        <img className="shopItemImage" src={product.img} alt={product.name} />
        <h2 className="shopItemTitle">{product.name}</h2>
        <p className="shopItemColor">{product.color}</p>
        <p className="shopItemPrice">${product.price}</p>
        <button className="shopItemButton">Add to cart</button>
      </div>
    );
  };
  
  export default ShopItem;