import { Skeleton } from "@/components/ui/skeleton";

const PopularPicksSkeleton = () => {
  return (
    <div className="flex flex-col space-y-4 p-6 border rounded-lg">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[50px]" />
        <Skeleton className="h-4 w-[80px]" />
      </div>
      <Skeleton className="h-[198px] w-[200px] rounded-xl" />
      <Skeleton className="h-9 w-full" />
    </div>
  );
};

export default PopularPicksSkeleton;
