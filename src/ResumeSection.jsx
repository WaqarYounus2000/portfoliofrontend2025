import "./resume.css"
import Resumeamico from "./assets/svgs/Resumeamico.svg"
import { DownloadButton } from "./DownloadButton"
import Resume from "./ResumeDetails"

function ResumeSection() {
   

    return (
        <>

            <div className="Mainsection_1">
                <div className="watermark2"></div>

                <div className="Section_title">
                    <h2 className="section3_heading ">Resume</h2>

                </div>



                <div className="portfolio_section_1">

                    <div className="downlaodButtonDiv">
                        <DownloadButton />

                    </div>

                    <Resume />

                </div>






            </div>








        </>
    )


}




export { ResumeSection } 