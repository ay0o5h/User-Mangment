import React, { Component } from 'react'
import styled from 'styled-components/macro'
import Section from './section'
import Input from './input'
import Select from './select'
import CheckBox from './checkbox'
const Wrapper = styled.div`
background-color: #fff;
 border-radius: .375rem;
 box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
 min-width: 600px;
`
const Header = styled.div`
border-bottom :1px solid #e2e8f0;
padding:1rem 2rem;
`
const Title = styled.h3`
margin:0;
font-weight:300;
`
const Content = styled.div`
padding:1rem 2rem;
`
const Footer = styled.div`
padding:1rem 2rem;
display:flex;
justify-content: flex-end;
`
const Button = styled.button`
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
border:${props => props.primary ? '#68d3f1' : '#e2e8f0'};
background-color:${props => props.primary ? '#68d3f1' : '#fff'};
color:${props => props.primary ? '#fff' : '#000'};
padding :.5rem 2rem;
border-radius: .375rem;
&:focus {
    outline :0;
}
&:hover {
    cursor: pointer;
}
&:nth-child(2){
    margin-left:1rem;
}
`

class Form extends Component {
    state= {
        username:'',
        firstName:'',
        lastName:'',
        email:'',
        bio:'',
        country:'',
        notification : [
            {
                label:'newslater',
                value:'newslater',
                checked:false
            },
            {
                label:'update',
                value:'update',
                checked:false
            },
            {
                label:'report',
                value:'report',
                checked:false
            }
        ]
    }
    handleChane = (e) => {
        this.setState({
           [e.target.id]:e.target.value,
            // firstName:e.target.value,
            // lastName:e.target.value
        })
    }
    handleCheck = (name) => (e) => {
        const notification =[...this.state.notification]
        const newnotification=notification.filter(item =>
            item.value === name)[0]
            notification.checked = !notification.checked
            this.setState({
                notification:newnotification
            })

    }
    handlForm = () => {
        this.props.onFormSubmit(this.state)
        this.setState({
            username:'',
        firstName:'',
        lastName:'',
        email:'',
        bio:'',
        country:'',
        notification : [
            {
                label:'newslater',
                value:'newslater',
                checked:false
            },
            {
                label:'update',
                value:'update',
                checked:false
            },
            {
                label:'report',
                value:'report',
                checked:false
            }
        ]

        })
    }
    render(){
       const {username,firstName,lastName,email,bio,country,notification}=this.state
        return (
            <Wrapper>
                <Header>
                    <Title>add user</Title>
                </Header>
                <Content>
                   <Section title="profile" decrption="information about user">
                       <Input
                        label="username" 
                        value={username} 
                        id="username"
                        onChange={this.handleChane} />
                        <Input
                        label="bio" 
                        value={bio} 
                        id="bio"
                        type="textarea"
                        onChange={this.handleChane} />
                   </Section>
                   <Section title="information" decrption="addional information about user">
                   <Input
                        label="firstName" 
                        value={firstName} 
                        id="firstName"
                        onChange={this.handleChane} />
                     <Input
                        label="lastName" 
                        value={lastName} 
                        id="lastName"
                        onChange={this.handleChane} />
                        <Input
                        label="email" 
                        value={email} 
                        id="email"
                        type="email"
                        onChange={this.handleChane} />
                      <Select
                      label="country" 
                      value={country} 
                      id="country"
                      onChange={this.handleChane} 
                      />
                   </Section>
                   <Section title="notification" decrption="please define how you want resev messages">
                    <CheckBox 
                    label="email"
                    name='notification'
                    values={notification}
                    onChange={this.handleCheck}
                    id='email'
                    />
                   </Section>
                </Content>
                <Footer>
                    <Button>cancel</Button>
                    <Button primary onClick={this.handlForm} >add</Button>
                </Footer>
            </Wrapper>
        )
    }
}
export default Form