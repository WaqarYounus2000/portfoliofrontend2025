import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

import { useState, useEffect } from 'react';
import { GetDataByAxios, postDataByAxios } from './axios/axiosConfig';


const AddSkills = () => {
  const [InputValue, SetInputField] = useState('');
  const [skillName, setskillName] = useState('');
  const [skills, setskills] = useState('');




  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetDataByAxios(`${import.meta.env.VITE_APP_BACKEND_API}/resume/skills`)
        const tem = response?.data?.skills
        setskills(tem)



      } catch (error) {
        console.log(error)
      }

    }
    fetchData()

  }, [])









  const HandleAddSkills = async () => {
    console.log(InputValue, skillName)
    try {
      const response = await postDataByAxios(`${import.meta.env.VITE_APP_BACKEND_API}/addskills`,{InputValue,skillName})
      const tem = response?.data?.skills
      setskills(tem)



    } catch (error) {
      console.log(error)
    }

  };






  return (
    <div className='Secion_one'>
      <div className='Addurls_secion'>
        <TextField
          onChange={(e) => SetInputField(e.target.value)}
          value={InputValue}
          className='url_inputField'
          id="outlined-basic"
          label="Add Skills"
          size='small'
          variant="outlined"
        />
        <Button onClick={HandleAddSkills} variant="contained" size="small">Add+</Button>
        <div>
          <label htmlFor="skills">Choose Skills:
            <select value={skillName} onChange={e => setskillName(e.target.value)} name="skills" id="skills">
              <option value="">Select a category</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="database">Database</option>
              <option value="others">others</option>
            </select>
          </label>
        </div>
      </div>

      {/* Display loading spinner or data */}
      {(
        <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
          <div>
            <h3>Frontend Skills</h3>
            {skills?.frontend?.map((skill, index) => (
              <div key={index}>{skill}</div>
            ))}
          </div>
          <div>
            <h3>Backend Skills</h3>
            {skills?.backend?.map((skill, index) => (
              <div key={index}>{skill}</div>
            ))}
          </div>
          <div>
            <h3>Database Skills</h3>
            {skills?.database?.map((skill, index) => (
              <div key={index}>{skill}</div>
            ))}
          </div>
          <div>
            <h3>Others Skills</h3>
            {skills?.others?.map((skill, index) => (
              <div key={index}>{skill}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddSkills;
