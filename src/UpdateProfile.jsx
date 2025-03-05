import React, { useState } from 'react';
import "./updateProfile.css"
import { Button, Input } from "@mui/material";
import TextField from '@mui/material/TextField';
import { postDataByAxios, putDataByAxios } from './axios/axiosConfig';



const UpdateProfile = () => {








    const [UpdatedValue, setUpdatedValue] = useState()
    const [fieldPath, setFieldPath] = useState(); // Field path to update
    const [collectionName] = useState("resumeData"); // Collection name
    const [documentId] = useState("uMoW81KmEJQhFqGTWElb"); // Document ID



    const HandleInputText = (event) => {
        // console.log(event.target.value)
        setFieldPath(event.target.name)
        setUpdatedValue(event.target.value)

    }

    const HandleUpdateUserProfile = async () => {

        console.log("field is updated at:" + fieldPath + ":" + UpdatedValue)
        try {
            const response = await putDataByAxios(`${import.meta.env.VITE_APP_BACKEND_API}/resume`, { fieldPath, UpdatedValue });

            const imageUrl = response.data.imageUrl;
            setUpdatedValue(imageUrl)
            alert(response?.data?.message)

        } catch (error) {
            console.error('Error uploading project image:', error.response?.data || error.message);
        } finally {

        }


    }



    const handleFileInputAndUpload = async (event) => {
        setFieldPath(event.target.name)
        const file = event.target.files[0];
        if (!file) return;
        const formData = new FormData();
        formData.append('projectImage', file);
        try {
            const response = await postDataByAxios(`${import.meta.env.VITE_APP_BACKEND_API}/upload/image`, formData);

            const imageUrl = response.data.imageUrl;
            setUpdatedValue(imageUrl)
        } catch (error) {
            console.error('Error uploading project image:', error.response?.data || error.message);
        } finally {

        }
    };







    return (

        <div className='updateProfile_mainSection'>


            <div className='userProfileChageDiv'>

                <Input onChange={handleFileInputAndUpload} name='personalInfo.profileUrl' type='file'>Choose Profile Img</Input>

                <TextField onChange={HandleInputText} name='personalInfo.name' className='url_inputField ' id="outlined-basic" label="Profile Name" size='small' variant="outlined" />
                <TextField onChange={HandleInputText} name='personalInfo.title' className='url_inputField' id="outlined-basic" label="proficiency" size='small' variant="outlined" />
                <TextField onChange={HandleInputText} name='personalInfo.socialMedia.facebook' className='url_inputField textField' id="outlined-basic" label=" Facebook Link " size='small' variant="outlined" />
                <TextField onChange={HandleInputText} name='personalInfo.socialMedia.instagram' className='url_inputField' id="outlined-basic" label=" Instagram Link " size='small' variant="outlined" />
                <TextField onChange={HandleInputText} name='personalInfo.socialMedia.github' className='url_inputField' id="outlined-basic" label=" Github Link " size='small' variant="outlined" />
                <TextField onChange={HandleInputText} name='personalInfo.socialMedia.linkedin' className='url_inputField' id="outlined-basic" label=" LinkedIn Link " size='small' variant="outlined" />
                <TextField onChange={HandleInputText} name='personalInfo.contactInfo.address' className='url_inputField' id="outlined-basic" label=" Address " size='small' variant="outlined" />
                <TextField onChange={HandleInputText} name='personalInfo.contactInfo.contactNo' className='url_inputField' id="outlined-basic" label=" contactNo " size='small' variant="outlined" />
                <TextField onChange={HandleInputText} name='personalInfo.contactInfo.gmail' className='url_inputField' id="outlined-basic" label=" gmail " size='small' variant="outlined" />

            </div>



            <div className='userProfileUpdateButton'>
                <Button variant='contained' onClick={HandleUpdateUserProfile}>Update</Button>
            </div>

        </div>



    );
};

export default UpdateProfile;