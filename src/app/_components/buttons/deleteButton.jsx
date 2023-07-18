"use client";

import Image from "next/image";

export default function DeleteButton() {
	return (
		<>
			<div
				className="flex gap-2 items-center cursor-pointer"
				onClick={() => window.my_modal_1.showModal()}
			>
				<Image
					src="/images/icon-delete.svg"
					width={17}
					height={17}
					alt="Picture of return sign"
				/>
				<div className="font-bold text-red-400">Delete</div>
			</div>
		</>
	);
}
