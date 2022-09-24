import { PAINTINGS_LIMIT } from "../constants/PaintingsLimit";
import { getCurrentPaintingsAction } from "../store/reduсers/CurrentPaintings";

interface IData {
  method: string,
  url: string,
  query: string,
}

const fetchData = async (data: IData, dispatch: any, query: string) => {
  const {
    method,
    url,
  } = data;
  console.log(url + query)

  if (method === "GET") {
    const response = await fetch(`${url + query}`);
    const result = await response.json();

    dispatch(getCurrentPaintingsAction(result));
  }
};

// Получение списка картин с фильтром
export const getCurrentPaintings = (data: any) => async (dispatch: any) => {
    const {
      params,
      query = "",
      isPagination = false,
    } = data;

    try {
      const urlTemplate = "?" + query + "=";

      // Запрос при пагинации
      if (isPagination) {
        await fetchData(data, dispatch, query);

        return;
      }
      
      // Запрос всех картин при первоначальной загрузке
      if (params === undefined) {
        await fetchData(data, dispatch, "?_limit=" + PAINTINGS_LIMIT);

        return;
      }

      // Запрос для поля Created (требуется name)
      if (query === "created" && params !== undefined) {
        await fetchData(data, dispatch, urlTemplate + params.name);
        
        return;
      }

      // Запрос для полей, где требуется id
      if (params !== undefined) {
        await fetchData(data, dispatch, urlTemplate + params.id);
        
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };
