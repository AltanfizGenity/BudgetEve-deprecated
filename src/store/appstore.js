import { derived, writable } from "svelte/store";
import { getAccountObject } from "../utils/data";
import { defaultCategories } from "../data/default";

const defaultAccounts = [
  getAccountObject("cash", "cash", 0, ""),
  getAccountObject("e-cash", "virtual account", 0, ""),
];

export let records = writable([]);
export let budgetAccounts = writable(defaultAccounts);
export let categories = writable(defaultCategories);

export let totalBalance = derived(records, ($records) =>
  $records.reduce(
    (total, record) => {
      record.type === "income"
        ? (total.income += record.amount)
        : (total.expense += record.amount);
      return total;
    },
    { income: 0, expense: 0 },
  ),
);
