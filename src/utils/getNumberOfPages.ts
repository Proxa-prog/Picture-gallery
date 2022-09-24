import { IPaintings } from "../types/api/paintings";

export const howManyPages = (paintings: IPaintings[]) => {
    if (paintings.length > 12) {

      return Math.ceil(paintings.length / 12)
    }

    return 1;
  };