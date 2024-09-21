import React from "react";
import { json2csv } from "json-2-csv";

export const handleExport = (data) => {
  // Specify which fields to include in the CSV
  const formattedData = data.map((item) => ({
    _id: item._id,
    first_name: item.first_name,
    last_name: item.last_name,
    phone_number: item.phone_number,
    date_of_birth: item.date_of_birth,
    address: item.address,
    city: item.city,
    country: item.country,
    gender: item.gender,
    nationality: item.nationality,
    // Add any other fields you need
  }));

  // Convert JSON to CSV
  json2csv(formattedData, (err, csv) => {
    if (err) {
      console.error("Error converting to CSV:", err);
      return;
    }

    // Create a Blob from the CSV and download it
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "exported_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
};
