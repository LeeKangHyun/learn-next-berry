import type { ReactNode } from 'react';

import styles from './layout.module.scss';

type Props = {
  children?: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Layout;
