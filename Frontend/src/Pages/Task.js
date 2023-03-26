import { Box, Button, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getTask } from '../Api/getTask';
import { getUsers } from '../Api/getusers';
import { InitialFocus } from '../Components/Pages.js/Modal';
 
import "../Pages/Task.css"
import Navbar from './Navbar';

function Task() {

    const [mytask, setmyTask] = useState([]);

    const [users, setUsers] = useState([]);


    useEffect(() => {

        getTask().then((res) => {
            console.log(res.tasks)
            setmyTask(res.tasks);
        })
        getUsers().then((res)=>{
            
            setUsers(res.users);
        })

    }, [])

    console.log(mytask);



    return (


        <Box >

            <Navbar />

            <Box className='All_Tasks'>


                <Box>

                    <Text fontWeight="700">My Assigned Tasks</Text>

                    <Box>
                       
                     { mytask.map((ele)=>{
                        return <Box display="flex" color="black" border="2px solid black" flexDirection="column"><h1>Title:{ele.title}</h1><h1>Status:{ele.status}</h1><h1>Type:{ele.type}</h1><h1>Sprint:{ele.sprint}</h1></Box>
                      })}

                    </Box>

                </Box>

                <Box>

                    <Text fontWeight="700">Assign Task to other people</Text>

                    <Box>
                       
                       { users.map((ele)=>{
                          return <Box display="flex" gap="10" marginTop="15px" fontSize="20px" fontWeight="600" ><h1>{ele.name}</h1><InitialFocus id={ele._id} /></Box>
                        })}
  
                      </Box>

                </Box>

            </Box>






        </Box>
    )
}

export default Task