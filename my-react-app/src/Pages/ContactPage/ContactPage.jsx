import HeadNavigation from '../../Components/HeadNavigation/HeadNavigation';
import ContactPageInfo from '../../Components/ContactPageInfo/ContactPageInfo';
import ProjectPageParticles from '../../Components/ProjectPageParticles/ProjectPageParticles';

function ContactPage(){
    return(
        <div className="ContactPageDiv">
            <HeadNavigation/>
            <ContactPageInfo/>
        </div>
    );
}
export default ContactPage;