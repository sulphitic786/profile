import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField
} from '@mui/material';
import { FlexBetween, FlexBox } from 'app/components/FlexBox';
import { H5, Paragraph } from 'app/components/Typography';
// import { addToCartByQty, removeFromCart } from 'app/redux/slices/cartSlice';
// import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CartRoot = styled(Card)(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' }
}));

const Cart = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const cart = useSelector((state) => state.cart);

  // const getTotalCost = () => {
  //   return cart.reduce((prev, curr) => prev + curr.price * curr.qty, 0);
  // };

  // const handleQtyChange = (product) => (event) => {
  //   const qty = Number(event.target.value);

  //   if (qty > 0) {
  //     dispatch(addToCartByQty({ ...product, qty }));
  //   }
  // };

  // const handleDeleteFromCart = (productId) => () => {
  //   dispatch(removeFromCart(productId));
  // };

  const navigate = useNavigate();
  // Local state to manage cart items
  const [cart, setCart] = useState([]);

  const getTotalCost = () => {
    return cart.reduce((prev, curr) => prev + curr.price * curr.qty, 0);
  };

  const handleQtyChange = (index) => (event) => {
    const qty = Number(event.target.value);

    // Update the quantity locally
    const updatedCart = [...cart];
    updatedCart[index] = { ...updatedCart[index], qty };
    setCart(updatedCart);
  };

  const handleDeleteFromCart = (index) => () => {
    // Remove item from the cart locally
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <CartRoot elevation={3}>
      <TableContainer>
        <Table sx={{ minWidth: 900 }}>
          <TableHead>
            <TableRow>
              <TableCell colSpan={3} sx={{ pl: 3 }}>
                Name
              </TableCell>

              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Total</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {cart.map((product) => (
              <TableRow key={product.id}>
                <TableCell colSpan={3} sx={{ pl: 3 }}>
                  <FlexBox gap={2}>
                    <Avatar
                      src={product.imgUrl}
                      alt={product.title}
                      sx={{ borderRadius: 2, width: 80, height: 80 }}
                    />
                    <Box>
                      <H5>{product.title}</H5>
                      <Paragraph color="text.secondary">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.It
                        has survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.
                      </Paragraph>
                    </Box>
                  </FlexBox>
                </TableCell>

                <TableCell align="center">
                  <H5>${product.price}</H5>
                </TableCell>

                <TableCell align="center">
                  <TextField
                    size="small"
                    name="amount"
                    type="number"
                    variant="outlined"
                    value={product.qty}
                    onChange={handleQtyChange(product)}
                    inputProps={{ style: { width: '60px' } }}
                  />
                </TableCell>

                <TableCell align="center">
                  <H5>${product.price * product.qty}</H5>
                </TableCell>

                <TableCell align="center">
                  <IconButton size="small" onClick={handleDeleteFromCart(product.id)}>
                    <Icon fontSize="small">clear</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {cart.length > 0 && (
        <FlexBetween p={3}>
          <Box gap={2} display="flex" alignItems="center">
            <TextField size="small" variant="outlined" placeholder="Discount Coupon" />

            <Button variant="contained" color="secondary">
              Apply
            </Button>

            <Button
              color="primary"
              variant="contained"
              onClick={() => navigate('/ecommerce/checkout')}
            >
              Checkout
            </Button>
          </Box>

          <FlexBetween flexShrink={0} flexBasis={400}>
            <H5>Total</H5>
            <H5>${getTotalCost().toFixed(2)}</H5>
          </FlexBetween>
        </FlexBetween>
      )}
    </CartRoot>
  );
};

export default Cart;
