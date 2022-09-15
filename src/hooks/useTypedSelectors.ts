import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redusers";

export const useTypedSelectors: TypedUseSelectorHook<RootState> = useSelector;