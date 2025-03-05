import "./socialmedia.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
function Socialmediaicons({insta,github,facebook,linkedin}) {
    return (
        <>
            <ul class="wrapper">
                <li class="icon facebook">
                    <span class="tooltip">Facebook</span>
                    <span><a className="anchorTagofsocialmedia" target="_blank" href={facebook}><FontAwesomeIcon icon={faFacebook} size="lg" /></a></span>
                </li>
                <li class="icon twitter">
                    <span class="tooltip">Linkedin</span>
                    <span><a className="anchorTagofsocialmedia" target="_blank" href={linkedin}><FontAwesomeIcon icon={faLinkedin} size="lg" /></a></span>
                </li>
                <li class="icon instagram">
                    <span class="tooltip">Instagram</span>
                    <span><a className="anchorTagofsocialmedia" target="_blank" href={insta}><FontAwesomeIcon icon={faInstagram} size="lg" /></a></span>
                </li>
                <li class="icon github">
                    <span class="tooltip">Github</span>
                    <span><a className="anchorTagofsocialmedia" target="_blank" href={github}><FontAwesomeIcon icon={faGithub} size="lg" /></a></span>
                </li>
            </ul>


        </>
    )
}



export { Socialmediaicons }