const fs = require("fs");
const path = require("path");

const basePath = path.resolve(__dirname, "..", "tropa-login/src");
const componentsPagesPath = path.join(basePath, "components", "pages");
const pagesPath = path.join(basePath, "pages");

const pageDefinitions = [
  {
    name: "EventPage",
    route: "eventos",
    children: ["Sidebar", "Header", "EventTable", "Pagination"],
  },
  {
    name: "LoginPage",
    route: "login",
    children: [],
  },
];

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

const createPageComponent = (page) => {
  const pageDir = path.join(componentsPagesPath, page.name);
  ensureDir(pageDir);

  const pageFile = path.join(pageDir, `${page.name}.tsx`);
  const stylesFile = path.join(pageDir, `${page.name}.styles.ts`);
  const imports = page.children
    .map(
      (child) =>
        `import { ${child} } from "@/components/molecules/${child}/${child}";`
    )
    .join("\n");

  const pageContent =
    'import React from "react";\n' +
    imports +
    '\nimport { Wrapper, Content } from "./' +
    page.name +
    '.styles";\n\n' +
    `export const ${page.name} = () => {\n` +
    "  return (\n" +
    "    <Wrapper>\n" +
    (page.name === "EventPage"
      ? "      <Sidebar />\n      <Content>\n        <Header />\n        <EventTable />\n        <Pagination />\n      </Content>"
      : "      {/* Conteúdo do LoginPage */}") +
    "\n    </Wrapper>\n" +
    "  );\n" +
    "};\n";

  const stylesContent =
    'import styled from "styled-components";\n\n' +
    "export const Wrapper = styled.div`\n" +
    "  display: flex;\n" +
    "  width: 100%;\n" +
    "  height: 100vh;\n" +
    "  background: ${({ theme }) => theme.colors.white};\n" +
    "`;\n\n" +
    "export const Content = styled.div`\n" +
    "  flex: 1;\n" +
    "  display: flex;\n" +
    "  flex-direction: column;\n" +
    "  background: ${({ theme }) => theme.colors.background};\n" +
    "`;\n";

  fs.writeFileSync(pageFile, pageContent, "utf8");
  fs.writeFileSync(stylesFile, stylesContent, "utf8");

  console.log(`✅ Criado: ${pageFile}`);
  console.log(`✅ Criado: ${stylesFile}`);
};

const createRouteFile = (page) => {
  ensureDir(pagesPath);
  const filePath = path.join(pagesPath, `${page.route}.tsx`);
  const content =
    'import React from "react";\n' +
    `import { ${page.name} } from "@/components/pages/${page.name}/${page.name}";\n\n` +
    `const ${page.name.replace("Page", "")} = () => <${page.name} />;\n\n` +
    `export default ${page.name.replace("Page", "")};\n`;

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`✅ Página de rota criada: ${filePath}`);
};

const run = () => {
  console.log("📁 Base:", basePath);
  ensureDir(componentsPagesPath);
  pageDefinitions.forEach((page) => {
    createPageComponent(page);
    createRouteFile(page);
  });
};

run();
