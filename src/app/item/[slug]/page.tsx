import Product from "@/components/ProductCard/Product";
import React from "react";

export default async function page() {
  const data = await fetch('http://localhost:3000/api/users', {
    cache: 'no-store'
  });
  
  const posts = await data.json();

  
  return (
    <div>
      <div className="flex container justify-between mx-auto mt-12 ">
        <Product posts={posts} />
      </div>
    </div>
  );
}
