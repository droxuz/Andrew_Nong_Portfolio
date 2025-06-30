import './ContactPageInfo.css';
import githubWhiteSVG from '../../Elements/github-mark-white.svg';
import gmailFull from '../../Elements/google_gmail_icon.svg';
import linkedinIcon from'../../Elements/linkedin-icon.svg';

export default function ContactPageInfo(){
    return(
        <div className="contactPageContainer">
            <div className="contactPageHeader">
                <h2 className="contactPageTitle">Contact Me !</h2>
            </div>
            <div className="contactPageGridContainer">
                <ul className="contactPageInfoGrid">
                    <li>
                    <a href="https://github.com/droxuz" target="_blank" rel="noopener" aria-label="GitHub">
                        <img src={githubWhiteSVG} alt="githubWhiteSVG" />
                        <span>GitHub</span>
                    </a>
                    </li>
                    <li>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=andrewnong54@gmail.com&su=Portfolio%20Inquiry" aria-label='Email'>
                            <img src={gmailFull} alt="gmailFullColorSVG" />
                            <span>Gmail</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/andrew-nong-4a6979305/" target="_blank" rel="noopener" aria-label="LinkedIn">
                            <img src={linkedinIcon} alt="linkedinColorSVG" />
                            <span>LinkedIn</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}