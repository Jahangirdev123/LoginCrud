import { Table,TableHead,TableBody,TableRow,TableCell, styled, Button } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { getUsers,deleteUser } from './service/api'
import { Link,useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function AllUsers() {

const [users,setUsers]=useState([])
  useEffect(()=>{
    getUsersDetails();
  },[])

  const getUsersDetails=async()=>{
    let response=await getUsers();
    setUsers(response.data)
  }

const StyledTable=styled(Table)`
width:90%;
margin:50px auto 0 auto;

`
const RowHeading=styled(TableRow)`

background:#000;
marginTop: 10px;
 &>th{
color:#fff;
font-size:20px;

}
`
const Tbody=styled(TableRow)`
&>td{
color:black;
font-size:20px


}

`
const navigate=useNavigate()
const deleteUserData=async(id)=>{
  await deleteUser(id)
  getUsersDetails()
}
return (
    <StyledTable>
      <TableHead>
        <RowHeading>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>UserName</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
       
        </RowHeading>
      </TableHead>
    <TableBody>
      {
        users.map((user,index)=>{
          return(
            <Tbody key={index}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
              </TableCell>
              <TableCell>
                <Button variant="contained" sx={{marginRight:"10px"}} onClick={()=>{deleteUserData(user.id)}}>Delete</Button>
                
                <Button variant="contained" color="secondary" component={Link} to={`/edit/${user.id}`}>Edit</Button>
                </TableCell>  
            </Tbody>
          )
        })
      }
    </TableBody>
    </StyledTable>
  )
}

export default AllUsers