import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectCategory() {
  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          <SelectItem value="PC">PC</SelectItem>
          <SelectItem value="Shoes">Chaussures</SelectItem>
          <SelectItem value="Smartphone">Smartphone</SelectItem>
          <SelectItem value="Watch">Grapes</SelectItem>
          <SelectItem value="Parfum">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
