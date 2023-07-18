"use client";

import Image from "next/image";

export default function ReplyButton() {
	return (
		<>
			<div className="flex gap-2 items-center">
				<Image
					src="/images/icon-reply.svg"
					width={17}
					height={17}
					alt="Picture of return sign"
				/>
				<div className="font-bold text-[#5F5DA6]">Reply</div>
			</div>
		</>
	);
}
