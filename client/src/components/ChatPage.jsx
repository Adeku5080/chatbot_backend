import React from 'react'
import styled from "styled-components"
import TextInput from './TextInput'

const ChatPage = () => {
  return (
    <Container>ChatPage
     <TextInput/>
    </Container>
  )
}


const Container = styled.div`
border:1px solid blue;
width: 60vw;
margin:0 auto;
height:calc(100vh - 80px)
`
export default ChatPage