USE carsEZ_db;

INSERT INTO brands(brandName)
VALUES 
('Acura'), ('Alfa-Romeo'), ('Aston-Martin'), ('Audi'), ('Bentley');

INSERT INTO models (modelName, brandId, carValue)
VALUES ('ILX', 1, 27000), ('MDX', 1, 48000), ('NSX', 1, 169500), ('RDX', 1, 40100), ('RLX', 1, 54900), ('Giulia', 2, 43350), ('Stelvio', 2, 45550), ('Vantage', 3, 139000),
('DB11', 3, 205600), ('DB9', 3, 213250), ('DBX', 3, 176900), ('DBS', 3, 316300), ('A5', 4, 45600), ('R8', 4, 148700), ('A7', 4, 69200), ('Q8', 4, 70800), ('Q7', 4, 57500), ('Continential', 5, 217800),
('Mulsanne', 5, 310800), ('Flying Spur', 5, 198100), ('Bentayga', 5, 160000);

