import React, { useEffect, useRef, useState } from "react";
import propTypes from "prop-types";
import { DateRange } from "react-date-range";
import formatDate from "utils/formatDate";
import { IcCalendar } from "assets";

import "./index.scss";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";

export default function InputDate(props) {
  const { value, placeholder, name } = props;
  const [isShowed, setIsShowed] = useState(false);

  //   console.log(placeholder);s

  const datePickerChange = (value) => {
    const target = {
      target: {
        value: value.selection,
        name: name,
      },
    };
    props.onChange(target);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const refDate = useRef(null);
  const handleClickOutside = (event) => {
    if (refDate && !refDate.current.contains(event.target)) {
      setIsShowed(false);
    }
  };

  const check = (focus) => {
    focus.indexOf(1) < 0 && setIsShowed(false);
  };

  const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}${
    value.endDate ? " - " + formatDate(value.endDate) : ""
  }`;

  return (
    <div
      ref={refDate}
      className={["input-date mb-3", props.outerClassName].join(" ")}
    >
      <div className="input-group">
        <div className="input-graoup-prepend bg-gray-900">
          <span className="input-group-text">
            <img src={IcCalendar} alt="icon calender" />
          </span>
        </div>
        <input
          readOnly
          type="text"
          className="form-control"
          value={displayDate}
          palceholder={placeholder}
          onClick={() => setIsShowed(!isShowed)}
        />
        {isShowed && (
          <div className="date-range-wrapper">
            <DateRange
              editableDateInputs={true}
              onChange={datePickerChange}
              moveRangeOnFirstSelection={false}
              onRangeFocusChange={check}
              ranges={[value]}
            />
          </div>
        )}
      </div>
    </div>
  );
}

InputDate.propTypes = {
  value: propTypes.object,
  onChange: propTypes.func,
  palceholder: propTypes.string,
  outerClassName: propTypes.string,
};
