CREATE TABLE Cart (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    itemID INT,
    ShopkeeperID INT,
    OrderStatus VARCHAR(255) DEFAULT 'Pending',
    itemName VARCHAR(255),
    itemQuantity INT,
    itemPrice DECIMAL(10,2),
    CreatedAt TIMESTAMP NOT NULL DEFAULT NOW()
);
