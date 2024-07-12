/*
insert into Alexandria.dbo.Book values
('Amintiri din copilarie', 'Agatha Christie', '01234567894561', 20),
('How to steal Eminescus girlfriend', 'Ion Luca Caragiale', '01234741852561', 3);

insert into Alexandria.dbo.[User] values
('John Cena', 'johncena@bigman.ro', 'johncena', null),
('Elon Musk', 'teslaman@tesla.ro', 'bitcoin', null);

insert into Alexandria.dbo.BorrowingHistories values
('1', '2', '2024-07-21', null);


select * from Alexandria.dbo.Books;
select * from Alexandria.dbo.Users;
select * from Alexandria.dbo.BorrowingHistories;

SELECT title, dueDate FROM Alexandria.dbo.Books join Alexandria.dbo.BorrowingHistories ON Books.id = BorrowingHistories.bookId WHERE returnedDate is null AND userId = 2
*/
SELECT [id], [bookId], [userId], [dueDate], [returnedDate], [createdAt], [updatedAt] FROM [Alexandria.dbo.BorrowingHistories] AS [BorrowingHistory];
--select * from Alexandria.dbo.BorrowingHistories