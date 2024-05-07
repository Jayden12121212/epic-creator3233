import { useDispatch as useReduxDispatch } from "react-redux";
import { AppDispatch } from "@/createStore";

export const useAppDispatch = () => useReduxDispatch<AppDispatch>();

const useDispatch = () => useAppDispatch();

export default useDispatch;
