import React, { useState, useEffect } from "react";
import List from "./List";

const list = [
  {
    id: "1811063560",
    name: "Nguyễn Minh Tiến",
  },
  {
    id: "1811061726",
    name: "Lê Hoàng Bảo",
  },
  {
    id: "1811062910",
    name: "Nguyễn Tiến Đạt",
  },
  {
    id: "1811063333",
    name: "Lê Đức Nghị",
  },
  {
    id: "1711060012",
    name: "Nguyễn Tuấn Anh",
  },
  {
    id: "1811060165",
    name: "Trương Tấn Đạt",
  },
  {
    id: "1811062926",
    name: "Nguyễn Xuân Hà",
  },
  {
    id: "1811062123",
    name: "Lê Quang Hoàng",
  },
  {
    id: "1811062612",
    name: "Ngô Minh Khỏe",
  },
  {
    id: "1811062962",
    name: "Phùng Quốc Hùng",
  },
  {
    id: "1811062483",
    name: "Vũ Đức Long",
  },
  {
    id: "1811063029",
    name: "Trần Phát Long",
  },
  {
    id: "1811770007",
    name: "Huỳnh Nguyễn Thành Đạt",
  },
  {
    id: "1811063087",
    name: "Nguyễn Tấn Phúc",
  },
  {
    id: "1811061677",
    name: "Trần Đình Quý",
  },
  {
    id: "1811063305",
    name: "Trần Đình Trung",
  },
  {
    id: "1811063309",
    name: "Phạm Anh Tuấn",
  },
  {
    id: "1811063271",
    name: "Huỳnh Tấn Đạt",
  },
  {
    id: "1811062470",
    name: "Phan Tấn Kiệt",
  },
  {
    id: "1811062630",
    name: "Võ Duy Minh Nhựt",
  },
  {
    id: "1811063268",
    name: "Nguyễn Ngọc Anh Duy",
  },
  {
    id: "1811063328",
    name: "Hoàng Trọng Kiên",
  },
];

function filterCustomize(text) {
    return list
    .filter((i) => text.length === 0 || i.name.includes(text) || i.id.includes(text) )
}

function sortCustomize(data, text, asc) {
  return data
    .sort(
      asc
        ? (a, b) => (b.id > a.id ? -1 : a.id === b.id ? 0 : 1)
        : (a, b) => (a.id > b.id ? -1 : a.id === b.id ? 0 : 1)
    );
}

function mapItems(item) {
  return list.map((value, i) => ({ key: i }));
}

export default function ListContainer() {
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState("");
  const [data, setData] = useState(
    sortCustomize(
      list,
      ""
    )
  );

  return (
    <List
      data={(data)}
      asc={asc}
      onFilter={(text) => {
        setFilter(text);
        setData(filterCustomize(text));
      }}
      onSort={() => {
        setAsc(!asc);
        setData(sortCustomize(data, filter, asc));
      }}
    />
  );
}
