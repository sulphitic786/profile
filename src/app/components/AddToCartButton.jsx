import { Button, Icon, styled } from "@mui/material";
import { FlexAlignCenter } from "./FlexBox";

const ButtonContainer = styled("div")({
  width: 160,
  display: "flex",
  justifyContent: "space-between",
});

const ProductPrice = styled(FlexAlignCenter)(({ theme }) => ({
  width: 160,
  flexGrow: "1",
  background: theme.palette.background.paper,
}));

const AddToCartButton = ({
  color,
  amount,
  propStyle,
  totalUnit,
  handleAddCart,
  handleRemoveCart,
}) => {
  return (
    <div>
      {amount === 0 && (
        <Button sx={propStyle} variant="contained" color="primary" onClick={handleAddCart}>
          <Icon sx={{ mr: 1 }} fontSize="small">
            shopping_cart
          </Icon>
          Add To Cart
        </Button>
      )}

      {amount > 0 && (
        <ButtonContainer sx={propStyle}>
          <Button
            size="small"
            color="primary"
            variant="contained"
            sx={{ p: 1, minWidth: 32 }}
            onClick={handleRemoveCart}
          >
            <Icon fontSize="small">remove</Icon>
          </Button>

          <ProductPrice>{amount}</ProductPrice>

          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={handleAddCart}
            sx={{ p: 1, minWidth: 32 }}
            disabled={amount === totalUnit}
          >
            <Icon fontSize="small">add</Icon>
          </Button>
        </ButtonContainer>
      )}
    </div>
  );
};

export default AddToCartButton;
