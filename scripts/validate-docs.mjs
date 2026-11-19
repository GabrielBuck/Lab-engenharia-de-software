import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { dirname, resolve, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const files = [];

function walk(folder) {
  for (const entry of readdirSync(folder, { withFileTypes: true })) {
    if (['.git', 'node_modules'].includes(entry.name)) continue;
    const full = resolve(folder, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile()) files.push(full);
  }
}
walk(root);
const rel = file => relative(root, file).split(sep).join('/');
const content = file => readFileSync(file, 'utf8');

const required = [
  'README.md', 'CONTRIBUTING.md', '.gitignore', '.github/workflows/ci.yml',
  'assets/booklog-cover.svg', 'assets/jornada-leitura.svg',
  'assets/arquitetura-booklog.svg', 'assets/indicadores-2026-11.svg',
  'docs/README.md', 'docs/estado-atual.md', 'docs/fontes-e-premissas.md',
  'docs/01-visao-produto/visao-produto.md',
  'docs/02-requisitos/requisitos-funcionais.md',
  'docs/02-requisitos/requisitos-nao-funcionais.md',
  'docs/02-requisitos/regras-negocio.md', 'docs/02-requisitos/rastreabilidade.md',
  'docs/03-casos-de-uso/README.md', 'docs/04-design/wireframes/README.md',
  'docs/05-modelagem/modelo-dominio.md', 'docs/05-modelagem/modelo-dados.md',
  'docs/06-arquitetura/visao-arquitetural.md',
  'docs/06-arquitetura/contratos-api.md',
  'docs/06-arquitetura/diagrama-implantacao.md',
  'docs/08-operacao/ambiente-desenvolvimento.md',
  'docs/09-codigo-publico/README.md',
  'docs/09-codigo-publico/backend/health.service.ts',
  'docs/09-codigo-publico/ios/PaginationDTOs.swift',
  'docs/09-codigo-publico/android/ApiResult.kt',
  'docs/10-resultados/indicadores-2026-11.md',
  'docs/entregas/primeira-entrega.md',
  'docs/entregas/atualizacao-2026-11-19.md',
  'tests/plano-testes.md'
];
for (const path of required) {
  const full = resolve(root, path);
  if (!existsSync(full) || !statSync(full).isFile() || !content(full).trim()) {
    errors.push('Ausente ou vazio: ' + path);
  }
}
if (existsSync(resolve(root, '.env.example'))) {
  errors.push('Configuração de exemplo desnecessária: .env.example');
}

const markdown = files.filter(file => file.endsWith('.md'));
const svg = files.filter(file => file.endsWith('.svg'));
let links = 0, figures = 0;

for (const file of markdown) {
  const path = rel(file);
  const source = content(file);
  if (!source.startsWith('# ')) errors.push(path + ': título H1 ausente');
  if (/(\bTODO\b|\bFIXME\b|\bTBD\b|lorem ipsum|\[inserir aqui\]|\[preencher\])/i.test(source)) {
    errors.push(path + ': trecho não finalizado');
  }
  const fences = (source.match(/^[ \t]*\x60\x60\x60/gm) || []).length;
  if (fences % 2) errors.push(path + ': bloco de código não fechado');

  const prose = source.replace(/^[ \t]*\x60\x60\x60[\s\S]*?^[ \t]*\x60\x60\x60/gm, '');
  for (const match of prose.matchAll(/(!?)\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) {
    const [, isImage, alt, href] = match;
    if (isImage) {
      figures++;
      if (!alt.trim()) errors.push(path + ': imagem sem descrição alternativa');
    }
    if (/^(?:https?:|mailto:|tel:)/i.test(href) || href.startsWith('#')) continue;
    links++;
    try {
      const target = resolve(dirname(file), decodeURIComponent(href.split(/[?#]/)[0]));
      const back = relative(root, target);
      if (back === '..' || back.startsWith('..' + sep) || !existsSync(target)) {
        errors.push(path + ': link local inválido → ' + href);
      }
    } catch {
      errors.push(path + ': link malformado → ' + href);
    }
  }
}

for (const path of [
  'assets/booklog-cover.svg', 'assets/jornada-leitura.svg',
  'assets/arquitetura-booklog.svg', 'assets/indicadores-2026-11.svg'
]) {
  const full = resolve(root, path);
  if (!existsSync(full)) continue;
  const source = content(full);
  if (!source.includes('<svg ') || !source.includes('</svg>') ||
      !source.includes('viewBox=') || !source.includes('<title ') ||
      !source.includes('<desc ')) errors.push(path + ': SVG incompleto');
  if (/<(?:script|foreignObject)\b/i.test(source) || /\bonload\s*=/i.test(source)) {
    errors.push(path + ': conteúdo ativo inesperado');
  }
}

const secretPatterns = [
  /AKIA[0-9A-Z]{16}/,
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /\bgh[pousr]_[A-Za-z0-9]{20,}\b/,
  /\bAIza[0-9A-Za-z_-]{30,}\b/,
  /\bsk-(?:proj-)?[A-Za-z0-9_-]{20,}\b/
];
for (const file of files.filter(file => /\.(?:md|mjs|yaml|yml|json|ts|swift|kt|svg|mmd)$/i.test(file))) {
  if (secretPatterns.some(pattern => pattern.test(content(file)))) {
    errors.push(rel(file) + ': possível segredo');
  }
}

const read = path => existsSync(resolve(root, path)) ? content(resolve(root, path)) : '';
const matrix = read('docs/02-requisitos/rastreabilidade.md');
const requirements = read('docs/02-requisitos/requisitos-funcionais.md');
const quality = read('docs/02-requisitos/requisitos-nao-funcionais.md');
const cases = markdown.filter(file => rel(file).startsWith('docs/03-casos-de-uso/casos-uso/'))
  .map(content).join('\n');
const tests = read('tests/plano-testes.md');

function ensureIds(prefix, count, sources) {
  for (let n = 1; n <= count; n++) {
    const id = prefix + String(n).padStart(3, '0');
    for (const [label, source] of sources) {
      if (!new RegExp('\\b' + id + '\\b').test(source)) errors.push(id + ' ausente em ' + label);
    }
  }
}
ensureIds('RF', 7, [['requisitos', requirements], ['rastreabilidade', matrix], ['casos de uso', cases]]);
ensureIds('RF', 19, [['requisitos', requirements], ['rastreabilidade', matrix]]);
ensureIds('RNF', 7, [['qualidade', quality], ['rastreabilidade', matrix]]);
ensureIds('UC', 5, [['casos de uso', cases], ['rastreabilidade', matrix]]);
ensureIds('CT', 12, [['plano de testes', tests], ['rastreabilidade', matrix]]);

for (const [path, needed] of [
  ['README.md', '19/11/2026'],
  ['docs/estado-atual.md', '19/11/2026'],
  ['docs/10-resultados/indicadores-2026-11.md', '19/11/2026'],
  ['docs/06-arquitetura/diagrama-implantacao.md', 'booklog-backend-staging']
]) if (!read(path).includes(needed)) errors.push(path + ': referência atual ausente');

if (errors.length) {
  errors.forEach(error => console.error('ERRO: ' + error));
  console.error('Total: ' + errors.length + ' erro(s).');
  process.exitCode = 1;
} else {
  console.log('Válido: ' + markdown.length + ' documentos, ' + links +
    ' links locais, ' + figures + ' imagens, ' + svg.length +
    ' SVG; rastreabilidade, conteúdo e segurança conferidos.');
}
