import CartItems from '@/model/CartItems';
import Currency from '@/utils/currency';

export default function CartItem(props: CartItems) {
  return (
    <div
      className={`
        flex items-center gap-2 rounded-full bg-blue-500
      `}
    >
      <span className="flex justify-center items-center w-7 h-7 p-2 bg-blue-700 rounded-full">
        {props.amount}
      </span>
      <span>{props.product.name}</span>
      <span className="pr-5">
        {Currency.showPriceFormated(props.product.price * props.amount)}
      </span>
    </div>
  );
}
