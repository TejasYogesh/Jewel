import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
export default function Loading() {
    return (
        <div>
            <div className="lg:grid grid-cols-4 m-5">
                {Array(8).fill(0).map((_, index) => (
                    <div key={index} className="flex flex-col space-y-3 space-x-3">
                        <Skeleton className="h-[250px] w-[320px] rounded-sm m-4" />
                        <div className="space-y-2 space-x-2 m-4">
                            <Skeleton className="h-4 w-[320px]" />
                            <Skeleton className="h-4 w-[320px]" />
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                            <Skeleton className="h-10 w-[80px]" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
