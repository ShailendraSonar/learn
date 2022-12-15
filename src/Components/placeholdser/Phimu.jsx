import React, {useState} from "react";

let H = ()=>{

    const [value, setValue] = useState("noChange");
    const [newVal, setNewVal ] = useState("noChninVal")

    
    const a = ()=>{
            setValue("Himu chutiya");
            setNewVal("ab naya change")
    }
    return(


        <>
           <div>
            <label>
                himu:
                <input type="text" name="name" placeholder={value} />
                <input type="text" name="name" placeholder={newVal} />
            </label>
            <button onClick={a}>Change</button>
        </div>
        </>
    );
};

export default H;