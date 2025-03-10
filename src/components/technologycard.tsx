import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type CardProps = {
	name: string;
	img: string | StaticImport;
};

const TechnologyCard = ({ name, img }: CardProps) => {
	return (
		<div className="flex flex-col items-center md:p-4">
			<p className="font-semibold text-[18px] text-dimWhite">{name}</p>
			<Image
				src={img}
				alt={name}
				width={0}
				height={0}
				className="flex flex-1 w-[64px] h-[64px] md:max-w-[100px] md:max-h-[100px]"
			/>
		</div>
	);
};

export default TechnologyCard;
