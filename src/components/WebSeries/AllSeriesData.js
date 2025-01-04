import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllSeriesData = ({ allFilmData }) => {
  const [category, setCategory] = useState("All");
  const [year, setYear] = useState("All");
  const [filteredItems, setFilteredItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    if (allFilmData.marketing_house) {
      // Extract categories
      const allCategories = [
        "All",
        ...new Set(allFilmData.marketing_house.map((cat) => cat.category_name)),
      ];
      setCategories(allCategories);

      // Extract unique years from all items
      const allYears = [
        "All",
        ...new Set(
          allFilmData.marketing_house
            .flatMap((cat) => cat.items)
            .map((item) => item.year?.toString() || "Unknown") // Handle undefined years
        ),
      ].sort((a, b) => b.localeCompare(a)); // Sort years as strings
      setYears(allYears);

      // Filter items based on category and year
      const allItems = allFilmData.marketing_house.flatMap((cat) =>
        category === "All" || cat.category_name === category ? cat.items : []
      );

      const filteredByYear =
        year === "All"
          ? allItems
          : allItems.filter((item) => item.year?.toString() === year);

      setFilteredItems(filteredByYear);
    }
  }, [category, year, allFilmData]);

  return (
    <div className="container mt-4">
      {/* Filters */}
      <div className="row mb-4 align-items-center">
        {/* Category Filter */}
        <div className="col-md-3 mb-2">
          <label htmlFor="categoryFilter" className="form-label">
            Category
          </label>
          <select
            id="categoryFilter"
            className="form-select"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Year Filter */}
        <div className="col-md-3 mb-2">
          <label htmlFor="yearFilter" className="form-label">
            Year
          </label>
          <select
            id="yearFilter"
            className="form-select"
            onChange={(e) => setYear(e.target.value)}
            value={year}
          >
            {years.map((yr) => (
              <option key={yr} value={yr}>
                {yr}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Movie Grid */}
      <div className="row g-3">
        {filteredItems.map((item, index) => (
          <div key={index} className="col-6 col-md-3">
            <div className="card shadow-sm border-0">
              <Link to={`/Web-Series-Individual/${item.id}`}>
                <img
                  src={item.poster_image || "../../Images/movieimg.svg"} // Fallback for missing images
                  alt={item.title || "Untitled"}
                  className="card-img-top"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center mt-4">
          <p>No movies/items found for the selected filters.</p>
        </div>
      )}
    </div>
  );
};

export default AllSeriesData;
