import React, { useState } from 'react';
import ProductCard from './components/ProductCard';

const App = () => {
  const initialProducts = [
    {
      id: 1,
      name: 'Wireless Headphones',
      description: 'High-quality wireless sound with noise cancellation.',
      image: 'https://via.placeholder.com/200x150?text=Headphones',
      avgRating: 4.0,
      totalRatings: 3
    },
    {
      id: 2,
      name: 'Smart Watch',
      description: 'Stay connected with this stylish smart watch.',
      image: 'https://via.placeholder.com/200x150?text=Smart+Watch',
      avgRating: 3.5,
      totalRatings: 2
    },
    {
      id: 3,
      name: 'Coffee Maker',
      description: 'Brew the perfect cup every time.',
      image: 'https://via.placeholder.com/200x150?text=Coffee+Maker',
      avgRating: 5.0,
      totalRatings: 1
    }
  ];

  const [products, setProducts] = useState(initialProducts);

  const handleRatingSubmit = (productId, newRating) => {
    setProducts(prevProducts =>
      prevProducts.map(product => {
        if (product.id === productId) {
          const newTotal = product.totalRatings + 1;
          const newAvg =
            ((product.avgRating * product.totalRatings) + newRating) / newTotal;
          return {
            ...product,
            avgRating: newAvg,
            totalRatings: newTotal
          };
        }
        return product;
      })
    );
  };

  return (
    <div style={styles.container}>
      <h1>Product Ratings</h1>
      <div style={styles.productGrid}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onRatingSubmit={handleRatingSubmit}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  productGrid: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap'
  }
};

export default App;