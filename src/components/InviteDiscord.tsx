import type { FC } from "react";

export const InviteDiscord: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center m-auto mt-10">
      <p className="flex justify-center text-[25px] md:text-[30px] lg:text-[35px] font-bold">
        - invite -
      </p>
      <p className="mt-5 mr-5 ml-5 text-[20px] max-w-[600px]">
        ルールを確認したうえで、サーバー参加後に「あなたの生年月日」を記載して承認されるのをお待ちください。承認された後は、「🔰｜はじめに」でルールの再確認とリアクションを行い、「🔰｜ロール付与」で遊ぶゲームを選択してください。
      </p>
      <div className="mt-8">
        <button className="btn btn-xl bg-indigo-600">
          <a
            className="text-white"
            href="https://discord.gg/edrj3B3HFf"
            target="_blank"
          >
            discordへ招待
          </a>
        </button>
      </div>
    </div>
  );
};
