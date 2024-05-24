const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const todoRoutes = require('./routes/todos');




const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);



mongoose.connect('mongodb+srv://ruchithachodavarapu1122:Ruchi1122@cluster0.bu1meba.mongodb.net/TodoList?retryWrites=true&w=majority&appName=Cluster0', {
    
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
