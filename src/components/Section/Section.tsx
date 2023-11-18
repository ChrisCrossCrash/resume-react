import React from 'react'
import styles from './Section.module.scss'

type SectionProps = {
  name: string
  children: React.ReactNode
  style?: React.CSSProperties
}

function Section(props: SectionProps) {
  return (
    <div style={props.style} className={`section ${styles.base}`}>
      <div className={`left-col`}>
        <h2>{props.name}</h2>
      </div>
      <div>{props.children}</div>
    </div>
  )
}

export default Section
