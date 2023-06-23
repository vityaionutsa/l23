import React, { useState } from "react";
import Work8_remove from "./Work8_remove";

function Work8(props) 
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
    const addProduct = () => {
        const newProduct = {
            id: products[products.length - 1].id + 1,
            name: document.getElementsByName("names")[0].value,
            price: +document.getElementsByName("prices")[0].value,
            amount: +document.getElementsByName("amounts")[0].value,
        };
        setProduct([...products, newProduct]);
    }


    const table = products.map(product =>
            <Work8_remove product={product} deleteProduct={deleteProduct} />
        );
    return(
        <div>
            <div style={{margin: "20px"}}>
                <h4>Додати новий товар</h4>
                <div>Name <input type="text" name="names" /></div><br/>
                <div>Price <input type="number" name="prices" /></div><br/>
                <div>Amount <input type="number" name="amounts" /></div><br/>

                <button onClick={addProduct}>Додати товар</button>
            </div>

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
            
            <h2>
                Загальна сума:
                <span style={{margin: "0px 10px", textDecoration: "underline"}}>
                {
                    products
                        .map(obj => obj.price)
                        .reduce((x, y) => {return x + y;}, 0)
                }
                </span>
            </h2>
        </div>
    );
}

export default Work8;