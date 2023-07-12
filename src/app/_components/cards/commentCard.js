import Image from "next/image";

export default function CommentCard(props) {
	const { content, createdAt, score, user } = props;
	const { username, image } = user;

	// {
	//     "id": 1,
	//     "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
	//     "createdAt": "1 month ago",
	//     "score": 12,
	//     "user": {
	//       "image": {
	//         "png": "./images/avatars/image-amyrobson.png",
	//         "webp": "./images/avatars/image-amyrobson.webp"
	//       },
	//       "username": "amyrobson"
	//     },
	//     "replies": []
	//   },

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

				<p className="text-slate-500">{createdAt}</p>
			</div>

			<p className="text-slate-500">{content}</p>

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

				<div className="flex gap-2 items-center">
					<Image
						src="/images/icon-reply.svg"
						width={17}
						height={17}
						alt="Picture of return sign"
					/>

					<div className="font-bold text-[#5F5DA6]">Reply</div>
				</div>
			</div>
		</div>
	);
}
