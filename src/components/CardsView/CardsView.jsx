/* eslint-disable react/prop-types */
import ShopCard from "../ShopCard/ShopCard";

const CardsView = ({ products }) => {
    return (    
        <div className="cardsView">
            {products.map((product, index) => (
                <ShopCard key={index} product={product} />
            ))}
        </div>
    );
};

export default CardsView