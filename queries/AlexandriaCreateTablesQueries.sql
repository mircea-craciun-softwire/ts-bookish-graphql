
create table Alexandria.dbo.Books (
	id int identity(1,1) primary key,
	title varchar(100) not null,
	author varchar(50) not null,
	isbn varchar(15) not null,
	nrCopies int not null
);
create table Alexandria.dbo.Users (
	id int identity(1,1) primary key,
	[name] varchar(50) not null,
	email varchar(50) not null,
	[password] varchar(50) not null,
	token varchar(10)
);
create table Alexandria.dbo.BorrowingHistory (
	id int identity(1,1) primary key,
	bookId int not null foreign key references Books(id),
	userId int not null foreign key references Users(id),
	dueDate date not null,
	returnedDate date
);