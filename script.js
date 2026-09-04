const markdownInput = document.getElementById('markdown-input');
const htmlPreview = document.getElementById('html-preview');

function parseMarkdown(text) {
    let html = text
        .replace(/<[^>]*>/g, '') 
        .replace(/^### (.*$)/gim, '### $1')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');

    const lines = html.split('\n');
    let inList = false;
    let processedLines = [];

    for (let line of lines) {
        const cleanLine = line.trim();
        
        if (cleanLine.startsWith('- ') || cleanLine.startsWith('* ')) {
            if (!inList) {
                inList = true;
                processedLines.push('<ul>');
            }
            processedLines.push(`<li>${cleanLine.substring(2)}</li>`);
        } else {
            if (inList) {
                inList = false;
                processedLines.push('</ul>');
            }
            
            if (cleanLine && !cleanLine.startsWith('<h') && !cleanLine.startsWith('<u')) {
                processedLines.push(`<p>${cleanLine}</p>`);
            } else {
                processedLines.push(line);
            }
        }
    }

    if (inList) {
        processedLines.push('</ul>');
    }

    return processedLines.join('\n');
}

markdownInput.addEventListener('input', (e) => {
    const rawText = e.target.value;
    htmlPreview.innerHTML = parseMarkdown(rawText);
});

const defaultText = `# Live Markdown Parser

This is a **simple** custom document reader built from scratch.

## Features
- Fast regex parsing
- Live split-pane rendering
- Support for headers, bold, italics, and [links](https://google.com)

Give it a try by changing this text!`;

markdownInput.value = defaultText;
htmlPreview.innerHTML = parseMarkdown(defaultText);