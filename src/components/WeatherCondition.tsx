import { useEffect, useState } from "react";
import axios from "axios";
import { convertDate } from "../utils/helpers";
import DigitalClock from "./Clock";
import { Link } from "react-router-dom";
const apiKey = "0a995993a41f7e58958b0e457fa50e75";

export default function WeatherCondition() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();

  useEffect(() => {
    const getWeather = async () => {
      try {
        setLoading(true);

        navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const queries = {
            lat: lat,
            lon: lon,
            apiKey: apiKey,
            unit: "metric",
          };

          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${queries.lat}&lon=${queries.lon}&appid=${queries.apiKey}&units=${queries.unit}`;

          axios
            .get(url)
            .then((response) => {
              setData(response.data);
            })
            .catch((error) => {
              console.error(error);
            })
            .finally(() => {
              setLoading(false);
            });
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, []);

  console.log(data);

  return (
    <main className="min-h-screen h-full w-full py-16">
      {loading ? (
        <span>Loading...</span>
      ) : (
        data && (
          <div className="border border-gray-300 max-w-[600px] mx-auto p-5">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                Your Location:
                {data.name ? (
                  <h1 className="text-lg text-white ml-2">{data.name}</h1>
                ) : (
                  <>
                    <span className="font-medium text-lg ml-2">
                      lat: {data.coord.lat} &nbsp;
                    </span>
                    <span className="font-medium text-lg ml-2">
                      long: {data.coord.lon}
                    </span>
                  </>
                )}
              </div>
              <DigitalClock />
            </div>
            <div className="my-8 text-center w-full">
              <div className="my-3 flex items-center justify-center gap-4">
                <img
                  className="w-20 h-20"
                  src={`http://openweathermap.org/img/w/${data?.weather[0].icon}.png`}
                  alt=""
                />
                <h1 className="text-2xl text-white">{data.main.temp} °C</h1>
              </div>
              <h1 className="text-4xl font-semibold text-gray-300 mb-4">
                {data?.weather[0].main}
              </h1>
              <div className="flex my-10 justify-between gap-3 sm:flex-col">
                <div className="flex flex-col items-center shadow-lg border border-gray-950 py-3 px-8 rounded-md w-full">
                  <span className="text-base text-gray-400">Sunrise</span>
                  <span className="text-lg text-gray-200">
                    {convertDate(data.sys.sunrise)}
                  </span>
                </div>
                <div className="flex flex-col items-center shadow-lg border border-gray-950 py-3 px-8 rounded-md w-full">
                  <span className="text-base text-gray-400">Sunset</span>
                  <span className="text-lg text-gray-200">
                    {convertDate(data.sys.sunset)}
                  </span>
                </div>
              </div>
              <div className="flex my-10 justify-between gap-3 sm:flex-col">
                <div className="flex flex-col items-center shadow-lg border border-gray-950 py-3 px-8 rounded-md w-full">
                  <span className="text-base text-gray-400">Humidity</span>
                  <span className="text-lg text-gray-200">
                    {data.main.humidity} %
                  </span>
                </div>
                <div className="flex flex-col items-center shadow-lg border border-gray-950 py-3 px-8 rounded-md w-full">
                  <span className="text-base text-gray-400">Wind Speed</span>
                  <span className="text-lg text-gray-200">
                    {data.wind.speed} meter/sec
                  </span>
                </div>
              </div>
            </div>
          </div>
        )
      )}
      <div className="my-4 text-center px-6 py-2 bg-purple-700 rounded-md mx-auto text-white w-[200px]">
        <Link to={"/heroes"}>Check Marvel Hero</Link>
      </div>
    </main>
  );
}
