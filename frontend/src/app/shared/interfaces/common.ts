export interface Menu {
  path?: string;
  icon: string;
  label: string;
  children?: { path?: string; label: string; }[];
}

