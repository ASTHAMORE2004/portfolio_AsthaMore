import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface CodeSnippetProps {
  code: string;
  language: string;
  description?: string;
}

// Simple syntax highlighting
const highlightCode = (code: string, language: string) => {
  // Keywords for different languages
  const keywords: Record<string, string[]> = {
    typescript: ["const", "let", "var", "function", "return", "if", "else", "import", "export", "from", "async", "await", "new", "class", "interface", "type", "extends", "implements", "try", "catch", "throw"],
    javascript: ["const", "let", "var", "function", "return", "if", "else", "import", "export", "from", "async", "await", "new", "class", "try", "catch", "throw"],
    python: ["def", "class", "return", "if", "else", "elif", "import", "from", "try", "except", "raise", "with", "as", "for", "in", "while", "self", "None", "True", "False", "async", "await"],
    go: ["func", "return", "if", "else", "import", "package", "type", "struct", "interface", "for", "range", "defer", "go", "chan", "var", "const", "nil", "error"],
  };

  const langKeywords = keywords[language] || keywords.typescript;
  
  let highlighted = code
    // Escape HTML
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    // Strings (both single and double quotes)
    .replace(/(["'`])(?:(?=(\\?))\2.)*?\1/g, '<span class="text-emerald-400">$&</span>')
    // Comments
    .replace(/(\/\/.*$)/gm, '<span class="text-muted-foreground/60">$1</span>')
    .replace(/(#.*$)/gm, '<span class="text-muted-foreground/60">$1</span>')
    // Numbers
    .replace(/\b(\d+\.?\d*)\b/g, '<span class="text-amber-400">$1</span>')
    // Types (PascalCase)
    .replace(/\b([A-Z][a-zA-Z0-9]*)\b/g, '<span class="text-cyan-400">$1</span>');

  // Keywords
  langKeywords.forEach(keyword => {
    const regex = new RegExp(`\\b(${keyword})\\b`, 'g');
    highlighted = highlighted.replace(regex, '<span class="text-pink-400 font-medium">$1</span>');
  });

  return highlighted;
};

export const CodeSnippet = ({ code, language, description }: CodeSnippetProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-background/50">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-sm font-mono text-muted-foreground">{language}</span>
        </div>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md hover:bg-secondary transition-colors"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
      </div>

      {/* Code */}
      <div className="flex-1 overflow-auto p-4">
        <pre className="text-sm font-mono leading-relaxed">
          <code
            dangerouslySetInnerHTML={{ __html: highlightCode(code, language) }}
          />
        </pre>
      </div>

      {/* Description */}
      {description && (
        <div className="px-4 py-3 border-t border-border bg-primary/5">
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      )}
    </motion.div>
  );
};
