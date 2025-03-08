
import "./DownloadButton.css"

import { useEffect, useState } from "react";
import { GetDataByAxios } from './axios/axiosConfig';

///////



function DownloadButton() {
    const [resumeData, setresumeData] = useState();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await GetDataByAxios(`${import.meta.env.VITE_APP_BACKEND_API}/resume/resumefile`)
                const tem = response?.data.resumefile
                setresumeData(tem)
                // console.log(resumeData)
                

                // setresumeDataisLoading(false)
            } catch (error) {
                console.log(error)
            }

        }
        fetchData()

    }, [])






    const DownlaodResume = async () => {
        window.open(resumeData.pdflink, '_blank'); 
        


    }




    return (
        <>
            <div class="button">
                <a href="#">Download</a>
                <b class="top"><button className="ButtonDownload" onClick={DownlaodResume}>Click to download</button></b>
                <b class="bottom">{  (resumeData?.pdfsize / 1048576).toFixed(2) + " Mb"}</b>
            </div>
        </>
    )
}

export { DownloadButton }