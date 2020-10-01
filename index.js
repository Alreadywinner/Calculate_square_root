const express = require('express');
const app = express();
//const path = require('path');
const axios = require('axios');
const squareRoute = require('./routes/squareRoute');


app.use('/api/',squareRoute);

const PORT = process.env.PORT || 5000;
//Serve Static assets if in production

//if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('client/build'));
//      app.get('*', (req, res) => {
//          res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//          res.json("hello ");
//     });
// }

app.listen(PORT,()=> console.log(`Server is ready at PORT ${PORT}`));