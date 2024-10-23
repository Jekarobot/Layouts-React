/* eslint-disable react/prop-types */
import { useState } from "react";
import CardsView from "../CardsView/CardsView";
import ListView from "../ListView/ListView";
import IconSwitch from "../IconSwitch/IconSwitch";

const Store = ({ products }) => {

    const [view, setView] = useState("cards");

    const handleViewChange = (newView) => {
        setView(newView);
    }

    return (
        <div className="store">
            <div className="storeHeader">
             <IconSwitch onViewChange={handleViewChange} viewMode={view} />
            </div>
            {view === "cards" ? (
                <CardsView products={products} />
            ) : (
                <ListView products={products} />
            )}
        </div>
    );
};

export default Store;