-- DROP TABLE IF EXISTS addressbook.books;

CREATE TABLE addressbook.books
(
    bookId TEXT NOT NULL PRIMARY KEY,
    book_details JSONB NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL
);


