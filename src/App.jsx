import Homepage from "./pages/Homepage";
import MovieDetails from "./pages/MovieDetails";
import BookTicket from "./pages/BookTicket";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* Your routes and components */}
      <Routes>
        {/* Other routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:name" element={<MovieDetails />} />
        <Route path="/book_ticket" element={<BookTicket />} />
      </Routes>
    </Router>
  );
}

export default App;
