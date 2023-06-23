import React, { useState } from "react";
import Work5_employee from "./Work5_employee";

function Work5(props) 
{
    const [employees, setEmployee] = useState(
    [
        {id: 1, name: 'Олександр', surname: 'Петров', age: 28},
        {id: 2, name: 'Ірина', surname: 'Коваль', age: 33},
        {id: 3, name: 'Михайло', surname: 'Коваленко', age: 45},
        {id: 4, name: 'Олена', surname: 'Мельник', age: 22},
        {id: 5, name: 'Андрій', surname: 'Кузьменко', age: 37},
    ]);


    const deleteUser = (employee) => 
        setEmployee(employees.filter(emp => emp.id !== employee.id));

    const table = employees.map((employee, index) =>
        <Work5_employee
            name={employee.name}
            surname={employee.surname}
            age={employee.age}
            func={() => deleteUser(employee)}
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


export default Work5;