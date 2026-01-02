import type { FC } from "react";

import { Rules } from "./Rules";
import { InviteDiscord } from "./InviteDiscord";
import TwitterEmbed from "./TwitterEmbed";

export const Connect: FC = () => {
  return (
    <div>
      <TwitterEmbed></TwitterEmbed>
      <Rules></Rules>
      <InviteDiscord></InviteDiscord>
    </div>
  );
};
