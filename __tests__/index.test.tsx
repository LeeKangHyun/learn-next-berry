/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from 'utils/test-utils';

import { ErrorBoundary } from 'components';

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
