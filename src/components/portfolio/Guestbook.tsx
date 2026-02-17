import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  emoji: string;
  created_at: string;
}

const emojis = ["👋", "🚀", "💼", "⭐", "🎯", "💡", "🔥", "✨"];

export const Guestbook = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("👋");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchEntries();

    const channel = supabase
      .channel("guestbook-realtime")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "guestbook" },
        (payload) => {
          setEntries((prev) => [payload.new as GuestbookEntry, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchEntries = async () => {
    const { data, error } = await supabase
      .from("guestbook")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(50);

    if (data && !error) {
      setEntries(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    const { error } = await supabase.from("guestbook").insert({
      name: name.trim(),
      message: message.trim(),
      emoji: selectedEmoji,
    });

    if (error) {
      toast.error("Failed to sign guestbook. Please try again.");
    } else {
      toast.success("Thanks for signing the guestbook!");
      setName("");
      setMessage("");
    }
    setIsSubmitting(false);
  };

  const timeAgo = (dateStr: string) => {
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return "just now";
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days}d ago`;
    return `${Math.floor(days / 30)}mo ago`;
  };

  return (
    <section className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="section-label mb-4 inline-flex">
            <MessageSquare className="w-3 h-3" />
            Guestbook
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-4 mb-3">
            Visitor <span className="gradient-text">Guestbook</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Leave a message — say hi, share feedback, or just let me know you stopped by
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-clean p-5 mb-8"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={100}
                  required
                  className="px-3 py-2.5 rounded-lg bg-secondary border border-border text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                />
                <div className="flex items-center gap-1.5">
                  {emojis.map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => setSelectedEmoji(emoji)}
                      className={`w-8 h-8 rounded-lg text-sm flex items-center justify-center transition-all ${
                        selectedEmoji === emoji
                          ? "bg-primary/15 ring-1 ring-primary/30 scale-110"
                          : "bg-secondary hover:bg-secondary/80"
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
              <textarea
                placeholder="Leave a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={500}
                required
                rows={2}
                className="w-full px-3 py-2.5 rounded-lg bg-secondary border border-border text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
              />
              <Button type="submit" size="sm" disabled={isSubmitting || !name.trim() || !message.trim()}>
                <Send className="w-3.5 h-3.5 mr-1.5" />
                {isSubmitting ? "Signing..." : "Sign Guestbook"}
              </Button>
            </form>
          </motion.div>

          {/* Entries */}
          <div className="space-y-3">
            {entries.length === 0 && (
              <p className="text-center text-muted-foreground text-sm py-8">
                Be the first to sign the guestbook!
              </p>
            )}
            {entries.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="card-clean p-4"
              >
                <div className="flex items-start gap-3">
                  <span className="text-lg">{entry.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm text-foreground">{entry.name}</span>
                      <span className="text-[10px] text-muted-foreground">{timeAgo(entry.created_at)}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{entry.message}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};