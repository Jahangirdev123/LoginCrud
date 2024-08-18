import { Button, FormControl, FormGroup, Input, InputLabel, styled, Typography } from '@mui/material'
import React ,{useState,useEffect}from 'react'
import {addUser} from "./service/api.jsx"
import { useNavigate,useParams } from 'react-router-dom'
import { showUser,editUser } from './service/api.jsx'

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




function Edit() {
  const [user,setUser]=useState(intialValues)
  const navigate=useNavigate()
  const {id}=useParams()
  const onValueChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  
  }

useEffect(()=>{
  getUserData()
},[])

const getUserData=async()=>{
  let response=await showUser(id)
  console.log(response.data)
  setUser(response.data)
}

 const EditUserDetails= async()=>{
 await editUser(user,id)
navigate("/")
 }

return (
<>
<Container>
<FormControl>
    <Typography variant="h4">Edit User</Typography><br/>
    <FormControl>
        <InputLabel>
        Name
        </InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="name" value={user.name}/>
      </FormControl>
      <FormControl>
        <InputLabel>
        User Name
        </InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="username" value={user.username}/>
      </FormControl>
      <FormControl>
        <InputLabel>
        Email
        </InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="email" value={user.email}/>
      </FormControl>
      <FormControl>
        <InputLabel>
        Phone
        </InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="phone" value={user.phone}/>
      </FormControl>
</FormControl>
<FormControl>
  <Button variant='contained' onClick={EditUserDetails} >Edit User</Button>
</FormControl>

</Container>



</>


  )
}

export default Edit