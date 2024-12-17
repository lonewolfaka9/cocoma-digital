import React, { useState } from "react";

const AllSeriesData = () => {
  const movies = [
    {
      id: 1,
      title: "Pushpa",
      year: "2024",
      genre: "action",
      industry: "Bollywood",
      language: "hindi",
      image: "../../Images/movieimg.svg",
    },
    {
      id: 2,
      title: "Movie 2",
      year: "2024",
      genre: "drama",
      industry: "Bollywood",
      language: "hindi",
      image: "../../Images/movieimg.svg",
    },
    {
      id: 3,
      title: "Movie 3",
      year: "2023",
      genre: "action",
      industry: "Hollywood",
      language: "english",
      image: "../../Images/movieimg.svg",
    },
    {
      id: 4,
      title: "Movie 4",
      year: "2023",
      genre: "drama",
      industry: "Kollywood",
      language: "tamil",
      image: "../../Images/movieimg.svg",
    },
    {
      id: 5,
      title: "Movie 5",
      year: "2022",
      genre: "action",
      industry: "Bollywood",
      language: "hindi",
      image: "../../Images/movieimg.svg",
    },
    {
      id: 6,
      title: "Movie 6",
      year: "2024",
      genre: "drama",
      industry: "Tollywood",
      language: "telugu",
      image: "../../Images/movieimg.svg",
    },
    {
      id: 7,
      title: "Movie 7",
      year: "2023",
      genre: "drama",
      industry: "Bollywood",
      language: "hindi",
      image: "../../Images/movieimg.svg",
    },
    {
      id: 8,
      title: "Movie 8",
      year: "2022",
      genre: "action",
      industry: "Bollywood",
      language: "hindi",
      image: "../../Images/movieimg.svg",
    },
    {
      id: 9,
      title: "Movie 9",
      year: "2022",
      genre: "drama",
      industry: "Hollywood",
      language: "english",
      image: "../../Images/movieimg.svg",
    },
    {
      id: 10,
      title: "Movie 10",
      year: "2021",
      genre: "action",
      industry: "Bollywood",
      language: "hindi",
      image: "../../Images/movieimg.svg",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");

  const itemsPerPage = 8;

  // Generate dynamic dropdown values
  const years = [...new Set(movies.map((movie) => movie.year))];
  const genres = [...new Set(movies.map((movie) => movie.genre))];
  const industries = [...new Set(movies.map((movie) => movie.industry))];
  const languages = [...new Set(movies.map((movie) => movie.language))];

  // Filter movies based on dropdown selections
  const filteredMovies = movies.filter((movie) => {
    return (
      (selectedYear === "all" || movie.year === selectedYear) &&
      (selectedGenre === "all" || movie.genre === selectedGenre) &&
      (selectedIndustry === "all" || movie.industry === selectedIndustry) &&
      (selectedLanguage === "all" || movie.language === selectedLanguage)
    );
  });

  // Paginate the filtered movies
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const moviesToShow = filteredMovies.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetFilters = () => {
    setSelectedYear("all");
    setSelectedGenre("all");
    setSelectedIndustry("all");
    setSelectedLanguage("all");
    setCurrentPage(1);
  };

  return (
    <div className="container mt-4">
      {/* Filter Section */}
      <div className="row mb-4 align-items-center">
        <div className="col-md-2 mb-2">
          {/* All Button */}
          <button className="btn btn-dark w-100" onClick={resetFilters}>
            All
          </button>
        </div>

        {/* Year Filter */}
        <div className="col-md-2 mb-2">
          <select
            className="form-select"
            onChange={(e) => {
              setSelectedYear(e.target.value);
              setCurrentPage(1);
            }}
            value={selectedYear}
          >
            <option value="all">All Years</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Genre Filter */}
        <div className="col-md-2 mb-2">
          <select
            className="form-select"
            onChange={(e) => {
              setSelectedGenre(e.target.value);
              setCurrentPage(1);
            }}
            value={selectedGenre}
          >
            <option value="all">All Genres</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        {/* Industry Filter */}
        <div className="col-md-2 mb-2">
          <select
            className="form-select"
            onChange={(e) => {
              setSelectedIndustry(e.target.value);
              setCurrentPage(1);
            }}
            value={selectedIndustry}
          >
            <option value="all">All Industries</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        {/* Language Filter */}
        <div className="col-md-2 mb-2">
          <select
            className="form-select"
            onChange={(e) => {
              setSelectedLanguage(e.target.value);
              setCurrentPage(1);
            }}
            value={selectedLanguage}
          >
            <option value="all">All Languages</option>
            {languages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Movie Grid */}
      <div className="row g-3">
        {moviesToShow.map((movie) => (
          <div key={movie.id} className="col-6 col-md-3">
            <div className="card shadow-sm border-0">
              <img
                src={movie.image}
                alt={movie.title}
                className="card-img-top"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {filteredMovies.length === 0 && (
        <div className="text-center mt-4">
          <p>No movies match the selected filters.</p>
        </div>
      )}
    </div>
  );
};

export default AllSeriesData;
