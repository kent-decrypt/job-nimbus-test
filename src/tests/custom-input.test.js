import { render, fireEvent, screen } from '@testing-library/react';
import CustomInput from '../components/custom-input';

describe('CustomInput component', () => {
  it('should display "valid" if text is <>', () => {
    render(<CustomInput />);
    const input = screen.getByTestId('test-customInput-txtInput');
    const label = screen.getByTestId('test-customInput-lblInput');

    fireEvent.change(input, { target: { value: '<>' }});
    fireEvent.click(screen.getByTestId('test-customInput-btnCheck'));

    expect(label.textContent).toContain('valid');
  });

  it('should display "valid" if text is a string', () => {
    render(<CustomInput />);
    const input = screen.getByTestId('test-customInput-txtInput');
    const label = screen.getByTestId('test-customInput-lblInput');

    fireEvent.change(input, { target: { value: 'some string and 12312 numbers with Special Ch@r@cter$ here' }});
    fireEvent.click(screen.getByTestId('test-customInput-btnCheck'));

    expect(label.textContent).toContain('valid');
  });

  it('should display "invalid" if text is ><', () => {
    render(<CustomInput />);
    const input = screen.getByTestId('test-customInput-txtInput');
    const label = screen.getByTestId('test-customInput-lblInput');

    fireEvent.change(input, { target: { value: '><' }});
    fireEvent.click(screen.getByTestId('test-customInput-btnCheck'));

    expect(label.textContent).toContain('invalid');
  });

  it('should display "invalid" if text is <<>><', () => {
    render(<CustomInput />);
    const input = screen.getByTestId('test-customInput-txtInput');
    const label = screen.getByTestId('test-customInput-lblInput');

    fireEvent.change(input, { target: { value: '<<>><' }});
    fireEvent.click(screen.getByTestId('test-customInput-btnCheck'));

    expect(label.textContent).toContain('invalid');
  });

  it('should display "invalid" if text is ><<>>', () => {
    render(<CustomInput />);
    const input = screen.getByTestId('test-customInput-txtInput');
    const label = screen.getByTestId('test-customInput-lblInput');

    fireEvent.change(input, { target: { value: '><<>>' }});
    fireEvent.click(screen.getByTestId('test-customInput-btnCheck'));

    expect(label.textContent).toContain('invalid');
  });

  it('should display "invalid" if text is <<>', () => {
    render(<CustomInput />);
    const input = screen.getByTestId('test-customInput-txtInput');
    const label = screen.getByTestId('test-customInput-lblInput');

    fireEvent.change(input, { target: { value: '<<>' }});
    fireEvent.click(screen.getByTestId('test-customInput-btnCheck'));

    expect(label.textContent).toContain('invalid');
  });

  it('should display "invalid" if text is <><>', () => {
    render(<CustomInput />);
    const input = screen.getByTestId('test-customInput-txtInput');
    const label = screen.getByTestId('test-customInput-lblInput');

    fireEvent.change(input, { target: { value: '<><>' }});
    fireEvent.click(screen.getByTestId('test-customInput-btnCheck'));

    expect(label.textContent).toContain('invalid');
  });

  it('should display "valid" if text is ""', () => {
    render(<CustomInput />);
    const input = screen.getByTestId('test-customInput-txtInput');
    const label = screen.getByTestId('test-customInput-lblInput');

    fireEvent.change(input, { target: { value: '' }});
    fireEvent.click(screen.getByTestId('test-customInput-btnCheck'));

    expect(label.textContent).toContain('valid');
  });

  it('should display "valid" if text is "<<>>"', () => {
    render(<CustomInput />);
    const input = screen.getByTestId('test-customInput-txtInput');
    const label = screen.getByTestId('test-customInput-lblInput');

    fireEvent.change(input, { target: { value: '<<>>' }});
    fireEvent.click(screen.getByTestId('test-customInput-btnCheck'));

    expect(label.textContent).toContain('valid');
  });

  it('should display "valid" if text is like "<abc...xyz>"', () => {
    render(<CustomInput />);
    const input = screen.getByTestId('test-customInput-txtInput');
    const label = screen.getByTestId('test-customInput-lblInput');

    fireEvent.change(input, { target: { value: '<abcLIAJWDLIAJW>' }});
    fireEvent.click(screen.getByTestId('test-customInput-btnCheck'));

    expect(label.textContent).toContain('valid');
  });
});
