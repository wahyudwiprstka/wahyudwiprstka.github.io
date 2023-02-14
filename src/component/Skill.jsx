import '../css/skill.css';
import {SiEclipseide, SiIntellijidea} from 'react-icons/si';

const Skill = () => {
    return(
        <section id='skill'>
            <div className="items-center">
                <div className="z-20 skills py-10 w-full mx-auto text-center shadow-lg md:shadow dark:bg-dark dark:text-white dark:shadow-slate-600">
                    <h1 className="text-3xl text-center text-primary font-bold">Technical Skills</h1>
                    <div className='skill-icon flex flex-wrap gap-x-32 gap-y-5 justify-center mt-5'>
                        <i className="devicon-html5-plain-wordmark"></i>
                        <i className="devicon-css3-plain-wordmark"></i>
                        <i className="devicon-javascript-plain"></i>
                        <i className="devicon-java-plain-wordmark"></i>
                        <i className="devicon-bootstrap-plain-wordmark"></i>
                        <i className="devicon-tailwindcss-plain"></i>
                        <i className="devicon-jquery-plain"></i>
                        <i className="devicon-react-original"></i>
                        <i className="devicon-angularjs-plain"></i>
                        <i className="devicon-mysql-plain-wordmark"></i>
                        <i className="devicon-php-plain"></i>
                        <i className="devicon-spring-plain"></i>
                        <i className="devicon-cplusplus-plain"></i>
                        <i className="devicon-visualstudio-plain"></i>
                        <i><SiEclipseide/></i>
                        <i className="devicon-figma-plain"></i>
                        <i><SiIntellijidea/></i>
                        <i className="devicon-git-plain"></i>
                        <i className="devicon-github-original"></i>
                        <i className="devicon-slack-plain"></i>
                        <i className="devicon-typescript-plain"></i>
                    </div>
                </div>
            </div>  
        </section>
    );
}

export default Skill;