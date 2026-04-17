"use client";

// TODO 1: React hook-уудыг импортлох

import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Product, ProductApiResponse } from "./types";
import { Cards } from "./components/Cards";

// TODO 2: Product төрөл зарлах
// API: https://dummyjson.com/products

// TODO 3: API хариуны төрөл зарлах

const PRODUCTS_PER_PAGE = 12;

export default function Home() {
  // TODO 4: State хувьсагчдыг зарлах (products, loading, error)
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [filter, setFilter] = useState("all");

  // TODO 5: Хайлтын state зарлах
  // search - хайлтын текст, эхлэх утга: ""

  // TODO 6: Pagination state зарлах

  // total - нийт бүтээгдэхүүний тоо, эхлэх утга: 0
  // skip  - алгассан тоо, эхлэх утга: 0
  useEffect(() => {
    let url = `https://dummyjson.com/products?limit=${PRODUCTS_PER_PAGE}&skip=${skip}`;
    if (search) {
      url = `https://dummyjson.com/products/search?q=${search}&limit=${PRODUCTS_PER_PAGE}&skip=${skip}`;
    } else if (filter !== "all") {
      url = `https://dummyjson.com/products/category/${filter}?limit=${PRODUCTS_PER_PAGE}&skip=${skip}`;
    }
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data: ProductApiResponse) => {
        if (search && filter !== "all") {
          const filteredProducts = data.products.filter(
            (e) => e.category === filter,
          );
          setProducts(filteredProducts);
          setTotal(filteredProducts.length);
        } else {
          setProducts(data.products);
          setTotal(data.total);
          setSkip(data.skip);
        }

        setLoading(false);
      })
      .catch(() => {
        setError(`Something went wrong :(`);
        setLoading(false);
      });
  }, [search, skip, filter]);
  const currentPage = skip / PRODUCTS_PER_PAGE + 1;
  const totalPages = Math.ceil(total / PRODUCTS_PER_PAGE);
  const handleCatChange = (newCat: string) => {
    setFilter(newCat);
    setSkip(0);
    setSearch("");
  };

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }
  // TODO 7: useEffect-ээр өгөгдөл татах
  // URL: search утгатай бол
  //   `https://dummyjson.com/products/search?q=${search}&limit=${PRODUCTS_PER_PAGE}&skip=${skip}`
  // Үгүй бол
  //   `https://dummyjson.com/products?limit=${PRODUCTS_PER_PAGE}&skip=${skip}`
  // dependency array: [search, skip]
  // data.total-г total state-д хадгалах
  //

  // TODO 8: Хайлт хийх handler
  // function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
  //   setSearch(e.target.value);
  //   setSkip(0);
  // }

  // TODO 9: Pagination handler-ууд
  // function handlePrev() { setSkip((s) => Math.max(0, s - PRODUCTS_PER_PAGE)); }
  // function handleNext() { setSkip((s) => s + PRODUCTS_PER_PAGE); }

  // TODO 10: Ачааллын төлөв (loading state)

  // TODO 11: Алдааны төлөв (error state)

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}
      <Header currentCategory={filter} handleCatChange={handleCatChange} />
      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        {/* Search */}
        <div className="mb-8">
          {/* TODO: value={search} onChange={handleSearch} холбох */}
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            placeholder="Бүтээгдэхүүн хайх..."
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm outline-none transition-colors focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-zinc-500 dark:focus:ring-zinc-800 sm:max-w-md"
          />
        </div>

        {loading ? (
          <div className="flex min-h-screen items-center justify-center bg-white dark:bg-zinc-950">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-300 border-t-zinc-900" />
          </div>
        ) : (
          <>
            <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
              {/* TODO 12: Бүтээгдэхүүний тоо харуулах */}
              {total} products found
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Cards product={product} key={product.id} />
              ))}
            </div>
          </>
        )}
        <div className="mt-10 flex items-center justify-center gap-4">
          {/* TODO: onClick={handlePrev} disabled={skip === 0} холбох */}
          <button
            disabled={currentPage === 1}
            onClick={() => {
              setSkip(skip - PRODUCTS_PER_PAGE);
            }}
            className="cursor-pointer rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            &larr; Өмнөх
          </button>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {/* TODO 14: Хуудасны дугаар харуулах */}
            {/* Хуудас {Math.floor(skip / PRODUCTS_PER_PAGE) + 1} / {Math.ceil(total / PRODUCTS_PER_PAGE)} */}
            Хуудас {currentPage} / {totalPages}
          </span>
          {/* TODO: onClick={handleNext} disabled={skip + PRODUCTS_PER_PAGE >= total} холбох */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => {
              setSkip(skip + PRODUCTS_PER_PAGE);
            }}
            className="cursor-pointer rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Дараах &rarr;
          </button>
        </div>
      </main>
      {/* Footer */}
      <footer className="mt-auto border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-6 py-4 text-center text-xs text-zinc-400">
          Exercise App &middot; Data from dummyjson.com
        </div>
      </footer>
    </div>
  );
}

// БОНУС TODO 14: Компонент болгон задлах
//   - app/types/product.ts
//   - app/components/ProductCard.tsx
//   - app/components/SearchBar.tsx
//   - app/components/Pagination.tsx
//   - app/components/ProductList.tsx
//   - app/page.tsx
