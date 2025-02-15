import { Skeleton } from "@/components/ui/skeleton";

const OrdersSkeleton = () => {
  return (
    <div className="w-full border rounded-md p-5 space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
        <Skeleton className="h-10 w-[200px]" />
      </div>
      <div className="space-y-4">
        <div className="flex space-x-12">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
        <div className="flex space-x-12">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
        <div className="flex space-x-12">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
        <div className="flex space-x-12">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
        <div className="flex justify-between pt-2">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
      </div>
    </div>
  );
};

export default OrdersSkeleton;
