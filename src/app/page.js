"use client";

import CommentCard from "./_components/cards/commentCard";
import ReplyCard from "./_components/cards/replyCard";
import CommentInput from "./_components/input/commentInput";
import DeleteModal from "./_components/deleteModal";
import UserReplyCard from "./_components/cards/userReplyCard";
import jsonData from "../../public/data/data.json";
import useReplyStore from "./_store/useReplyStore";
import ReplyInput from "./_components/input/replyInput";

export default function Home() {
	const [activeReply, setActiveReply] = useReplyStore((state) => [
		state.activeReply,
		state.setActiveReply,
	]);

	const data = jsonData;

	const currentUser = data?.currentUser?.username;

	if (data.length === 0) {
		return <div>Loading...</div>;
	}

	return (
		<main className="mt-12 m-4 flex gap-4 flex-col">
			{data?.comments.map((comment, index) => {
				return (
					<>
						<CommentCard {...comment} indexState={index} />
						{activeReply?.type === "comment" &&
							activeReply?.index === index && (
								<ReplyInput userId={comment.id} />
							)}
						{comment.replies.length > 0 && (
							<div className="flex gap-4">
								<div className=" w-[4px] bg-slate-200"></div>
								<div className="space-y-4 grow">
									{comment?.replies?.map((reply, index) => {
										if (
											reply.user.username === currentUser
										) {
											return (
												<UserReplyCard
													key={reply.id}
													{...reply}
												/>
											);
										} else {
											return (
												<>
													<ReplyCard
														key={reply.id}
														{...reply}
														indexState={index}
													/>
													{activeReply?.type ===
														"reply" &&
														activeReply?.index ===
															index && (
															<ReplyInput />
														)}
												</>
											);
										}
									})}
								</div>
							</div>
						)}
					</>
				);
			})}

			<CommentInput />
			<DeleteModal />
		</main>
	);
}
