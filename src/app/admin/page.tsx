"use client";
import { supabase } from '../../../supabase';
import  { useState } from 'react';

const UpdatePage = () => {
    const [inputFields, setInputFields] = useState([{ id: 1, value: '', checked: false }]);

    // Function to add a new input field
    const handleAddField = () => {
        const newField = {
            id: inputFields.length + 1,
            value: '',
            checked: false,
        };
        setInputFields([...inputFields, newField]);
    };

    // Function to update the value of an input field
    const handleInputChange = (id:Number, value:any) => {
        setInputFields((prevFields) =>
            prevFields.map((field) => (field.id === id ? { ...field, value } : field))
        );
    };

    // Function to update the checkbox state
    const handleCheckboxChange = (id:Number, checked:boolean) => {
        setInputFields((prevFields) =>
            prevFields.map((field) => (field.id === id ? { ...field, checked } : field))
        );
    };

    const handleSubmit =  async ()=>{
        const {data , error} = await supabase
        .from('LaundryDetails')
        .update({status : inputFields[0].checked})
        .eq('bag_number' , inputFields[0].value)
        
        if(error){
            console.log(error);
            
        }
        if(data){
            console.log(data);
            
        }
        console.log(inputFields);
        
    }

    return (
        <div className="container">
            <h1>{new Date().toDateString()}</h1>
            {inputFields.map((field) => (
                <div className="smol" key={field.id} style={{ display: 'flex', flexDirection: 'row' , margin:'5px'}}>
                    <input
                        type="text"
                        placeholder="Enter the bag number"
                        value={field.value}
                        onChange={(e) => handleInputChange(field.id, e.target.value)}
                    />
                    <input
                        type="checkbox"
                        style={{ height: '40px', width: '40px', marginLeft: '5px' }}
                        checked={field.checked}
                        onChange={(e) => handleCheckboxChange(field.id, e.target.checked)}
                    />
                    <button
                        type="button"
                        style={{ height: '40px', width: '40px', marginLeft: '5px', background: 'white', color: 'black' }}
                        onClick={handleAddField}
                    >
                        +
                    </button>
                </div>
            ))}
            <br />
            <button className="btn" onClick={()=>handleSubmit()}>Update</button>
        </div>
    );
};

export default UpdatePage;
