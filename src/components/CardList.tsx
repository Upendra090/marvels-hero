import { useEffect, useState } from "react";
import Article from "./Article";
import axios from "axios";

export default function CardList() {
  const [data, setData] = useState<any>({
    count: 0,
    characters: null,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCharacterData = async () => {
      const options = {
        method: "GET",
        url: "https://marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com/characters",
        params: {},
        headers: {
          "X-RapidAPI-Key":
            "e6a6fffec2msh4d0affe83629a98p1c2bdcjsn38e76447d5df",
          "X-RapidAPI-Host":
            "marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com",
        },
      };

      try {
        setLoading(true);
        const response = await axios.request(options);
        setData((state: any) => ({
          ...state,
          count: response.data.length,
          characters: response.data,
        }));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getCharacterData();
  }, []);

  return (
    <>
      <div>
        <span>Total: {data.count}</span>
      </div>
      <div className="grid grid-cols-4 gap-4 py-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {loading ? (
          <span>Loading...</span>
        ) : (
          data &&
          data?.characters?.map((character: any) => (
            <Article character={character} />
          ))
        )}
      </div>
    </>
  );
}
