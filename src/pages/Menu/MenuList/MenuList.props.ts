// MenuList.props.ts
import { Product } from '../../../interfaces/product.interface';

export interface MenuListProps {
  products: Product[];
  translations: Record<string, { name: string; description: string }>;
}
