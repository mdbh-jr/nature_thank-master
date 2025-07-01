import { Spin } from "antd";
import React, { ReactNode } from "react";

type ILoader = {
  isLoading: boolean;
  children?: ReactNode;
  msg?: string | ReactNode;
  isAnimation?: boolean;
};

const Loader = ({
  isLoading,
  children,
  msg = "Loading..",
  isAnimation = true,
}: ILoader) => {
  if (!children) return <div className="loader-without-child">{msg}</div>;
  return (
    <div
      className={`loader-wrapper ${
        !isAnimation ? "loader-without-animation" : ""
      }`}
    >
      {msg && isLoading && (
        <div className="loader">
          {isAnimation && (
            <div className="loading-spinner">
              {[...Array(5)].map((_, index) => (
                <Spin key={index} />
              ))}
            </div>
          )}
          {msg}
        </div>
      )}
      <div className={`${isLoading ? "disabled" : ""}`}>{children}</div>
    </div>
  );
};

export default Loader;
