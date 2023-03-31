import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name"
  },
  {
    title: "Gender",
    dataIndex: "gender"
  },
  {
    title: "Birth Year",
    dataIndex: "birth_year"
  },
  {
    title: "Mass",
    dataIndex: "mass"
  },
  {
    title: "Height",
    dataIndex: "height"
  },
  {
    title: "Eye Color",
    dataIndex: "eye_color"
  },
  {
    title: "Hair Color",
    dataIndex: "hair_color"
  },
  {
    title: "Skin Color",
    dataIndex: "skin_color"
  }
];

const PeopleTable = ({ people, pagination, loading }) => {
  const dataSource = people.map((item) => ({
    key: item.name,
    ...item
  }));

  return (
    <Table
      className="people-table"
      columns={columns}
      dataSource={dataSource}
      pagination={pagination}
      loading={loading}
    />
  );
};

export default PeopleTable;
