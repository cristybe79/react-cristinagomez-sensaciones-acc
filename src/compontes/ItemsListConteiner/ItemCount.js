import React, { useState } from "react";
import './ItemCount.css';

const ItemCount = ({ stockInicial = 0,stock=10 }) => {

    const [conta, setConta] = useState(stockInicial);
    const sumar = () => {
        if (conta<stock) setConta(conta + 1);
    }
    const restar = () => {
        if(conta>0)setConta(conta-1);

        
    }
    return (
        <div className="contador">
            <button className="bot-sumar" onClick={sumar}>+</button>
            <p className="numero">{conta}</p>
            <button className="bot-restar" onClick={restar}>-</button>
        </div>

    );
};
    export default ItemCount;