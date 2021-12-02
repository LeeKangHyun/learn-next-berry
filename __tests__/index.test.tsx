import React from 'react';

import { ErrorBoundary } from 'components';

import { prettyDOM } from '@testing-library/dom';
import { render } from 'utils/test-utils';

function Bomb() {
  throw new Error('Errrrrrrrrrrrrrrrrrrrorrrrrrrrrrrrrrrr!!!!!!');
  return null;
}

describe('Error Boundary', () => {
  it('standard', () => {
    const { container } = render(
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>,
    );

    console.log(prettyDOM(container))
  });
});
