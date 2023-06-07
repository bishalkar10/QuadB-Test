import { Link, useNavigate } from "react-router-dom";

export default function MovieCard({
  name,
  year,
  genres,
  imageURL,
  runtime,
  summary,
}) {
  const navigate = useNavigate();

  // data to be shared with MovieDetails component
  const detailsData = {
    //  we are not passing the name prop because we can get the name from the url
    genres,
    imageURL,
    runtime,
    summary,
    year,
  };

  return (
    <div>
      <div className="w-full max-w-2xl mx-auto  h-56 bg-gray-200 flex mt-5 gap-10 rounded-lg p-4">
        <div className="grid place-content-center flex-shrink-0">
          <img
            src={imageURL}
            alt={`${name} poster`}
            className="w-32 aspect-[210/295] rounded"
          />
        </div>

        <div className="w-full">
          <h2 className="text-xl">{`${name} (${year})`} </h2>
          <p>Genres : {genres}</p>
          {/* if Runtime is not available then render Not Availble */}
          <p>Runtime : {runtime ? `${runtime} minutes` : `Not Availble`}</p>

          <button
            onClick={() => {
              navigate(`/details/${name}`, { state: detailsData });
            }}
            className="block hover:bg-blue-600 transform hover:duration-150 hover:scale-105 mx-auto mt-5 w-20 p-2 px-4 rounded bg-blue-500 text-white"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
