import { projectInfo } from "../constants/constants"
import ProjectCard from './projectcard'

export default function Portfolio() {
    return (
        <div id="portfolio" className="p-4">

            {/* This will be the title */}
            <div className="p-4">
                <p className="text-gray text-[24px]">Case Studies</p>
                <p className="text-white text-[48px]">Project Portfolio</p>
                <p className="text-gray text-[24px]">More Coming Soon!</p>
            </div>

            {/* This will be the 3 most recent projects, with assets imported from the constants file */}
            <div>
                {projectInfo.map((card) => 
                    
                    <ProjectCard key={card.num} {...card} />
                    
                )}
            </div>

        </div>
    )
}