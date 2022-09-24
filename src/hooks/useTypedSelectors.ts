import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reduсers";

export const useTypedSelectors: TypedUseSelectorHook<RootState> = useSelector;