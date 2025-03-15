
import { useState } from "react";
import { DashboardCard } from "./DashboardCard";
import { Users, MessageCircle, Share2, ThumbsUp, Globe2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ExpatNetworkModule() {
  const [activeTab, setActiveTab] = useState("latest");
  
  // Demo posts data
  const posts = [
    {
      id: 1,
      author: "Maria G.",
      avatar: "/placeholder.svg",
      location: "Lisbon",
      time: "2 hours ago",
      content: "Found a great co-working space near Baixa-Chiado. Fast wifi and only €15/day for drop-ins!",
      likes: 24,
      comments: 6,
      category: "latest"
    },
    {
      id: 2,
      author: "Thomas L.",
      avatar: "/placeholder.svg",
      location: "Barcelona",
      time: "yesterday",
      content: "Tax tip: If you're a digital nomad, Spain's new visa program offers special tax treatment. Happy to share resources.",
      likes: 45,
      comments: 12,
      category: "trending"
    }
  ];

  const filteredPosts = posts.filter(post => 
    activeTab === "all" || post.category === activeTab
  );

  return (
    <DashboardCard 
      title="Expat Network" 
      isDraggable
      footer={
        <Button variant="ghost" size="sm" className="w-full justify-center">
          <span>View Full Network</span>
        </Button>
      }
    >
      <Tabs defaultValue="latest" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="latest">Latest</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="all">All</TabsTrigger>
        </TabsList>
        
        <TabsContent value={activeTab} className="mt-0 space-y-4">
          {filteredPosts.map((post) => (
            <div key={post.id} className="glass-card p-3 space-y-3">
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.avatar} alt={post.author} />
                  <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-semibold">{post.author}</span>
                    <span className="text-xs text-muted-foreground">{post.time}</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Globe2 className="h-3 w-3 mr-1" />
                    <span>{post.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm">{post.content}</p>
              
              <div className="flex gap-4 pt-1 border-t border-border text-xs text-muted-foreground">
                <button className="flex items-center gap-1 hover:text-primary transition-colors">
                  <ThumbsUp className="h-3 w-3" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center gap-1 hover:text-primary transition-colors">
                  <MessageCircle className="h-3 w-3" />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center gap-1 hover:text-primary transition-colors ml-auto">
                  <Share2 className="h-3 w-3" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </DashboardCard>
  );
}
