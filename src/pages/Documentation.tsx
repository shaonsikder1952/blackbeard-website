import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import doc from "../../docs/BBRewrite.md?raw";

// A small markdown-to-HTML converter for basic formatting used in the docs
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
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href=\"$2\" target=\"_blank\" rel=\"noopener noreferrer\">$1</a>");
}

function convertMarkdown(md: string) {
  const lines = md.split(/\r?\n/);
  let html = "";
  let inList = false;
  let inCode = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    if (line.trim().startsWith('```')) {
      if (!inCode) {
        inCode = true;
        html += '<pre><code>';
      } else {
        inCode = false;
        html += '</code></pre>';
      }
      continue;
    }

    if (inCode) {
      html += escapeHtml(line) + "\n";
      continue;
    }

    if (/^#{1,6}\s+/.test(line)) {
      const match = line.match(/^(#{1,6})\s+(.*)$/);
      if (match) {
        const level = match[1].length;
        const content = renderInline(escapeHtml(match[2]));
        html += `<h${level}>${content}</h${level}>`;
      }
      continue;
    }

    if (/^>\s+/.test(line)) {
      const content = renderInline(escapeHtml(line.replace(/^>\s+/, '')));
      html += `<blockquote>${content}</blockquote>`;
      continue;
    }

    if (/^\s*[-*]\s+/.test(line)) {
      if (!inList) {
        inList = true;
        html += '<ul>';
      }
      const content = renderInline(escapeHtml(line.replace(/^\s*[-*]\s+/, '')));
      html += `<li>${content}</li>`;
      // check if next line is not a list item to close the list
      const nextLine = lines[i+1] || '';
      if (!/^\s*[-*]\s+/.test(nextLine)) {
        html += '</ul>';
        inList = false;
      }
      continue;
    }

    if (/^\|/.test(line)) {
      // Render tables as preformatted to preserve layout
      html += `<pre>${escapeHtml(line)}</pre>`;
      continue;
    }

    if (line.trim() === "") {
      html += '<p></p>';
      continue;
    }

    html += `<p>${renderInline(escapeHtml(line))}</p>`;
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
        <Link to="/" className="inline-flex items-center gap-2 text-foreground-muted hover:text-brand-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
};

export default Documentation;
