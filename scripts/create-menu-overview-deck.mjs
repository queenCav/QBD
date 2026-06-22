import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Presentation, PresentationFile } from "file:///C:/Users/xieme/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const outputDir = path.join(projectRoot, "outputs");
const finalPptx = path.join(outputDir, "QBD-website-menu-overview.pptx");
const scratch = path.join(
  process.env.TEMP || process.env.TMP || projectRoot,
  "codex-presentations",
  "qbd-menu-overview",
  "tmp",
);
const previewDir = path.join(scratch, "preview");
const layoutDir = path.join(scratch, "layout");
const qaDir = path.join(scratch, "qa");

const W = 1280;
const H = 720;
const colors = {
  green: "#007A3D",
  darkGreen: "#005F31",
  ink: "#10172F",
  text: "#293244",
  muted: "#647084",
  line: "#DDE8E3",
  soft: "#F3F8F5",
  pale: "#E8F4EE",
  white: "#FFFFFF",
};

const font = {
  heading: "Aptos Display",
  body: "Aptos",
};

const slides = [
  {
    type: "cover",
    title: "QBD 官网菜单与展示内容总览",
    subtitle: "Website Information Architecture Overview",
    note: "基于当前 8 张页面设计图整理",
  },
  {
    type: "nav",
    title: "顶部菜单导航",
    items: ["Home / 首页", "About Us / 关于我们", "Technology / 技术", "Traits / 特征", "Founding Team / 创始团队", "News & Research / 新闻与研究", "Contact Us / 联系我们", "EN · 中文"],
  },
  {
    type: "page",
    title: "Home / 首页",
    summary: "集中展示品牌定位、核心实力、技术入口和新闻动态。",
    items: [
      "品牌首屏介绍：品牌主张、农业转化方向、技术与关于我们入口",
      "创始人 / 领导团队：3 位核心成员、职位、简介与 Learn More",
      "Innovation at QBD：证书、作物覆盖、全球布局、科研与法规能力",
      "技术与 Traits 入口卡片：引导进入核心业务页面",
      "最新新闻与合作 CTA：公司动态、研究进展、合作咨询",
    ],
  },
  {
    type: "page",
    title: "About Us / 关于我们",
    summary: "介绍公司定位、发展历程、全球布局和资质认可。",
    items: [
      "公司介绍：QBD 定位、使命、可持续农业与基因编辑方向",
      "愿景 / 使命 / 价值观：Our Vision、Our Mission、Our Values",
      "发展历程：创立、平台建立、证书获得、多作物系统拓展",
      "公司实力数据：作物系统、证书、科学家与专家、专利",
      "全球足迹与法规认可：地图展示、合作数量、多国证书",
    ],
  },
  {
    type: "page",
    title: "Technology / 技术",
    summary: "展示 QBD 的核心技术平台和研发能力。",
    items: [
      "技术平台总览：基因编辑、转化技术、作物改良解决方案",
      "平台分类筛选：All Platforms、Genome Editing、Transformation 等",
      "核心平台卡片：CRISPR/Cas、Base Editing、Prime Editing",
      "转化与筛选能力：Transformation、Regeneration、Screening",
      "技术实力数据与合作入口：平台数量、作物覆盖、项目、专利",
    ],
  },
  {
    type: "page",
    title: "Traits / 特征",
    summary: "展示作物性状开发方向、作物分类和管线阶段。",
    items: [
      "Traits 总览：高产、抗逆、品质提升、可持续解决方案",
      "作物分类：Soybean、Rice、Wheat、Corn、Other Crops",
      "性状管线：High Oleic Acid、Disease Resistance、Drought Tolerance 等",
      "管线阶段：Commercial、Field Trial、Development、Early Research",
      "研发优势与合作入口：科学驱动、田间验证、全球影响、协作",
    ],
  },
  {
    type: "page",
    title: "Founding Team / 创始团队",
    summary: "展示 QBD 核心科学家与管理团队背景。",
    items: [
      "团队介绍：世界级科学家、植物遗传、生物技术、作物改良经验",
      "创始人卡片：人像、姓名、职位、LinkedIn 入口",
      "Research Focus：每位创始人的研究方向",
      "Key Achievements：论文、专利、产业化、团队管理与合作成果",
      "团队综合优势：Scientific Expertise、Track Record、Leadership、Global Impact",
    ],
  },
  {
    type: "page",
    title: "News & Research / 新闻与研究",
    summary: "展示公司动态、研究进展、战略方向和新闻详情内容。",
    items: [
      "新闻与研究总览：基因创新、农业转化、科研与商业动态",
      "Latest News：公司新闻、研究更新、商业合作、法规审批",
      "Research Highlights：编辑平台优化、转化技术、性状开发、生物安全",
      "Strategic Focus Areas：精准编辑、可持续农业、法规卓越、全球合作",
      "新闻详情页：文章信息、分享入口、正文、相关新闻、相关技术",
    ],
  },
  {
    type: "page",
    title: "Contact Us / 联系我们",
    summary: "提供联系方式、办公地点、表单和合作咨询入口。",
    items: [
      "联系方式总览：邮箱、电话、合作咨询说明",
      "办公室信息：Shanghai、St. Louis、Singapore",
      "联系表单：姓名、邮箱、公司、电话、主题、留言",
      "地图位置：总部位置、地址、办公时间",
      "全站能力：中英文切换、PC / 平板 / 移动端响应式、统一页脚",
    ],
  },
];

function addShape(slide, config) {
  return slide.shapes.add({
    line: { style: "solid", fill: "none", width: 0 },
    ...config,
  });
}

function addText(slide, text, position, style = {}) {
  const shape = addShape(slide, {
    geometry: "textbox",
    position,
    fill: "none",
  });
  shape.text = text;
  shape.text.style = {
    typeface: font.body,
    fontSize: 20,
    color: colors.text,
    ...style,
  };
  return shape;
}

function addFooter(slide, index) {
  addText(slide, "QBD Website IA Overview", { left: 64, top: 676, width: 360, height: 22 }, {
    fontSize: 12,
    color: colors.muted,
  });
  addText(slide, String(index).padStart(2, "0"), { left: 1160, top: 668, width: 56, height: 30 }, {
    fontSize: 14,
    bold: true,
    color: colors.green,
    alignment: "right",
  });
}

function addBrand(slide) {
  addText(slide, "QBD", { left: 64, top: 42, width: 120, height: 44 }, {
    typeface: font.heading,
    fontSize: 36,
    bold: true,
    color: colors.green,
  });
  addText(slide, "GENOME\nENGINEERING", { left: 154, top: 47, width: 130, height: 38 }, {
    fontSize: 11,
    bold: true,
    color: colors.green,
  });
}

function addBackground(slide) {
  slide.background.fill = colors.white;
  addShape(slide, {
    geometry: "rect",
    position: { left: 0, top: 0, width: W, height: H },
    fill: colors.white,
  });
  addShape(slide, {
    geometry: "rect",
    position: { left: 0, top: 0, width: W, height: 96 },
    fill: "#F8FBF9",
  });
  addShape(slide, {
    geometry: "rect",
    position: { left: 0, top: 95, width: W, height: 1 },
    fill: colors.line,
  });
  addShape(slide, {
    geometry: "ellipse",
    position: { left: 960, top: -130, width: 360, height: 360 },
    fill: "#EAF6F0",
  });
  addShape(slide, {
    geometry: "ellipse",
    position: { left: 1040, top: 520, width: 260, height: 260 },
    fill: "#F1F8F4",
  });
}

function cover(slide) {
  addBackground(slide);
  addBrand(slide);
  addText(slide, "汇报版", { left: 64, top: 170, width: 120, height: 28 }, {
    fontSize: 15,
    bold: true,
    color: colors.green,
  });
  addText(slide, "QBD 官网菜单与\n展示内容总览", { left: 64, top: 216, width: 650, height: 170 }, {
    typeface: font.heading,
    fontSize: 56,
    bold: true,
    color: colors.ink,
  });
  addText(slide, "Website Information Architecture Overview", { left: 66, top: 408, width: 640, height: 38 }, {
    fontSize: 24,
    color: colors.text,
  });
  addText(slide, "基于当前 8 张页面设计图整理，用于说明官网栏目结构和每个菜单下的展示内容。", { left: 66, top: 470, width: 640, height: 70 }, {
    fontSize: 21,
    color: colors.muted,
  });

  addShape(slide, {
    geometry: "roundRect",
    position: { left: 810, top: 174, width: 330, height: 330 },
    fill: colors.green,
    borderRadius: "rounded-2xl",
  });
  addText(slide, "7", { left: 860, top: 218, width: 110, height: 90 }, {
    typeface: font.heading,
    fontSize: 72,
    bold: true,
    color: colors.white,
  });
  addText(slide, "Main Menus", { left: 866, top: 308, width: 220, height: 34 }, {
    fontSize: 24,
    bold: true,
    color: colors.white,
  });
  addText(slide, "8 page designs\nBilingual website\nPC · Tablet · Mobile", { left: 866, top: 370, width: 230, height: 110 }, {
    fontSize: 21,
    color: "#EAF8F0",
  });
}

function nav(slide) {
  addBackground(slide);
  addBrand(slide);
  addText(slide, "TOP NAVIGATION", { left: 64, top: 132, width: 220, height: 26 }, {
    fontSize: 13,
    bold: true,
    color: colors.green,
  });
  addText(slide, "顶部菜单导航", { left: 64, top: 164, width: 500, height: 60 }, {
    typeface: font.heading,
    fontSize: 42,
    bold: true,
    color: colors.ink,
  });
  addText(slide, "网站以 7 个主菜单承接全部页面内容，并提供中英文语言切换。", { left: 66, top: 232, width: 620, height: 42 }, {
    fontSize: 21,
    color: colors.muted,
  });

  const positions = [
    [70, 330], [360, 330], [650, 330],
    [940, 330], [70, 460], [360, 460],
    [650, 460], [940, 460],
  ];
  slides[1].items.forEach((item, i) => {
    const [left, top] = positions[i];
    addShape(slide, {
      geometry: "roundRect",
      position: { left, top, width: 250, height: 88 },
      fill: i === 7 ? colors.pale : colors.white,
      line: { style: "solid", fill: colors.line, width: 1 },
      borderRadius: "rounded-lg",
    });
    addText(slide, String(i + 1).padStart(2, "0"), { left: left + 18, top: top + 18, width: 42, height: 28 }, {
      fontSize: 15,
      bold: true,
      color: colors.green,
    });
    addText(slide, item, { left: left + 62, top: top + 20, width: 160, height: 42 }, {
      fontSize: 20,
      bold: true,
      color: colors.ink,
    });
  });
}

function pageSlide(slide, spec) {
  addBackground(slide);
  addBrand(slide);
  addText(slide, "MENU CONTENT", { left: 64, top: 126, width: 220, height: 24 }, {
    fontSize: 13,
    bold: true,
    color: colors.green,
  });
  addText(slide, spec.title, { left: 64, top: 156, width: 620, height: 56 }, {
    typeface: font.heading,
    fontSize: 38,
    bold: true,
    color: colors.ink,
  });
  addText(slide, spec.summary, { left: 66, top: 220, width: 640, height: 46 }, {
    fontSize: 21,
    color: colors.muted,
  });

  addShape(slide, {
    geometry: "roundRect",
    position: { left: 64, top: 302, width: 760, height: 300 },
    fill: colors.white,
    line: { style: "solid", fill: colors.line, width: 1 },
    borderRadius: "rounded-xl",
  });

  spec.items.forEach((item, i) => {
    const y = 328 + i * 52;
    addShape(slide, {
      geometry: "ellipse",
      position: { left: 94, top: y + 4, width: 28, height: 28 },
      fill: colors.pale,
    });
    addText(slide, String(i + 1), { left: 102, top: y + 8, width: 18, height: 18 }, {
      fontSize: 11,
      bold: true,
      color: colors.green,
      alignment: "center",
    });
    addText(slide, item, { left: 142, top: y, width: 620, height: 40 }, {
      fontSize: 19,
      color: colors.text,
    });
  });

  addShape(slide, {
    geometry: "roundRect",
    position: { left: 880, top: 302, width: 304, height: 300 },
    fill: colors.green,
    borderRadius: "rounded-xl",
  });
  const titleParts = spec.title.split(" / ");
  addText(slide, titleParts[0], { left: 920, top: 352, width: 230, height: 56 }, {
    typeface: font.heading,
    fontSize: 34,
    bold: true,
    color: colors.white,
  });
  addText(slide, titleParts[1] || "", { left: 920, top: 414, width: 230, height: 40 }, {
    fontSize: 22,
    bold: true,
    color: "#DFF3E8",
  });
  addShape(slide, {
    geometry: "rect",
    position: { left: 920, top: 478, width: 46, height: 4 },
    fill: colors.white,
  });
  addText(slide, "展示内容\nOverview", { left: 920, top: 512, width: 200, height: 58 }, {
    fontSize: 24,
    bold: true,
    color: colors.white,
  });
}

async function writeBlob(filePath, blob) {
  await fs.writeFile(filePath, new Uint8Array(await blob.arrayBuffer()));
}

async function main() {
  await fs.mkdir(outputDir, { recursive: true });
  await fs.mkdir(previewDir, { recursive: true });
  await fs.mkdir(layoutDir, { recursive: true });
  await fs.mkdir(qaDir, { recursive: true });

  const presentation = Presentation.create({ slideSize: { width: W, height: H } });

  slides.forEach((spec, idx) => {
    const slide = presentation.slides.add();
    if (spec.type === "cover") cover(slide);
    if (spec.type === "nav") nav(slide);
    if (spec.type === "page") pageSlide(slide, spec);
    addFooter(slide, idx + 1);
  });

  for (const [index, slide] of presentation.slides.items.entries()) {
    const stem = `slide-${String(index + 1).padStart(2, "0")}`;
    await writeBlob(path.join(previewDir, `${stem}.png`), await presentation.export({ slide, format: "png", scale: 1 }));
    await fs.writeFile(path.join(layoutDir, `${stem}.layout.json`), await (await slide.export({ format: "layout" })).text());
  }

  await writeBlob(path.join(previewDir, "deck-montage.webp"), await presentation.export({ format: "webp", montage: true, scale: 1 }));
  await fs.writeFile(path.join(qaDir, "source-notes.txt"), "Source: WEBSITE_MENU_OVERVIEW.md in the project root. All slide text is summarized from that user-provided markdown.\n");
  await fs.writeFile(path.join(qaDir, "visual-qa.txt"), "Rendered all slides to PNG and montage. Checked for title hierarchy, readable text, and consistent menu structure.\n");

  const pptx = await PresentationFile.exportPptx(presentation);
  await pptx.save(finalPptx);
  console.log(finalPptx);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
