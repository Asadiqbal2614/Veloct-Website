"use client";

import { parseBlogContent, type Block } from "@/lib/formatBlogContent";

function renderBlock(block: Block, index: number) {
  switch (block.type) {
    case "h1":
      return (
        <h1
          key={index}
          className="text-3xl font-bold text-slate-900 dark:text-white mt-8 mb-3"
        >
          {block.text}
        </h1>
      );

    case "h2":
      return (
        <h2
          key={index}
          className="text-2xl font-bold text-slate-900 dark:text-white mt-6 mb-2"
        >
          {block.text}
        </h2>
      );

    case "h3":
      return (
        <h3
          key={index}
          className="text-xl font-semibold text-slate-900 dark:text-white mt-5 mb-2"
        >
          {block.text}
        </h3>
      );

    case "paragraph":
      return (
        <p
          key={index}
          className="text-slate-700 dark:text-white/80 leading-relaxed mb-3 whitespace-pre-wrap"
        >
          {block.text}
        </p>
      );

    case "ul":
      return (
        <ul
          key={index}
          className="list-disc pl-6 mb-3 space-y-1 marker:text-[#FE7004]"
        >
          {block.items.map((item, i) => (
            <li
              key={i}
              className="text-slate-700 dark:text-white/80 leading-relaxed"
            >
              {item}
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol
          key={index}
          className="list-decimal pl-6 mb-3 space-y-1 marker:text-[#FE7004] marker:font-semibold"
        >
          {block.items.map((item, i) => (
            <li
              key={i}
              className="text-slate-700 dark:text-white/80 leading-relaxed"
            >
              {item}
            </li>
          ))}
        </ol>
      );

    default:
      return null;
  }
}

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  const blocks = parseBlogContent(content);

  if (blocks.length === 0) return null;

  return <>{blocks.map((block, i) => renderBlock(block, i))}</>;
}
