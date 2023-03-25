import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Api/authentication';
import { login_and_signup_state_Action, myAction } from '../Redux/action';
import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';


function Login() {

  const dispatch = useDispatch();
  let navigate=useNavigate();


  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleLogin = (event) => {

    event.preventDefault();

    login(formData).then((res) => {

      if (res.token) {
        localStorage.setItem("token",res.token);
        alert("successfully login");
        navigate("/task")
      }
      else {
        console.log(res.message);
        alert(res.message)
      }


    })


  }


  return (
    <div>

      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type='email' placeholder='Please Enter Email address'  onChange={(event)=>{

           setFormData({...formData,email:event.target.value});

        }}/>
        <FormLabel>Password</FormLabel>
        <Input type='password' placeholder='Please Enter your password' onChange={(event)=>{

           setFormData({...formData,password:event.target.value});

        }} />
        <Button onClick={handleLogin} fontSize="20" colorScheme="#1877f2" marginTop={5} p='6' fontWeight="600" w="100%" bg="#1877f2">Log in</Button>

        <Text p="5">Forgot Password ?</Text>

        <hr />

        <Button m="5" p="5" colorScheme=" #42b72a" bg="#42b72a" onClick={()=>{

           login_and_signup_state_Action(false,dispatch);

        }} >Create new account</Button>


      </FormControl>


    </div>
  )
}

export default Login