import Product from '@/model/Product';
import ProductItem from './ProductItem';

interface ProductListProps {
  products: Product[];
  selectingProduct: (produto: Product) => void;
}

export default function ProductList(props: ProductListProps) {
  return (
    <div
      className={`
        flex flex-wrap gap-5
      `}
    >
      {props.products.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            selectingProduct={props.selectingProduct}
          />
        );
      })}
    </div>
  );
}
