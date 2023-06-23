import React, { useState } from "react";
import Work2_employe from "./Work2_employe";

function Work2(props) 
{
    const [employees] = useState(
    [
        {id: 1, name: 'Олександр', surname: 'Петров', age: 28},
        {id: 2, name: 'Ірина', surname: 'Коваль', age: 33},
        {id: 3, name: 'Михайло', surname: 'Коваленко', age: 45},
        {id: 4, name: 'Олена', surname: 'Мельник', age: 22},
        {id: 5, name: 'Андрій', surname: 'Кузьменко', age: 37},
    ]);


    const showMessage = () => alert("!");

    const table = employees.map(employee =>
        <Work2_employe
            name={employee.name}
            surname={employee.surname}
            age={employee.age}
            func={showMessage}
        />);

    return (
        <table border="1" >
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Age</th>
                <th>Link</th>
            </tr>
            { table }
        </table>
    );
}


export default Work2;