import React, { useState } from 'react';
import { Box, Card, styled } from '@mui/material';
import { AddToCartButton } from 'app/components';
import { FlexAlignCenter } from 'app/components/FlexBox';
import { H5 } from 'app/components/Typography';
// import { addToCart, removeQtyFromCart } from "app/redux/slices/cartSlice";
// import { useDispatch, useSelector } from "react-redux";

const ProductCard = styled(Card)(() => ({
  textAlign: 'center',
  position: 'relative',
  height: '100% !important',
  '&:hover': { '& .image-box-overlay': { opacity: 1 } }
}));

const IMG = styled('img')(() => ({ width: '100%' }));

const PriceBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  justifyContent: 'center'
}));

const Price = styled(Box)(({ theme }) => ({
  top: 24,
  right: 0,
  zIndex: 4,
  margin: 0,
  color: 'white',
  fontWeight: '500',
  position: 'absolute',
  borderTopLeftRadius: 26,
  borderBottomLeftRadius: 26,
  padding: '8px 24px 8px 24px',
  background: theme.palette.primary.main
}));

const ImageBox = styled(FlexAlignCenter)(() => ({
  top: 0,
  left: 0,
  right: 0,
  zIndex: 2,
  bottom: 0,
  opacity: 0,
  position: 'absolute',
  background: 'rgba(0, 0, 0, 0.74)',
  transition: 'all 250ms ease-in-out'
}));

const GridProductCard = ({ product }) => {
  // const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cart);

  // const cartItem = cart.find((item) => item.id === product.id);

  // const handleAddCart = () => dispatch(addToCart(product));
  // const handleRemoveCart = () => dispatch(removeQtyFromCart(product.id));

  const [cart, setCart] = useState([]);

  const cartItem = cart.find((item) => item.id === product.id);

  const handleAddCart = () => {
    // Update the cart locally
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleRemoveCart = () => {
    // Remove the item from the cart locally
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  return (
    <ProductCard elevation={3}>
      <PriceBox>
        <Price>${product.price}</Price>
        <IMG src={product.imgUrl} alt={product.title} />
        <ImageBox />
      </PriceBox>

      <H5 p={3}>{product.title}</H5>

      <AddToCartButton
        amount={cartItem?.qty || 0}
        totalUnit={product.totalUnit}
        handleAddCart={handleAddCart}
        handleRemoveCart={handleRemoveCart}
        propStyle={{ mb: 2, px: 2, mx: 'auto' }}
      />
    </ProductCard>
  );
};

export default GridProductCard;
