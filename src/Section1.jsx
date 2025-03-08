
import "./Section1.css"

import { ExampleComponent } from "./TypeWriterEffect"
import { Socialmediaicons } from "./SocialMedia";
import { useState } from "react";

import { GetDataByAxios } from "./axios/axiosConfig"

import { useQuery } from '@tanstack/react-query';



function Section1() {



    const fetchData = async () => {
        try {
            const response = await GetDataByAxios(`${import.meta.env.VITE_APP_BACKEND_API}/resume/`)
            return response?.data
        } catch (error) {
            console.log(error)
        }

    }

    const { data: resumedata, isLoading, isError } = useQuery({
        queryKey: ['mypersonalInfo'],
        queryFn: fetchData,
    });



    const p_info = resumedata?.personalInfo
    console.log(p_info?.name)
    const social_media = resumedata?.socialmedia



    let [flag1] = useState(false);




    return (
        <>
            <div className="Div_profiles" style={{
                backgroundImage: `url(${p_info?.profileUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "start",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100vh",
                aspectRatio: "3/2"


            }}>


            </div>


            {/* div 2 starts */}

            <div className="div_2">
                <div className="Inner_Div1">
                    <div className="sideMenu"></div>
                    <div className={`MyData ${flag1 ? 'blurClass' : ''}`}>
                        <div className="greeting"><h2>Hello! 👋 My name Is </h2></div>
                        <div><h1 className="heading_h1">{p_info?.name}</h1></div>
                        <div><p className="Para_1">I'm <ExampleComponent title={p_info?.title} /></p></div>
                        <div className="socialMediaDiv"><Socialmediaicons insta={social_media?.instagram} facebook={social_media?.facebook} github={social_media?.github} linkedin={social_media?.linkedin} /></div>
                    </div>

                </div>

            </div>




        </>
    )
}

export { Section1 } 