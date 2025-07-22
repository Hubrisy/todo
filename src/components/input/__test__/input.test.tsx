import * as React from 'react';
import { useState } from 'react';
import { fireEvent, render } from '@testing-library/react';

import Input from '..';

describe('Input Component', () => {
  test('all props are attributed correctly', () => {
    const mockedOnChange = jest.fn();

    const { getByTestId, getByText } = render(
      <Input
        id="test-input"
        data-testid="test-input"
        className="test-class"
        name="test-name"
        value=""
        onChange={mockedOnChange}
        errorMsg="test error"
      />,
    );

    const renderedInput = getByTestId('test-input') as HTMLInputElement;
    expect(renderedInput).toBeInTheDocument();
    expect(renderedInput.id).toBe('test-input');
    expect(renderedInput.name).toBe('test-name');
    expect(renderedInput.value).toBe('');
    expect(renderedInput.className).toContain('test-class');

    const renderedError = getByText('test error');
    expect(renderedError).toBeInTheDocument();
    expect(renderedError.className).toContain('text-[red]');

    const event = { target: { value: 'new value' } };
    fireEvent.change(renderedInput, event);
    expect(mockedOnChange).toHaveBeenCalledTimes(1);
  });

  test('onChange works correctly', () => {
    const Component = () => {
      const [value, setValue] = useState('');

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
      };

      return (
        <Input
          id="test-input"
          data-testid="test-input"
          className="test-class"
          name="test-name"
          value={value}
          onChange={handleChange}
          errorMsg="test error"
        />
      );
    };

    const { getByTestId } = render(<Component />);

    const renderedInput = getByTestId('test-input') as HTMLInputElement;
    expect(renderedInput).toBeInTheDocument();

    const event = { target: { value: 'new value' } };
    fireEvent.change(renderedInput, event);
    expect(renderedInput.value).toBe('new value');
  });
});
