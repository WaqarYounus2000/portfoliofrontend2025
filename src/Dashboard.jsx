import { GetDataByAxios, postDataByAxios } from './axios/axiosConfig';

import "./dashboard.css"


import { MyContext } from './MyContext';
import { faUser } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { Loader } from "./Loader"

import { useContext } from "react";
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";

import SideDrawerDashboard from "./SideDrawerDashboard";
import { useQuery } from '@tanstack/react-query';



function Dashboard() {
    const { sharedData } = useContext(MyContext);
    const navigate = useNavigate()




    const fetchData = async () => {
        try {
            const response = await GetDataByAxios(`${import.meta.env.VITE_APP_BACKEND_API}/messages`);
            return response?.data.messages; // Directly return the data
        } catch (error) {
            console.error('Error fetching messages:', error);
            throw error;
        }
    };


    const { data: messData, isLoading, isError } = useQuery({
        queryKey: ['mymessdata'],
        queryFn: fetchData,
    });




    const Handle_Delete_Document = async (_id) => {
        console.log(_id)

    }



    const HandlerLogOut = async () => {
        try {
            const response = await postDataByAxios(`${import.meta.env.VITE_APP_BACKEND_API}/user/logout`, {})
            console.log(response)


            if (response?.status === 200) {
                navigate('/login')

            }

        } catch (error) {
            alert(error)
        }

    }






    return (
        <>
            <div className="div_1_title">
                <h1>This is The Dashboard: {sharedData}</h1>
                <Button variant="contained" size="medium" endIcon={<FontAwesomeIcon icon={faUser} size="sm" />} onClick={HandlerLogOut}>Logout</Button>

            </div>

            <div className="Navigation_Buttons_div">
                <SideDrawerDashboard />  {/* this is side menu */}
            </div>
            <section className="tableSectionData">

                {
                    <table >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Dates</th>
                            </tr>
                        </thead>



                        <tbody>



                            {

                                isLoading ? <tr className="TR">
                                    <td colSpan="3" >

                                        <Loader />
                                    </td>

                                </tr>

                                    : messData.map((e, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{e?.name}</td>
                                                <td>{e?.email}</td>
                                                <td className="MssgBody">{e.message}</td>
                                                <td>{e?.createdAt}</td>
                                                <td><button className="DeleteButton" onClick={() => { Handle_Delete_Document(e?._id) }}><FontAwesomeIcon icon={faTrash} /></button></td>
                                            </tr>
                                        )
                                    })






                            }
                        </tbody>
                    </table>
                }
            </section>
            <section className="sectionforNavigation">
                <Outlet />
            </section>


        </>
    )
}

export { Dashboard }