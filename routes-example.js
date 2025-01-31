const express = require('express');
const app = express();


//root route

app.get('/',(req,res)=>{
    res.send('Welcome to our home page');

});

//get all products

app.get('/products', (req,res)=>{
    const products = [
        {id:1,
            label: 'Product 1'
        },
        {id:2,
            label: 'Product 2'
        },
        {id:3,
            label: 'Product 3'
        },
    ]


    res.json(products);
})

//get a single product
//colon : gives a dinamic route
app.get('/products/:id',(req,res)=>{
    const productsId = parseInt(req.params.id);
    //the value after params has to match the dynamic route!!!!
console.log(re.params.id)
    const products = [
        {id:1,
            label: 'Product 1'
        },
        {id:2,
            label: 'Product 2'
        },
        {id:3,
            label: 'Product 3'
        },
    ];
    const getSingleProduct = products.find(product=>product.id === productsId);
    if(getSingleProduct){
        res.json(getSingleProduct)
    }else{res.status(404).send('Product is not found')}
})

const port = 3000;
app.listen(port,()=>{
 
    console.log(`The seerver is running on port ${port}`)
})