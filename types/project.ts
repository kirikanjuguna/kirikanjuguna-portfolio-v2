export type Feature = {
  title: string
  description: string
  image: string
  type?: "desktop" | "mobile"
}

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

  features?: Feature[]

  engineering?: string[]
  challenges?: string[]

  stack: string[]

  live: string
  github?: string

}