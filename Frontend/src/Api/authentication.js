const baseUrl ="https://tiny-erin-barracuda-wrap.cyclic.app/api/"


export const signup=async(input)=>{

    try{
    let res= await fetch(baseUrl+"register",{

        method:"POST",
        body:JSON.stringify(input),
        headers:{
            "Content-Type":"application/json"
        }


    });

    let data=await res.json();
     console.log(data);
    return data;
    
    }catch(err){

       console.log(err);

    }



}
export const login=async(input)=>{

    try{
    let res= await fetch(baseUrl+"login",{

        method:"POST",
        body:JSON.stringify(input),
        headers:{
            "Content-Type":"application/json"
        }

    });

    let data=await res.json();

    return data;
    
    }catch(err){

       console.log(err);

    }



}
export const logout=async()=>{

    try{
    let res= await fetch(baseUrl+"logout",{

        method:"GET",
    
    });

    let data=await res.json();

    return data;
    
    }catch(err){

       console.log(err);

    }



}