import React from 'react'
import styles from './Section.module.scss'

type SectionProps = {
  name: string
  children: React.ReactNode
}

function Section(props: SectionProps) {
  return (
    <div className={`section ${styles.base}`}>
      <div className={`left-col`}>
        <h2>{props.name}</h2>
      </div>
      <div>{props.children}</div>
    </div>
  )
}

export default Section
