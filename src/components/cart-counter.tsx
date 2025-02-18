import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";

interface CartCounter {
  productCount: number
  onUpdateCounter: (productCount: number) => void
  size: "normal" | "lg" 
}

export function CartCounter({ productCount, onUpdateCounter, size }: CartCounter) {
  return (
    <div className="flex justify-center items-center rounded-md border border-input max-w-28 w-auto">
      <Button
        className={size === "lg" ? "w-10 h-10" : "p-4"}
        variant="ghost"
        size="small"
        onClick={() => onUpdateCounter(productCount - 1)}
        disabled={productCount === 1}
      >
        <Minus />
      </Button>
      <span className={`${size === "lg" ? "px-3" : "px-2"} text-sm font-medium`}>{productCount}</span>
      <Button
        className={size === "lg" ? "w-10 h-10" : "p-4"}
        variant="ghost"
        size="small"
        onClick={() => onUpdateCounter(productCount + 1)}
      >
        <Plus />
      </Button>
    </div>
  )
}
