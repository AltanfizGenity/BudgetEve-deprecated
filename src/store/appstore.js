import { writable } from "svelte/store";
import { getAccountObject } from "../utils/data";

const defaultAccounts = [
  getAccountObject("cash", "cash", 0, ""),
  getAccountObject("e-cash", "virtual account", 0, ""),
];

export let records = writable([]);
export let budgetAccounts = writable(defaultAccounts);
