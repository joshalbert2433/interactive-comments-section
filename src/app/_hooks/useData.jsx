"use client";

import { useState, useEffect } from "react";

export default function useData(key, initialValue) {
	const [data, setData] = useState();

	useEffect(() => {
		if (commentData.length !== 0) {
			setData(commentData);
		} else {
			localStorage.setItem("commentData", JSON.stringify(jsonData));
		}

		//eslint-disable-next-line
	}, []);

	return [data];
}
