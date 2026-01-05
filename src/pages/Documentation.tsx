import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import doc from "../../docs/BBRewrite.md?raw";

// Simple Markdown-to-HTML converter
function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderInline(md: string) {
  return md
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
}

function convertMarkdown(md: string) {
  const lines = md.split(/\r?\n/);
  let html = "";
  let inList = false;
  let inCode = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Code block
    if (line.trim().startsWith("```")) {
      inCode = !inCode;
      html += inCode ? '<pre class="rounded-lg bg-gray-900 p-4 overflow-x-auto"><code>' : "</code></pre>";
      continue;
    }

    if (inCode) {
      html += escapeHtml(line) + "\n";
      continue;
    }

    // Headings
    if (/^#{1,6}\s+/.test(line)) {
      const match = line.match(/^(#{1,6})\s+(.*)$/);
      if (match) {
        const level = match[1].length;
        const content = renderInline(escapeHtml(match[2]));
        html += `<h${level} class="mt-6 mb-4 font-semibold text-foreground">${content}</h${level}>`;
      }
      continue;
    }

    // Blockquote
    if (/^>\s+/.test(line)) {
      const content = renderInline(escapeHtml(line.replace(/^>\s+/, "")));
      html += `<blockquote class="border-l-4 border-brand-primary pl-4 italic text-foreground-muted my-4">${content}</blockquote>`;
      continue;
    }

    // List
    if (/^\s*[-*]\s+/.test(line)) {
      if (!inList) {
        inList = true;
        html += '<ul class="list-disc list-inside mb-4">';
      }
      const content = renderInline(escapeHtml(line.replace(/^\s*[-*]\s+/, "")));
      html += `<li class="mb-1">${content}</li>`;
      const nextLine = lines[i + 1] || "";
      if (!/^\s*[-*]\s+/.test(nextLine)) {
        html += "</ul>";
        inList = false;
      }
      continue;
    }

    // Tables (preformatted for simplicity)
    if (/^\|/.test(line)) {
      html += `<pre class="overflow-x-auto bg-gray-800 rounded-md p-2 mb-4 text-sm">${escapeHtml(line)}</pre>`;
      continue;
    }

    // Empty lines
    if (line.trim() === "") {
      html += "<p></p>";
      continue;
    }

    // Paragraph
    html += `<p class="mb-4 leading-relaxed">${renderInline(escapeHtml(line))}</p>`;
  }

  return html;
}

const Documentation = () => {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    setHtml(convertMarkdown(doc));
  }, []);

  return (
    <div className="min-h-screen bg-background py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto prose prose-invert">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-foreground-muted hover:text-brand-primary transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Documentation content */}
        <div
          className="prose prose-invert"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
};

export default Documentation;
