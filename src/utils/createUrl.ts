import { PAINTINGS_LIMIT } from "../constants/PaintingsLimit";

export const createUrl = (data: any) => {
    const {
      params,
      query = "",
      isPagination = false,
    } = data;
  
    const urlTemplate = "?" + query + "=";

    // Запрос при пагинации
    if (isPagination) {
      const queryUrl = query;
  
      return {
        ...data,
        queryUrl,
      }
    }
    
    // Запрос всех картин при первоначальной загрузке
    if (params === undefined) {
      const queryUrl = "?_limit=" + PAINTINGS_LIMIT;
  
      return {
        data,
        queryUrl,
      }
    }
  
    // Запрос для поля Created (требуется name)
    if (query === "created" && params !== undefined) {
      const queryUrl = urlTemplate + params.name;
      
      return {
        ...data,
        queryUrl,
      }
    }
  
    // Запрос для полей, где требуется id
    if (params !== undefined) {
      const queryUrl = urlTemplate + params.id;
      
      return {
        ...data,
        queryUrl,
      }
    }
  };