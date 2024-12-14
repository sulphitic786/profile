import { Suspense } from "react";
import { MatxLoading } from "../components";
import React from "react";

const MatxSuspense = ({ children }) => {
  return <Suspense fallback={<MatxLoading />}>{children}</Suspense>;
};

export default MatxSuspense;
