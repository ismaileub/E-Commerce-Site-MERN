import React from "react";

interface FilterState {
  search: string;
  brand: string;
  minPrice: number | "";
  maxPrice: number | "";
  sort: string;
  order: "asc" | "desc";
  page: number;
  limit: number;
}

interface SortingOptionsProps {
  filters: FilterState;
  onFilterChange: (newFilters: Partial<FilterState>) => void;
}

const SortingOptions: React.FC<SortingOptionsProps> = ({
  filters,
  onFilterChange,
}) => {
  // =====================
  // HANDLE SORT FIELD CHANGE
  // =====================
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ sort: e.target.value });
  };

  // =====================
  // HANDLE SORT ORDER CHANGE
  // =====================
  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ order: e.target.value as "asc" | "desc" });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 w-full">
        <label
          htmlFor="sort-field"
          className="text-sm font-semibold text-gray-800 whitespace-nowrap"
        >
          Sort By:
        </label>
        <select
          id="sort-field"
          value={filters.sort}
          onChange={handleSortChange}
          className="w-full sm:w-auto px-3 py-2 border-2 border-gray-300 rounded-lg bg-gray-50 appearance-none bg-no-repeat bg-right cursor-pointer focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
          style={{
            backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
            backgroundPosition: "right 6px center",
            backgroundSize: "18px",
            paddingRight: "32px",
          }}
        >
          <option value="price">Price</option>
          <option value="title">Title</option>
          <option value="createdAt">Newest</option>
          <option value="stock">Stock</option>
        </select>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 w-full">
        <label
          htmlFor="sort-order"
          className="text-sm font-semibold text-gray-800 whitespace-nowrap"
        >
          Order:
        </label>
        <select
          id="sort-order"
          value={filters.order}
          onChange={handleOrderChange}
          className="w-full sm:w-auto px-3 py-2 border-2 border-gray-300 rounded-lg bg-gray-50 appearance-none bg-no-repeat bg-right cursor-pointer focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
          style={{
            backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
            backgroundPosition: "right 6px center",
            backgroundSize: "18px",
            paddingRight: "32px",
          }}
        >
          <option value="desc">High to Low</option>
          <option value="asc">Low to High</option>
        </select>
      </div>
    </div>
  );
};

export default SortingOptions;
