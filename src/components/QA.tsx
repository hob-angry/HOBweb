import type { FC } from "react";
import React, { useEffect, useState } from "react";

type QAlist = {
  title: string;
  answer: string;
};

export const QA: FC = () => {
  const [QuestionData, setQuestionData] = useState<QAlist[]>([]);

  const SHEET_ID = import.meta.env.VITE_SHEET_ID;
  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  const RANGE = "L:M";

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
      const response = await fetch(url);
      const json = await response.json();

      const values: string[][] = json.values || [];

      const QueAns: QAlist[] = values.map((row) => ({
        title: row[0] ?? "Question",
        answer: row[1] ?? "Answer",
      }));

      setQuestionData(QueAns);
      console.log("取得データ詳細:", values);
    };

    fetchData();
  }, []);
  return (
    <div className="mt-10">
      <div>
        <p className="flex justify-center text-[25px] md:text-[30px] lg:text-[35px] font-bold">
          - Q & A -
        </p>
        <p className="mt-5 mr-5 ml-5 text-[20px] flex justify-center">
          お問い合わせはこちらから回答させていただきます。
          <br />
          運営陣が確認でき次第、回答させていただきます。
          <br />
          お答えできない内容に関しては返信いたしかねます。
        </p>
      </div>
      <div className="flex justify-center mt-10">
        <button className="btn btn-xl bg-orange-400">
          <a href="https://forms.gle/yRL5L8bM8W2wMJWt5" target="_blank">
            お問い合わせはこちらから
          </a>
        </button>
      </div>
      {QuestionData.map((item, i) => (
        <div
          className="mt-10 mr-5 ml-5 md:m-auto lg:m-auto max-w-[600px] flex flex-col items-center"
          key={i}
        >
          <p className="flex text-[20px] mt-8">Q. {item.title}</p>
          <p className="mt-5 text-[20px] max-w-[600px]">A.{item.answer}</p>
        </div>
      ))}
    </div>
  );
};



