import React, { useState } from "react";
import Work6_edit from "./Work6_edit";


function Work6(props)
{
    const [items, setItems] = useState([
        { id: 1, value: 'Абрикос' },
        { id: 2, value: 'Апельсин' },
        { id: 3, value: 'Банан' },
        { id: 4, value: 'Виноград' },
        { id: 5, value: 'Груша' },
        { id: 6, value: 'Кавун' },
        { id: 7, value: 'Ківі' },
        { id: 8, value: 'Лимон' },
        { id: 9, value: 'Персик' },
        { id: 10, value: 'Яблуко' },
    ]);


    const handleEdit = (id, input, link) => {
        const updateItems = items.map(item => {
            const newItem = {
                id: id, 
                value: (input.value === '' ? item.value : input.value)
            };

            if (item.id === id) return {...item, ...newItem};
            else return item;
        });
        
        setItems(updateItems);

        link.style.display = "inline";
        input.style.display = "none";
        input.value = '';
    };

    const showInput = (input, link) => 
    {
        link.style.display = "none";
        input.style.display = "inline";
        input.focus();
    }


    let list = items.map(item => 
        <Work6_edit 
            item={item} 
            showInput={showInput}
            handleEdit={handleEdit}
        />);

    return(
        <div>
            <ul>
                { list }
            </ul>
        </div>
    );
}

export default Work6;