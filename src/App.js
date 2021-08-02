import React,{Component} from 'react'
import styled from 'styled-components/macro'
import Form from './component/form'
import Users from './component/users'
const Components = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
min-height: 100vh;
background-color: #fafafa;
padding: 1rem;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width:100%;
max-width:800px;
`
const UserList = styled.div`
display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  width: 100%;
  margin-top: 1rem;
`
class  App extends Component {
  state={
    users :[
      {
        username:'ay0o5h',
        firstName:'aya',
        lastName:'munadhil',
        email:'aayosh553@gmail.com'
      },
      {
        username:'ay0o5h1',
        firstName:'aya11',
        lastName:'munadhil22',
        email:'aayosh22e3553@gmail.com'
      },
      {
        username:'ay0o5h11',
        firstName:'aya222',
        lastName:'munadhil22',
        email:'aayosh55ewe3@gmail.com'
      }
    ]
  }
  handelSubmit = (formuses) => {
    this.setState({
      users :[formuses,...this.state.users]
    })
  }
  render(){
    return (
    
      <Components>
        <Wrapper>
          <Form onFormSubmit={this.handelSubmit}/>
          <UserList>
          {this.state.users.map(user => {
            return (
              <Users 
              key={user.username} 
              firstName={user.firstName}
              lastName={user.lastName} 
              email={user.email}
              username={user.username}
               />
            )
          })}
          </UserList>
        </Wrapper>
      </Components>
     );
  }
}

export default App;
