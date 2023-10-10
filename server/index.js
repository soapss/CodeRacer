const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); 

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
