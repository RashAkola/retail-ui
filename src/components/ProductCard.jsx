import { Card, CardContent, Typography, Button } from "@mui/material";

export default function ProductCard({ title, price, imageUrl, rating, onAddToCart }) {
  return (
    <Card sx={{ p: 2 }}>
      <img
        src={imageUrl}
        onError={(e) => (e.target.src = "https://placehold.co/400")}
        style={{ width: "100%" }}
      />
      <CardContent>
        <Typography>{title}</Typography>
        <Typography>${price}</Typography>
        <Typography>⭐ {rating}</Typography>
        <Button onClick={onAddToCart}>Add to Cart</Button>
      </CardContent>
    </Card>
  );
}