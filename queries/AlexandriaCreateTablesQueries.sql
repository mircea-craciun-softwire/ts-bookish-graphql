
create table Alexandria.dbo.Book (
	id int identity(1,1) primary key,
	title varchar(100) not null,
	author varchar(50) not null,
	isbn varchar(15) not null,
	nrCopies int not null
);
create table Alexandria.dbo.[User] (
	id int identity(1,1) primary key,
	[name] varchar(50) not null,
	email varchar(50) not null,
	[password] varchar(50) not null,
	token varchar(10)
);
create table Alexandria.dbo.BorrowingHistories (
	id int identity(1,1) primary key,
	bookId int not null foreign key references [Book](id),
	userId int not null foreign key references [User](id),
	dueDate date not null,
	returnedDate date
);