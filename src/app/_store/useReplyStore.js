"use client";

import { create } from "zustand";

// Create the Zustand store
const useReplyStore = create((set) => ({
	activeIndex: false,
	setActiveIndex: (value) => set((state) => ({ activeIndex: value })),
}));

export default useReplyStore;
