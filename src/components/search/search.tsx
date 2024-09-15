"use client";
import { SearchIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { fetchProducts } from "@/service/query/fetch-products"; // Yangi fayldan import
import { productTypes } from "@/service/types/products";
import { SearchCard } from "./search-card";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<productTypes[]>([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts(debouncedSearchTerm);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, [debouncedSearchTerm]);

  return (
    <div className="relative">
      <div className="flex max-w-[930px] w-full border rounded-lg border-primary justify-between items-center h-12">
        <span className="p-3">
          <SearchIcon />
        </span>
        <Input
          className="border-none"
          placeholder="Qidirish"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <Button className="rounded-l-none w-28 h-full">Filter</Button>
      </div>

      <div className="absolute z-50 w-full">
        {searchTerm.length === 0 ? (
          ""
        ) : products.length > 0 ? (
          <div className="mt-5 bg-slate-500 overflow-y-scroll h-72 lg:h-[500px] z-2 grid grid-cols-1 gap-5 p-3 md:p-5 w-full border rounded-lg shadow-md shadow-primary bg-special max-w-screen-xl">
            {products.map((product) => (
              <SearchCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};
