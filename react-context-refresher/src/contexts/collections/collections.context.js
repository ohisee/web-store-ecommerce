/**
 * @fileoverview collection context 
 */
import { createContext } from "react";
import SHOP_DATA from "./shop.data";

/**
 * hard-coded shop data from shop.data 
 */
const CollectionsContext = createContext(SHOP_DATA);

export default CollectionsContext;
