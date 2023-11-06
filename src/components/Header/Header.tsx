import styles from './Header.module.scss'

type HeaderProps = {
  name: string
  imgUrl: string
  children: string
  email?: string
  phone?: string
  website?: string
  linkedin?: string
  github?: string
}

function Header(props: HeaderProps) {
  return (
    <div className={'header'}>
      <div className='left-col'>
        <img className={styles.image} src={props.imgUrl} alt={props.name} />
        <div className={styles.info}>
          {props.email && <p>{props.email}</p>}
          {props.phone && <p>{props.phone}</p>}
          {props.website && <p>{props.website}</p>}
          {props.linkedin && <p>{props.linkedin}</p>}
          {props.github && <p>{props.github}</p>}
        </div>
      </div>
      <div className='right-col'>
        <h1 className={styles.name}>{props.name}</h1>
        <p className={styles.paragraph}>{props.children}</p>
      </div>
    </div>
  )
}

export default Header
