import type { FC } from "react";
import React, { useEffect, useState } from "react";

type WordData = {
  title: string;
  body: string;
};

export const Intro: FC = () => {
  const [data, setData] = useState<WordData[]>([]);

  const SHEET_ID = import.meta.env.VITE_SHEET_ID;
  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  const RANGE = "B:D";

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
      const response = await fetch(url);
      const json = await response.json();

      const values: string[][] = json.values || [];

      const words: WordData[] = values.map((row) => ({
        title: row[0] ?? "タイトルなし",
        body: row[1] ?? "データなし",
      }));

      setData(words);
      console.log("取得データ詳細:", values);
    };

    fetchData();
  }, []);

  return (
    <div className="mt-10">
      {data.map((item, i) => (
        <div
          className="m-5 md:m-auto lg:m-auto max-w-[600px] flex flex-col items-center"
          key={i}
        >
          <h2 className="flex justify-center text-[25px] md:text-[30px] lg:text-[35px] font-bold">
            - {item.title} -
          </h2>
          <p className="mt-4 text-[20px]">{item.body}</p>
        </div>
      ))}
    </div>
  );
};
