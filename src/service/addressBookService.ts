import { AddressBook } from "../models/addressBook";
import { addressBookRepo } from "../repository/addressBookRepo";

const getAddressBook = (bookId:string) => addressBookRepo.getAddressBook(bookId);
const createAddressBook = (book: AddressBook) => addressBookRepo.createAddressBook(book);
const getAndCompareAddressBook = (bookId1: string, bookId2: string) => addressBookRepo.getAndCompareAddressBook(bookId1, bookId2);

export const addressBookService = {
    getAddressBook,
    createAddressBook,
    getAndCompareAddressBook,
  };
