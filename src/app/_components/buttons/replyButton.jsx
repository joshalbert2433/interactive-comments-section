"use client";

import Image from "next/image";

export default function ReplyButton({ onClick }) {
	return (
		<>
			<button
				className="flex gap-2 items-center cursor-pointer hover:opacity-50"
				onClick={onClick}
			>
				<Image
					src="/images/icon-reply.svg"
					width={17}
					height={17}
					alt="Picture of return sign"
				/>
				<div className="font-bold text-[#5F5DA6]">Reply</div>
			</button>
		</>
	);
}
