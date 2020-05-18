import { NextPage } from "next";
import React from "react";

const Page: NextPage = () => {
  return (
    <ul>
      <li>
        <a href="/working-not-accessed-outside-root">
          Working, not accessed, lib outside root
        </a>
      </li>
      <li>
        <a href="/working-not-accessed-inside-root">
          Working, not accessed, lib inside root
        </a>
      </li>
      <li>
        <a href="/working-accessed-inside-root">
          Working, accessed, lib inside root
        </a>
      </li>
      <li>
        <a href="/broken-accessed-outside-root">
          Broken, accessed, lib outside root
        </a>
      </li>
    </ul>
  );
};

export default Page;
