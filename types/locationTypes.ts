// src/data/types.ts
export interface Location {
  id: number;
  name: string;
  description: string;
  parent: number | null;
  children?: Location[];
}
