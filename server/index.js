const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ check: "done!", hello: "world"})
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);