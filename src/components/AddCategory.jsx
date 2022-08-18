import { useState } from "react";

export const AddCategory = ( { onNewCategory } ) => {
    const [inputValue, setInputValue] = useState(''); // variables del input hook useState

    const onInputChange = (event) => {
       setInputValue(event.target.value);
        //console.log(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onNewCategory( inputValue.trim() ); // asignar el nuevo valor 
        setInputValue(''); // borrar lo que tiene en ese momento el input
    }
    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input 
                type = "text" 
                placeholder = "Add Gifs"
                value = {inputValue}
                onChange = { onInputChange }
            />
        </form>
        
    )
}