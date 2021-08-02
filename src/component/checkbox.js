import React from 'react'
import styled from 'styled-components/macro'
const Component=styled.div`
display: flex;
margin:1rem 0;
align-items: center;
`
const Label=styled.label`
margin:0 1rem 00;
min-width:8rem;

`
const Values=styled.div`
display: flex;
flex-direction: column;
`
const CheckBoxLabel=styled.label`
margin-bottom:0.5rem;
display: flex;
align-items: center;
border-radius:.375rem

&:hover {
    cursor: pointer;
}

`
const CheckBoxInput=styled.input`
margin-right:0.5rem;
margin-bottom:0.5rem;

&:focus {
    outline :0;
}

`

const CheckBox = ({name,id,label,values,onChange}) => {
   
 
    return (
        <Component>
            <Label for={name}>{label}</Label>
            <Values  >
               {values.map((item )=> {
                   return (
                       <CheckBoxLabel key={item.value} >
                           <CheckBoxInput
                            type="checkbox"
                
                            checkd={item.checked}
                            onChange = {onChange(item.value)}
                              />
                           {item.label}
                       </CheckBoxLabel>
                   )
               })}
            </Values>
        </Component>
    )
}
export default CheckBox;

 