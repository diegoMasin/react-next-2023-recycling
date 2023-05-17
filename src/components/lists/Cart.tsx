import CartItems from '@/model/CartItems';
import CartItem from './CartItem';
import { IconCircleX } from '@tabler/icons-react';
import Currency from '@/utils/currency';

interface CartProps {
  itens: CartItems[];
}

export default function Cart(props: CartProps) {
  const total = props.itens.reduce((soma, item) => {
    return soma + item.amount * item.product.price;
  }, 0);
  return (
    <div
      className={`
        flex flex-col border border-white rounded-md overflow-hidden w-4/5
      `}
    >
      <div className={`bg-zinc-800 text-3xl p-3 flex justify-between`}>
        <span>Cart</span>
        <span>{Currency.showPriceFormated(total)}</span>
      </div>
      <div className="flex gap-5 p-5">
        {props.itens.length === 0 ? (
          <div className="flex justify-center items-center text-zinc-500 gap-3">
            <IconCircleX />
            <span>None item on cart!</span>
          </div>
        ) : (
          props.itens.map((item, i) => {
            return <CartItem key={i} {...item} />;
          })
        )}
      </div>
    </div>
  );
}
