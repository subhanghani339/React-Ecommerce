import React from "react";

const FormatPrice = ({ price }) => {
  return Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(price / 100);
};

export default FormatPrice;
