import {
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Select,
} from '../ui/select';

const VersattiSelect = ({
  options,
  handleOnChange,
  name,
  placeholder,
  className,
}: any) => {
  return (
    <Select
      name={name}
      onValueChange={(e) => handleOnChange(e)}
    >
      <SelectTrigger className={className}>
        <SelectValue
          className="text-white"
          placeholder={placeholder}
        />
      </SelectTrigger>
      <SelectContent>
        {options.map((option: any) => {
          return (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default VersattiSelect;
