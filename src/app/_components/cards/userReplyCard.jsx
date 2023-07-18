"use client";

import Image from "next/image";
import DeleteButton from "../buttons/deleteButton";
import PointsCounter from "../pointsCounter";
import EditButton from "../buttons/editButton";
import { useState } from "react";

export default function UserReplyCard(props) {
	const { content, createdAt, score, replyingTo, user } = props;
	const { username, image } = user;

	const concatValue = `@${replyingTo} ${content}`;

	const [edit, setEdit] = useState();
	const [userReply, setUserReply] = useState(concatValue);

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

				<span className="py-[1px] px-[6px] bg-[#5053AF] text-white font-semibold rounded">
					you
				</span>

				<p className="text-slate-500">{createdAt}</p>
			</div>

			{edit === true ? (
				<textarea
					name=""
					id=""
					cols="30"
					rows="10"
					value={userReply}
					onChange={(e) => setUserReply(e.target.value)}
					className="h-fit rounded-lg border-2 w-full resize-none p-4"
				></textarea>
			) : (
				<p className="text-slate-500">
					<span className="text-[#5F5DA6] cursor-pointer font-bold">
						@{replyingTo}
					</span>{" "}
					{content}
				</p>
			)}

			<div className="flex justify-between">
				<PointsCounter score={score} />

				{edit === true ? (
					<button
						className="bg-[#5053AF] hover:opacity-60 text-white rounded-lg px-3 py-2 font-semibold "
						onClick={() => setEdit(!edit)}
					>
						UPDATE
					</button>
				) : (
					<div className="flex gap-4 items-center">
						<DeleteButton />

						<EditButton editState={edit} setEditState={setEdit} />
					</div>
				)}
			</div>
		</div>
	);
}
