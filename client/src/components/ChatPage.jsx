import React,{useState} from 'react'
import styled from "styled-components"
import axios from "axios"


const ChatPage = () => {
  const[menuItems ,setMenuItems] = useState([])
  const [textInput,setTextInput]=useState('')
  const [orderStatus,setOrderStatus] = useState("")

   const handleSubmit = async (e)=>{
    
     e.preventDefault()

    //   const {data:{menuItems}}   = await axios.post("http://localhost:8080/api/v1/chatbot",{
    //   action: textInput
    // })
    // // console.group(res, "MOhammed")
    // setMenuItems(menuItems)
    if(textInput === "1"){
          const {data:{menuItems}}   = await axios.post("http://localhost:8080/api/v1/chatbot",{
      action: textInput
    })
    setMenuItems(menuItems)
    } else if (textInput === "99"){
           const {data}   = await axios.post("http://localhost:8080/api/v1/chatbot",{
      action: textInput
    })
     data.orders.length === 0 ? setOrderStatus("no order to place") : setOrderStatus("order placed")
    // console.log(res,"Ali")
    }


  }



  const handleChange = (e)=>{
    setTextInput(e.target.value)
    // console.log(N(text,"adeku")
  }
  return (
    <Container>
      <div>Welcome,how may I serve you?</div>

     <div>
    <p>a. select 1 to place an order</p> 
     <p>b. select 99 to checkout order</p>
     <p>c. select 98 to see order history</p>
     <p>d. select 97 to see current order</p>
     <p>e. select 0 to cancel order</p>

     </div>

     <ResponseContainer>
      {
        menuItems.map((menuItem)=>(
        <div>
        select {menuItem.code} to order {menuItem.name}
        </div>))
      } 

          <OrderStatus>      {orderStatus}
</OrderStatus>
  
     </ResponseContainer>



       <InputContainer>
        <input type='number' placeholder="Type your response here" value={textInput} onChange={handleChange}/>
        <button onClick={handleSubmit}>send</button>
    </InputContainer>
    </Container>
  )
}


const Container = styled.div`
border:1px solid blue;
width: 60vw;
margin:0 auto;
height:calc(100vh - 80px)
`

const ResponseContainer=styled.div`

  // border:1px solid red;
  width:30vw;
  position:absolute;
  right:100px;
`
const OrderStatus = styled.div`
// border:1px solid red;
margin:20px 0;
`
const InputContainer = styled.div`
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

export default ChatPage