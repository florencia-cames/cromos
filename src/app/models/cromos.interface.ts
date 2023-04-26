export interface Cromo {
  id: number;
  isChecked: boolean;
  hidden: boolean;
}

export interface Cromos {
  title: string;
  items: Cromo[];
}
