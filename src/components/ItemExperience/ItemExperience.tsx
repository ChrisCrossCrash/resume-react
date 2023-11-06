import styles from './ItemExperience.module.scss'

type ItemExperienceProps = {
  company?: string
  title: string
  dates: string
  children: React.ReactNode
}

function ItemExperience() {
  return <div className={styles.base}>TODO: ItemExperience</div>
}

export default ItemExperience
