import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useParams } from "react-router-dom";
import Error from "../error";

export default function Detail() {
  const { id } = useParams();
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCharacterData = async () => {
      const options = {
        method: "GET",
        url: `https://marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com/characters/${id}`,
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
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getCharacterData();
  }, [id]);

  return (
    <>
      <Header />
      <section className="px-20 py-12">
        <div className="border border-gray-700 p-8 rounded-md">
          {loading ? (
            <span>Loading...</span>
          ) : !data ? (
            <Error />
          ) : (
            <div
              className="text-wrap bg-slate-900 backdrop-blur-md p-4 rounded"
              style={{ maxWidth: "100%", overflowX: "auto" }}
            >
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
