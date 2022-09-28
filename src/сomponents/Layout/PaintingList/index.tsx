import React from "react";
import { MAIN_URL } from "../../../constants/links";

import { useTypedSelectors } from "../../../hooks/useTypedSelectors";

import { IPaintings } from "../../../types/api/paintings";
import { getItemById } from "../../../utils/getElementById";
import { Img } from "../../UI/Img";

import "./style.scss";

export const PaintingList = () => {
  const { locations } = useTypedSelectors((state) => state.locations);
  const { authors } = useTypedSelectors((state) => state.authors);
  const { currentPaintings } = useTypedSelectors((state) => state.currentPaintings);

  return (
    <section className="painting-list">
      <ul className="painting-list__list">
        {currentPaintings.map((painting: IPaintings) => (
          <li className="painting-list__item" key={painting.id}>
            <Img
              src={`${MAIN_URL}${painting.imageUrl}`}
              alt={painting.name}
              width="360"
              height="275"
            />
            <div className="painting-list__description-wrapper">
              <h2>{painting.name}</h2>
              <p className="painting-list__text-title">
                Author:{` `}
                <span className="painting-list__text-descriprtion">
                  {getItemById(authors, painting.authorId)}
                </span>
              </p>
              <p className="painting-list__text-title">
                Created:{` `}
                <span className="painting-list__text-descriprtion">
                  {painting.created}
                </span>
              </p>
              <p className="painting-list__text-title">
                Location:{` `}
                <span className="painting-list__text-descriprtion">
                  {getItemById(locations, painting.locationId)}
                </span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
