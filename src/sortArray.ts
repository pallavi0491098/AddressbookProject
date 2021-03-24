import { Contact } from "./models/addressBook";

export const sortArray = (contacts: Contact[]) => {
    // sort by name
    return contacts.sort((contact1, contact2) => {
        const nameA = contact1.name.toUpperCase(); // ignore upper and lowercase
        const nameB = contact2.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        // names must be equal
        return 0;
    });
}