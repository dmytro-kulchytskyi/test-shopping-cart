import { ICartLine } from "./ICartLine";

export interface ICart {
  items: ICartLine[];
  total: number;
}
