import type { FC } from "react";
import React, { useEffect, useState } from "react";

type Rules = {
  title: string;
  rule: string;
};

export const Rules: FC = () => {
  const [RuleData, setRuleData] = useState<Rules[]>([]);

  const SHEET_ID = import.meta.env.VITE_SHEET_ID;
  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  const RANGE = "I:J";

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
      const response = await fetch(url);
      const json = await response.json();

      const values: string[][] = json.values || [];

      const ruleList: Rules[] = values.map((row) => ({
        title: row[0] ?? "Title",
        rule: row[1] ?? "Main text",
      }));

      setRuleData(ruleList);
      console.log("取得データ詳細:", values);
    };

    fetchData();
  }, []);
  return (
    <div className="mt-8">
      {RuleData.map((item, i) => (
        <div
          className="m-5 md:m-auto lg:m-auto max-w-[600px] flex flex-col items-center"
          key={i}
        >
          <p className="flex justify-center text-[20px] font-bold mt-8">
            - {item.title} -
          </p>
          <p className="mt-5 text-[20px]">{item.rule}</p>
        </div>
      ))}
    </div>
  );
};
