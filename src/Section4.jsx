import "./Section4.css"
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { useQuery } from '@tanstack/react-query';
import { GetDataByAxios, postDataByAxios } from "./axios/axiosConfig"





function Section4() {

    const fetchData = async () => {
        try {
            const response = await GetDataByAxios(`${import.meta.env.VITE_APP_BACKEND_API}/resume/personalInfo`)

            return response?.data
        } catch (error) {
            console.log(error)
        }

    }

    const { data: contactInfo, isLoading, isError } = useQuery({
        queryKey: ['mycontactInfo'],
        queryFn: fetchData,
    });


    const getInTouch_info = contactInfo?.personalInfo?.getInTouch



    const [user, setuser] = useState({ name: "", email: "", message: "" });
    const navigate = useNavigate();
    const HandleNavSignIn = () => {
        navigate("/login")
    }


    let name, value;
    const InputEvent = (event) => {
        name = event.target.name;
        value = event.target.value;
        setuser({ ...user, [name]: value })
    }
    const SubmitData = async (e) => {

        e.preventDefault();
        const { name, email, message } = user;
        if (name == "" || email == "" || message == "") {
            alert("Fill Out all the Fields")
        }
        else {

            try {
                const response = await postDataByAxios(`${import.meta.env.VITE_APP_BACKEND_API}/message`, user)
                alert(response.data.message)
                if (response) {
                    setuser({
                        name: "",
                        email: "",
                        message: "",
                    })

                }

            } catch (error) {
                alert(error)
            }


        }

    }

    return (

        <>
            <section className="section__4">
                <div className="watermark4"></div>
                <div className="section_4_title_div">
                    <div className="Section_title"><h2 className="section4_heading">Get in Touch</h2> </div>

                    <p className="section4Paragraph ">I'm here to help you out and answer any question you might have...</p>
                </div>
                <section className="section4_innersection_1">
                    <div className="section4_innersection_1_div1">
                        <div className="card card1">
                            <div className="cardDetailsdiv"><h1 className="FIndmetitle">Find me</h1></div>
                            <div className="cardDetailsdiv"><span className="CardsIcon"><FontAwesomeIcon icon={faEnvelope} size="sm" /></span><a className="anchoremailtag" href={`mailto:${getInTouch_info?.primaryGmail} `}>Email:{getInTouch_info?.primaryGmail}</a></div>
                            <div className="cardDetailsdiv"><h4><span className="CardsIcon"><FontAwesomeIcon icon={faPhone} size="sm" /></span>{getInTouch_info?.primaryPhone}</h4></div>
                        </div>
                        <form method="POST">
                            <div className="card2 ">
                                <div className="card_innerdiv1">
                                    <input className="Inputfields" autoComplete="off" required value={user.name} name="name" onChange={InputEvent} type="text" placeholder="Name" />
                                    <input className="Inputfields" autoComplete="off" required value={user.email} name="email" onChange={InputEvent} type="email" placeholder="Email" />
                                </div>
                                <div className="card2_innercard1">
                                    <textarea className="Textarea" name="message" value={user.message} required onChange={InputEvent} placeholder="Message" id="" cols="30" rows="11"></textarea>
                                </div>
                                <div className="innersection_div_1">
                                    <button className="buttonSend" onClick={SubmitData}>Send</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </section>


            </section>


            <footer className="footer">
                <button onClick={HandleNavSignIn} className="userbutton">
                    <FontAwesomeIcon icon={faUserPlus} />
                </button>
            </footer>



        </>
    )


}

export { Section4 } 