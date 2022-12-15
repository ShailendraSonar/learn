import { useState } from "react";

const A = () => {

    let [user, setUser] = useState({
        name:"",
    });

    let name, value;
    const getUserData  = (event)=>{
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]:value })
    }

    const postData = async (e)=>{
        e.preventDefault();

        const {name} = user;

        if(name){
            const res =await fetch("https://result-77cd6-default-rtdb.firebaseio.com/result.json",
       {
        method: "POST",
        headers:{
            "Content-Type" : "application/json",
        },
        body:JSON.stringify({
            name
        })
       });

       if(res){
        setUser({
            name:""
        });
        alert("data send")
       }
        }
        else{
                alert("fill first");
        };

      
       
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert(`The name you entered was: `);
    //   };

    return (

        <>
            <div>
                <form  method="POST">
                    <label>Enter your name:
                        <input
                            type="text"
                            name="name"
                            value={user.name}
                            onChange={getUserData}
                        />
                    </label>
                    <input type="submit" onClick={postData}/>
                </form>
            </div>
        </>
    );

};

export default A;
