import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ProductList from "./ProductList";

interface Product {
  _id: string;
  title: string;
  price: number;
  brand: string;
  stock: number;
  images: string;
  description?: string;
  specs: any;
}

interface FilterState {
  search: string;
  sort: string;
  order: "asc" | "desc";
  page: number;
  limit: number;
}

const SearchPage = () => {
  const axiosPublic = useAxiosPublic();
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [filters, setFilters] = useState<FilterState>({
    search: searchParams.get("search") || "",
    sort: searchParams.get("sort") || "createdAt",
    order: (searchParams.get("order") as "asc" | "desc") || "desc",
    page: Number(searchParams.get("page")) || 1,
    limit: 10,
  });

  // Keep filters in sync when the URL search params change (e.g. user searches from NavBar
  // while already on /search). Use the serialized params string to trigger effect.
  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      search: searchParams.get("search") || "",
      sort: searchParams.get("sort") || prev.sort,
      order: (searchParams.get("order") as "asc" | "desc") || prev.order,
      page: Number(searchParams.get("page")) || 1,
      limit: Number(searchParams.get("limit")) || prev.limit,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.toString()]);

  const [meta, setMeta] = useState({
    total: 0,
    page: 1,
    limit: 10,
    totalPage: 1,
  });

  // =====================
  // FETCH PRODUCTS
  // =====================
  useEffect(() => {
    const fetchProducts = async () => {
      setError(null);

      try {
        const params = new URLSearchParams();

        if (filters.search) params.append("search", filters.search);
        params.append("sort", filters.sort);
        params.append("order", filters.order);
        params.append("page", String(filters.page));
        params.append("limit", String(filters.limit));

        const response = await axiosPublic.get(
          `/product/all-products?${params.toString()}`,
        );
        const data = response.data || {};
        const list = data.data || [];

        // Try to read meta from response, otherwise compute from available fields
        let metaFromResponse = data.meta;
        if (!metaFromResponse) {
          const total = data.total ?? list.length;
          const page = Number(filters.page) || 1;
          const limit = Number(filters.limit) || 10;
          const totalPage =
            limit > 0 ? Math.max(1, Math.ceil(total / limit)) : 1;
          metaFromResponse = { total, page, limit, totalPage };
        }

        setProducts(list);
        setMeta(metaFromResponse);

        // Do not write URL here — handlers update the URL to avoid circular updates
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to fetch products");
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, [filters, axiosPublic, setSearchParams]);

  // =====================
  // HANDLERS
  // =====================
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    let sort = "price";
    let order: "asc" | "desc" = "desc";
    if (value === "low-to-high") {
      sort = "price";
      order = "asc";
    } else if (value === "high-to-low") {
      sort = "price";
      order = "desc";
    } else {
      sort = "createdAt"; // Default
      order = "desc";
    }

    // compute new filters and update both state and URL params (to avoid fetch<>url loop)
    setFilters((prev) => ({
      ...prev,
      sort,
      order,
      page: 1,
    }));

    const newParams = new URLSearchParams();
    if (filters.search) newParams.append("search", filters.search);
    newParams.append("sort", sort);
    newParams.append("order", order);
    newParams.append("page", "1");
    newParams.append("limit", String(filters.limit));
    setSearchParams(newParams);
  };

  const handlePageChange = (newPage: number) => {
    setFilters((prev) => ({
      ...prev,
      page: newPage,
    }));

    const params = new URLSearchParams();
    if (filters.search) params.append("search", filters.search);
    params.append("sort", filters.sort);
    params.append("order", filters.order);
    params.append("page", String(newPage));
    params.append("limit", String(filters.limit));
    setSearchParams(params);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]  px-4 sm:px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        {/* HEADER SECTION */}
        <div className="mb-10">
          <div className="bg-white border border-slate-100 rounded-[28px] p-6 md:p-8 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-slate-50 text-slate-600 border border-slate-100">
                    Search
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-600 text-white shadow-sm shadow-blue-500/20">
                    {meta.total} {meta.total === 1 ? "Item" : "Items"}
                  </span>
                  {filters.search ? (
                    <span className="text-[11px] font-bold text-slate-400 truncate max-w-[60ch]">
                      Query:{" "}
                      <span className="text-slate-700">{filters.search}</span>
                    </span>
                  ) : null}
                </div>

                <p className="mt-2 text-sm sm:text-base font-medium text-slate-500 max-w-2xl">
                  Discover the latest high-performance hardware — compare
                  pricing and sort by what matters.
                </p>
              </div>

              {/* SORT CONTROL */}
              <div className="w-full sm:w-auto">
                <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl p-2">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest pl-2 whitespace-nowrap">
                    Sort
                  </span>

                  <div className="relative w-full sm:w-[240px]">
                    <select
                      onChange={handleSortChange}
                      value={
                        filters.sort === "price"
                          ? filters.order === "asc"
                            ? "low-to-high"
                            : "high-to-low"
                          : "default"
                      }
                      className="w-full appearance-none bg-white border border-slate-100 rounded-xl py-2.5 pl-4 pr-10 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/10 cursor-pointer transition-all hover:bg-slate-50"
                    >
                      <option value="default">Default</option>
                      <option value="low-to-high">Price: Low to High</option>
                      <option value="high-to-low">Price: High to Low</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="w-full">
          {error && (
            <div className="bg-rose-50 border border-rose-100 rounded-2xl p-5 mb-8 text-rose-600 text-sm font-bold flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              {
                "something went wrong while fetching products. Please try again."
              }
            </div>
          )}

          {products.length > 0 ? (
            <>
              <ProductList products={products} />

              {/* PAGINATION */}
              {meta.totalPage > 1 && (
                <div className="flex justify-center items-center gap-4 mt-8">
                  <button
                    disabled={meta.page === 1}
                    onClick={() => handlePageChange(meta.page - 1)}
                    className="px-4 py-2 text-sm font-bold rounded-md bg-transparent border border-transparent text-slate-700 hover:text-slate-900 disabled:opacity-40"
                  >
                    PREV
                  </button>

                  <nav className="flex items-center gap-2 bg-white p-2 rounded-md border border-slate-100 shadow-sm">
                    {Array.from(
                      { length: meta.totalPage },
                      (_, i) => i + 1,
                    ).map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`min-w-[36px] h-10 flex items-center justify-center text-sm font-bold rounded-md transition-all duration-200 ${
                          meta.page === pageNum
                            ? "bg-red-600 text-white shadow-md"
                            : "bg-white text-slate-700 border border-slate-100 hover:bg-slate-50"
                        }`}
                      >
                        {pageNum}
                      </button>
                    ))}
                  </nav>

                  <button
                    disabled={meta.page === meta.totalPage}
                    onClick={() => handlePageChange(meta.page + 1)}
                    className="px-4 py-2 text-sm font-bold rounded-md bg-transparent border border-transparent text-slate-700 hover:text-slate-900 disabled:opacity-40"
                  >
                    NEXT
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-32 bg-white rounded-[40px] shadow-sm border border-slate-100">
              <div className="w-24 h-24 bg-slate-50 rounded-[30%] flex items-center justify-center mx-auto mb-8">
                <span className="text-5xl">📦</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">
                Catalog is Empty
              </h3>
              <p className="text-slate-400 font-medium max-w-sm mx-auto text-sm leading-relaxed">
                We couldn't locate any hardware matching your current criteria.
                Adjust your search or clear filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default SearchPage;
