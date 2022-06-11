import { useState } from "react";
import GentlemanList from "./GentlemanList";
import { gentlemanDataList } from "../data/gentlemanDataList";
import SelectAllButton from "./SelectAllButton";

import "../css/styles.css";

export default function App() {
  const [dataList, setDataList] = useState(gentlemanDataList);

  const selectAll = (newSelectedValue: boolean): void => {
    setDataList(
      dataList.map((data) => ({ ...data, selected: newSelectedValue }))
    );
  };

  const deleteById = (id: number): void => {
    setDataList(dataList.filter((data) => data.id !== id));
  };

  const selectById = (id: number): void => {
    setDataList(
      dataList.map((data) => ({
        ...data,
        selected: data.id === id ? !data.selected : data.selected,
      }))
    );
  };

  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <p className="info">
          {dataList.filter((data) => data.selected).length} gentlemen pointing
          at you
        </p>
        <SelectAllButton
          isAllSelected={dataList.every((data) => data.selected)}
          selectAll={selectAll}
        />
      </section>
      <main className="main">
        <GentlemanList
          dataList={dataList}
          selectById={selectById}
          deleteById={deleteById}
        />
      </main>
    </div>
  );
}
