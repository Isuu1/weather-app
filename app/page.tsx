"use client";
import { useQuery } from "@tanstack/react-query";
import styles from "./styles/Home.module.scss";
import Image from "next/image";

type WeatherData = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export default function Home() {
  const { isPending, error, data } = useQuery<WeatherData>({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      ).then((res) => res.json()),
  });

  if (isPending) return <div className="div">Loading data...</div>;

  if (error)
    return (
      <div className="h1">Error loading data {error.message}</div>
    );

  console.log(data);

  return (
    <div className="page">
      <div className={styles.weatherContainer}>
        <div className={styles.weatherContainer__sidebar}>
          <input type="text" placeholder="Search city" />
          <p>{data.name}</p>
          <p>{data.weather[0].description}</p>
          <Image
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            width={60}
            height={60}
            alt="weather icon"
          />
        </div>
      </div>
    </div>
  );
}
