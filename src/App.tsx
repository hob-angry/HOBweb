import React, { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Connect } from "./components/Connect";
import { QA } from "./components/QA";

export const App = () => {
  const [index, setIndex] = useState<number>(1);
  return (
    <div>
      <Header setIndex={setIndex} />
      {index === 1 && <Home></Home>}
      {index === 2 && <Connect></Connect>}
      {index === 3 && <QA></QA>}
      <div className="pb-20"></div>
    </div>
  );
};
