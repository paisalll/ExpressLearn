const express = require('express')
const app = express()

app.get('/', function (req: Request, res:any) {
    res.send('Hello World')
})

app.listen(3000, () => {
    console.log('AJIG');
})