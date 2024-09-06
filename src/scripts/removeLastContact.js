import { PATH_DB } from "../constants/contacts.js";
import { readContacts } from "../utils/readContacts.js";
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
    const fetchContacts = await readContacts();
    fetchContacts.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(fetchContacts), 'utf-8');
};

removeLastContact();
