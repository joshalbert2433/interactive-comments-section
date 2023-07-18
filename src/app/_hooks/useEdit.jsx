"use client";

import { useState } from "react";

export default function useEdit(initialState = false) {
	const [edit, setEdit] = useState(initialState);
	console.log(edit);

	return [edit, setEdit];
}
