import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateFilter = ({ fromDate, toDate, setFromDate, setToDate }) => {
  return (
    <div className="w-full shadow-lg px-4 py-2 border mb-8">
      <p className="text-lg font-bold p-2">Select Date Range</p>
      <div className="flex gap-2">
        <DatePicker
          selected={fromDate}
          onChange={(date) => {
            setFromDate(date);
          }}
          placeholderText="From Date"
          dateFormat="dd/MM/yyyy"
          className="border p-2 rounded-md w-full"
        />
        <DatePicker
          selected={toDate}
          onChange={(date) => {
            setToDate(date);
          }}
          placeholderText="To Date"
          dateFormat="dd/MM/yyyy"
          className="border p-2 rounded-md w-full"
        />
      </div>
    </div>
  );
};

export default DateFilter;
