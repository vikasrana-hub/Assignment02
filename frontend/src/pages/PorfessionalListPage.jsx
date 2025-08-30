import axios from "axios";
import { Grid, List, Search } from "lucide-react";
import { useEffect, useState } from "react";

const PortfolioGallery = () => {
    const [portfolios, setPortfolios] = useState([]);
    const [filteredPortfolios, setFilteredPortfolios] = useState([]);
    const [viewMode, setViewMode] = useState("grid");
    const [searchTerm, setSearchTerm] = useState("");
    const [previewPortfolio, setPreviewPortfolio] = useState(null);

    // Fetch portfolios from API
    useEffect(() => {
        const fetchPortfolios = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/getUserInfo");
                
                setPortfolios(response.data);
                setFilteredPortfolios(response.data);
            } catch (error) {
                console.error("Error fetching portfolios:", error);
            }
        };
        fetchPortfolios();
    }, []);

    
    useEffect(() => {
        const filtered = portfolios.filter(
            (p) =>
                p.hero.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.hero.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.about.Bio.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPortfolios(filtered);
    }, [searchTerm, portfolios]);

    console.log("Portfolios:", filteredPortfolios);
    

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-md p-4">
                <h2 className="text-xl font-semibold mb-4">Filters</h2>

                {/* Search */}
                <div className="mb-6">
                    <div className="flex items-center border rounded-lg px-3 py-2">
                        <Search className="w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="ml-2 flex-1 outline-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 overflow-auto">
                {/* Header Controls */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Portfolio Gallery</h1>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setViewMode("grid")}
                            className={`p-2 rounded-lg ${viewMode === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"
                                }`}
                        >
                            <Grid className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setViewMode("list")}
                            className={`p-2 rounded-lg ${viewMode === "list" ? "bg-blue-500 text-white" : "bg-gray-200"
                                }`}
                        >
                            <List className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {filteredPortfolios.length > 0 ? (
                    <div
                        className={
                            viewMode === "grid"
                                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                : "space-y-4"
                        }
                    >
                        {filteredPortfolios.map((portfolio, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
                                onClick={() => window.open(`/Portfolio/${portfolio.Templet}/${portfolio._id}`, "_blank")}
                            >
                                <div className="flex items-center p-4">
                                    <img
                                        src={portfolio.hero.Image}
                                        alt={portfolio.hero.Name}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold">
                                            {portfolio.hero.Name}
                                        </h3>
                                        <p className="text-gray-600">{portfolio.hero.Title}</p>
                                    </div>
                                </div>
                                <div className="px-4 pb-4 text-sm text-gray-500">
                                    {portfolio.about.Bio}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 text-center mt-10">
                        No portfolios found.
                    </p>
                )}
            </div>
        </div>
    );
};

export default PortfolioGallery;
