const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Conectando ao MongoDB
mongoose.connect('mongodb://localhost:27017/seuBancoDeDados', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão:'));
db.once('open', () => {
    console.log('Conectado ao MongoDB');
});

// Definindo um schema e modelo para uma coleção
const exemploSchema = new mongoose.Schema({
    campo: String,
    outroCampo: Number
});

const Exemplo = mongoose.model('Exemplo', exemploSchema);

// Rotas
app.get('/', (req, res) => {
    res.send('API funcionando!');
});

app.get('/exemplos', async (req, res) => {
    const exemplos = await Exemplo.find();
    res.json(exemplos);
});

app.post('/exemplos', async (req, res) => {
    const novoExemplo = new Exemplo(req.body);
    await novoExemplo.save();
    res.json(novoExemplo);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});



// // backend/server.js
// const express = require('express');
// const sqlite3 = require('sqlite3').verbose();
// const cors = require('cors');
// const app = express();
// const port = 3001;

// app.use(cors());
// app.use(express.json());

// // Configurar banco de dados SQLite
// const db = new sqlite3.Database(':memory:');

// db.serialize(() => {
//   db.run("CREATE TABLE user (id INTEGER PRIMARY KEY, name TEXT)");
//   db.run("INSERT INTO user (name) VALUES ('John Doe')");
// });

// app.get('/api/users', (req, res) => {
//   db.all("SELECT * FROM user", [], (err, rows) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({ data: rows });
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });



// // const mongoose = require("mongoose")

// // const dbUser = process.env.DB_USER
// // const dbPassword = process.env.DB_PASS

// // const connect = () => {
// //     mongoose.connect(`mongosh "mongodb+srv://${dbUser}:${dbPassword}cluster0.2i7bwkz.mongodb.net/" --apiVersion 1 --username vitormarinhoh`)

// //     const connection = mongoose.connection;

// //     connection.on("error", () => {
// //         console.error("Erro ao conectar com o MongoDB")
// //     })

// //     connection.on("open", () => {
// //         console.log("Conectado ao mongoDB")
// //     })
// // }

// // connect();

// // module.exports = mongoose