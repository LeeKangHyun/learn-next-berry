import React from 'react';
import type { FC, ReactElement } from 'react';

import { render } from '@testing-library/react';

import type { RenderOptions } from '@testing-library/react';

const AllTheProviders: FC = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => (
  render(ui, { wrapper: AllTheProviders, ...options })
);

export * from '@testing-library/react';
export { customRender as render };
