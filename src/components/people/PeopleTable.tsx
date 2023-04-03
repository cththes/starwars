import React from "react";
import { Table } from "antd";
import { CharactersType } from "../../types/types";

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

interface Props {
  people: any;
  pagination: any
  loading: any
}

const PeopleTable = (props: Props) => {
  const dataSource = props.people.map((item: CharactersType) => ({
    key: item.name,
    ...item
  }));

  return (
    <Table
      className="people-table"
      columns={columns}
      dataSource={dataSource}
      pagination={props.pagination}
      loading={props.loading}
    />
  );
};

export default PeopleTable;
