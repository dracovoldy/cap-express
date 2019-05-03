CREATE TABLE IF NOT EXISTS users (
        id VARCHAR(10) PRIMARY KEY,
        name text,        
        password text);

INSERT INTO users (id, name, password) VALUES ("capuser","Capgemini User","CapUser123");
INSERT INTO users (id, name, password) VALUES ("extuser","External User","ExtUser200");