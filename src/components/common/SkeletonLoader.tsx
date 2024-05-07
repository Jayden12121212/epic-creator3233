import React from "react";
import { SkeletonProps } from "react-loading-skeleton";
import Skeleton from "react-loading-skeleton";

interface SkeletonLoaderProps extends SkeletonProps {}

const SkeletonLoader = ({ ...rest }: SkeletonLoaderProps) => {
  return (
    <Skeleton
      {...rest}
      baseColor="#272727"
      highlightColor="#323232"
      style={{ borderRadius: "4px", display: "block" }}
    />
  );
};

export default SkeletonLoader;
