import { iGentleman } from "../interfaces/iGentleman";

export default function Info({ data }: { data: iGentleman }) {
  return (
    <div className="gentleman__data-container">
      <h2 className="gentleman__name">{data.name}</h2>
      <ul className="gentleman__data-list">
        <li className="gentleman__data">
          <span className="gentleman__data-label">Profession:</span>
          {data.profession}
        </li>
        <li className="gentleman__data">
          <span className="gentleman__data-label">Status:</span> {data.status}
        </li>
        <li className="gentleman__data">
          <span className="gentleman__data-label">Twitter:</span>
          {data.twitter}
        </li>
      </ul>
    </div>
  );
}
