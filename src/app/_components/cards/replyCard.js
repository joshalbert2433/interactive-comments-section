import Image from "next/image";
import ReplyButton from "../buttons/replyButton";

export default function ReplyCard(props) {
	const { content, createdAt, score, replyingTo, user, currentUser } = props;
	const { username, image } = user;
	// {
	//     "id": 4,
	//     "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
	//     "createdAt": "2 days ago",
	//     "score": 2,
	//     "replyingTo": "ramsesmiron",
	//     "user": {
	//       "image": {
	//         "png": "./images/avatars/image-juliusomo.png",
	//         "webp": "./images/avatars/image-juliusomo.webp"
	//       },
	//       "username": "juliusomo"
	//     }
	//   }

	return (
		<div className="bg-[#FFFFFF] p-4 space-y-4 rounded-lg shadow">
			<div className="flex items-center gap-4">
				<Image
					src={image.png}
					width={40}
					height={40}
					alt="Picture of the user"
				/>

				<p className="text-[#5E666F] font-bold">{username}</p>
				{username === currentUser && (
					<span className="py-[1px] px-[6px] bg-[#5053AF] text-white font-semibold rounded">
						you
					</span>
				)}

				<p className="text-slate-500">{createdAt}</p>
			</div>

			<p className="text-slate-500">
				<span className="text-[#5F5DA6] cursor-pointer font-bold">
					@{replyingTo}
				</span>{" "}
				{content}
			</p>

			<div className="flex justify-between">
				<div className="flex gap-4 items-center w-fit bg-[#F3F5F6] px-3 py-2   rounded-lg">
					<Image
						src="/images/icon-plus.svg"
						width={15}
						height={15}
						alt="Picture of plus sign"
					/>

					<div className="font-bold text-[#5F5DA6]">{score}</div>

					<Image
						src="/images/icon-minus.svg"
						width={14}
						height={14}
						alt="Picture of plus sign"
					/>
				</div>

				{username === currentUser ? (
					<div className="flex gap-4 items-center">
						<div className="flex gap-2 items-center">
							<Image
								src="/images/icon-delete.svg"
								width={17}
								height={17}
								alt="Picture of return sign"
							/>
							<div className="font-bold text-red-400">Delete</div>
						</div>
						<div className="flex gap-2 items-center">
							<Image
								src="/images/icon-edit.svg"
								width={17}
								height={17}
								alt="Picture of return sign"
							/>
							<div className="font-bold text-[#5F5DA6]">Edit</div>
						</div>
					</div>
				) : (
					<div className="flex gap-2 items-center">
						<Image
							src="/images/icon-reply.svg"
							width={17}
							height={17}
							alt="Picture of return sign"
						/>
						<ReplyButton />
					</div>
				)}
			</div>
		</div>
	);
}
