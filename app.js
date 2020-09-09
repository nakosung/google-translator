const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 5000;

const translate  = require('google-translate-open-api').default;
 
app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
  res.send('Hello World!');
});
app.post('/t',async (req,res) => {    
    const [t,to] = req.body;
    const result = await translate(t, {
        tld: "cn",
        to: to,
    });
    const data = result.data[0];
    res.json(data)
})
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}!`);
});