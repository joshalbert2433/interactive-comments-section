"use client";

import { useState } from "react";

export default function ReplyButton() {
	const [show, setShow] = useState(false);

	return (
		<>
			<div className="font-bold text-[#5F5DA6]">Reply</div>
		</>
	);
}
