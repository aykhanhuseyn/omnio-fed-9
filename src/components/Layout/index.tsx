import { FC, ReactElement } from 'react'

type LayoutProps = {
  children: ReactElement;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <span>logo</span>
      </header>
      {children}
    </div>
  )
}
