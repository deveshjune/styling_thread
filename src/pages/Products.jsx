import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import './Products.css';

const products = [
  {
    id: 1,
    name: 'Utility Shacket',
    price: 899,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SHACKET%20JACKET%20PLEECE%20_%20JAKET%20PRIA%20JACKET%20_%20JAKET%20PREMIUM_https___shope_ee_9URcJv5AvI-S00AagjMrGwqGgHlFeJP0klzmgczrQ.jpeg',
    description: 'Premium brown utility jacket with multiple pockets, perfect for layering',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Outerwear'
  },
  {
    id: 2,
    name: 'Summer Flow Dress',
    price: 5999,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-jannet-corgi-370000-995978.jpg-kN5R1TrIryJxJoVP5DZXxAjn6sTiTI.jpeg',
    description: 'Elegant red summer dress with layered design and spaghetti straps',
    sizes: ['XS', 'S', 'M', 'L'],
    category: 'Dresses'
  },
  {
    id: 3,
    name: 'Oversized Tee',
    price: 399,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oversized%20Extended%20Neck%20Heavy%20T-shirt%20_%20boohooMAN%20USA-dFJTpqiJZmK1kjOkTC6AkXWSCcR1Zo.jpeg',
    description: 'Comfortable brown oversized t-shirt with extended neck detail',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'T-Shirts'
  },
  {
    id: 4,
    name: 'Classic Light Wash Jeans',
    price: 1999,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-dmitriy-steinke-559643503-17503375.jpg-amiVN8vbvOcZDrn8QVCE1Mv5rgvNoW.jpeg',
    description: 'Timeless light wash jeans with a comfortable regular fit',
    sizes: ['28', '30', '32', '34', '36'],
    category: 'Jeans'
  },
  {
    id: 5,
    name: 'Dark Denim Jacket',
    price: 7999,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-nazar-aslan-443954785-29656489.jpg-QkWVqKnCq7MrUxvHtB36T5rsKeubu5.jpeg',
    description: 'Classic dark wash denim jacket with button closure',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Outerwear'
  }
];

function Products() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map(product => product.category))];
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="products">
      <h1>Our Products</h1>
      
      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">₹{product.price}</p>
              <div className="product-sizes">
                <span>Available Sizes: </span>
                {product.sizes.join(', ')}
              </div>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;





