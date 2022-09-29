interface IItem {
  px: number;
  percent: number;
  name: string;
  color: string;
  value: number;
}

export interface IData {
  items: Array<IItem>;
  width: number;
  height: number;
}
