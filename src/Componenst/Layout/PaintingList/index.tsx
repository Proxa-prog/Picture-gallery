import { FC } from "react";

import { IPaintings } from "../../../types/api/paintings";
import { Img } from "../../UI/Img";

import "./style.scss";

interface IPaintingList {
  paintingsArray: IPaintings[];
}

export const PaintingList: FC<IPaintingList> = (props) => {
  const { paintingsArray } = props;

  return (
    <section className="painting-list">
      <ul className="painting-list__list">
        {paintingsArray.map((painting: IPaintings) => (
          <li
            className="painting-list__item"
            key={painting.id}
          >
            <Img 
                src={`https://test-front.framework.team${painting.imageUrl}`}
                alt={painting.name}
                width='360'
                height='275'
            />
            <div className="painting-list__description-wrapper">
                <h2>{painting.name}</h2 >
                <p className="painting-list__text-title">Author: <span className="painting-list__text-descriprtion">{painting.authorId}</span></p>
                <p className="painting-list__text-title">Created: <span className="painting-list__text-descriprtion">{painting.created}</span></p>
                <p className="painting-list__text-title">Location: <span className="painting-list__text-descriprtion">{painting.locationId}</span></p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
