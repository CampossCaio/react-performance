import { memo, useState } from 'react';
import dynamic from 'next/dynamic';
 import { AddProductToWishListProps } from './AddProductToWishList';
// import { AddProductToWishList } from './AddProductToWishList';

const AddProductToWishList = dynamic<AddProductToWishListProps>(() => {
  return import('./AddProductToWishList').then(mod => mod.AddProductToWishList);
}, {
  // eslint-disable-next-line react/display-name
  loading: () => <p>Loading...</p>
})

type ProductItemProps = {
  product: {
    id: number;
    price: number;
    title: string;
  },
  onAddWishList: (id: number) => void;
}

function ProductItemComponent({ product, onAddWishList }: ProductItemProps) {
  const [ isAddingToWishList, setisAddingToWishList ] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      <button onClick={() => setisAddingToWishList(true)}>Adicionar aos favoritos</button>

      { isAddingToWishList && (
        <AddProductToWishList 
          onAddToWishList={() => onAddWishList(product.id)}
          onRequestClose={() => setisAddingToWishList(false)}
        />
     )}
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
});