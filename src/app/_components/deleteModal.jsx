"use client";

export default function DeleteModal() {
	return (
		<>
			{/* <button
				className="btn"
				onClick={() => window.my_modal_1.showModal()}
			>
				open modal
			</button> */}
			<dialog id="my_modal_1" className="modal">
				<form
					method="dialog"
					className="modal-box  rounded-lg space-y-4"
				>
					<h3 className="font-bold text-xl">Delete comment</h3>
					<p className=" text-slate-700">
						Are you sure you want to delete this comment? This will
						remove the comment and can&#39;t be undone
					</p>
					<div className="flex justify-between">
						{/* if there is a button in form, it will close the modal */}
						<button className="btn bg-[#66727E] text-white hover:bg-slate-700">
							NO, CANCEL
						</button>
						<button className="btn text-white bg-red-400  hover:bg-red-600">
							YES, DELETE
						</button>
					</div>
				</form>
			</dialog>
		</>
	);
}
