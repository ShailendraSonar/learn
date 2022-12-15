import { useState } from "react";
import { useEffect } from "react";
import Axios from 'axios'

const C = ()=>{

   const [comment, setComment] = useState([])

    useEffect(()=>{
        fetchComment();
    },[])

    useEffect(()=>{
        console.log(comment);
    }, [comment])

    const fetchComment = async ()=>{
        const response = await Axios("https://result-77cd6-default-rtdb.firebaseio.com/result.json");
        setComment(response.data);
        console.log(response.data);
    }

    return(
        <>
           <div>
            <h1>{comment.id.name}</h1>
           </div>
        </>
    );
};



export default C;
