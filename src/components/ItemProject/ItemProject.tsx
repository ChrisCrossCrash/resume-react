import styles from './ItemProject.module.scss'

type ItemProjectProps = {
  name: string
  website?: string
  repo?: string
  dates?: string
  children: React.ReactNode
}

function ItemProject(props: ItemProjectProps) {
  return <div className={styles.base}>TODO: ItemProject</div>
}

export default ItemProject
