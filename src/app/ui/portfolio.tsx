import { projectInfo } from "../constants/constants"
import ProjectCard from "./projectcard"

export default function Portfolio() {
    return (
        <div id="portfolio" className="relative p-4">

            {/* This will be the title */}
            <div className="z-[5] relative p-4">
                <p className="text-gray text-[24px]">Case Studies</p>
                <p className="text-white text-[48px]">Project Portfolio</p>
                <p className="text-gray text-[24px]">More Coming Soon!</p>
            </div>

            {/* This will be the 3 most recent projects, with assets imported from the constants file */}
            <div className="z-[5] relative">
                {projectInfo.map((card) => 
                    
                    <ProjectCard key={card.num} {...card} />
                    
                )}
            </div>
            
            {/* This will be the background gradients */}
            <div className='z-[0] absolute w-[8%] h-[15%] top-[20%] right-0 white__gradient' />
            <div className='z-[0] absolute w-[8%] h-[10%] top-[50%] left-0 white__gradient' />
            <div className='z-[0] absolute w-[8%] h-[10%] top-[70%] left-0 green__gradient' />

        </div>
    )
}