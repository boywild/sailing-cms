declare global {
  interface Window {
    router: any
  }
}

declare module '*.json' {
  const value: any
  export default value
}
