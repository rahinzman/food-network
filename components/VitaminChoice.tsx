import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const VitaminChoice = () => {
  return (
    <div className="my-4">
      <h1 className="my-2">Choose Vitamin Type</h1>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="All Vitamins"  />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="A">Vitamin A</SelectItem>
          <SelectItem value="Vitamin C">Vitamin C</SelectItem>
          <SelectItem value="Vitamin K">Vitamin K</SelectItem>
          <SelectItem value="Vitamin B6">Vitamin B6</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default VitaminChoice;
