import Product from "@/components/ProductCard/Product";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="flex container justify-between mx-auto mt-12 ">
        <Product />
      </div>
    </div>
  );
}
