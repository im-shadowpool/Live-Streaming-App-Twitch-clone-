import Image from "next/image"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import Link from "next/link"


const font = Poppins({
    subsets: ['latin'],
    weight: ['200', '400', '500', '600', '700', '800']
})

export default function Logo() {
  return (
    
    <Link href='/'>
        
        <div className="flex items-center gap-x-3 hover:opacity-75 transition">
            <div className="bg-white rounded-full p-2 mr-10 shrink-0 lg:mr-0 lg:shrink">
                <Image 
                    src="/smooth.svg"
                    alt="LiveStream logo"
                    width={30}
                    height={30}
                />
            </div>

            <div className={cn(
                'hidden lg:block',
                font.className
            )}>
                <p className="text-lg font-semibold">
                    LiveStream
                </p>
                <p className="text-xs text-muted-foreground">
                    Next.js app
                </p>
            </div>

        </div>

    
    </Link>
  
  )
}
