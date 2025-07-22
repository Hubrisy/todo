import { fireEvent } from '@testing-library/dom';
import { render } from '@testing-library/react';

import Button from '..';

describe('Button component', () => {
  test('all props are attributed correctly', () => {
    const mockedOnClick = jest.fn();

    const { getByTestId } = render(
      <Button
        id="test-button"
        data-testid="test-button"
        className="test-class"
        type="button"
        children="test-children"
        onClick={mockedOnClick}
      />,
    );

    const renderedButton = getByTestId('test-button') as HTMLButtonElement;

    expect(renderedButton).toBeInTheDocument();
    expect(renderedButton.id).toBe('test-button');
    expect(renderedButton.className).toContain('test-class');
    expect(renderedButton.type).toBe('button');
    expect(renderedButton).toHaveTextContent('test-children');

    fireEvent.click(renderedButton);
    expect(mockedOnClick).toHaveBeenCalledTimes(1);
  });
});
