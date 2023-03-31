import React, { memo } from "react";
import { Select } from "antd";

export const GENDER = {
  ALL: "all",
  MALE: "male",
  FEMALE: "female",
  UNKNOWN: "unknown",
  NA: "n/a"
};

const genderOptions = Object.values(GENDER).map((item) => ({
  value: item,
  label: item.charAt(0).toUpperCase() + item.slice(1)
}));

const PeopleFilters = ({ gender, setGender }) => {
  return (
    <div className="people-filters">
      <span>Gender: </span>
      <Select
        defaultValue={GENDER.ALL}
        options={genderOptions}
        value={gender}
        onChange={setGender}
        className="gender-filter"
      />
    </div>
  );
};

export default memo(PeopleFilters);
