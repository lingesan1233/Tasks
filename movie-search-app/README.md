🎬 React Movie Explorer
This is a responsive React application that allows users to search for movies, explore details like release year, genre, and actors, and view a curated list of popular movies on load. It uses the OMDB API and is built with clean inline CSS and React Router.

🔥 Features
Search Functionality: Users can search movies, series, or episodes by keywords.

Type Filter: Dropdown filter to choose between movie, series, or episode. (Uses OMDB API filtering — no array.filter used.)

Popular Default List: Displays top/popular movies (e.g., Avengers) before the first search.

Pagination: Navigate through pages of search results.

Movie Detail View: Clicking on a movie opens a new page with details such as:

Poster

Title

Year

Genre

Plot

Actors

Ratings

Responsive Design: Clean layout with inline CSS and grid-aligned movie cards.

Error Handling: Gracefully handles missing results, API errors, and network issues.

🧱 Tech Stack
React.js

React Router v6

JavaScript

OMDB API

Inline CSS for styling (no frameworks)

📁 Folder Structure
bash
Copy
Edit
src/
├── components/
│   ├── SearchBar.jsx        # Search input and type dropdown
│   ├── MovieCard.jsx        # Each movie card with poster and title
│   ├── Pagination.jsx       # Page navigation controls
├── pages/
│   ├── Home.jsx             # Main search & result page
│   ├── MovieDetail.jsx      # Single movie details page
├── services/
│   └── omdbApi.js           # API service functions
├── App.jsx
├── main.jsx
└── index.css
🔑 Getting Started
Clone the Repository

bash
Copy
Edit
git clone https://github.com/your-username/movie-search-app.git
cd movie-search-app
Install Dependencies

bash
Copy
Edit
npm install
Add Your OMDB API Key

Register for a free API key: OMDB API

Create a .env file in your project root:

ini
Copy
Edit
VITE_OMDB_API_KEY=your_api_key_here
Start the Development Server

bash
Copy
Edit
npm run dev
🧪 Example Search
Search for:

Avengers – for movies

Friends – for series

Game of Thrones – for both series and episodes

🐞 Known Limitations
No support yet for saving favorites locally.

Images might not load if OMDB returns "N/A" as a poster.

