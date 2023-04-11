import React,{useState} from "react";
import "./multipleInputs.css";

const MultipleInputs = () => {

    const [userRegistration, setUserRegistration] = useState({
        username: "",
        email: "",
        message: ""
    });

    const [records, setRecords] = useState([]);

    const handleInput = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            console.log(name, value);

            setUserRegistration({... userRegistration, [name] : value});

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = { ... userRegistration, id:new Data().getTime().toString() }
        console.log(records);
        setRecords([ ...records, newRecord]);
        console.log(records);

        // setUserRegistration({ username:"", email:"", message:"" });
    }
    return (
        <>
         <from style={{display: "flex", flexDirection: "column", width: "24rem", gap: "2rem",}} action="" onSubmit={handleSubmit}>

            <h1>FORM</h1>

            <div>
                <label htmlFor="username"></label>
                <input type="text" autoComplete="off" 
                value={userRegistration.username}
                onChange={handleInput}
                name="username" id="username" placeholder="Name"></input>
            </div>

            <div>
                <label htmlFor="email"></label>
                <input type="email" autoComplete="off" 
                value={userRegistration.email}
                onChange={handleInput}
                name="email" id="email" placeholder="Email Id"></input>
            </div>

            <div>
                <label htmlFor="message"></label>
                <textarea type="text" autoComplete="off" 
                value={userRegistration.message}
                onChange={handleInput}
                name="message" id="message" placeholder="Your Message..."></textarea>
            </div>

            <button type="submit">Submit</button>

         </from>  

          {/* <div>
            {
                records.map((curElem) => {
                    return (
                        <div className="showDataStyle" key={curElem.id}>
                        <p>{curElem.username}</p>
                        <p>{curElem.email}</p>
                        <p>{curElem.message}</p>
                        </div>
                    )
                })
            } 
          </div> */}
          
        </>
    )
}

export default MultipleInputs 