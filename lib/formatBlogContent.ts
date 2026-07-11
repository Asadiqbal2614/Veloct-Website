export type Block =
  | { type: "h1"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

const H1 = /^#\s+(.+)/;
const H2 = /^##\s+(.+)/;
const H3 = /^###\s+(.+)/;
const BULLET = /^\s*[-*•]\s+(.+)/;
const NUMBERED = /^\s*\d+\.\s+(.+)/;

export function parseBlogContent(content: string): Block[] {
  if (!content || !content.trim()) return [];

  const lines = content.split("\n");
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Blank line → skip (paragraph separation handled by flushing groups)
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Headings — only explicit Markdown
    const h1 = line.match(H1);
    if (h1) {
      blocks.push({ type: "h1", text: h1[1].trim() });
      i++;
      continue;
    }

    const h2 = line.match(H2);
    if (h2) {
      blocks.push({ type: "h2", text: h2[1].trim() });
      i++;
      continue;
    }

    const h3 = line.match(H3);
    if (h3) {
      blocks.push({ type: "h3", text: h3[1].trim() });
      i++;
      continue;
    }

    // Explicit bullet list — collect consecutive bullet lines
    const bulletMatch = line.match(BULLET);
    if (bulletMatch) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(BULLET)) {
        items.push(lines[i].match(BULLET)![1].trim());
        i++;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    // Explicit numbered list — collect consecutive numbered lines
    const numberedMatch = line.match(NUMBERED);
    if (numberedMatch) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(NUMBERED)) {
        items.push(lines[i].match(NUMBERED)![1].trim());
        i++;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    // Plain text — collect consecutive non-blank, non-special lines into a paragraph
    const textLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].match(H1) &&
      !lines[i].match(H2) &&
      !lines[i].match(H3) &&
      !lines[i].match(BULLET) &&
      !lines[i].match(NUMBERED)
    ) {
      textLines.push(lines[i].trim());
      i++;
    }
    blocks.push({ type: "paragraph", text: textLines.join("\n") });
  }

  return blocks;
}
