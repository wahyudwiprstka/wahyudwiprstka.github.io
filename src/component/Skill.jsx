import '../css/skill.css';
import {SiEclipseide, SiIntellijidea} from 'react-icons/si';

const Skill = () => {
    return(
        <section id='skill'>
            <div className="items-center">
                <div className="skills py-10 w-full mx-auto text-center">
                    <h1 className="text-3xl text-center text-primary font-bold">Technical Skills</h1>
                    <div className='skill-icon flex flex-wrap gap-x-32 gap-y-5 justify-center mt-5'>
                        <i class="devicon-html5-plain-wordmark"></i>
                        <i class="devicon-css3-plain-wordmark"></i>
                        <i class="devicon-javascript-plain"></i>
                        <i class="devicon-java-plain-wordmark"></i>
                        <i class="devicon-bootstrap-plain-wordmark"></i>
                        <i class="devicon-tailwindcss-original-wordmark"></i>
                        <i class="devicon-jquery-plain"></i>
                        <i class="devicon-react-original"></i>
                        <i class="devicon-angularjs-plain"></i>
                        <i class="devicon-mysql-plain-wordmark"></i>
                        <i class="devicon-php-plain"></i>
                        <i class="devicon-spring-plain"></i>
                        <i class="devicon-cplusplus-plain"></i>
                        <i class="devicon-visualstudio-plain"></i>
                        <i><SiEclipseide/></i>
                        <i class="devicon-figma-plain"></i>
                        <i><SiIntellijidea/></i>
                        <i class="devicon-git-plain"></i>
                        <i class="devicon-github-original"></i>
                        <i class="devicon-slack-plain"></i>
                        <i class="devicon-typescript-plain"></i>
                    </div>
                </div>
            </div>  
        </section>
    );
}

export default Skill;