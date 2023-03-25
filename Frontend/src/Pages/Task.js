import { Box, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getTask } from '../Api/getTask';
import { getUsers } from '../Api/getusers';
import "../Pages/Task.css"
import Navbar from './Navbar';

function Task() {

    const [mytask, setmyTask] = useState([]);

    const [users, setUsers] = useState([]);


    useEffect(() => {

        getTask().then((res) => {
            setmyTask(res.tasks);
        })
        getUsers().then((res)=>{
            setUsers(res.users);
        })

    }, [])



    return (


        <Box >

            <Navbar />

            <Box className='All_Tasks'>


                <Box>

                    <Text fontWeight="700">My Assigned Tasks</Text>

                    <Box>
                       
                     { mytask.map((ele)=>{
                        return <h1>{ele.title}</h1>
                      })}

                    </Box>

                </Box>

                <Box>

                    <Text fontWeight="700">Assign Task to other people</Text>

                    <Box>
                       
                       { users.map((ele)=>{
                          return <h1>{ele.name}</h1>
                        })}
  
                      </Box>

                </Box>

            </Box>






        </Box>
    )
}

export default Task