from pathlib import Path
from xml.etree import ElementTree as ET

root = Path(__file__).resolve().parent.parent
images = sorted(root.rglob("*.svg"))
errors = []
svg_tag = "{http://www.w3.org/2000/svg}svg"

for file in images:
    name = file.relative_to(root)
    try:
        tree = ET.parse(file)
        svg = tree.getroot()
    except ET.ParseError as error:
        errors.append(f"{name}: XML malformado ({error})")
        continue

    if svg.tag != svg_tag:
        errors.append(f"{name}: namespace SVG inválido")
    if not svg.attrib.get("viewBox"):
        errors.append(f"{name}: viewBox ausente")
    if not any(node.tag.rsplit("}", 1)[-1] == "title" for node in svg.iter()):
        errors.append(f"{name}: descrição de título ausente")

    for node in svg.iter():
        tag = node.tag.rsplit("}", 1)[-1]
        if tag in {"script", "foreignObject"}:
            errors.append(f"{name}: conteúdo ativo inesperado")
        for key, value in node.attrib.items():
            if key.rsplit("}", 1)[-1] in {"href", "src"} and value.startswith(("http:", "https:", "javascript:")):
                errors.append(f"{name}: referência externa inesperada")

if not images:
    errors.append("Nenhum SVG encontrado")

if errors:
    for error in errors:
        print(f"ERRO: {error}")
    raise SystemExit(1)

print(f"SVGs válidos e sem scripts externos: {len(images)} arquivo(s)")
