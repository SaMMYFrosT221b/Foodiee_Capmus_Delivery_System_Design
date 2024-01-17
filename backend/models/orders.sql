CREATE TABLE Orders(
    OrderID INT PRIMARY KEY,
    ItemID INT NOT NULL,
    UserID INT NOT NULL,
    ShopkeeperID INT NOT NULL,
    TotalAmount DECIMAL(7,2) NOT NULL,
    TotalQuantity INT NOT NULL,
    OrderStatus VARCHAR(20) NOT NULL,
    OrderedAt TIMESTAMP NOT NULL DEFAULT NOW()
);