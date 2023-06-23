import React, { useState } from "react";
import Work3_employe from "./Work3_employe";

function Work3(props) 
{
    const [employees] = useState(
    [
        {id: 1, name: 'Олександр', surname: 'Петров', age: 28},
        {id: 2, name: 'Ірина', surname: 'Коваль', age: 33},
        {id: 3, name: 'Михайло', surname: 'Коваленко', age: 45},
        {id: 4, name: 'Олена', surname: 'Мельник', age: 22},
        {id: 5, name: 'Андрій', surname: 'Кузьменко', age: 37},
    ]);


    const showMessage = (line) => alert(line);

    const table = employees.map(employee =>
        <Work3_employe
            name={employee.name}
            surname={employee.surname}
            age={employee.age}
            func={() => showMessage(employee.name)}
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


export default Work3;