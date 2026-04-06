import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

function Home() {

  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 10; 

  // API CALL
  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res); 
      setLoading(false);
    });
  }, []);

  // FILTER
  const filteredProducts = products.filter((p: any) => {
    return (
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "all" || p.category === category)
    );
  });

  // RESET PAGE WHEN FILTER/SEARCH CHANGES
  useEffect(() => {
    setPage(1);
  }, [search, category]);

  // PAGINATION 
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const currentProducts = filteredProducts.slice(start, end);

  return (
    <div className="home">

      <h2 className="title">Products</h2>

      <div className="filters">

        <input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
        </select>

      </div>

      {/* LOADING */}
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <div className="grid">
            {currentProducts.map((p: any) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          {/* DYNAMIC PAGINATION */}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                className={page === p ? "active" : ""}
                onClick={() => setPage(p)}
              >
                {p}
              </button>
            ))}
          </div>
        </>
      )}

    </div>
  );
}

export default Home;