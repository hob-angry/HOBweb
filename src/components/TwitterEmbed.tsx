import { useEffect } from "react";

const TwitterEmbed: React.FC = () => {
  useEffect(() => {
    if (!(window as any).twttr) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.charset = "utf-8";
      document.body.appendChild(script);
    } else {
      (window as any).twttr.widgets.load();
    }
  }, []);

  return (
    <div className="m-auto mt-8 flex flex-col items-center justify-center mr-5 ml-5">
      <p className="flex justify-center text-[20px] font-bold mt-8 mb-8">
        - 公式 Xアカウント -
      </p>
      <blockquote
        className="twitter-tweet max-w-[800px] h-[600px]"
        data-media-max-width="560"
      >
        <p lang="ja" dir="ltr">
          🎮【eスポーツコミュニティサーバーOPEN】🎮
          <br />
          <br />
          🔗 詳細・参加はこちら ↓<br />
          <a href="https://t.co/OkmyajTHNL">https://t.co/OkmyajTHNL</a>
          <br />
          <a href="https://twitter.com/hazeofbrandy/status/1906611645482446922">
            March 31, 2025
          </a>
        </p>
      </blockquote>
    </div>
  );
};

export default TwitterEmbed;
