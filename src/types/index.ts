import type { ReactNode } from "react"

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  buttonHref?: string
  button2Text?: string
  button2Href?: string
  bgImage?: string
}

export interface SectionProps extends Section {
  isActive: boolean
}