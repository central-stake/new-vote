import { Offcanvas, Stack } from "bootstrap";
import { CartItem } from "./ShoppingCardItem";
const cartItems = {
  id: 1
};
const ShoppingCart = (shoppingCartProps) => {
  const { isOpen, closeCart } = shoppingCartProps;
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total 30 Tokens Used over 600
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
