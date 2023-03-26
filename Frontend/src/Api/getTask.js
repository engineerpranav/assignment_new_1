
const Base_url="https://tiny-erin-barracuda-wrap.cyclic.app/api/"

export const getTask=async()=>{


    try{

        let res=await fetch(Base_url+"getusertask",{
            method:"GET",
            headers:{
                token:localStorage.getItem("token")
            }
        })

        let tasks=await res.json();
        

        return tasks;

    }catch(err){

        alert(err.message);
        console.log(err.message);

    }
  


}