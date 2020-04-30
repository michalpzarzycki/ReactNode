const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ check: "done!"})
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);