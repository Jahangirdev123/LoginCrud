import { Button, FormControl, FormGroup, Input, InputLabel, styled, Typography } from '@mui/material'
import React ,{useState}from 'react'
import {addUser} from "../components/service/api.jsx"
import { useNavigate } from 'react-router-dom'

const Container=styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
& > div {
margin-top:20px
}

`
const intialValues={
  name:'',
  username:'',
  email:'',
  phone:'',
}




function AddUser() {
  const [user,setUser]=useState(intialValues)
  const navigate=useNavigate()
  
  const onValueChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
    console.log(e.target.value)
  
  
  }




 const AddUserDetails= async()=>{
 await addUser(user)
navigate("/")
 }

return (
<>
<Container>
<FormControl>
    <Typography variant="h4">Add User</Typography><br/>
    <FormControl>
        <InputLabel>
        Name
        </InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="name"/>
      </FormControl>
      <FormControl>
        <InputLabel>
        User Name
        </InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="username"/>
      </FormControl>
      <FormControl>
        <InputLabel>
        Email
        </InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="email"/>
      </FormControl>
      <FormControl>
        <InputLabel>
        Phone
        </InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="phone"/>
      </FormControl>
</FormControl>
<FormControl>
  <Button variant='contained' onClick={AddUserDetails} >Add User</Button>
</FormControl>

</Container>



</>


  )
}

export default AddUser