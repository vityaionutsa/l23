import React from "react";

function Work4_employe(props) 
{
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.surname}</td>
            <td>{props.age}</td>
            <td>
                <a href="#" onClick={props.func} >Натисніть</a>
            </td>
        </tr>
    );
}

export default Work4_employe;