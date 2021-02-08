import { createContext } from "react";

const initialState = {
    firstName: "youness",
    lastName:"fathi"
};
export type UserState = typeof initialState;
const context = createContext<typeof initialState>(initialState);

export default context;