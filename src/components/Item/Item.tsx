import styles from './Item.module.scss'

type ItemProps = {
  heading: string
  subheading?: string
  dates?: string
  children: React.ReactNode
}

function Item(props: ItemProps) {
  return (
    <div className={styles.base}>
      <h3>{props.heading}</h3>
      <div className={styles.info}>
        {props.subheading && (
          <h4 className={styles.subheading}>{props.subheading}</h4>
        )}
        {props.dates && <p className={styles.dates}>{props.dates}</p>}
      </div>
      {props.children}
    </div>
  )
}

export default Item
