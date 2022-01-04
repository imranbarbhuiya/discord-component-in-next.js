// Import just as a type because the GlobalThis type augment
import "../styles.css";

import type {} from "@skyra/discord-components-core";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    window.$discordMessage = {
      profiles: {
        maximillian: {
          author: "Maximillian Osborn",
          avatar: `/avaone.png`,
          roleColor: "#f9d61b"
        },
        willard: {
          author: "Willard Walton",
          avatar: `/avatwo.png`,
          roleColor: "#ffb12f"
        },
        skyra: {
          author: "Skyra",
          avatar: "https://github.com/NM-EEA-Y.png",
          roleColor: "#1e88e5",
          bot: true,
          verified: true
        },
        favna: {
          author: "Favna",
          avatar: "https://github.com/favna.png",
          roleColor: "#a155ab"
        },
        discordjs: {
          author: "Discord.js Official #announcements",
          avatar: "/discordjs.png",
          roleColor: "#ffffff",
          server: true
        }
      }
    };
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default App;
