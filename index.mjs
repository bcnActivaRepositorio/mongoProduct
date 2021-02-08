
// express
import express from 'express'; // => Might not work if pointed to ES6
// server
const app = express();

// mongo db
 import connectDb  from './config/db.mjs';

 // cors
 import cors from 'cors';
 

//  connecting db
connectDb(); 

// middleware
app.use(cors());
app.use(express.json());


// api product
import  router  from './routes/product.mjs';
app.use('/api/products', router);

// routing
/* app.get('/', (req, res) => {
	res.send(console.log('Hello World'));
}); */

app.listen(4000, ()=> {
	console.log('server works perfectly');
});