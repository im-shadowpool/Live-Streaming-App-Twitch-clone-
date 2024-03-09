'use client'

import { useSidebar } from "@/store/use-sidebar";
import { User } from "@prisma/client"

interface RecommendedProps{
    data: User[];
}


export default function Recommended({
    data
}: RecommendedProps) {

    const { collapsed } = useSidebar(state => state);

    const showRecommendedLabel = !collapsed && (data.length > 0)  

    console.log(data.length);
    
  return (
    <div>
      {showRecommendedLabel && (
        <div className="pl-6 mb-4">
            <p>Recommended</p>
        </div>
      )}
    </div>
  )
}
