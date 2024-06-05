import sqlite3

banco = sqlite3.connect('primeiro_banco.db')

cursor = banco.cursor()


cursor.execute("CREATE TABLE PRODUTOS (nome text,valor,quantiade,validade)")


