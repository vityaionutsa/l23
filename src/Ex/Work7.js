import React, { useState } from "react";
import Work7_remove from "./Work7_remove";

function Work7(props) 
{
    const [products, setProduct] = useState(
        [
            { id: 1, name: 'Молоко', price: 25, quantity: 10 },
            { id: 2, name: 'Хліб', price: 12, quantity: 20 },
            { id: 3, name: 'Яйця', price: 30, quantity: 15 },
            { id: 4, name: 'Сир', price: 60, quantity: 8 },
            { id: 5, name: 'Ковбаса', price: 45, quantity: 12 },
        ]);


    const deleteProduct = (pro) => {
        setProduct(products.filter(product => product.id !== pro.id));
    }


    const table = products.map(product =>
            <Work7_remove product={product} deleteProduct={deleteProduct} />
        );
    return(
        <table border="1" style={{minWidth: "400px", textAlign: "center"}}>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Sum</th>
                <th>Edit</th>
            </tr>
            { table }
        </table>
    );
}

export default Work7;