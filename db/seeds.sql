USE carsEZ_db;

INSERT INTO brands(brandName)
VALUES 
('Acura'), ('Alfa-Romeo'), ('Aston-Martin'), ('Audi'), ('Bentley');

INSERT INTO models (modelName, brandId)
VALUES ('ILX', 1), ('MDX', 1), ('NSX', 1), ('RDX', 1), ('RLX', 1), ('Giulia', 2), ('Stelvio', 2), ('Vantage', 3),
('DB11', 3), ('DB9', 3), ('DBX', 3), ('DBS', 3), ('A5', 4), ('R8', 4), ('A7', 4), ('Q8', 4), ('Q7', 4), ('Continential', 5),
('Mulsanne', 5), ('Flying Spur', 5), ('Bentayga', 5);

