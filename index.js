const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Conectar ao MongoDB (certifique-se de ter o MongoDB instalado localmente ou forneça a URL do MongoDB)
// mongoose.connect('mongodb://localhost:27017/nome-do-seu-banco-de-dados', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// Definir o modelo do documento (um exemplo simples para fins ilustrativos)
// const Item = mongoose.model('Item', {
//   name: String,
//   description: String,
// });

// Rotas CRUD básicas
app.post('/mentoria', async (req, res) => {
//   const newItem = new Item(req.body);
//   await newItem.save();
//   res.json(newItem);
console.log("Bateu aqui");

});

app.get('/buscarMentoria', async (req, res) => {
//   const items = await Item.find();
//   res.json(items);
console.log("Get Request");
});

app.get('/items/:id', async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.json(item);
});

app.put('/atualizar', async (req, res) => {
    console.log("Atualizou");
//   const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(item);
});

app.delete('/items/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: 'Item deletado com sucesso!' });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
