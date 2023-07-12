import CommentCard from "./_components/cards/commentCard";
import ReplyCard from "./_components/cards/replyCard";
import CommentInput from "./_components/commentInput";
import { getLocalData } from "./_utils/getLocalData";
import DeleteModal from "./_components/deleteModal";

async function getData() {
	const response = await fetch("/data.json");
	return await response.json();
}

export default async function Home() {
	const data = await getLocalData();

	const currentUser = data.currentUser.username;

	return (
		<main className="mt-12 m-4 flex gap-4 flex-col">
			{data?.comments.map((comment) => {
				return (
					<>
						<CommentCard {...comment} />
						{comment.replies.length > 0 && (
							<div className="flex gap-4">
								<div className=" w-[4px] bg-slate-200"></div>
								<div className="space-y-4 grow">
									{comment.replies.map((reply) => {
										return (
											<ReplyCard
												key={reply.id}
												{...reply}
												currentUser={currentUser}
											/>
										);
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

{
	/* TODO: create a reply  */
}
