CREATE DATABASE notes_app;
USE notes_app;

CREATE TABLE notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO notes (title ,content)
VALUES
('My First Note','Something about first note'),
('My second note','Something about second note');


CREATE DATABASE foodiee;
USE foodiee;

CREATE TABLE Users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(255),
    UserName VARCHAR(255) UNIQUE,
    Password VARCHAR(255),
    PhoneNo VARCHAR(15),
    Email VARCHAR(255),
    UserType ENUM('Customer', 'Shopkeeper', 'DeliveryBoy') NOT NULL,
    AddressLine1 VARCHAR(100),
    AddressLine2 VARCHAR(100),
    City VARCHAR(50),
    State VARCHAR(50),
    PostalCode VARCHAR(20),
    Country VARCHAR(50),
    CreatedAt TIMESTAMP NOT NULL DEFAULT NOW()
);


CREATE TABLE Shopkeepers (
    ShopkeeperID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(255),
    ShopUserName VARCHAR(255) UNIQUE,
    Password VARCHAR(255),
    Email VARCHAR(255),
    PhoneNo VARCHAR(15),
    ShopName VARCHAR(255),
    ShopNo VARCHAR(50),
    BankName VARCHAR(255),
    AccountNo VARCHAR(50),
    GSTNo VARCHAR(50),
    GovIDType ENUM('Aadhar', 'PAN', 'Driving License', 'Voter ID') NOT NULL,
    GovID VARCHAR(255),
    AddressLine1 VARCHAR(100),
    AddressLine2 VARCHAR(100),
    City VARCHAR(50),
    State VARCHAR(50),
    PostalCode VARCHAR(20),
    Country VARCHAR(50),
    CreatedAt TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE DeliveryBoys (
    DeliveryBoyID INT PRIMARY KEY AUTO_INCREMENT,
    UserName VARCHAR(255) NOT NULL UNIQUE, 
    Name VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    PhoneNo VARCHAR(15) NOT NULL,
    GovIDType ENUM('Aadhar', 'PAN', 'Driving License', 'Voter ID') NOT NULL,
    GovID VARCHAR(255),
    BankName VARCHAR(255),
    AccountNo VARCHAR(50),
    CreatedAt TIMESTAMP NOT NULL DEFAULT NOW()
);