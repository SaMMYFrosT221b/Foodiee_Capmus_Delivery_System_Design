CREATE TABLE LiveOrders(
    ItemID INT NOT NULL,
    UserID INT NOT NULL,
    ShopkeeperID INT NOT NULL,
    OrderStatus VARCHAR(20) NOT NULL,
    TotalQuantity INT NOT NULL,
    TotalAmount DECIMAL(7,2) NOT NULL,
    CreatedAt TIMESTAMP NOT NULL DEFAULT NOW()
);