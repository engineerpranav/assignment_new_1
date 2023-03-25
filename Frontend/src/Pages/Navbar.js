import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "../Pages/Navbar.css"

function Navbar() {
  return (
    <div>
           
       <Box className="Navbar">
             
             <Text color="white" fontWeight="700" fontSize="20px">Task Planner App</Text>
              
            <Button>Logout</Button>


       </Box>

      
      
    </div>
  )
}

export default Navbar