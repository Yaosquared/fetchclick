import { Skeleton } from "@/components/ui/skeleton";

const ItemSkeleton = () => {
  return (
    <div className="w-[70%]">
      <div className="flex gap-10 py-20">
        <div className="flex justify-center">
          <Skeleton className="h-[270px] w-[270px] rounded-xl" />
        </div>

        <div className="flex items-center">
          <div className="space-y-3">
            <div className="space-y-1">
              <Skeleton className="h-8 w-[380px]" />
              <Skeleton className="h-4 w-[150px]" />
            </div>
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[180px]" />
          </div>
        </div>
      </div>

      <div className="border rounded-md p-8 space-y-10">
        <ul className="space-y-2">
          <Skeleton className="h-6 w-[150px]" />
          <Skeleton className="h-4" />
          <Skeleton className="h-4 w-[120px] mt-6" />
          <Skeleton className="h-4 w-[150px]" />
          <li>
            <Skeleton className="h-4 w-[160px] mb-2" />
            <ul className="list-disc ml-8 space-y-2">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[90px]" />
              <Skeleton className="h-4 w-[120px]" />
            </ul>
            <Skeleton className="h-4 w-[110px] mt-3" />
          </li>
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[220px]" />
          <Skeleton className="h-4 w-[160px]" />
        </ul>

        <div className="space-y-2">
          <Skeleton className="h-6 w-[150px]" />
          <div className="grid grid-cols-3 gap-4">
            <div className="border rounded-md p-4 space-y-4">
              <div className="space-y-1">
                <Skeleton className="h-4 w-[140px]" />
                <Skeleton className="h-4 w-[220px]" />
                <Skeleton className="h-4 w-[100px]" />
              </div>
              <div className="space-y-1">
                <Skeleton className="h-4 w-[160px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
            <div className="border rounded-md p-4 space-y-4">
              <div className="space-y-1">
                <Skeleton className="h-4 w-[140px]" />
                <Skeleton className="h-4 w-[220px]" />
                <Skeleton className="h-4 w-[100px]" />
              </div>
              <div className="space-y-1">
                <Skeleton className="h-4 w-[160px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
            <div className="border rounded-md p-4 space-y-4">
              <div className="space-y-1">
                <Skeleton className="h-4 w-[140px]" />
                <Skeleton className="h-4 w-[220px]" />
                <Skeleton className="h-4 w-[100px]" />
              </div>
              <div className="space-y-1">
                <Skeleton className="h-4 w-[160px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemSkeleton;
