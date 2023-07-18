"use client";

import Image from "next/image";

export default function EditButton({ editState, setEditState }) {
	return (
		<div
			className="flex gap-2 items-center cursor-pointer"
			onClick={() => setEditState(!editState)}
		>
			<Image
				src="/images/icon-edit.svg"
				width={17}
				height={17}
				alt="Picture of return sign"
			/>
			<div className="font-bold text-[#5F5DA6]">Edit</div>
		</div>
	);
}
