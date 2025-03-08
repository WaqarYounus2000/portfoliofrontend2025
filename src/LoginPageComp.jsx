import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { Loader } from "./Loader"
import titleiamge from "./images/favicon.png"
import { MyContext } from './MyContext'
import Button from '@mui/material/Button';
import "./loginpageCss.css"

import TextField from '@mui/material/TextField';
import { postDataByAxios } from "./axios/axiosConfig";



function LoginPageComp() {

    const { sharedData, setSharedData } = useContext(MyContext);
    const [uCredential, setCredential] = useState({ email: "", password: "" });
    const [isLoaded, SetIsLoaded] = useState(false)
    const navigate = useNavigate();


    let name, value;
    const valueGettingfrominput = (event) => {
        name = event.target.name;
        value = event.target.value;
        setCredential({ ...uCredential, [name]: value })
        // console.log(Exp)

        // console.log(value)

    }


    // let email
    // let pass




    const handlerSubmission = async (e) => {
        let email = uCredential.email
        let NAME = email.split("@");  // it returns the array of splited strings,can be accessed by index
        let pass = uCredential.password;
        try {
            e.preventDefault();
            SetIsLoaded(true)
            const response = await postDataByAxios(`${import.meta.env.VITE_APP_BACKEND_API}/user/login`, uCredential)
            alert(response.data.message)

            SetIsLoaded(false)

            if (response?.status === 200) {
                navigate('/dashboard')
                return

            }

        } catch (error) {
            SetIsLoaded(false)
            alert(error)
        }
        setSharedData(email + " " + pass)





    }


    return (
        <section className="loginSection">
            <div className="Card">
                <div className="InsideCard_1">

                    <h4 className="div_heading">{<img className="imageTitle" src={titleiamge} />}</h4>
                </div>
                <div className="InsideCard_2">
                    <div className="EmailDiv">
                        <label className="labels" htmlFor="">Email:</label>
                        <TextField required fullWidth size="small"  onChange={valueGettingfrominput} id="outlined-basic" label="Type Email" value={uCredential.email} variant="outlined" type="email" name="email" />
                    </div>

                    <div className="PasswordDiv">
                        <label className="labels" htmlFor="">Password:</label>
                        <TextField required fullWidth size="small" onChange={valueGettingfrominput} id="outlined-basic" label="Type Password" value={uCredential.password} variant="outlined" type="password" name="password" />
                    </div>
                    <div className="ButtonDiv">
                        <br />
                    </div>
                    <Button variant="outlined"  className={isLoaded ? "loginButton" : "loginButtonwithborder"} onClick={handlerSubmission}>{isLoaded ? <Loader className="LoaderSignIn" /> : "Login"}</Button>
                </div>
            </div>


            {/* this is the component */}
            {/* this is the component */}


        </section>
    )

}

export { LoginPageComp }