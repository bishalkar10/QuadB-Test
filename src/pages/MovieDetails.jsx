import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
function MovieDetails() {
  const { name } = useParams(); // destructuring the name from the url
  const location = useLocation();
  const { genres, imageURL, runtime, summary, year } = location.state; // Destructuring the data from the location.state object. We are receiving from the MovieCard Component.
  // Parse the JSON string

  return (
    <div>
      <div className="p-3 bg-gradient-to-r from-indigo-200 to-white min-h-screen">
        <div className="flex justify-center">
          <div className="relative inline-block">
            <img className="mx-auto rounded-lg" src={imageURL} alt="poster" />
            <Link to="/book_ticket">
              <div className="transform grid place-content-center absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 h-16 w-16 rounded-full hover:bg-red-600 bg-red-500 text-white text-center">
                Book Ticket
              </div>
            </Link>
          </div>
        </div>

        <h1 className="text-center mt-10 mb-2 text-2xl">
          <b>{`${name} (${year})`}</b>
        </h1>
        <p>Genres : {genres}</p>
        <p> Runtime : {runtime} Minutes</p>
        <p className="my-1 font-semibold">Summery :</p>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
    </div>
  );
}

export default MovieDetails;
