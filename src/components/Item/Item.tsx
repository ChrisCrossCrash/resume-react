import styles from './Item.module.scss'

type ItemProps = {
  heading: string
  subheading?: string
  dates?: string
  children: React.ReactNode
}

function Item(props: ItemProps) {
  return (
    <div className={`item ${styles.base}`}>
      <h3>{props.heading}</h3>
      {props.children}
    </div>
  )
}

export default Item
