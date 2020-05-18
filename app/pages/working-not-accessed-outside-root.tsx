import { NextPage } from "next";
import React from "react";
import { MyEnum } from "../../lib/common/types";

// In this example, no values are accessed on MyEnum.

const Page: NextPage = () => {
  const option: MyEnum = 1;
  return <div>Hello world {option}</div>;
};

export default Page;
