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
const StyleSelect=styled.select`

padding:0.5rem 1rem;
border-radius: .375rem;
border:1px solid #e2e8f0;
flex:1;
&:focus {
    outline :0;
}
`

const Select = ({id,label,value,onChange}) => {
   
 
    return (
        <Component>
            <Label for={id}>{label}</Label>
            <StyleSelect  id={id} value={value}onChange={onChange} >
                <option value="...">...</option>
                <option value="iraq">iraq</option>
                <option value="turkey">turkey</option>
            </StyleSelect>
        </Component>
    )
}
export default Select;