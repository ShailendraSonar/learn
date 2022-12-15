import React, {useState} from "react";

function Header({saveTodo}){
    const [fName, setfName] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [Location, setLocation] = useState("");
    const [Link, setLink] = useState("");
    const [CName, setCName] = useState("");
    const [CRole, setCRole] = useState("");


    
    const handleSubmit = (e) => {
      e.preventDefault();
      saveTodo(fName,Email,Phone,Location, Link, CName, CRole);
      setfName("");
      setEmail("");
      setPhone("");
      setLocation("");
      setLink("");
      setCName("");
      setCRole("");
    };

    const abc= (e) =>{
      setCRole(e.target.value);
    } 

   

    return(
        <>
        <center>
        <form onSubmit={handleSubmit}>
          <h1 className="title" style={{ color:"red" }}>
            Shail work
          </h1>
          <div className="input">
            <input
              type="text"
              required
              placeholder="your full name"
              value={fName}
              onChange={(e) => setfName(e.target.value)}
            />
            <input
              type="text"
              required
              placeholder="your email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
             <input
              type="number"
              required
              placeholder="your phone.no"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              required
              placeholder="your Location"
              value={Location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <input
              type="text"
              required
              placeholder="your linked link"
              value={Link}
              onChange={(e) => setLink(e.target.value)}
            />
            <br/>

            <div>
              <h4>Work Experience</h4>
              <input
              type="text"
              required
              placeholder="your Company Name"
              value={CName}
              onChange={(e) => setCName(e.target.value)}
            />
            <input
              type="text"
              required
              placeholder="your Company role"
              value={CRole}
              onChange={abc}
            />
            </div>
            <button type="submit" >Submit</button>
          </div>
        </form>
        </center>
        </>
    );
};

export default Header;

