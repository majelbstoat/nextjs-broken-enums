import { NextPage } from "next";
import React from "react";
import { MyEnum } from "../../lib/common/types";

// In this example, a value is accessed on MyEnum.
// The enum is imported from outside the application root.

const Page: NextPage = () => {
  const option: MyEnum = MyEnum.OPTION_ONE;
  return <div>Hello world {option}</div>;
};

export default Page;
