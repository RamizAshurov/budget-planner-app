/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module '*.svg' {
  import * as React from 'react'
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  export default ReactComponent
}

declare module '*.svg?react' {
  import { FC, SVGProps } from 'react'
  const ReactComponent: React.FC<SVGProps<SVGSVGElement>>
  export default ReactComponent
}