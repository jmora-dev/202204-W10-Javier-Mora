import { iGentleman } from "../interfaces/iGentleman";
import Gentleman from "./Gentleman";

export default function GentlemanList({
  dataList,
  selectById,
  deleteById,
}: {
  dataList: Array<iGentleman>;
  selectById(id: number): void;
  deleteById(id: number): void;
}) {
  return (
    <ul className="gentlemen">
      {dataList.map((data) => (
        <Gentleman
          key={data.id}
          data={data}
          selectGentleman={() => selectById(data.id)}
          deleteGentleman={() => deleteById(data.id)}
        />
      ))}
    </ul>
  );
}
