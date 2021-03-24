import { executeQuery } from "../dbConfig/query";
import { AddressBook } from "../models/addressBook";

const createAddressBook = async (addressBook: AddressBook): Promise<boolean> => {
    try {
        const result = await executeQuery(`Insert into addressbook.books(bookId, book_details, created_at, updated_at) values ($1,$2,NOW(),NOW())`, [
            addressBook.id,
            JSON.stringify(addressBook.details)
        ]);
        return result.rows.length > 0;
    } catch (error) {
        // tslint:disable-next-line:no-console
        console.log(error);
    }
};

const getAddressBook = async (bookId: string): Promise<AddressBook> => {
    try {
        const result = await executeQuery(`Select * from books where bookid=$1`, [bookId]);
        if (result.rows.length === 0) return null;
        return {
            id: result.rows[0].bookid,
            details: result.rows[0].book_details
        };
    } catch (error) {
        // tslint:disable-next-line:no-console
        console.log(error);
    }
};

const getAndCompareAddressBook = async (bookId1: string, bookId2: string) => {
    const book1 = await getAddressBook(bookId1);
    // tslint:disable-next-line:no-console
    console.log(book1.details);

    const book2 = await getAddressBook(bookId2);
    // tslint:disable-next-line:no-console
    console.log(book2.details);

    const comparer = (otherArray) => {
        return (current) => otherArray.filter((other) => other.name === current.name && other.phonenumber === current.phonenumber).length === 0;
    }
    const onlyInBook1 = book1.details.filter(comparer(book2.details));
    const onlyInBook2 = book2.details.filter(comparer(book1.details));

    return onlyInBook1.concat(onlyInBook2);
}

export const addressBookRepo = {
    createAddressBook,
    getAddressBook,
    getAndCompareAddressBook
};