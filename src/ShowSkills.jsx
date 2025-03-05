import React from 'react';

const ShowSkills = (props) => {
    return (
        <ul>
            <h2>{props.skill_title}</h2>
            {
                props.Skills_data.map((e, i) => {
                    return (
                        <>
                            <li key={i}>{e.skill}</li>
                        </>

                    )
                })
            }
        </ul>

    );
}

export default ShowSkills;
