import { Box, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getTask } from '../Api/getTask';
import "../Pages/Task.css"

function Task() {

    const [mytask,setmyTask]=useState([]);

    const [users,setUsers]=useState([]);


    useEffect(()=>{

        getTask().then((res)=>{

            console.log(res);

        })

    },[])



    return (
        <Box className='All_Tasks'>


            <Box>

                <Text fontWeight="700">My Assigned Tasks</Text>

            </Box>

            <Box>

                 <Text fontWeight="700">Assign Task to other people</Text>

            </Box>




        </Box>
    )
}

export default Task