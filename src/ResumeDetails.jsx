import React, { useState, useEffect } from "react";
import "./ResumeDetails.css";
import { GetDataByAxios } from "./axios/axiosConfig"
import { useQuery } from '@tanstack/react-query';

const Resume = () => {

  const fetchData = async () => {
    try {
      const response = await GetDataByAxios(`${import.meta.env.VITE_APP_BACKEND_API}/resume`)

      return response?.data
    } catch (error) {
      console.log(error)
    }

  }

  const { data: resumedata, isLoading, isError } = useQuery({
    queryKey: ['myresumedata'],
    queryFn: fetchData,
  });


  const p_info = resumedata?.personalInfo
  const education_data = resumedata?.education
  const experience_data = resumedata?.experience




  return (
    <div className="resume-container">
      {(
        <div className="resume-content">
          {/* Left Column */}

          <div className="resume-left">
            <div className="resume-section">
              <div className="resume-heading">
                <h2 className="resume-section-title">Summary</h2>
              </div>
              <div className="resume-section-content">
                <h3 className="resume-name">{p_info?.name}</h3>
                <p className="resume-description">
                  {p_info?.type}
                </p>
                <ul className="resume-contact">
                  {
                    p_info?.contact?.map((i, e) => {
                      return <li key={e} className="resume-contact-item">{i}</li>
                    })
                  }
                </ul>
              </div>
            </div>

            <div className="resume-section">
              <div className="resume-heading">
                <h2 className="resume-section-title">Education</h2>
              </div>
              <div className="resume-section-content">



                {
                  education_data?.map((i, e) => {
                    return (
                      <div key={e} className="resume-education-item">
                        <h3 className="resume-education-title">{i?.level}</h3>
                        <span className="resume-timeline">{i?.degree}</span> -
                        <span className="resume-timeline">{i?.year}</span>
                        <p className="resume-institute">{i?.institute}</p>
                        <p className="resume-education-description">{i?.location}</p>
                      </div>

                    )
                  })
                }
              </div>
            </div>
          </div>


          <div className="resume-right">
            <div className="resume-section">
              <div className="resume-heading">
                <h2 className="resume-section-title">Professional Experience</h2>
              </div>
              <div className="resume-section-content">


                {
                  experience_data?.map((i, e) => {
                    return (
                      <div key={e} className="resume-experience-item">
                        <h3 className="resume-job-title">{i?.position}</h3>
                        <span className="resume-timeline">{i?.company}</span>
                        <p className="resume-company">{i?.location}</p>
                        <ul className="resume-tasks">
                          {i?.responsibilities?.map((i, e) => {
                            return <li key={e} className="resume-task">{i}</li>
                          })}
                        </ul>
                      </div>
                    )
                  })
                }



              </div>
            </div>
          </div>
        </div>
      )
      }
    </div>
  );
};

export default Resume;
