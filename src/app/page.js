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
	const [activeIndex, setActiveIndex] = useReplyStore((state) => [
		state.activeIndex,
		state.setActiveIndex,
	]);

	const data = jsonData;

	const currentUser = data.currentUser.username;

	return (
		<main className="mt-12 m-4 flex gap-4 flex-col">
			{data?.comments.map((comment, index) => {
				return (
					<>
						<CommentCard {...comment} indexState={index} />
						{activeIndex === index && (
							<ReplyInput indexState={index} />
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
													/>
													<ReplyInput
														indexState={index}
													/>
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
