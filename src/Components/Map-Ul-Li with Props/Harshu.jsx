
let Ulli = (props)=>{
    return(
        <>
            <li key={props.id}>{props.details}</li>
        </>
    );
};

let styleTheH1 = {
    color : "red"
};

let ul = ()=>{

    let one = ["Resume 2 Hire","HomePage", "Cover letter"];

   
    return(
        <>

        <h1 style={styleTheH1}>harshuuuu</h1>
            <div >
                <ul>
                    {one.map((data)=><Ulli details={data} key={data.id}/>)}
                </ul>
            </div>

            
        
        </>
    );

};

export default ul;