/**
 * @fileoverview direcotry context 
 */
import { createContext } from "react";
import DIRECTORY_DATA from "./directory.data";

/**
 * hard-coded directory data from directory.data 
 */
const DirectoryContext = createContext(DIRECTORY_DATA);

export default DirectoryContext;
