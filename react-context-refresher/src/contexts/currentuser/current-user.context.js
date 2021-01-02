/**
 * @fileoverview current user context 
 */
import { createContext } from "react";

/**
 * @typedef {{id: string, [key: string]: any}} CurrentUserType
 */

/** @type {React.Context<CurrentUserType | undefined>} */
const CurrentUserContext = createContext(undefined);

export default CurrentUserContext;
