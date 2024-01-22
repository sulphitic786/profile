import React, { useState } from 'react';
import { Button, Card, Grid, Icon, Rating, styled, useTheme } from '@mui/material';
import { AddToCartButton } from 'app/components';
import { FlexAlignCenter, FlexBetween } from 'app/components/FlexBox';
import { H3, H5, Paragraph } from 'app/components/Typography';
// import { addToCart, removeQtyFromCart } from "app/redux/slices/cartSlice";
// import { useDispatch, useSelector } from "react-redux";

const ProductCard = styled(Card)(() => ({
  padding: 16,
  position: 'relative',
  height: '100% !important',
  '&:hover': { '& .image-box-overlay': { opacity: 1 } }
}));

const IMG = styled('img')(() => ({ width: '100%' }));

const ImageBox = styled(FlexAlignCenter)(() => ({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 2,
  opacity: 0,
  position: 'absolute',
  background: 'rgba(0, 0, 0, 0.74)',
  transition: 'all 250ms ease-in-out'
}));

const ListProductCard = ({ product }) => {
  const theme = useTheme();
  // const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cart);

  // const cartItem = cart.find((item) => item.id === product.id);

  // const handleAddCart = () => dispatch(addToCart(product));
  // const handleRemoveCart = () => dispatch(removeQtyFromCart(product.id));

  // Local state to manage cart items
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
      <Grid container spacing={2} alignItems="center">
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <FlexAlignCenter position="relative">
            <IMG src={product.imgUrl} alt={product.title} />

            <ImageBox>
              <Button
                variant="outlined"
                onClick={handleAddCart}
                sx={{ background: theme.palette.background.default }}
              >
                <Icon sx={{ mr: 2 }}>shopping_cart</Icon>
                <span>Add to cart</span>
              </Button>
            </ImageBox>
          </FlexAlignCenter>
        </Grid>

        <Grid item sm={6} xs={12} sx={{ p: '12px' }}>
          <H3>{product.title}</H3>

          <FlexBetween mb={2}>
            <H5 sx={{ color: theme.palette.text.secondary }}>${product.price.toFixed(2)}</H5>
            <Rating
              size="small"
              readOnly={true}
              precision={0.5}
              name="half-rating"
              value={product.rating}
            />
          </FlexBetween>

          <Paragraph sx={{ mb: 4, color: theme.palette.text.secondary }}>
            {product.description.substring(0, 200)}
          </Paragraph>

          <AddToCartButton
            amount={cartItem?.qty || 0}
            totalUnit={product.totalUnit}
            handleAddCart={handleAddCart}
            handleRemoveCart={handleRemoveCart}
          />
        </Grid>
      </Grid>
    </ProductCard>
  );
};

export default ListProductCard;
