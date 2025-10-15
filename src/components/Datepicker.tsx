import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatepickerProps {
  title: string;
  value?: string;
  onChange?: (date: Date | null) => void;
}
const Datepicker: React.FC<DatepickerProps> = ({ title, value, onChange }) => {
  const [open, setOpen] = React.useState(false);
  // const [date, setDate] = React.useState<Date | undefined>(undefined);
  // console.log("Date", date);

  return (
    <div className="flex flex-col gap-3 ">
      <Label htmlFor="date" className="px-1 text-white poppins-light">
        {title}:
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="default"
            id="date"
            className="w-32 sm:w-48 justify-between poppins-regular"
          >
            {value ? value : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0 " align="start">
          <Calendar
            mode="single"
            // selected={value}
            captionLayout="dropdown"
            onSelect={(SelectedDate) => {
              // setDate(date);
              onChange(SelectedDate ?? null);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
export default Datepicker;
