export interface CartItem {
  id: number
  title: string;
  productCode: string;
  brand: string;
  soldBy: string;
  totalPrice: number;
  price: number;
  originalPrice: number;
  offerPercent: number;
  size: number;
  quantity: number;
  description: string[],
  imgSrc: string
}
