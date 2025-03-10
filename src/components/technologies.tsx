import React from "react";
import TechnologyCard from "./technologycard";
import { techInfo } from "@/app/constants/constants";

const Technologies = () => {
	return (
		<div className="w-full flex flex-col items-center p-4">
			{/* Technologies */}
			<p className="font-semibold text-[36px] md:text-[48px] pb-8">
				TECHNOLOGIES
			</p>
			<div className="w-full grid grid-cols-3 grid-rows-3 gap-2 md:flex md:flex-wrap md:justify-evenly ">
				{techInfo.map((index, id) => (
					<TechnologyCard key={id} {...index} />
				))}
			</div>
		</div>
	);
};

export default Technologies;
