/* eslint-disable react/prop-types */
import ShopItem from "../ShopItem/ShopItem";

const ListView = ({ products }) => {
    return (
        <div className="listView">
            {products.map((product, index) => (
                <ShopItem key={index} product={product} />
            ))}
        </div>
    );
};

export default ListView;