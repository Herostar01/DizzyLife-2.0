const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const DB = "DizzyLife";

// middleware 
// or the stuff that lets my front end speak
// to my rear end aka server side
app.use(cors());
app.use(express.json(), express.urlencoded({extended:true}));

// database connection link to file
// LIKE A BOSS!!!!!

require('./config/mongoose.config')(DB);
// const mongooseConnectionFunc = require('./config/mongoose.config');
// mongooseConnectionFunc(DB)

// connect the routes SHOUTOUT: JOHN
require("./routes/routes")(app);


// start the server SHOUTOUT JOHN IS THE BEST
app.listen(PORT, () => console.log(`Server firing on all engines port:${PORT}`)) 