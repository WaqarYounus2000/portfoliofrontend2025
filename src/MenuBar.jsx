import { NavLink } from 'react-router-dom';
import "./MenuBar.css"
import titleLogo from "./images/titleLogo.png"

import { Button } from "./Button";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import CasesOutlinedIcon from '@mui/icons-material/CasesOutlined';
// import SplitscreenOutlinedIcon from '@mui/icons-material/SplitscreenOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";


function MenuBar() {
    let [flag1, Setflag1] = useState(false);

    function Menutoggle() {
        Setflag1(!flag1);

    }



    return (
        <>
            <section className="MenuBarMainSection">


                <div><span className="HumburgermenuClass">{flag1 ? <FontAwesomeIcon onClick={Menutoggle} size={"lg"} icon={faXmark} /> : <FontAwesomeIcon onClick={Menutoggle} size={"lg"} icon={faBars} />}</span></div>

                <header id="header" onClick={Menutoggle} className={`headerClass ${flag1 ? ' show ' : 'hide'}`}>
                    <span className='tittleSpan'><img className='titleLogo' src={titleLogo} alt="logo" /></span>
                    <nav id="navbar" class="navbar">
                        <ul>
                            <li><NavLink to="/"><Button  Text={"Home"} icon={HomeRoundedIcon} /></NavLink></li>
                            <li><NavLink to="/about"><Button  Text={"About"} icon={PersonOutlineRoundedIcon} /></NavLink></li>
                            <li><NavLink to="/resume"><Button  Text={"Resume"} icon={InsertDriveFileOutlinedIcon} /></NavLink></li>
                            <li><NavLink to="/project"><Button  Text={"Project"} icon={CasesOutlinedIcon} /></NavLink></li>
                            <li><NavLink to="/contact"><Button Text={"Contact"} icon={MailOutlinedIcon} /></NavLink></li>
                        </ul>
                    </nav>

                </header>

            </section>

        </>

    )



}


export { MenuBar }







