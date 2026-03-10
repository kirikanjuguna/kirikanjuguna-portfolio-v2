export type Project = {
  slug: string
  title: string
  tagline: string

  desktop: string
  mobile: string

  overview?: string
  problem: string
  solution: string

  gallery?: string[]

  engineering?: string[]
  challenges?: string[]

  stack: string[]

  live: string
  github?: string
}