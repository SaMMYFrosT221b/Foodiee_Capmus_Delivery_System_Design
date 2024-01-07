CREATE TABLE DeliveryBoys (
    DeliveryBoyID INT PRIMARY KEY AUTO_INCREMENT,
    UserName VARCHAR(255) NOT NULL UNIQUE, 
    Name VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    PhoneNo VARCHAR(15) NOT NULL,
    GovIDType ENUM('Aadhar', 'PAN', 'Driving License', 'Voter ID') NOT NULL,
    GovID VARCHAR(255),
    BankName VARCHAR(255),
    AccountNo VARCHAR(50)
);