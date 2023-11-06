import styles from './ItemEducation.module.scss'

type ItemEducationProps = {
  institution: string
  degree: string
  dates: string
  children: React.ReactNode
}

function ItemEducation(props: ItemEducationProps) {
  return <div className={styles.base}>TODO: ItemEducation</div>
}

export default ItemEducation
