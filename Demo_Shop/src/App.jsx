import React from 'react';

import Product from './components/Demo_Shop';
import './components/Demo_Shop.css';

export default function App() {
    const products = [
        {
            title: "Product 1",
            price: 10,
            description: "First product",
        },
        
        {
            title: "Product 2",
            price: 20,
            description: "Second product",
        },
        {
          title: "Product 3",
          price: 30,
          description: "Third product",
      },
      
      {
          title: "Product 4",
          price: 40,
          description: "Fourth product",
      },
      {
        title: "Product 5",
        price: 50,
        description: "Fifth product",
    },
    
    {
        title: "Product 6",
        price: 60,
        description: "Sixth product",
    },
    ];
    return (
        <div>
            <h1>My Demo Shop</h1>
            <Product title={products[0].title} price={products[0].price} description={products[0].description} />
            <Product title={products[1].title} price={products[1].price} description={products[1].description} />
            <Product title={products[2].title} price={products[2].price} description={products[2].description} />
            <Product title={products[3].title} price={products[3].price} description={products[3].description} />
            <Product title={products[4].title} price={products[4].price} description={products[4].description} />
            <Product title={products[5].title} price={products[5].price} description={products[5].description} />
        </div>
    );
}