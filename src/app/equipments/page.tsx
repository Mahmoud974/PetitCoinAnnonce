import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Product from "@/components/ProductCard/Product";
import ProfileCard from "@/components/Profil";

import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />

      <div className="flex container justify-between mx-auto my-6">
        <Product />
        {/* <ProductCard /> */}
        {/* <ProfileCard /> */}
      </div>
      <Footer />
    </div>
  );
}
