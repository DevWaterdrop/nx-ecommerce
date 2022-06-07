import styles from './item-card.module.css';

/* eslint-disable-next-line */
export interface ItemCardProps {}

export function ItemCard(props: ItemCardProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ItemCard!</h1>
    </div>
  );
}

export default ItemCard;
