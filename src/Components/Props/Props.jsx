

// let A = (props)=>{
//     return <h1>helllo {props.himu}</h1>;
// };

let Harsh = (props)=>{
    return(
        <>
            <h3>NickName: {props.detils.nickname}</h3>
            <h3>Date of birth: {props.detils.dob}</h3>
            <h3>harsh first love: {props.detils.love.love1}</h3>
            <h3>harsh second love: {props.detils.love.love2}</h3>
        </>
    );
};




let header =()=>{

    let harshInfo = {nickname: "harshu", dob:"1-july", love:{love1:"preety", love2: "tanu"}};
    return(
        <>
        
        <h1>harsh Detail</h1>
        <Harsh detils={harshInfo}/>

        </>
    );
};

export default header;