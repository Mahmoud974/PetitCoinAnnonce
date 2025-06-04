import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import Product from "@/components/ProductCard/Product";

import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />

      <div className="flex container justify-between mx-auto my-6">
        <Product />
      </div>
      <Footer />
    </div>
  );
}
