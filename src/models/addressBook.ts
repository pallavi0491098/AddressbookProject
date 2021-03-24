export type AddressBook = {
    id : string;
    details: Contact[];
};

export type Contact = {
    name: string;
    phonenumber: string;
};