import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import "../Pages/Home.css"
import Login from './Login'
import SignIn from './SignIn'
function Home() {

    let value=useSelector((storeData)=>storeData.login_signup_handler);

    return (
        <Box className="parent">

            <Box className='facebook_image_with_form'>
                 
                 <Box className='image_content'>
                 <Box w="65%" margin="auto"><Text fontSize="40px" color="blue" fontWeight="800">Task Planner</Text></Box>
                 <Text fontWeight="700" fontSize="20px" w="75%" margin="auto" marginTop="10px"  >Task Planner will help you to assign or schedule a task to other people very easily.</Text>
                 </Box>
               

                <Box className="parent_form">

                  {value ?<Login/>:  <SignIn/>}
                  
                </Box>  


             </Box>



        </Box>
    )
}

export default Home