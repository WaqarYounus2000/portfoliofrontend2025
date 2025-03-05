import React, { useState } from 'react';
import './resumeupload.css'
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


const ResumeUpload = () => {
    const [FileUpload, setFileUpload] = useState();

    const [isuploaded, setisuploaded] = useState(false);




    const HandleuploadFile = async () => {

        if (!FileUpload) return alert('no file Selected!');
        const formData = new FormData();
        formData.append('pdfFile', FileUpload);


        try {
            setisuploaded(true)
            const response = await axios.post(`${import.meta.env.VITE_APP_BACKEND_API}/upload/file`, formData, {

                headers: { 'Content-Type': 'multipart/form-data' },
                withCredentials: true,
            });

            setisuploaded(false)
            


        } catch (error) {
            console.error('Error uploading File...:', error.response?.data || error.message);
            setisuploaded(false)
        } finally {
            alert("file uploaded!")
            FileUpload==''
        }




    }
    const HandleSelectFile = async (event) => {
        if (event.target.files && event.target.files.length > 0) {
            setFileUpload(event.target.files[0]);
            console.log("File selected:", event.target.files[0].name);


        } else {
            alert("No file selected");
        }

    }

    return (
        <div>
            <form action="#">
                <FontAwesomeIcon icon={faUpload} /><input className='InputFile_field' onChange={HandleSelectFile} type="file" />
                <Button onClick={HandleuploadFile} variant='contained'>{isuploaded ? "Uploading..." : "Upload"}</Button>

            </form>

        </div>
    );
};

export default ResumeUpload;