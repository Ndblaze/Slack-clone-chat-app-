import React from 'react';
import styled from 'styled-components';
import {auth, provider} from '../Firebase';

const Login = ({setUser}) => {

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            const newUser = {
                name: result.user.displayName,
                photo: result.user.photoURL
            }
            localStorage.setItem('user', JSON.stringify(newUser));
            setUser(newUser);
        }).catch((error) => {
            alert(error.message)
        })
    }

    return (
        <Container>
           <Content>
               <SlackImage src='https://tse1.mm.bing.net/th?id=OIP.tiaLgwz9eAzR1-rkiKsQdwHaEK&pid=Api&P=0&w=319&h=180' />
               <h1>Sign in Slack</h1>
               <SingInButton onClick={()=>signIn()}>
                   Sign In with Google
               </SingInButton>
           </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
     width: 100%;
     height: 100vh;
     background: #f8f8f8;
     display: flex;
     align-items: center;
     justify-content: center;
     
`

const Content = styled.div`
     background: #fff;
     padding: 100px;
     border-radius: 5px;
     box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
`

const SlackImage = styled.img`
     height: 100px;
`

const SingInButton = styled.button`
     margin-top: 50px;
     background-color: #0a8d48;
     color: #fff;
     border: none;
     height: 40px;
     border-radius: 4px;
     cursor: pointer;
     font-size: 15px;
`


