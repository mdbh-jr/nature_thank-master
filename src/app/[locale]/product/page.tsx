"use client";
// app/[locale]/product/page.tsx
import handleApiCall from "@/api/handleApiCall";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
}

export default function ProductsPage() {
  const [productsData, setProductsData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      handleApiCall({
        variant: "shop",
        urlType: "getProducts",
        cb: (responseData, state) => {
          console.log(responseData, state);
          setProductsData(responseData);
        },
      });
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsData.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            className="group"
          >
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h2>
                <p className="text-gray-600 mt-1">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
