import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "#/components/ui/popover.tsx";
import { cn } from "#/lib/utils.ts";

import { birdSilhouettes } from "../data/birdSilhouettes";

export function RandomBird({ className }: { className?: string }) {
  const bird =
    birdSilhouettes[Math.floor(Math.random() * birdSilhouettes.length)];

  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          "mx-auto flex aspect-square w-40 cursor-pointer items-center justify-center rounded-xl p-2",
          className,
        )}
      >
        <img
          src={bird.imagePath}
          alt={bird.name}
          className="h-full w-full object-contain invert"
        />
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <PopoverHeader>
          <PopoverTitle>{bird.name}</PopoverTitle>
          <PopoverDescription>
            <a
              href={bird.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              View on Wikimedia Commons
            </a>
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}
