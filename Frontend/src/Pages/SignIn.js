import React from 'react'
import { useState } from 'react'
import { signup } from '../Api/authentication';
import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login_and_signup_state_Action } from '../Redux/action';


function SignIn() {

  let navigate=useNavigate();
  let dispatch=useDispatch();

    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:""
    })



    const handleForm=(event)=>{

        event.preventDefault();
         
         signup(formData).then((res)=>{

          if(res.user){

            localStorage.setItem("token",res.token);    

            alert("signup Successfull")
            navigate("/task")


          }
          else{
            console.log(res.message);
            alert(res.message)
          }


         })
         

    }

  return (
    <div>
      

      <FormControl>
      <FormLabel>Name</FormLabel>
        <Input type='text' placeholder='Please Enter Your Name'  onChange={(event)=>{

            setFormData({...formData,name:event.target.value})

        }} />
        <FormLabel>Email address</FormLabel>
        <Input type='email' placeholder='Please Enter Email address' onChange={(event)=>{

            setFormData({...formData,email:event.target.value})

        }} />
        <FormLabel>Password</FormLabel>
        <Input type='password' placeholder='Please Enter your password' onChange={(event)=>{

            setFormData({...formData,password:event.target.value})

        }} />        


        <Button onClick={handleForm} fontSize="20" colorScheme="#1877f2" marginTop={5} p='6' fontWeight="600" w="100%" bg="#1877f2">Sign up</Button>

        <Text p="5">Forgot Password ?</Text>

        <hr />

        <Button m="5" p="5" colorScheme=" #42b72a" bg="#42b72a" onClick={()=>{

               login_and_signup_state_Action(true,dispatch);

        }} >Already an account ?</Button>


      </FormControl>

     



    </div>
  )
}

export default SignIn