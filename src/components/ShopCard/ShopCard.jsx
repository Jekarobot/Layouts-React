/* eslint-disable react/prop-types */
const ShopCard = ({ product }) => {
    return (
      <div className="card">
        <h2 className="cardTitle">{product.name}</h2>
        <p className="cardColor">{product.color}</p>
        <img className="cardImg" src={product.img} alt={product.name} />
        <div className="cardInfo">
          <p className="cardPrice">${product.price}</p>
          <button className="cardButton">Add to Cart</button>
        </div>
      </div>
    );
};

export default ShopCard