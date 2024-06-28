import { Attraction } from "./attraction";
import { World } from "./world";

export type DashboardProps = {
  items: World[] | Attraction[];
  isWorld?: boolean;
};
