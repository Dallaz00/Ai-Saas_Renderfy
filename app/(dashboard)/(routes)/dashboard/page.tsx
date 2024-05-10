"use client";

import { 
  ArrowRight, 
  Code, 
  ImageIcon, 
  MessageSquare, 
  MusicIcon, 
  VideoIcon 
} from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-400/10",
    arrowColor: "text-violet-600",
    href: "/conversation"
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-400/10",
    arrowColor: "text-pink-600",
    href: "/image"
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-emerald-600",
    bgColor: "bg-emerald-400/10",
    arrowColor: "text-emerald-500",
    href: "/video"
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
    color: "text-orange-600",
    bgColor: "bg-orange-400/10",
    arrowColor: "text-orange-600",
    href: "/music"
  },  
  {
    label: "Code Generation",
    icon: Code,
    color: "text-yellow-700",
    bgColor: "bg-yellow-300/20",
    arrowColor: "text-yellow-600",
    href: "/code",
  },
]

const DashboardPage = () => {
  const router = useRouter();
  
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Discover with Renderfy AI
        </h2>
        <p className="=text-muted-foreground font-light text-sm md:text-lg text-center">
          A Gateway to Creative Excellence
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card 
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className={cn("p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer", tool.bgColor)}      // FOR BACKGROUND COLORS ORIGINAL className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
              <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">
                {tool.label}            
              </div>
            </div>
            <ArrowRight className={cn("w-5 h-5",tool.arrowColor)} />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;