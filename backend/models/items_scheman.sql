CREATE TABLE Items (
    ItemID INT AUTO_INCREMENT PRIMARY KEY,
    ShopkeeperID INT,
    ItemName VARCHAR(255),
    Description TEXT,
    Price DECIMAL(10, 2),
    ImageURL VARCHAR(255),
    ExpectedTime VARCHAR(255),
    CousineType VARCHAR(255),
    Created TIMESTAMP NOT NULL DEFAULT NOW()
);


-- ALTER TABLE Items CHANGE ShopkeepersID ShopkeeperID INT;

-- ALTER TABLE Items MODIFY ItemID INT AUTO_INCREMENT PRIMARY KEY;
