import styles from './ProjectsStyles.module.css'
import Omni from '../../assets/omni.png'
import Ai from '../../assets/Ai.jpeg'
import Find from '../../assets/Find.jpeg'
import Clone from '../../assets/Clone.jpeg';
import Musik from '../../assets/Musik.jpeg'
import ProjectCard from '../../common/ProjectCard'
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.ProjectsContainer}>
        <ProjectCard
         src={Omni}
         link="https://github.com/SaiEshwar-Pennada/Omni_Health_explorer"
         h3="Omni Health Explorer"
         p="A multiple Disease Predictor"
        />
        <ProjectCard
         src={Ai}
         link="https://github.com/SaiEshwar-Pennada/Ai-persional-assistant"
         h3="Ai Personal Assistant"
         p="An Ai powered personal Assistant"
        />
        <ProjectCard
         src={Find}
         link="https://github.com/SaiEshwar-Pennada/Find_my_kraft"
         h3="Find My Kraft"
         p="An Ai Based Job Searching Platform"
        />
        <ProjectCard
         src={Clone}
         link="https://github.com/SaiEshwar-Pennada/Youtube_clone"
         h3="YouTube Clone"
         p="An youtube Clone using React and Rapid API"
        />
        <ProjectCard
         src={Musik}
         link="https://github.com/SaiEshwar-Pennada/muzik"
         h3="Musik"
         p="An Ai Based Music Recommendation System"
        />


      </div>
    </section>
  )
}

export default Projects
