import { Grid } from "@mui/material";
import { useGetProductsQuery } from "../store/apiSlice";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import ProductCard from "../components/ProductCard";
import { useDebounce } from "../hooks/useDebounce";

export default function ProductListing() {
  const { data = [] } = useGetProductsQuery();
  const { search, category } = useSelector(s => s.ui);
  const dispatch = useDispatch();

  const debounced = useDebounce(search);

  const filtered = data.filter(p =>
    p.title.toLowerCase().includes(debounced.toLowerCase()) &&
    (!category || p.category === category)
  );

  return (
    <Grid container spacing={2}>
      {filtered.map(p => (
        <Grid item xs={12} md={4} key={p.id}>
          <ProductCard {...p} onAddToCart={() => dispatch(addToCart(p))}/>
        </Grid>
      ))}
    </Grid>
  );
}