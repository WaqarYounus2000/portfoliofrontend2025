import "./Section3.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup, faCircleCheck, faUserGear } from '@fortawesome/free-solid-svg-icons'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { GetDataByAxios } from "./axios/axiosConfig"
import { useQuery } from '@tanstack/react-query';

function Section3() {

    const fetchData = async () => {
        try {
            const response = await GetDataByAxios(`${import.meta.env.VITE_APP_BACKEND_API}/resume/projects`)

            return response?.data
        } catch (error) {
            console.log(error)
        }

    }

    const { data: projectsData, isLoading, isError } = useQuery({
        queryKey: ['myprojectsData'],
        queryFn: fetchData,
    });


    return (
        <>
            <section className="section_3">
                <div className="section_3_div1">
                    <div className="Section_title"><h2 className="section3_heading ">Projects</h2></div>


                    <div className="projectImgeDiv">
                        <div className="watermark3"></div>

                    </div>

                    <section className="innersection_1">
                        <div className="innersection_1_div_1">
                            <div className="cardsforInfo">
                                <FontAwesomeIcon icon={faCircleCheck} size={"2xl"} />
                                <h3>Completed</h3>
                                <span>{projectsData?.projects?.length}+ Completed</span>

                            </div>
                            <div className="cardsforInfo">
                                <FontAwesomeIcon icon={faPeopleGroup} size={"2xl"} />
                                <h3>Clients</h3>
                                <span>{projectsData?.projects?.length}+ Happy Clients</span>
                            </div>
                            <div className="cardsforInfo">
                                <FontAwesomeIcon icon={faUserGear} size={"2xl"} />
                                <h3>Experience</h3>
                                <span>1 Year Field Experience</span>
                            </div>
                        </div>


                    </section>

                </div>

                <div className="ProjectDiv">

                    {projectsData?.projects?.map((e, i) => {
                        return (
                            <>


                                <Card sx={{ maxWidth: 245 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={`${e?.imageUrl}`}
                                            alt="loadingImage..."
                                        />
                                        <CardContent>
                                            <Typography sx={{ textAlign: 'left' }} gutterBottom variant="h5" component="div">{e?.name?.toUpperCase()}</Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'left' }}>{e?.description}</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button target="_blank" href={e?.url} size="small" color="primary">Live Demo</Button>
                                    </CardActions>
                                </Card>
                            </>

                        )
                    })

                    }


                    {/* </span> */}

                </div>

            </section>
        </>
    )


}

export { Section3 } 