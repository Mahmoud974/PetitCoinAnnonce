"use client";

import Product from "@/components/ProductCard/Product";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { slug, category } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const cat = String(category || "").toLowerCase();
    if (!cat) return;

    fetch(`/api/${cat}`, { cache: "no-store" })
      .then(async (res) => {
        if (!res.ok) throw new Error(`API error ${res.status}`);
        return res.json();
      })
      .then((data) => {
       
        setPosts(Array.isArray(data) ? data : (data.posts ?? []));
      })
      .catch((e) => {
        console.log(e);
        setPosts([]);
      });
  }, [category, slug]);

  return (
    <div className="flex container justify-between mx-auto mt-12">
      <Product posts={posts} />
    </div>
  );
}
