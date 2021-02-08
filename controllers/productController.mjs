import ProductMjs from "../models/Product.mjs";
const Product = ProductMjs;
// create producte
const createProduct = async (req, res) => {
    console.log(req.body);
    // try catch
    try {
        // creation product
        let product;
        product = new Product(req.body);
        console.log(product);

        await product.save();
        res.send(product);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('An error ocurred during the creation of your product.')
        
    }
}

;

// obtain product
const obtainProduct = async (req, res) => {

    try {
        // statements
        const products = await Product.find();
        res.json(products);
        console.log(products);
    } catch(e) {
        // statements
        console.log(e);
        res.status(500).send('Could not locate the product.');
    }
}
//update
const updateProduct = async (req, res) => {

    try {
        // info body user
        const {name, category, location, price} = req.body;
        let product = await Product.findById(req.params.id);
        if(!product){
            res.status(404).json({ msg: "Product doesn't exist"});
        }

        product.name     = name;
        product.category = category;
        product.location = location;
        product.price    = price;

        //update
        product = await Product.findOneAndUpdate({ _id: req.params.id}, product, {new: true});
        res.json(product);
        console.log(`Your product has been updated: ${product}`);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Could not update the product.');
    }

}
// get one product
const obtainOneProduct = async (req, res) => {

    try {
        // info body user
        let product = await Product.findById(req.params.id);

        if(!product){
            res.status(404).json({ msg: "Product doesn't exist"});
        }

        // answer back
        res.json(product);
        console.log(`This is the product requested: ${product}`);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Could not pick up the product.');
    }

}
// delete product
const deleteProduct = async (req, res) => {

    try {
        // info body user
        let product = await Product.findById(req.params.id);

        if(!product){
            res.status(404).json({ msg: "Product doesn't exist"});
        }
        await Product.findOneAndRemove({ _id: req.params.id})
        // answer back
        res.json({msg: "Product deleted"});
        console.log(`Product deleted`);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Could not delete the product.');
    }

}
export default {createProduct, obtainProduct, updateProduct, obtainOneProduct, deleteProduct}