import type { FC } from "react";

import { Intro } from "./Intro";
import { MemberList } from "./MemberList";

export const Home: FC = () => {
  return (
    <div>
      <Intro></Intro>
      <MemberList></MemberList>
    </div>
  );
};
