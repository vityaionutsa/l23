import React from "react";


function Work7_remove(props)
{
    return(
        <tr>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
            <td>{props.product.amount}</td>
            <td>{props.product.price * props.product.amount}</td>
            <td>
                <button onClick={() => props.deleteProduct(props.product)} >
                    Видалити
                </button>
            </td>
        </tr>
    );
}

export default Work7_remove;