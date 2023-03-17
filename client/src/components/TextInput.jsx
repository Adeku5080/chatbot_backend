import React from 'react'
import styled from 'styled-components'

const TextInput = () => {
  return (
    <Container>
        <input type='text' placeholder="Type your response here"/>
    </Container>
  )
}

const Container = styled.div`
position:absolute;
bottom:10px;

// border:1px solid black;
width :50vw;
height:50px;
margin:0 auto;

input{
    border:1px solid red;
    width:100%;
    height:100%;
    border-radius:12px;
    margin:0 auto;
}
`

export default TextInput