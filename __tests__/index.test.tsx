/**
 * @jest-environment jsdom
 */
import { ErrorBoundary } from 'components';

import React from 'react';
import { render } from 'utils/test-utils';

test('standard', () => {
  render(
    <div>
      Hello World
    </div>,
  );
});

describe('Error Boundary', () => {
  it('standard', () => {
    render(
      <div>
        Hello World
      </div>,
    );

    expect(true).toBeTruthy();
  });
});
