import Product from "@/components/ProductCard/Product";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="flex container justify-between mx-auto my-6 ">
        <Product />
      </div>
    </div>
  );
}
