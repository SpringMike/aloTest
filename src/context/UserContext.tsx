import React, {createContext, useContext} from "react";
import {User} from "../customType/IUser";


export type UserContext = {
    userContext: User
    setUserContext:(u: User) => void
}
export const UserContext = createContext<UserContext>({
    userContext:{} as any,
    setUserContext: () => {}
})


