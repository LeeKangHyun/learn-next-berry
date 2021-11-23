import type { ReactNode } from 'react';

import styles from './layout.module.scss';

type Props = {
  children?: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
