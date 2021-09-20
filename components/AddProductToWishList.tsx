
export type AddProductToWishListProps = {
  onAddToWishList: () => void;
  onRequestClose: () => void;
}

export function AddProductToWishList({ onAddToWishList, onRequestClose }: AddProductToWishListProps) {
  return (
    <span>
      Deseja adicionar à lista de desejos ?
      <button onClick={onAddToWishList}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  );
}