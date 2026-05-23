import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


const SkeletonCard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Skeleton height={400} style={{ marginBottom: "40px" }} />
      <Skeleton height={25} width="150px" style={{ marginBottom: "15px" }} />
      <div style={{ display: "flex", gap: "10px", marginBottom: "40px" }}>
        {[...Array(30)].map((_, i) => (
          <Skeleton key={i} height={150} width={100} style={{ borderRadius: "5px" }} />
        ))}
      </div>
      <Skeleton height={25} width="150px" style={{ marginBottom: "15px" }} />
      <div style={{ display: "flex", gap: "10px" }}>
        {[...Array(30)].map((_, i) => (
          <Skeleton key={i} height={150} width={100} style={{ borderRadius: "5px" }} />
        ))}
      </div>
      <Skeleton height={25} width="150px" style={{ marginBottom: "15px" }} />
      <div style={{ display: "flex", gap: "10px" }}>
        {[...Array(30)].map((_, i) => (
          <Skeleton key={i} height={150} width={100} style={{ borderRadius: "5px" }} />
        ))}
      </div>
      <Skeleton height={25} width="150px" style={{ marginBottom: "15px" }} />
      <div style={{ display: "flex", gap: "10px" }}>
        {[...Array(30)].map((_, i) => (
          <Skeleton key={i} height={150} width={100} style={{ borderRadius: "5px" }} />
        ))}
      </div>
      <Skeleton height={25} width="150px" style={{ marginBottom: "15px" }} />
      <div style={{ display: "flex", gap: "10px" }}>
        {[...Array(30)].map((_, i) => (
          <Skeleton key={i} height={150} width={100} style={{ borderRadius: "5px" }} />
        ))}
      </div>
      <Skeleton height={25} width="150px" style={{ marginBottom: "15px" }} />
      <div style={{ display: "flex", gap: "10px" }}>
        {[...Array(30)].map((_, i) => (
          <Skeleton key={i} height={150} width={100} style={{ borderRadius: "5px" }} />
        ))}
      </div>
      <Skeleton height={25} width="150px" style={{ marginBottom: "15px" }} />
      <div style={{ display: "flex", gap: "10px" }}>
        {[...Array(30)].map((_, i) => (
          <Skeleton key={i} height={150} width={100} style={{ borderRadius: "5px" }} />
        ))}
      </div>
      <Skeleton height={25} width="150px" style={{ marginBottom: "15px" }} />
      <div style={{ display: "flex", gap: "10px" }}>
        {[...Array(30)].map((_, i) => (
          <Skeleton key={i} height={150} width={100} style={{ borderRadius: "5px" }} />
        ))}
      </div>
      <Skeleton height={25} width="150px" style={{ marginBottom: "15px" }} />
      <div style={{ display: "flex", gap: "10px" }}>
        {[...Array(30)].map((_, i) => (
          <Skeleton key={i} height={150} width={100} style={{ borderRadius: "5px" }} />
        ))}
      </div>
    </div>
  );
};

export default SkeletonCard;