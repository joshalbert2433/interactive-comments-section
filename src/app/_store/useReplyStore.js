"use client";

import { create } from "zustand";

const useReplyStore = create((set) => ({
	activeReply: { type: null, index: null },
	setActiveReply: (type, index) =>
		set((state) => ({
			activeReply: { ...state.activeReply, type: type, index: index },
		})),
}));

export default useReplyStore;
