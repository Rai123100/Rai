--1. Triggers

CREATE TABLE MinhaTabela (
    ID INT PRIMARY KEY,
    Nome NVARCHAR(50)
);

CREATE TRIGGER trg_AfterInsert
ON MinhaTabela
AFTER INSERT
AS
BEGIN
    PRINT 'Um novo registro foi inserido.';
END;

-- Testando o trigger

INSERT INTO MinhaTabela (ID, Nome) VALUES (1, 'Teste');

----------------------------------------------------------------------------

--2. Stored Procedures

CREATE PROCEDURE sp_Exemplo
    @Nome NVARCHAR(50)
AS
BEGIN
    SELECT * FROM MinhaTabela WHERE Nome = @Nome;
END;

-- Executando a stored procedure

EXEC sp_Exemplo 'Teste';

----------------------------------------------------------------------------

--3. Loops (WHILE)

DECLARE @contador INT = 1;

WHILE @contador <= 10
BEGIN
    PRINT 'Contador: ' + CAST(@contador AS NVARCHAR(10));
    SET @contador = @contador + 1;
END;

----------------------------------------------------------------------------

--4. Functions

CREATE FUNCTION dbo.ExemploFuncao (@num INT)
RETURNS INT
AS
BEGIN
    RETURN @num * 2;
END;

-- Usando a função

SELECT dbo.ExemploFuncao(5) AS Resultado;  -- Resultado será 10

----------------------------------------------------------------------------

--5. Window Functions

CREATE TABLE Vendas (
    ID INT PRIMARY KEY,
    Valor DECIMAL(10, 2)
);

INSERT INTO Vendas (ID, Valor) VALUES (1, 100.00), (2, 150.00), (3, 200.00);

SELECT 
    ID, 
    Valor,
    SUM(Valor) OVER (ORDER BY ID) AS SomaAcumulada
FROM Vendas;

----------------------------------------------------------------------------

--6. CTEs (Common Table Expressions)

WITH CTE_Exemplo AS (
    SELECT ID, Valor
    FROM Vendas
    WHERE Valor > 100
)
SELECT * FROM CTE_Exemplo;

----------------------------------------------------------------------------

--7. Subqueries

CREATE TABLE OutraTabela (
    ID INT PRIMARY KEY,
    ID_Venda INT
);

INSERT INTO OutraTabela (ID, ID_Venda) VALUES (1, 2), (2, 1);

SELECT *
FROM Vendas
WHERE ID IN (SELECT ID_Venda FROM OutraTabela);

----------------------------------------------------------------------------

--8. Views

CREATE VIEW vw_Vendas AS
SELECT ID, Valor
FROM Vendas
WHERE Valor > 100;

-- Usando a view
SELECT * FROM vw_Vendas;
Resumo
Esses códigos exemplificam como implementar cada conceito no SQL Server. Você pode copiá-los e colá-los em seu ambiente SQL Server para testá-los. Se precisar de mais informações ou exemplos adicionais, é só avisar!






