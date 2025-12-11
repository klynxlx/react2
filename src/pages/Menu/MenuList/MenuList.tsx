import ProductCard from '../../../components/ProductCard/ProductCard';
import { MenuListProps } from './MenuList.props';
import styles from './MenuList.module.css';

export function MenuList({ products, translations }: MenuListProps) {
  return (
    <div className={styles.wrapper}>
      {products.map((p) => {
        const translation = translations[p.name.toLowerCase()];
        return (
          <ProductCard
            key={p.id}
            id={p.id}
            name={translation ? translation.name : p.name}
            description={translation ? translation.description : p.ingredients.join(', ')}
            rating={p.rating}
            price={p.price}
            image={p.image}
          />
        );
      })}
    </div>
  );
}
