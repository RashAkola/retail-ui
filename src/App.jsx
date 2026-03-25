import { useState } from "react";
import Header from "./components/Header";
import ProductListing from "./pages/ProductListing";
import CartDrawer from "./components/CartDrawer";
import SearchFilterBar from "./components/SearchFilterBar";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header openCart={() => setOpen(true)} />
      <SearchFilterBar />
      <ProductListing />
      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}