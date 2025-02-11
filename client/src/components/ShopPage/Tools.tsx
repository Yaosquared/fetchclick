import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSearchParams } from "react-router-dom";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ProductProps } from "@/lib/types";

const Tools = ({ products }: { products: ProductProps[] }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const getCategories = (products: ProductProps[]) => {
    const categories = products.map((product) => product.category);
    const uniqueCategories = [...new Set(categories)];
    const filteredCategories = uniqueCategories.map((category) => ({
      value: category,
      label: category.charAt(0).toUpperCase() + category.slice(1),
    }));
    return filteredCategories;
  };

  const filteredCategories = getCategories(products);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({
      search: e.target.value,
      category: searchParams.get("category") || "",
    });
  };

  const handleCategorySelect = (currentValue: string) => {
    setValue(currentValue === value ? "" : currentValue);
    setSearchParams({
      search: searchParams.get("search") || "",
      category: currentValue === value ? "" : currentValue,
    });
    setOpen(false);
  };

  return (
    <div className="w-[60%] flex pt-10 gap-4">
      <Input
        placeholder="Search for a product..."
        onChange={handleSearchChange}
      />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            role="combobox"
            aria-expanded={open}
            className=" cursor-pointer"
          >
            {value
              ? filteredCategories.find(
                  (filteredCategory) => filteredCategory.value === value
                )?.label
              : "Filter by"}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Select caterory..." className="h-9" />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {filteredCategories.map((filteredCategory) => (
                  <CommandItem
                    key={filteredCategory.value}
                    value={filteredCategory.value}
                    onSelect={handleCategorySelect}
                  >
                    {filteredCategory.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === filteredCategory.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Tools;
