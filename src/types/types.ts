export type Target = {
  name: string;
  imgUrl: string;
  found: boolean;
};

export type Score = {
  name: string;
  time: string;
};

export type ClickCoords = {
  x: number;
  y: number;
};

export type CoordData = {
  [key: string]: TargetCoords;
};

export type TargetCoords = {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
};
