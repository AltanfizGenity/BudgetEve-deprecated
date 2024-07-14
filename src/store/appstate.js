import { writable } from "svelte/store";

export let isRecordFormOpen = writable(false);
export let currentPage = writable("home");
