import React from 'react'
import styled from 'styled-components/macro'

const Component=styled.div`
&:(:last-of-type){
    margin-bottom:2rem;
}
`
const Title=styled.h4`
margin:0 0 0.5rem 0;

`
const Decrption=styled.p`
margin:0 ;
padding-bottom:.5rem;
border-bottom:1px solid #e2e8f0;

`
const Section =({title,decrption,children}) => {
    return (
        <Component>
            <Title>{title}</Title>
            <Decrption> {decrption} </Decrption>
           {children}
        </Component>
    )
}
export default Section;