import { useState } from "react";
import GentlemanList from "./components/GentlemanList";
import "./css/styles.css";
import { gentlemanDataList } from "./data/gentlemanDataList";

export default function App() {
  const [dataList, setDataList] = useState(gentlemanDataList);

  const selectAll = (): void => {
    setDataList(dataList.map((data) => ({ ...data, selected: true })));
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
        <button className="button button--select" onClick={selectAll}>
          Select all
        </button>
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
