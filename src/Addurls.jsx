
import React, { useState } from 'react';
import { TextField, Button, Input } from '@mui/material';
import axios from 'axios';
import './Addurls.css';

const Addurls = () => {
    const [projectDetails, setProjectDetails] = useState({
        projectUrl: "",
        projectImg: "",
        projectName: "",
        projectDescription: ""
    });

    const [isUploading, setIsUploading] = useState(false);

    // Handle text input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProjectDetails({ ...projectDetails, [name]: value });
    };





    // Handle file input and upload
    const handleFileInputAndUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;
        const formData = new FormData();
        formData.append('projectImage', file);
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_BACKEND_API}/upload/image`, formData, {

                headers: { 'Content-Type': 'multipart/form-data' },
                withCredentials: true,
            });

            const imageUrl = response.data.imageUrl;
            console.log('Project Image Uploaded:', imageUrl);

            // Update project details with the uploaded image URL
            setProjectDetails((prevDetails) => ({
                ...prevDetails,
                projectImg: imageUrl
            }));

        } catch (error) {
            console.error('Error uploading project image:', error.response?.data || error.message);
        } finally {
            setIsUploading(false);
        }
    };

    // Handle form submission (store data in MongoDB)


    const handleStoreData = async () => {
        if (!projectDetails.projectName || !projectDetails.projectUrl || !projectDetails.projectDescription || !projectDetails.projectImg) {
            return alert("Please fill all fields and upload an image.");
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_BACKEND_API}/upload/projectdetails`, projectDetails, {
                withCredentials: true,
            });

            console.log('Project details saved:', response.data);
            alert("Project added successfully!");
            setProjectDetails({ projectUrl: "", projectImg: "", projectName: "", projectDescription: "" });

        } catch (error) {
            console.error('Error saving project:', error.response?.data || error.message);
        }
    };

    return (
        <div className='Secion_one'>
            <div className='Addurls_section'>
                <Input type='file' onChange={handleFileInputAndUpload} />
                {isUploading && <p>Uploading...</p>}

                <TextField onChange={handleInputChange} name='projectUrl' value={projectDetails.projectUrl} className='url_inputField' label="Add Project URL" size='small' variant="outlined" />
                <TextField onChange={handleInputChange} name='projectName' value={projectDetails.projectName} className='url_inputField' label="Add Project Name" size='small' variant="outlined" />
                <TextField onChange={handleInputChange} name='projectDescription' value={projectDetails.projectDescription} className='url_inputField' label="Add Project Details" size='small' variant="outlined" />

                <Button onClick={handleStoreData} variant="contained" size="small" disabled={isUploading}>
                    {isUploading ? "Uploading..." : "Add+"}
                </Button>
            </div>
        </div>
    );
};

export default Addurls;
