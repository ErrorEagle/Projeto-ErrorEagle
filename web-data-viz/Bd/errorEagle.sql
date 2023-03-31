
DROP DATABASE erroEagle;
CREATE DATABASE errorEagle;
use errorEagle;
CREATE TABLE usuario (
idUser INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(45) NOT NULL,
email VARCHAR(256),
password VARCHAR(100),
CONSTRAINT ctChkEmail CHECK (email LIKE "%@%")

) ;
INSERT INTO Usuario (name, email, password)
VALUES 
    ('Maria Oliveira', 'maria.oliveira@example.com', 'outraSenha123'),
    ('Fernando Santos', 'fernando.santos@example.com', 'maisUmaSenha456'),
    ('Roberta Souza', 'roberta.souza@example.com', 'senhaSecreta789'),
    ('Rafaela Lima', 'rafaela.lima@example.com', 'minhaSenhaSuperSegura'),
    ('Carlos Vieira', 'carlos.vieira@example.com', 'outraSenha123'),
    ('Fátima Carvalho', 'fatima.carvalho@example.com', 'maisUmaSenha456'),
    ('Paulo Henrique', 'paulo.henrique@example.com', 'senhaSecreta789'),
    ('Mariana Ferreira', 'mariana.ferreira@example.com', 'minhaSenhaSuperSegura'),
    ('Renato Almeida', 'renato.almeida@example.com', 'outraSenha123'),
    ('Bruna Oliveira', 'bruna.oliveira@example.com', 'maisUmaSenha456'),
    ('Pedro Costa', 'pedro.costa@example.com', 'senhaSecreta789'),
    ('Camila Rodrigues', 'camila.rodrigues@example.com', 'minhaSenhaSuperSegura'),
    ('Larissa Silva', 'larissa.silva@example.com', 'outraSenha123'),
    ('Aline Costa', 'aline.costa@example.com', 'maisUmaSenha456'),
    ('Guilherme Santos', 'guilherme.santos@example.com', 'senhaSecreta789'),
    ('Vanessa Souza', 'vanessa.souza@example.com', 'minhaSenhaSuperSegura'),
    ('Antônio Lima', 'antonio.lima@example.com', 'outraSenha123'),
    ('Amanda Vieira', 'amanda.vieira@example.com', 'maisUmaSenha456'),
    ('Fernanda Carvalho', 'fernanda.carvalho@example.com', 'senhaSecreta789'),
    ('Gabriel Henrique', 'gabriel.henrique@example.com', 'minhaSenhaSuperSegura'),
    ('Márcia Ferreira', 'marcia.ferreira@example.com', 'outraSenha123'),
    ('Leonardo Almeida', 'leonardo.almeida@example.com', 'maisUmaSenha456'),
    ('Thais Oliveira', 'thais.oliveira@example.com', 'senhaSecreta789'),
    ('Diego Costa', 'diego.costa@example.com', 'minhaSenhaSuperSegura'),
    ('Renata Rodrigues', 'renata.rodrigues@example.com', 'outraSenha123'),
    ('Henrique Silva', 'henrique.silva@example.com', 'maisUmaSenha456'),
    ('Cláudia Costa', 'claudia.costa@example.com', 'senhaSecreta789'),
    ('Cristiano Souza', 'cristiano.souza@example.com', 'minhaSenhaSuperSegura'),
    ('Isabela Lima', 'isabela.lima@example.com', 'outraSenha123'),
    ('Rogério Vieira', 'rogerio.vieira@example.com', 'maisUmaSenha456');
    Select * From Usuario;
    