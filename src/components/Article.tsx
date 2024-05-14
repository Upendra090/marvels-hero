import { Link } from "react-router-dom";

interface IArticle {
  character: any;
}

export default function Article({ character }: IArticle) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-2">
        <h5 className="text-lg font-bold tracking-tight text-gray-400">
          {character.name}
        </h5>
        <p className="text-sm text-gray-500 py-3">{character.description}</p>
        <p className="text-sm text-gray-500 py-3">
          Alias: {character?.allies?.join(", ")}
        </p>
        <Link
          to={`/${character.id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
