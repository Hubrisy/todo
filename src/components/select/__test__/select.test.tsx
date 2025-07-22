import { fireEvent } from '@testing-library/dom';
import { render } from '@testing-library/react';

import Select from '..';

describe('Button component', () => {
  test('all props are attributed correctly', () => {
    const mockedOnChange = jest.fn();

    const { getByTestId } = render(
      <Select
        id="test-select"
        data-testid="test-select"
        className="test-class"
        name="test-name"
        value=""
        children="test-children"
        onChange={mockedOnChange}
      />,
    );

    const renderedSelect = getByTestId('test-select') as HTMLSelectElement;

    expect(renderedSelect).toBeInTheDocument();
    expect(renderedSelect.id).toBe('test-select');
    expect(renderedSelect.className).toContain('test-class');
    expect(renderedSelect.name).toBe('test-name');
    expect(renderedSelect).toHaveTextContent('test-children');

    fireEvent.change(renderedSelect, { target: { value: '1' } });
    expect(mockedOnChange).toHaveBeenCalledTimes(1);
  });
});
