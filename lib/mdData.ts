import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import { switchCase } from "./fp";
import { EntryData, MarkdownData } from "./types/mdContent";

export enum Dir {
  WORK = "work",
  EDU = "education",
}

const WORK_DIR = path.join(process.cwd(), "content/work");

const getDirectory = switchCase({
  [Dir.WORK]: path.join(process.cwd(), "content/work"),
  [Dir.EDU]: path.join(process.cwd(), "content/education"),
})(path.join(process.cwd(), "content/work"));

const getFileNames = (directory: Dir) => {
  const DIR = getDirectory(directory);
  const fileNames = fs.readdirSync(DIR);
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
};

const sortData = (data: EntryData[] | (MarkdownData & EntryData)[]) =>
  data.sort((a, b) => (a.order < b.order ? 1 : -1));

export const getSortedEntries = async (
  directory: Dir
): Promise<EntryData[] | (MarkdownData & EntryData)[]> => {
  const DIR = getDirectory(directory);

  const fileNames = getFileNames(DIR);

  const fileEntries = fileNames.map(async (name) => {
    const fullPath = path.join(WORK_DIR, `${name}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
      fileName: name,
      contentHtml,
      ...(matterResult.data as EntryData),
    };
  });

  const res = await Promise.all(fileEntries);
  return sortData(res);
};
