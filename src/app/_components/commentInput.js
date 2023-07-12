import Image from "next/image";

export default function CommentInput() {
	return (
		<div className="bg-[#FFFFFF] p-4 space-y-4 rounded-lg shadow">
			<textarea
				type="text"
				name=""
				id=""
				placeholder="Add a comment..."
				className="font-semibold h-[100px] rounded-lg border-2 w-full resize-none p-4"
			></textarea>
			<div className="flex justify-between  items-center">
				<Image
					src="/images/avatars/image-amyrobson.png"
					width={40}
					height={40}
					className="object-contain"
					alt="Picture of the user"
				/>
				<button className="font-semibold text-xl uppercase text-white bg-[#5358B6] py-3 px-6 rounded-lg">
					send
				</button>
			</div>
		</div>
	);
}
