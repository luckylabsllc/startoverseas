
import { DashboardCard } from "./DashboardCard";
import { Briefcase, Code, FileText, DollarSign, Handshake } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Toggle } from "@/components/ui/toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function RemoteJobMatchesModule() {
  // Demo job data
  const jobs = [
    {
      title: "Senior Frontend Developer",
      company: "TechGlobal Inc.",
      location: "Remote (EU timezone)",
      salary: "$90K - $120K",
      matchScore: 92,
      relocateSupport: true,
      skills: ["React", "TypeScript", "UI/UX"],
      category: "tech"
    },
    {
      title: "Content Marketing Manager",
      company: "CreativeMinds",
      location: "Remote (APAC friendly)",
      salary: "$70K - $90K",
      matchScore: 85,
      relocateSupport: true,
      skills: ["Content Strategy", "SEO", "Analytics"],
      category: "marketing"
    }
  ];

  return (
    <DashboardCard 
      title="Remote Job Matches" 
      isDraggable
    >
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="all">All Jobs</TabsTrigger>
          <TabsTrigger value="tech">Tech</TabsTrigger>
          <TabsTrigger value="marketing">Marketing</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4 mt-0">
          {jobs.map((job, index) => (
            <div key={index} className="glass-card p-3 space-y-3 cursor-pointer hover:bg-secondary/30 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{job.title}</h3>
                  <p className="text-sm text-muted-foreground">{job.company}</p>
                </div>
                <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">
                  {job.matchScore}% Match
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center">
                  <DollarSign className="h-3 w-3 mr-1 text-muted-foreground" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-3 w-3 mr-1 text-muted-foreground" />
                  <span>{job.location}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, i) => (
                  <Toggle key={i} variant="outline" size="sm" className="h-6 text-xs">
                    {skill}
                  </Toggle>
                ))}
              </div>
              
              {job.relocateSupport && (
                <div className="flex items-center text-xs text-primary pt-1 border-t border-border">
                  <Handshake className="h-3 w-3 mr-1" />
                  <span>Relocation assistance available</span>
                </div>
              )}
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="tech" className="mt-0">
          {jobs.filter(job => job.category === "tech").map((job, index) => (
            // Same job card structure as above
            <div key={index} className="glass-card p-3 space-y-3 cursor-pointer hover:bg-secondary/30 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{job.title}</h3>
                  <p className="text-sm text-muted-foreground">{job.company}</p>
                </div>
                <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">
                  {job.matchScore}% Match
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center">
                  <DollarSign className="h-3 w-3 mr-1 text-muted-foreground" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-3 w-3 mr-1 text-muted-foreground" />
                  <span>{job.location}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, i) => (
                  <Toggle key={i} variant="outline" size="sm" className="h-6 text-xs">
                    {skill}
                  </Toggle>
                ))}
              </div>
              
              {job.relocateSupport && (
                <div className="flex items-center text-xs text-primary pt-1 border-t border-border">
                  <Handshake className="h-3 w-3 mr-1" />
                  <span>Relocation assistance available</span>
                </div>
              )}
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="marketing" className="mt-0">
          {jobs.filter(job => job.category === "marketing").map((job, index) => (
            // Same job card structure as above
            <div key={index} className="glass-card p-3 space-y-3 cursor-pointer hover:bg-secondary/30 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{job.title}</h3>
                  <p className="text-sm text-muted-foreground">{job.company}</p>
                </div>
                <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">
                  {job.matchScore}% Match
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center">
                  <DollarSign className="h-3 w-3 mr-1 text-muted-foreground" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-3 w-3 mr-1 text-muted-foreground" />
                  <span>{job.location}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, i) => (
                  <Toggle key={i} variant="outline" size="sm" className="h-6 text-xs">
                    {skill}
                  </Toggle>
                ))}
              </div>
              
              {job.relocateSupport && (
                <div className="flex items-center text-xs text-primary pt-1 border-t border-border">
                  <Handshake className="h-3 w-3 mr-1" />
                  <span>Relocation assistance available</span>
                </div>
              )}
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </DashboardCard>
  );
}
