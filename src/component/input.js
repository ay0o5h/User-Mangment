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
const StyleInput=styled.input`

padding:0.5rem 1rem;
border-radius: .375rem;
border:1px solid #e2e8f0;
flex:1;
&:focus {
    outline :0;
}

`
const TextArea = styled.textarea`
padding:0.5rem 1rem;
border-radius: .375rem;
border:1px solid #e2e8f0;
flex:1;
&:focus {
    outline :0;
}
`
const Input = ({id,label,value,onChange,type}) => {
    const filedType = () => {
        if(type === 'email'){
            return (
                <StyleInput type="email" id={id} value={value}onChange={onChange} />
            )
        }else if(type === 'textarea'){
            return(
                <TextArea type="textarea" rows="4" id={id} value={value}onChange={onChange} />
            )
        }
        else  {
          return (
            <StyleInput type="text" id={id} value={value}onChange={onChange} />
          )
        }
    }
    return (
        <Component>
            <Label for={id}>{label}</Label>
           {filedType()}
        </Component>
    )
}
export default Input;