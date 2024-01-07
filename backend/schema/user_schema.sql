CREATE TABLE Users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(255),
    UserName VARCHAR(255) UNIQUE,
    Password VARCHAR(255),
    PhoneNo VARCHAR(15),
    Email VARCHAR(255),
    UserType ENUM('Customer', 'Shopkeeper', 'DeliveryBoy') NOT NULL
    AddressLine1 VARCHAR(100),
    AddressLine2 VARCHAR(100),
    City VARCHAR(50),
    State VARCHAR(50),
    PostalCode VARCHAR(20),
    Country VARCHAR(50),
    CreatedAt TIMESTAMP NOT NULL DEFAULT DEFAULT NOW(),
);
