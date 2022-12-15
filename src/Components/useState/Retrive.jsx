import { useState } from "react";
import { useEffect } from "react";

const B = ()=>{

    const [user, setUser] = useState([]);

    const fetchData = ()=>{
        fetch("https://result-77cd6-default-rtdb.firebaseio.com/result.json")
        .then((response)=>{
            console.log(response);
            return response.json();
        }).then((data)=>{
            let somoo = data.name;
            console.log(somoo);
            setUser(somoo);
        })
    }

    useEffect(()=>{
        fetchData();
    },[])

    return(
        <>
            <div><h1>{user}
                shailendra
            </h1></div>
        </>
    );
};

export default B;
