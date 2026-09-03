import { marked } from 'marked';
import fs from 'fs';
import path from 'path';

function walk(dir, out=[]) {
  for (const e of fs.readdirSync(dir, {withFileTypes:true})) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

const root = '../uk-gdad-pcf-psychometric-assessments/roles';
const files = walk(root);

function isContinuation(raw) {
  const s = raw.trim();
  const m = s.match(/^\*\*([^*]*)\*\*/);
  if (!m) return false;
  return /expla/i.test(m[1]);
}

let sizeCounts = {};
let short = [];
let totalGroups = 0;

for (const f of files) {
  const md = fs.readFileSync(f, 'utf8');
  const tokens = marked.lexer(md).filter(t => t.type !== 'space');
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (t.type === 'paragraph' && /^\*\*Correct answer/i.test(t.raw.trim())) {
      totalGroups++;
      let j = i + 1;
      let group = [t.raw];
      while (j < tokens.length && tokens[j].type === 'paragraph' && isContinuation(tokens[j].raw)) {
        group.push(tokens[j].raw);
        j++;
      }
      sizeCounts[group.length] = (sizeCounts[group.length]||0)+1;
      const full = group.join(' ');
      if (full.length < 100) short.push({file: f, text: full});
    }
  }
}
console.log('total groups', totalGroups);
console.log('size counts', sizeCounts);
console.log('short (<100 chars) count:', short.length);
short.forEach(s => console.log(JSON.stringify(s)));
