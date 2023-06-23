import React from "react";


function Work10_remove(props)
{
    return(
        <tr>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
            <td>{props.product.amount}</td>
            <td>{props.product.price * props.product.amount}</td>
            <td>
                <label>
                    Кількість
                    <input
                        type="checkbox"
                        name={"checkbox" + props.product.id}
                        defaultChecked
                        onClick={() => props.onCheckBoxClick(props.product.id)}
                        />
                </label>
                </td>
            <td>
                <button onClick={() => props.deleteProduct(props.product)} >
                    Видалити
                </button>
            </td>
        </tr>
    );
}

export default Work10_remove;