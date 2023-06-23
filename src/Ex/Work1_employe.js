import React from "react";

function Work1_employe(props) 
{
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.surname}</td>
            <td>{props.age}</td>
        </tr>
    );
}

export default Work1_employe;