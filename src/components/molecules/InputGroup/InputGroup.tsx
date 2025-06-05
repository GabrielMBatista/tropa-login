import { InputGroupWrapper } from './InputGroup.styles';
import { Label } from '@/components/atoms/Label/Label';
import { Input } from '@/components/atoms/Input/Input';
import { ErrorMessage } from '@/components/atoms/ErrorMessage/ErrorMessage';

interface InputGroupProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputGroup = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  error,
  onChange,
}: InputGroupProps) => {
  return (
    <InputGroupWrapper>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <ErrorMessage message={error} />}
    </InputGroupWrapper>
  );
};