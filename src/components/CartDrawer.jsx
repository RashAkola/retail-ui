import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  Divider
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  decreaseQty
} from "../store/cartSlice";

export default function CartDrawer({ open, onClose }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  // ✅ total price
  const total = items.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 350, p: 2 }}>
        {/* Header */}
        <Typography variant="h6" gutterBottom>
          Cart
        </Typography>

        <Divider sx={{ mb: 2 }} />

        {/* Empty state */}
        {items.length === 0 ? (
          <Typography>No items in cart</Typography>
        ) : (
          <>
            {/* Items */}
            {items.map((item) => (
              <Box
                key={item.id}
                sx={{
                  mb: 2,
                  p: 1,
                  border: "1px solid #ddd",
                  borderRadius: 2
                }}
              >
                <Typography variant="subtitle1">
                  {item.title}
                </Typography>

                <Typography variant="body2">
                  ${item.price}
                </Typography>

                {/* Quantity Controls */}
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <IconButton
                    size="small"
                    onClick={() => dispatch(decreaseQty(item.id))}
                  >
                    <RemoveIcon />
                  </IconButton>

                  <Typography sx={{ mx: 1 }}>
                    {item.qty}
                  </Typography>

                  <IconButton
                    size="small"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    <AddIcon />
                  </IconButton>

                  {/* Remove */}
                  <IconButton
                    size="small"
                    sx={{ ml: "auto" }}
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
            ))}

            <Divider sx={{ my: 2 }} />

            {/* Total */}
            <Typography variant="h6">
              Total: ${total.toFixed(2)}
            </Typography>

            {/* Checkout */}
            <Button
            disabled
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
            >
              Checkout
            </Button>
          </>
        )}
      </Box>
    </Drawer>
  );
}