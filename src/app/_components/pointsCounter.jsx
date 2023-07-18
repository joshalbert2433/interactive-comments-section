"use client";

import Image from "next/image";
import { useState } from "react";

export default function PointsCounter({ score }) {
	const [scoreCount, setScoreCount] = useState(score);

	return (
		<div className="flex items-center w-fit bg-[#F3F5F6]  overflow-hidden  rounded-lg">
			<div
				className="w-8 h-8 flex items-center justify-center hover:bg-slate-300"
				onClick={() => {
					setScoreCount(scoreCount + 1);
				}}
			>
				<Image
					src="/images/icon-plus.svg"
					width={15}
					height={15}
					alt="Picture of plus sign"
					className="cursor-pointer"
				/>
			</div>
			<div className="w-8 h-8 flex items-center justify-center font-bold text-[#5F5DA6]">
				{scoreCount}
			</div>
			<div
				className="w-8 h-8 flex items-center justify-center  hover:bg-slate-300"
				onClick={() => {
					if (scoreCount > 0) {
						setScoreCount(scoreCount - 1);
					}
				}}
			>
				<Image
					src="/images/icon-minus.svg"
					width={14}
					height={14}
					alt="Picture of plus sign"
					className="cursor-pointer"
				/>
			</div>
		</div>
	);
}
