import React from 'react';

import { ErrorBoundary } from 'components';

import { screen, prettyDOM, waitFor } from '@testing-library/dom';
import { render } from 'utils/test-utils';

function Bomb() {
  throw new Error('Errrrrrrrrrrrrrrrrrrrorrrrrrrrrrrrrrrr!!!!!!');
  return null;
}

describe('Error Boundary', () => {
  it('standard', async () => {
    render(
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>,
    );

    await waitFor(() => screen.getByTestId('error'));

    expect(screen.getByText('Has Error....')).toBeInTheDocument();
  });
});
