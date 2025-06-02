export interface CarType {
  id: number;
  title: string;
  brand: string;
  transmission: string[];
  price: number[];
  image: string[];
  seat: string;
  year: string;
  fuel: string;
  description?: string;
}