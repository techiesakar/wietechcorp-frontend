"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DataTableViewOptions } from "./data-table-view-options";
import AddButtonOnToolbar from "./add-button-on-toolbar";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;

  filteredOptions?: {
    filterInputLabel: string;
    filterInputKey: string;
  };

  addButton?: {
    label: string;
    path: string;
  };
}

export function DataTableToolbar<TData>({
  table,
  filteredOptions,
  addButton,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {filteredOptions?.filterInputLabel &&
          filteredOptions?.filterInputKey && (
            <Input
              placeholder={filteredOptions?.filterInputLabel}
              value={
                (table
                  .getColumn(filteredOptions?.filterInputKey)
                  ?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table
                  .getColumn(filteredOptions?.filterInputKey || "")
                  ?.setFilterValue(event.target.value)
              }
              className="h-8 w-[150px] lg:w-[250px]"
            />
          )}

        {addButton?.label && addButton?.path && (
          <AddButtonOnToolbar label={addButton?.label} path={addButton?.path} />
        )}

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
