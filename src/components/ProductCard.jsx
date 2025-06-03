import React from 'react';
import PropTypes from 'prop-types';
import RatingWidget from "./RatingWidget";




const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>Average Rating:</strong> {product.avgRating.toFixed(1)} ⭐</p>
      <RatingWidget
        productId={product.id}
        onRatingSubmit={onRatingSubmit}
      />
    </div>
  );
};

// Optional: Styling for simplicity
const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px',
    maxWidth: '300px',
    boxShadow: '2px 2px 10px rgba(0,0,0,0.1)'
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '4px'
  }
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    avgRating: PropTypes.number,
    totalRatings: PropTypes.number
  }).isRequired,
  onRatingSubmit: PropTypes.func.isRequired
};

export default ProductCard;