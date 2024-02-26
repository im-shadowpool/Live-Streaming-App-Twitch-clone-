import Image from "next/image"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"


const font = Poppins({
    subsets: ['latin'],
    weight: ['200', '400', '500', '600', '700', '800']
})

export default function Logo() {
  return (
    <div className="flex flex-col items-center gap-y-4">
        <div className="bg-white rounded-full p-2">
                <Image 
                    src='/smooth.svg'
                    alt="Logo Live Stream"
                    width={50}
                    height={50}
                />
        </div>
        <div className={cn(
            "flex flex-col items-center",
            font.className,
        )}>
            <h1 className="text-xl font-semibold">Live Stream app</h1>
            <p className="text-sm text-muted-foreground">Built with React/Next.js</p>
        </div>

    </div>
  )
}
