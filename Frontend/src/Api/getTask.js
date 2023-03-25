
const Base_url="http://localhost:3001/api/"

export const getTask=async()=>{


    try{

        let res=await fetch(Base_url+"getusertask",{
            method:"GET"
        })

        let tasks=await res.json();

        return tasks;

    }catch(err){

        alert(err.message);
        console.log(err.message);

    }
  


}