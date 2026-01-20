import { motion } from "framer-motion";
import { Youtube, Play, ExternalLink, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const videos = [
  {
    id: "demo-1",
    title: "FinWise - Micro-investing App Demo",
    description: "Complete walkthrough of the FinWise fintech application with automated expense tracking and personalized budgeting features.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    embedId: "dQw4w9WgXcQ", // Replace with actual video ID
    duration: "8:45",
    views: "1.2K",
  },
  {
    id: "demo-2",
    title: "FitVerse AI - Fitness Tracker Demo",
    description: "Demonstration of the AI-powered fitness tracker with real-time biomechanical analysis and personalized workout recommendations.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    embedId: "dQw4w9WgXcQ", // Replace with actual video ID
    duration: "12:30",
    views: "850",
  },
  {
    id: "demo-3",
    title: "Building Scalable React Native Apps",
    description: "Technical deep-dive into architecture patterns and best practices for building performant cross-platform mobile applications.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    embedId: "dQw4w9WgXcQ", // Replace with actual video ID
    duration: "15:20",
    views: "2.1K",
  },
];

export const YouTubeSection = () => {
  const channelUrl = "https://www.youtube.com/@AsthaMoreSDE4002";

  return (
    <section id="videos" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-sm font-medium mb-6">
            <Youtube className="w-4 h-4" />
            Video Demos
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Watch My Projects in Action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
            Explore detailed video walkthroughs and technical demonstrations of my projects
          </p>
          
          {/* Subscribe Button */}
          <motion.a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-colors shadow-lg shadow-red-600/25"
          >
            <Youtube className="w-5 h-5" />
            Subscribe to My Channel
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Featured Video Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary/30 border border-border shadow-2xl">
            <iframe
              src={`https://www.youtube.com/embed/?listType=user_uploads&list=AsthaMoreSDE4002`}
              title="Astha More YouTube Channel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
            {/* Overlay for when no video is playing */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary/80 to-background/80 backdrop-blur-sm pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center mb-4 mx-auto shadow-lg shadow-red-600/50">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <p className="text-foreground font-semibold">Watch Demo Videos</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.a
              key={video.id}
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-red-500/50 transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-secondary/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-xs text-white font-medium">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2 px-2 py-1 bg-red-600 rounded text-xs text-white font-medium flex items-center gap-1">
                    <Video className="w-3 h-3" />
                    Demo
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-red-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{video.views} views</span>
                    <span className="flex items-center gap-1 text-red-400">
                      <Youtube className="w-3 h-3" />
                      Watch
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-red-400 transition-colors"
          >
            <Youtube className="w-5 h-5" />
            View all videos on my YouTube channel
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
