import Cart from '@/components/lists/Cart';
import ProductList from '@/components/lists/ProductList';
import products from '@/constants/products';
import CartItems from '@/model/CartItems';
import Product from '@/model/Product';
import { useState } from 'react';

export default function ProductsPage() {
  const [itens, setItens] = useState<CartItems[]>([]);

  function addProduct(product: Product) {
    const currentItem: CartItems = itens.find(
      (item) => item.product.id === product.id,
    ) ?? { amount: 0, product };
    const newItem = { ...currentItem, amount: currentItem.amount + 1 };
    const otherItens = itens.filter((item) => item.product.id != product.id);
    setItens([...otherItens, newItem]);
  }

  return (
    <div
      className={`
        flex flex-col gap-10 justify-center items-center h-screen
      `}
    >
      <Cart itens={itens} />
      <ProductList products={products} selectingProduct={addProduct} />
    </div>
  );
}
