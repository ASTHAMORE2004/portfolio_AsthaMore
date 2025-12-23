import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

// Pre-built responses based on resume data
const getResponse = (question: string): string => {
  const q = question.toLowerCase();
  
  if (q.includes("experience") || q.includes("work") || q.includes("job")) {
    return "I have 3+ years of experience as a Full-Stack Developer and Software Engineer. I've worked on scalable microservices, real-time analytics dashboards, and ML-powered recommendation systems. My recent role focused on building APIs serving 10M+ requests/day and reducing database query times by 60%.";
  }
  
  if (q.includes("skill") || q.includes("technology") || q.includes("tech stack")) {
    return "I'm proficient in Python, TypeScript, Go, and Java. On the frontend, I work with React and modern frameworks. For backend, I use Node.js, FastAPI, and Spring Boot. I have strong experience with AWS, Kubernetes, Docker, PostgreSQL, MongoDB, and Redis. I also have ML experience with TensorFlow.";
  }
  
  if (q.includes("project") || q.includes("portfolio")) {
    return "Some of my key projects include: 1) A Real-Time Analytics Dashboard processing 1M+ events daily with <100ms latency, 2) An ML-Powered Recommendation Engine with 40% higher engagement, and 3) A Microservices Platform handling 10M+ requests/day. Check the Projects section for more details!";
  }
  
  if (q.includes("education") || q.includes("degree") || q.includes("study")) {
    return "I hold a Bachelor of Technology in Computer Science with a GPA of 8.5/10. I was on the Dean's List and served as Technical Club Lead. I'm also AWS Certified Solutions Architect.";
  }
  
  if (q.includes("contact") || q.includes("hire") || q.includes("available")) {
    return "I'm currently available for new opportunities! You can reach me through the Contact section below, email me directly, or connect with me on LinkedIn. I typically respond within 24-48 hours.";
  }
  
  if (q.includes("achievement") || q.includes("award")) {
    return "I've received the Best Performance Award for exceptional contributions to platform scalability, won first place in TechFest 2022 Hackathon among 200+ participants, and earned AWS Certified Solutions Architect certification.";
  }
  
  if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
    return "Hello! 👋 I'm Astha's AI assistant. I can tell you about her experience, skills, projects, education, and achievements. What would you like to know?";
  }
  
  return "I can help you learn about Astha's experience, skills, projects, education, and achievements. Try asking about:\n\n• Work experience\n• Technical skills\n• Featured projects\n• Education background\n• How to get in touch";
};

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi! 👋 I'm Astha's AI assistant. Ask me anything about her experience, skills, or projects!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response delay
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

    const response = getResponse(userMessage.content);
    
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: response,
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, assistantMessage]);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-[0_0_30px_hsl(174_84%_50%/0.4)] transition-shadow ${
          isOpen ? "hidden" : ""
        }`}
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-6rem)] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-secondary/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">AI Assistant</h4>
                  <p className="text-xs text-muted-foreground">Ask me about Astha</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-3 ${
                    message.role === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === "user"
                        ? "bg-secondary"
                        : "bg-gradient-to-br from-primary to-cyan-400"
                    }`}
                  >
                    {message.role === "user" ? (
                      <User className="w-4 h-4 text-foreground" />
                    ) : (
                      <Bot className="w-4 h-4 text-primary-foreground" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] p-3 rounded-2xl text-sm ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-sm"
                        : "bg-secondary text-foreground rounded-tl-sm"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="bg-secondary p-3 rounded-2xl rounded-tl-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-secondary/30">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about experience, skills..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                />
                <Button type="submit" size="icon" variant="hero" disabled={!input.trim()}>
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
