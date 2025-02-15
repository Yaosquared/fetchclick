import { Skeleton } from "@/components/ui/skeleton";

const CartSummarySkeleton = () => {
  return (
    <div className="px-10 space-y-4 pt-4">
      <div className="flex border rounded-md shadow-md p-2">
        <div className="flex w-[20%] h-[140px]">
          <Skeleton className="h-[140px] w-[150px]" />
        </div>
        <div className="w-[80%] flex flex-col justify-center p-4 space-y-6">
          <div className="flex justify-between">
            <div className="w-full space-y-1">
              <Skeleton className="h-4 w-[110px]" />
              <Skeleton className="h-4 w-[150px]" />
            </div>
            <Skeleton className="h-4 w-[100px]" />
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-10 w-[50px]" />
            <Skeleton className="h-6 w-[20px]" />
            <Skeleton className="h-10 w-[50px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummarySkeleton;
