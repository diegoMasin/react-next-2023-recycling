import Product from '@/model/Product';
import Currency from '@/utils/currency';
import { IconShoppingCart } from '@tabler/icons-react';
import Image from 'next/image';

interface ProductItemProps {
  product: Product;
  selectingProduct: (produto: Product) => void;
}

export default function ProductItem(props: ProductItemProps) {
  const product = props.product;

  return (
    <div
      className={`
        flex flex-col p-1
        border border-zinc-400 rounded-md
      `}
    >
      <Image src={product.image} width={300} height={200} alt="Product Image" />
      <div className="flex flex-col p-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-black">{product.name}</div>
          <div className="text-green-500 font-bold">
            {Currency.showPriceFormated(product.price)}
          </div>
        </div>
        <div>
          <div className={`text-gray-500`}>{product.description}</div>
        </div>
        <div>
          <button
            className="botao flex justify-center w-full gap-2"
            onClick={() => props.selectingProduct(product)}
          >
            <IconShoppingCart /> Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
