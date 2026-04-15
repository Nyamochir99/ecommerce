import React from "react";

const Categories = [
  { label: "All", category: "all" },
  { label: "Beauty", category: "beauty" },
  { label: "Fragrances", category: "fragrances" },
  { label: "Furniture", category: "furniture" },
  { label: "Groceries", category: "groceries" },
  { label: "Home Decoration", category: "home-decoration" },
  { label: "Kitchen Accessories", category: "kitchen-accessories" },
  { label: "Laptops", category: "laptops" },
  { label: "Smartphones", category: "smartphones" },
  { label: "Sports Accessories", category: "sports-accessories" },
  { label: "Vehicle", category: "vehicle" },
];

export const Header = ({
  currentCategory,
  handleCatChange,
}: {
  currentCategory: string;
  handleCatChange: (cat: string) => void;
}) => {
  return (
    <>
      <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Product Store
          </h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Browse our collection of products
          </p>
        </div>
      </header>

      {/* Category Navigation */}
      {/* TODO 15: Идэвхтэй категорийг тодруулах, дарахад тухайн категорийн бүтээгдэхүүн шүүх */}
      {/* API: https://dummyjson.com/products/category/{category} */}
      <nav className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-6">
          <ul className="flex gap-1 overflow-x-auto py-3 no-scrollbar">
            {Categories.map((cat) => (
              <li key={cat.category}>
                <button
                  onClick={() => {
                    handleCatChange(cat.category);
                  }}
                  className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium ${currentCategory === cat.category ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900" : "transition-colors text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"}`}
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
