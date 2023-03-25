import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../Api/authentication'
import "../Pages/Navbar.css"

function Navbar() {

  let navigate=useNavigate();

  const handleLogout=()=>{


    logout().then((res)=>{

      if(res.success)
      {
        localStorage.clear();
        alert("successfully Logout");
        navigate("/");
      }

    })


  }


  return (
    <div>
           
       <Box className="Navbar">
             
             <Text color="white" fontWeight="700" fontSize="20px">Task Planner App</Text>
              
            <Button onClick={handleLogout} >Logout</Button>


       </Box>

      
      
    </div>
  )
}

export default Navbar