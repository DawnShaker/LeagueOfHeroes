export function formatTableContent(text: string): string {
  const lines = text.split('\n').map(line => line.replace(/\r$/, ''));
  let delimiter = '\t';
  if (!lines.some(line => line.includes('\t')) && lines.some(line => line.includes('|'))) delimiter = '|';

  const splitLine = (line: string) => delimiter === '\t'
    ? line.split('\t').map(cell => cell.trim())
    : line.split(/\s*\|\s*/).map(cell => cell.trim());
  const headers = splitLine(lines[0] || '');
  const rows = lines.slice(1).filter(line => line.trim() !== '').map(splitLine);
  const thead = headers.map(header => `<th>${header}</th>`).join('');
  const tbody = rows.map(cells => `<tr>${cells.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('');

  return `<div class="table-container"><table><thead><tr>${thead}</tr></thead><tbody>${tbody}</tbody></table></div>`;
}

export function formatDescription(text?: string): string {
  if (!text) return '';
  if (/<table\b/i.test(text)) return text;

  const lines = text.split('\n');
  let output = '';
  let tableLines: string[] = [];
  const flushTable = () => {
    if (!tableLines.length) return;
    output += formatTableContent(tableLines.join('\n'));
    tableLines = [];
  };

  for (const line of lines) {
    const isPipeRow = line.includes('|') && line.split('|').length > 1;
    if (line.includes('\t') || isPipeRow) tableLines.push(line);
    else {
      flushTable();
      if (line.trim()) output += `<p>${line}</p>`;
    }
  }
  flushTable();
  return output;
}
