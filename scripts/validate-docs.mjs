import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { dirname, resolve, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    if (['.git', 'node_modules'].includes(entry.name)) return [];
    const path = resolve(dir, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}
const required = [
  'README.md', 'CONTRIBUTING.md', '.gitignore',
  '.github/workflows/ci.yml', 'docs/fontes-e-premissas.md',
  'docs/01-visao-produto/visao-produto.md',
  'docs/02-requisitos/requisitos-funcionais.md',
  'docs/02-requisitos/requisitos-nao-funcionais.md',
  'docs/02-requisitos/regras-negocio.md',
  'docs/02-requisitos/rastreabilidade.md',
  'docs/03-casos-de-uso/README.md', 'docs/03-casos-de-uso/modelo-casos-uso.svg',
  'docs/04-design/wireframes/README.md', 'docs/05-modelagem/modelo-dominio.md',
  'docs/06-arquitetura/visao-arquitetural.md',
  'docs/07-sprints/sprint-01.md', 'docs/07-sprints/sprint-02.md',
  'tests/plano-testes.md'
];
for (const path of required) {
  const full = resolve(root, path);
  if (!existsSync(full) || !statSync(full).isFile() || !readFileSync(full, 'utf8').trim()) {
    errors.push('Arquivo obrigatório ausente ou vazio: ' + path);
  }
}
const markdown = walk(root).filter(path => path.endsWith('.md'));
let links = 0;
for (const path of markdown) {
  const content = readFileSync(path, 'utf8');
  if (!content.startsWith('# ')) errors.push('Título principal ausente: ' + relative(root, path));
  // Inline links are checked; remote URLs and anchor fragments are not.
  const prose = content.replace(/\x60{3}[\s\S]*?\x60{3}/g, '');
  for (const match of prose.matchAll(/!?\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) {
    const url = match[1];
    if (/^(?:[a-z][a-z0-9+.-]*:|#)/i.test(url)) continue;
    links++;
    try {
      const target = resolve(dirname(path), decodeURIComponent(url.split(/[?#]/)[0]));
      const rel = relative(root, target);
      if (rel === '..' || rel.startsWith('..' + sep) || !existsSync(target)) {
        errors.push(relative(root, path) + ': link local inválido → ' + url);
      }
    } catch {
      errors.push(relative(root, path) + ': link malformado → ' + url);
    }
  }
}
const read = path => existsSync(resolve(root, path)) ? readFileSync(resolve(root, path), 'utf8') : '';
const matrix = read('docs/02-requisitos/rastreabilidade.md');
const requirements = read('docs/02-requisitos/requisitos-funcionais.md');
const quality = read('docs/02-requisitos/requisitos-nao-funcionais.md');
const cases = markdown.filter(path => path.includes(sep + 'casos-uso' + sep))
  .map(path => readFileSync(path, 'utf8')).join('\n');
const tests = read('tests/plano-testes.md');
function ensureIds(prefix, count, sources) {
  for (let n = 1; n <= count; n++) {
    const id = prefix + String(n).padStart(3, '0');
    for (const [name, source] of sources) {
      if (!new RegExp('\\b' + id + '\\b').test(source)) errors.push(id + ' ausente em ' + name);
    }
  }
}
ensureIds('RF', 7, [['requisitos', requirements], ['matriz', matrix], ['casos', cases]]);
ensureIds('RNF', 7, [['qualidade', quality], ['matriz', matrix]]);
ensureIds('UC', 5, [['casos', cases], ['matriz', matrix]]);
ensureIds('CT', 12, [['plano de testes', tests], ['matriz', matrix]]);
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Documentação válida: ' + markdown.length + ' Markdown, ' + links +
    ' links locais e IDs da baseline verificados.');
}
