import type { FC } from "react";
import React, { useEffect, useState } from "react";

type Member = {
  name: string;
  icon: string;
  intro: string;
};

export const MemberList: FC = () => {
  const [MemberData, setMemberData] = useState<Member[]>([]);

  const SHEET_ID = import.meta.env.VITE_SHEET_ID;
  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  const RANGE = "E:G";

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
      const response = await fetch(url);
      const json = await response.json();

      const values: string[][] = json.values || [];

      const member: Member[] = values.map((row) => ({
        name: row[0] ?? "Name",
        icon: row[1] ?? "No Image",
        intro: row[2] ?? "Main text",
      }));

      setMemberData(member);
      console.log("取得データ詳細:", values);
    };

    fetchData();
  }, []);
  return (
    <div className="mt-10">
      {MemberData.map((item, i) => (
        <div
          className="m-5 md:m-auto lg:m-auto max-w-[600px] flex flex-col items-center"
          key={i}
        >
          <p className="flex justify-center text-[20px] font-bold mt-8">
            - {item.name} -
          </p>
          <div className="w-[300px] h-[300px] mt-5">
            <img src={item.icon} alt="memberIcon" />
          </div>
          <p className="mt-5 text-[20px] max-w-[600px]">{item.intro}</p>
        </div>
      ))}
    </div>
  );
};
