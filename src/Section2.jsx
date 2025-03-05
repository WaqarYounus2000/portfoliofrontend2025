import "./Section2.css"
import { FaHtml5, FaReact, FaCss3Alt, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import { BiLogoRedux } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";

import { SiExpress, SiMaterialformkdocs, SiAxios, SiReactquery } from "react-icons/si";

import SchoolIcon from '@mui/icons-material/School';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import InfoIcon from '@mui/icons-material/Info';
import { useQuery } from '@tanstack/react-query';
import { GetDataByAxios } from "./axios/axiosConfig"


const techSkillsIcons = {
    HTML5: < FaHtml5 className='techIcons' />,
    CSS3: < FaCss3Alt className='techIcons' />,
    Bootstrap: < FaBootstrap className='techIcons' />,
    ReactJs: < FaReact className='techIcons' />,
    MaterialUI: < SiMaterialformkdocs className='techIcons' />,
    Axios: < SiAxios className='techIcons' />,
    GraphQL: < GrGraphQl className='techIcons' />,
    Redux: < BiLogoRedux className='techIcons' />,
    NextJs: < RiNextjsFill className='techIcons' />,
    ReactQuery: < SiReactquery className='techIcons' />,

    MongoDb: < DiMongodb className='techIcons' />,
    Firebase: < IoLogoFirebase className='techIcons' />,


    ExpressJs: < SiExpress className='techIcons' />,
    NodeJs: < FaNodeJs className='techIcons' />,
}

function Section2() {


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
    const education_data = resumedata?.education



    const skills_data = resumedata?.skills

    const frontendSkill = skills_data?.frontend
    const backendSkill = skills_data?.backend
    const databaseskill = skills_data?.database

    const otherSkill = skills_data?.others






    return (
        <>
            <div className="MainDivforBack">


                <div className="watermark0"></div>


                <div className="AboutMeDiv"><h2 className=" aboutmeheading">About</h2></div>
                {(
                    <div className="AboutIntro">
                        <div className="aboutinto_div1">
                            <div><h3 className="UnderlineClass IntroHeading "><span className="HeadingIcons"><InfoIcon /></span>My Introduction</h3></div>
                            <p style={{ fontWeight: 600 }}>I'm {p_info?.name}, {p_info?.tagline}</p>
                            <p>{p_info?.description_1}</p>
                            <p>{p_info?.description_2}</p>
                        </div>
                    </div>
                )}
                <section className="section2">
                    <div></div>
                    <div className="section2_div2">




                        <div className="OuterDiv_1">
                            <div>
                                <div><h3 className="IntroHeading "> <span className="HeadingIcons"><SchoolIcon /></span> My Education</h3></div>
                            </div>

                            <div className="innnerDiv_1">
                                {
                                    education_data?.map((D, i) => {
                                        return (
                                            <div key={i} className="educationDiv_1 educationCard">
                                                <div className="educationDiv-info">
                                                    <h6 className="start-end-Date">{D.year}</h6>
                                                    <h4 className="Programme">{D.level}</h4>
                                                    <h4 className="DegreeName">{D.degree}</h4>
                                                    <h6 className="Institute">{D.institute}</h6>
                                                    <h6 className="Institute">{D.location}</h6>
                                                </div>
                                            </div>

                                        )
                                    })
                                }


                            </div>

                        </div>






                        <div className="innnerDiv_2">
                            <div><h3 className="IntroHeading "> <span className="HeadingIcons"><MilitaryTechIcon /></span> Tech Skills</h3></div>
                            <div className="skills_Div">
                                <div className="testDiv">
                                    <span className="headings_of_Skills"><h5 className="UnderlineEffect">FrontEnd</h5></span>
                                    <div className="TableDiv">

                                        {
                                            frontendSkill?.map((e, i) => {

                                                const iconComp = techSkillsIcons[e]
                                                return <div key={i} className="minicard">{e} {iconComp} </div>

                                            })
                                        }


                                    </div>
                                </div>
                                <div className="testDiv">
                                    <span className="headings_of_Skills"><h5 className="UnderlineEffect">BackEnd</h5></span>
                                    <div className="TableDiv">

                                        {
                                            backendSkill?.map((e, i) => {

                                                const iconComp = techSkillsIcons[e]
                                                return <div key={i} className="minicard">{e} {iconComp} </div>

                                            })
                                        }

                                    </div>

                                </div>
                                <div className="testDiv">
                                    <span className="headings_of_Skills"><h5 className="UnderlineEffect">DataBase</h5></span>
                                    <div className="TableDiv">

                                        {
                                            databaseskill?.map((e, i) => {

                                                const iconComp = techSkillsIcons[e]
                                                return <div key={i} className="minicard">{e} {iconComp} </div>

                                            })
                                        }
                                    </div>

                                </div>
                                <div className="testDiv">
                                    <span className="headings_of_Skills"><h5 className="UnderlineEffect">Others</h5></span>
                                    <div className="TableDiv">

                                        {
                                            otherSkill?.map((e, i) => {

                                                const iconComp = techSkillsIcons[e]
                                                return <div key={i} className="minicard">{e} {iconComp} </div>

                                            })
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </section>




            </div>

        </>
    )

}

export { Section2 } 