/*
insert into Alexandria.dbo.Books values
('Amintiri din copilarie', 'Agatha Christie', '01234567894561', 20),
('How to steal Eminescus girlfriend', 'Ion Luca Caragiale', '01234741852561', 3);

insert into Alexandria.dbo.Users values
('John Cena', 'johncena@bigman.ro', 'johncena', null),
('Elon Musk', 'teslaman@tesla.ro', 'bitcoin', null);

insert into Alexandria.dbo.BorrowingHistory values
('1', '2', '2024-07-21', null);
*/
select * from Alexandria.dbo.Books;
select * from Alexandria.dbo.Users;
select * from Alexandria.dbo.BorrowingHistory;

SELECT title, dueDate FROM Books join BorrowingHistory ON Books.id = BorrowingHistory.bookId WHERE returnedDate is null AND userId = 