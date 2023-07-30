"use client";

import Image from "next/image";
import PointsCounter from "../pointsCounter";
import ReplyButton from "../buttons/replyButton";
import useReplyStore from "../../_store/useReplyStore";

export default function CommentCard(props) {
	const [activeReply, setActiveReply] = useReplyStore((state) => [
		state.activeReply,
		state.setActiveReply,
	]);

	const { id, content, createdAt, score, user, indexState } = props;
	const { username, image } = user;

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
				<PointsCounter score={score} />

				<ReplyButton
					onClick={() => setActiveReply("comment", indexState)}
				/>
			</div>
		</div>
	);
}
