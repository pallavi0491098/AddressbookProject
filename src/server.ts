import express from "express";
import { AddressBook } from "./models/addressBook";
import { addressBookService } from './service/addressBookService';
import * as bodyParser from 'body-parser';
import { sortArray } from "./sortArray";
const app = express();
const port = 8080; // default port to listen

app.use(bodyParser.json({ limit: '50mb' }));

app.get( "/:id", async ( req, res ) => {
    const bookId = req.params.id;
    const response : AddressBook = await addressBookService.getAddressBook(bookId);
    sortArray(response.details)
    res.status(201).json(response);
});

app.post("/createBook", async ( req, res) => {
    const book: AddressBook = req.body;
    const isSucess = await addressBookService.createAddressBook(book);
    isSucess ? res.status(201): res.status(500);
    return;
});

app.get( "/getUniqueFriends/:id1&:id2", async ( req, res ) => {
    const bookId1 = req.params.id1;
    const bookId2 = req.params.id2;
    const response = await addressBookService.getAndCompareAddressBook(bookId1, bookId2);
    res.status(201).json(response);
});

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );