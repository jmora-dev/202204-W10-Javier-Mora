import { iGentleman } from "../interfaces/iGentleman";
import GentlemanCardButton, { BUTTON_VARIANTS } from "./GentlemanCardButton";
import Info from "./Info";

export default function Gentleman({
  data,
  selectGentleman,
  deleteGentleman,
}: {
  data: iGentleman;
  selectGentleman(): void;
  deleteGentleman(): void;
}) {
  return (
    <li className={"gentleman" + (data.selected ? " selected" : "")}>
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={"img/" + data.picture}
          alt={data.alternativeText}
        />
        <span className="gentleman__initial">
          {data.picture[0].toUpperCase()}
        </span>
      </div>
      <Info data={data} />
      <GentlemanCardButton
        action={selectGentleman}
        variant={BUTTON_VARIANTS.SUCCESS}
      />
      <GentlemanCardButton
        action={deleteGentleman}
        variant={BUTTON_VARIANTS.DANGER}
      />
    </li>
  );
}
