import Reac from 'react'
import styled from 'styled-components/macro'

const Component=styled.div`
background-color: #fff;
 border-radius: .375rem;
 box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
 padding:1rem 2rem;
`
const Item=styled.p`
margin:0 ;
min-width:6rem;

`
const Header=styled.h4`
border-bottom :1px solid #e2e8f0;
padding-bottom:.25rem;
text-align:center;
margin : 0 0 1rem 0;

`
const Feild=styled.div`
display:flex;

&:not(:last-of-type){
    margin-bottom:.5rem;
}

`
const Text=styled.p`
margin:0 ;


`

const Users = ({firstName,lastName,email,username}) => {
 
    return (
        <Component>
            <Header> {firstName} {lastName} </Header>
          <Feild>
              <Text>
                  <strong>username :</strong>
              </Text>
              <Item>{username}</Item>
          </Feild>
          <Feild>
              <Text>
                  <strong>email :</strong>
              </Text>
              <Item>{email}</Item>
          </Feild>
           
          
        </Component>
    )
}
export default Users;