import React, { useState, useEffect } from "react";
import PeopleFilters, { GENDER } from "./PeopleFilters";
import PeopleTable from "./PeopleTable";
import { getPeople } from "./utils";

const People = () => {
  const [people, setPeople] = useState([]);
  const [gender, setGender] = useState(GENDER.ALL);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPeople()
      .then((data) => {
        setPeople(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  let filteredPeople = people;
  if (gender !== GENDER.ALL) {
    filteredPeople = people.filter((item) => item.gender === gender);
  }

  const pagination = {
    showSizeChanger: false,
    total: filteredPeople.length
  };

  return (
    <div className="people">
      <h3>People</h3>
      <PeopleFilters gender={gender} setGender={setGender} />
      <PeopleTable
        people={filteredPeople}
        pagination={pagination}
        loading={loading}
      />
    </div>
  );
};

export default People;
