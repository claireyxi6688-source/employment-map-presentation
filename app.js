const presentationConfig = {
  projectName: "专业就业地图",
  presenter: "汇报人：许鑫",
  department: "部门：产品信息中心",
  date: "2026",
  footer: "部门：产品信息中心｜汇报人：许鑫",
  logoText: "互联派",
  logoUrl: "./presentation/images/hulianpai-logo.jpg",
  demoUrl: "http://localhost:5173/",
  screenshotUrl: "./presentation/screenshots/system-overview.png",
  videoUrl: "./presentation/videos/demo.mp4",
  preferVideo: false,
  showDemoButton: true,
  dataScale: "70万+",
  traditionalCycle: "约 7 天",
  dynamicCycle: "10～30 分钟",
  videoChapters: [
    { label: "专业就业总览", time: 0 },
    { label: "城市机会分析", time: 60 },
    { label: "岗位能力图谱", time: 120 }
  ],
  sections: [
    { title: "用户需求与市场机会", range: "1-2", duration: "约 1.5 分钟" },
    { title: "产品方案与效率升级", range: "3-4", duration: "约 1.5 分钟" },
    { title: "成果演示与可信逻辑", range: "5-7", duration: "约 4 分钟" },
    { title: "项目价值与未来规划", range: "8-9", duration: "约 1 分钟" }
  ]
};


const slides = [
  {
    id: "cover",
    number: "封面",
    section: "开场",
    title: "专业就业地图",
    subtitle: "输入一个专业，读懂就业市场、城市机会和岗位能力要求",
    duration: "10～15 秒",
    layout: "cover",
    tags: ["专业就业分析", "城市机会洞察", "岗位能力图谱", "AI 智能解读"],
    note: "开场只需要建立项目定位：它不是普通招聘查询工具，而是把专业、岗位、城市、企业和能力要求连接起来的就业分析产品。"
  },
  {
    id: "agenda",
    number: "总览",
    section: "汇报总览",
    title: "汇报结构与核心议题",
    subtitle: "本次汇报围绕需求背景、产品方案、成果验证与价值规划四个部分展开。",
    duration: "约 20 秒",
    layout: "agenda",
    parts: [
      ["01", "用户需求与市场机会", "梳理高校、顾问/导师与学员在专业就业服务中的核心需求和信息转化痛点。", "第 1-2 页"],
      ["02", "产品方案与效率升级", "说明产品链路、核心模块与系统化交付能力，突出从静态报告到动态系统的升级。", "第 3-4 页"],
      ["03", "成果演示与可信逻辑", "展示系统主流程、演示入口和数据规则，说明结果稳定性与可解释性来源。", "第 5-7 页"],
      ["04", "项目价值与未来规划", "总结产品对高校、顾问/导师、学员和公司的价值，并提出后续平台化发展方向。", "第 8-9 页"]
    ],
    conclusion: "整体汇报目标：说明专业就业地图如何将招聘数据、服务经验与 AI 能力沉淀为可持续交付的数据产品。",
    note: "这一页用来建立正式汇报框架。控制在 20 秒左右，按需求、方案、成果、价值四段展开。"
  },
  {
    id: "pain",
    number: "01",
    section: "用户需求与市场机会",
    title: "辅导学生专业就业，需要一套可解释的数据地图",
    subtitle: "高校和顾问/导师面对的并不是“没有信息”，而是缺少把招聘信息转化为辅导建议的结构化工具。",
    duration: "约 45 秒",
    layout: "pain",
    problems: [
      ["专业方向不清", "不知道自己的专业可以申请哪些岗位。"],
      ["就业选择模糊", "无法比较不同方向、行业和城市的机会。"],
      ["数据难以理解", "大量招聘信息无法转化为结构化结论。"],
      ["能力提升无依据", "无法从岗位职责和任职要求中识别真实筛选标准。"]
    ],
    conclusion: "搜索平台可以提供岗位，但难以提供结构化、可解释的就业决策依据。",
    note: "强调需求链路的顺序：高校需要就业指导和专业建设依据，顾问/导师需要标准化分析工具，学员需要可理解的就业行动建议。"
  },
  {
    id: "users",
    number: "02",
    section: "用户需求与市场机会",
    title: "三类用户，一条就业服务链路",
    subtitle: "高校提出就业指导与专业建设需求，顾问/导师完成分析转化，学员获得可理解的行动建议。",
    duration: "约 45 秒",
    layout: "users",
    audiences: [
      ["高校", ["就业辅导老师", "院系负责人", "专业建设相关老师"], ["需要专业就业方向讲解", "需要毕业生就业去向与市场需求依据", "需要辅助专业建设和就业指导"]],
      ["顾问 / 导师", ["求职导师", "企业导师", "升学与就业顾问"], ["需要快速完成专业就业分析", "需要用数据支撑规划建议", "需要提升咨询交付标准化"]],
      ["学员", ["在校生", "应届毕业生", "留学生", "转专业或求职方向探索者"], ["需要理解本专业能做什么", "需要判断目标城市和行业", "需要识别岗位能力要求"]]
    ],
    signals: ["高校和求职机构持续输出专业就业趋势内容", "顾问/导师服务需要更稳定的数据依据和解释框架", "学员持续提出“XX 专业能做什么”的具体咨询"],
    conclusion: "需求链路真实存在，但现有解决方案普遍颗粒度较粗，缺少面向高校、顾问/导师和学员的多维联动解释。",
    note: "本页不要讲市场规模，讲定性需求信号。顺序必须先高校，再顾问/导师，最后学员。"
  },
  {
    id: "solution",
    number: "03",
    section: "产品方案与效率升级",
    title: "输入一个专业，生成一张完整的就业机会地图",
    subtitle: "从专业理解到岗位筛选，再到城市、行业、企业和能力要求的联动分析。",
    duration: "约 45 秒",
    layout: "solution",
    stages: [
      ["专业理解", "用户输入专业", "识别专业及相关范围"],
      ["岗位筛选", "筛选可投递岗位", "形成专业机会池"],
      ["多维分析", "行业、企业、城市", "岗位类型与区域机会"],
      ["智能解读", "能力要求识别", "AI 解读与求职建议"]
    ],
    modules: [
      ["专业就业总览", "岗位数量、招聘企业、行业分布、企业性质、岗位大类、Top 企业"],
      ["城市机会分析", "全国招聘热力、省市机会、地区 Top 企业、城市与岗位联动"],
      ["岗位能力图谱", "工作内容、六维雷达、能力关键词、企业要求解释、提升建议"]
    ],
    conclusion: "它不是一个单独的地图，而是从专业出发，连接岗位、行业、城市、企业和能力要求的交互式就业分析系统。",
    note: "这一页讲清楚产品链路即可，不需要展开技术实现。"
  },
  {
    id: "efficiency",
    number: "04",
    section: "产品方案与效率升级",
    title: `从 ${presentationConfig.traditionalCycle} 静态交付，升级为 ${presentationConfig.dynamicCycle} 动态生成`,
    subtitle: "传统报告有效，但在周期、维度和交互性上存在限制。",
    duration: "约 45 秒",
    layout: "efficiency",
    before: ["Word、Excel 和静态图表", `单专业处理${presentationConfig.traditionalCycle}`, "数据更新后需要人工重做", "主要分析岗位和行业等基础维度", "高校、顾问/导师和学员只能阅读固定报告", "内容解释依赖人工经验"],
    after: ["可交互网页系统", `可运行 ${presentationConfig.dataScale} 岗位数据`, "后端服务层固定统计聚合逻辑", "数据源更新后刷新整个网页", "覆盖行业、企业性质、岗位类型、城市和能力等维度", "图表与 AI 解读结合"],
    systemProof: [
      ["不是单页展示", "前端页面背后有 API、统计聚合和统一数据结构支撑。"],
      ["不是二次开发", "后期与公司系统对接时，重点是接入数据源和字段映射。"],
      ["刷新即更新", "公司数据进入统一结构后，整套图表、地图和解读可同步刷新。"]
    ],
    upgrades: ["数据处理自动化", "后端逻辑可复用", "页面结果动态刷新", "开发对接成本降低"],
    conclusion: "效率提升的核心不是做页面更快，而是把就业分析沉淀成可复用、可对接、可持续刷新的系统。",
    note: "这里要突出系统能力：已经有前端展示、后端聚合、固定统计逻辑和数据结构。后续对接公司系统时，不需要重新开发整套页面，只要完成数据接入和字段映射，就能刷新网页结果。"
  },
  {
    id: "demo",
    number: "05",
    section: "成果演示与可信逻辑",
    title: "专业就业地图 2.0：动态、联动、可解释",
    subtitle: "通过真实 Demo 或本地录屏展示系统主流程。",
    duration: "约 2 分钟",
    layout: "demo",
    labels: ["专业就业总览", "城市机会分析", "岗位能力图谱"],
    conclusion: "接下来以财务管理专业为例，展示系统如何生成就业市场、城市机会和岗位能力的完整分析。",
    note: "演示重点：总览回答进入哪些行业和企业；城市页回答去哪里做；能力页说明六维能力来自岗位职责与任职要求。"
  },
  {
    id: "trust",
    number: "06",
    section: "成果演示与可信逻辑",
    title: "不是一次性的 AI 生成，而是一套有边界的数据规则",
    subtitle: "用规则控制分析边界，用数据提供证据，用 AI 提升提取和解释效率。",
    duration: "约 60 秒",
    layout: "trust",
    mechanisms: [
      ["专业字典", "控制标准名称、相关专业范围、精准搜索和机会池。"],
      ["岗位大类字典", "统一不同企业的岗位名称，支持持续统计和横向比较。"],
      ["行业与企业属性映射", "统一行业、企业性质、省市地区，避免颗粒度混乱。"],
      ["岗位能力模型", "结合真实职责、任职要求、关键词识别、语义判断和服务经验。"]
    ],
    equation: "字典控制边界 + 真实招聘数据提供证据 + AI 提升提取与解释效率 = 稳定、可解释的就业分析结果",
    conclusion: "尽可能降低结果随机性，提高输出稳定性和可解释性。",
    note: "这里避免绝对化表达，不说完全消除幻觉。重点是边界、证据、解释。"
  },
  {
    id: "implementation",
    number: "07",
    section: "成果演示与可信逻辑",
    title: "从招聘数据到交互式就业产品的完整实现链路",
    subtitle: `看起来是前端看板，背后是可承载 ${presentationConfig.dataScale} 数据的后端逻辑和分析系统。`,
    duration: "约 60 秒",
    layout: "implementation",
    pipeline: [
      ["数据输入", "数据获取", "招聘数据导出、采集工具", "原始岗位数据"],
      ["数据治理", "数据清洗", "Python / TypeScript 脚本", "统一岗位数据"],
      ["数据治理", "专业匹配", "专业字典、岗位关键词", "专业相关岗位"],
      ["数据治理", "岗位分类", "岗位大类字典", "岗位大类分布"],
      ["数据治理", "行业映射", "行业映射规则", "行业分析数据"],
      ["分析与智能化", "数据聚合", "后端服务层统计聚合", "图表 JSON"],
      ["分析与智能化", "能力识别", "关键词检索 + AI 语义判断", "六维能力评分"],
      ["分析与智能化", "AI 解读", "OpenAI 兼容接口", "智能分析内容"],
      ["产品呈现", "前端展示", "React、Vite、ECharts", "交互式网页"]
    ],
    system: [
      ["数据规模", `${presentationConfig.dataScale} 岗位数据可进入统一离线数据源。`],
      ["后端逻辑", "Node.js + Express + TypeScript 固化统计聚合、筛选和分析口径。"],
      ["系统对接", "后期接入公司系统数据后，不改页面结构即可刷新图表和 AI 解读。"]
    ],
    tech: "React + Vite + ECharts 做前端 BI 看板；Node.js + Express + TypeScript 做 API 服务；本地 JSON 做离线数据源；报告通过后端 PPTX 模板系统导出。",
    conclusion: "产品不是重新开发一个看板，而是把招聘数据处理、后端分析逻辑、AI 解读和页面呈现组织成可持续对接的系统。",
    note: "技术概念带过即可。重点突出：它已经不是静态页面，而是有固定后端逻辑的数据产品；后期技术对接时，公司数据进入统一结构，就可以刷新整个网页，减少二次开发。"
  },
  {
    id: "value",
    number: "08",
    section: "项目价值与未来规划",
    title: "把数据资产转化为可规模化的就业服务能力",
    subtitle: "核心价值不只是生成几张图，而是沉淀一套可重复使用的产品能力。",
    duration: "约 30 秒",
    layout: "value",
    values: [
      ["对高校", "辅助专业就业方向讲解，支持就业去向与市场需求分析。"],
      ["对顾问和导师", "将一周左右的人工分析压缩到分钟级，提供统一数据依据，提高规划效率。"],
      ["对学员", "快速理解本专业就业方向，选择目标行业和城市，形成具体求职准备方向。"],
      ["对互联派", "将多年校招数据、导师经验和后端分析逻辑转化为可复用系统能力，后续可直接对接公司数据。"]
    ],
    conclusion: "把数据、业务经验和服务流程沉淀为一套可重复使用的就业服务能力。",
    note: "这一页要稍微突出互联派价值，但保持产品成果汇报口吻。"
  },
  {
    id: "roadmap",
    number: "09",
    section: "项目价值与未来规划",
    title: "从就业地图 2.0，走向完整的 AI 求职服务平台",
    subtitle: "从“看懂专业就业”继续走向“完成能力提升与求职转化”。",
    duration: "约 30 秒",
    layout: "roadmap",
    versions: [
      ["1.0", "人工就业分析报告", "人工处理、静态 Word 或图表、单专业交付周期较长。"],
      ["2.0", "当前专业就业地图", "自动化数据处理、多维动态分析、网页交互、能力图谱、AI 解读。"],
      ["2.1", "下一阶段", "更多专业自动生成、数据自动更新、AI 实时追问、个性化报告导出。"]
    ],
    ecosystem: ["高校就业指导", "顾问咨询流程", "学员画像", "简历能力分析", "岗位推荐", "简历优化", "面试题库", "课程和求职服务"],
    conclusion: "从“告诉学员这个专业能做什么”，进一步发展为“帮助学员找到适合自己的岗位，并完成求职能力提升”。",
    note: "收束到未来愿景，最后停留在“谢谢观看”和答疑。"
  }
];


const config = presentationConfig;

const state = {
  index: getInitialSlide(),
  notes: false,
  presenter: false,
  toc: false,
  video: false
};

const app = document.querySelector("#app");

function getInitialSlide() {
  const params = new URLSearchParams(window.location.search);
  const querySlide = Number(params.get("slide"));
  const stored = Number(localStorage.getItem("employment-map-slide"));
  const candidate = Number.isFinite(querySlide) && querySlide > 0 ? querySlide - 1 : stored;
  return clamp(Number.isFinite(candidate) ? candidate : 0, 0, slides.length - 1);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function goTo(index) {
  state.index = clamp(index, 0, slides.length - 1);
  localStorage.setItem("employment-map-slide", String(state.index));
  const url = new URL(window.location.href);
  url.searchParams.set("slide", String(state.index + 1));
  window.history.replaceState({}, "", url);
  render();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[char]);
}

function list(items, className = "") {
  return `<ul class="${className}">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function render() {
  const slide = slides[state.index];
  const next = slides[state.index + 1];
  app.innerHTML = `
    <main class="deck">
      <div class="progress"><span style="width:${((state.index + 1) / slides.length) * 100}%"></span></div>
      <section class="slide slide-${slide.layout}">
        ${renderTopbar(slide)}
        <div class="slide-body">${renderSlide(slide)}</div>
        ${renderFooter(slide)}
      </section>
      ${renderControls()}
      ${state.toc ? renderToc() : ""}
      ${state.notes ? renderNotes(slide, next) : ""}
      ${state.video ? renderVideoModal() : ""}
    </main>
  `;
  bindDynamicEvents();
}

function renderTopbar(slide) {
  const brand = config.logoUrl
    ? `<img src="${escapeHtml(config.logoUrl)}" alt="${escapeHtml(config.logoText)}" />`
    : `<span></span>${escapeHtml(config.logoText)}`;
  return `
    <header class="topbar">
      <div class="brand-mark">${brand}</div>
      <div class="section-pill">${escapeHtml(slide.section)}</div>
    </header>
  `;
}

function renderFooter(slide) {
  return `
    <footer class="slide-footer">
      <span>${escapeHtml(config.projectName)}</span>
      <span>${state.index + 1} / ${slides.length}</span>
    </footer>
  `;
}

function renderControls() {
  return `
    <nav class="controls" aria-label="幻灯片控制">
      <button data-action="home" title="首页">⌂</button>
      <button data-action="prev" title="上一页">‹</button>
      <button data-action="toc" title="章节目录">目</button>
      <button data-action="notes" title="讲稿提示">N</button>
      <button data-action="presenter" title="演讲者模式">P</button>
      <button data-action="fullscreen" title="全屏">⛶</button>
      <button data-action="next" title="下一页">›</button>
    </nav>
  `;
}

function renderSlide(slide) {
  const renderers = {
    cover: renderCover,
    agenda: renderAgenda,
    pain: renderPain,
    users: renderUsers,
    solution: renderSolution,
    efficiency: renderEfficiency,
    demo: renderDemo,
    trust: renderTrust,
    implementation: renderImplementation,
    value: renderValue,
    roadmap: renderRoadmap
  };
  return renderers[slide.layout](slide);
}

function renderHeroTitle(slide) {
  return `
    <div class="title-block">
      <span class="eyebrow">${escapeHtml(slide.number)} · ${escapeHtml(slide.section)}</span>
      <h1>${escapeHtml(slide.title)}</h1>
      <p>${escapeHtml(slide.subtitle)}</p>
    </div>
  `;
}

function renderCover(slide) {
  return `
    <div class="cover-grid">
      <div class="cover-copy">
        <span class="eyebrow">AI 项目成果汇报</span>
        <h1>${escapeHtml(slide.title)}</h1>
        <p>${escapeHtml(slide.subtitle)}</p>
        <div class="tag-row">${slide.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
        <div class="cover-action-row">
          <button class="primary start" data-action="next">开始汇报</button>
          <div class="meta-line">
            <span>${escapeHtml(config.department)}</span>
            <span>${escapeHtml(config.presenter)}</span>
          </div>
        </div>
      </div>
      <div class="map-visual">
        <div class="map-card map-card-main">
          <strong>城市机会</strong>
          <b>岗位热力</b>
          <span>City · Industry · Ability</span>
        </div>
        <div class="radar">
          <i></i><i></i><i></i><i></i><i></i><i></i>
        </div>
        <div class="node n1"></div><div class="node n2"></div><div class="node n3"></div>
        <div class="floating-card">AI 解读</div>
        <div class="floating-card second">能力图谱</div>
      </div>
    </div>
  `;
}

function renderAgenda(slide) {
  return `
    ${renderHeroTitle(slide)}
    <div class="agenda-grid">
      ${slide.parts.map(([num, title, text, pages]) => `
        <article>
          <b>${escapeHtml(num)}</b>
          <div>
            <h3>${escapeHtml(title)}</h3>
            <p>${escapeHtml(text)}</p>
            <span>${escapeHtml(pages)}</span>
          </div>
        </article>
      `).join("")}
    </div>
    <div class="agenda-flow">
      <span>需求</span><i></i><span>方案</span><i></i><span>成果</span><i></i><span>价值</span>
    </div>
    <div class="conclusion">${escapeHtml(slide.conclusion)}</div>
  `;
}

function renderPain(slide) {
  return `
    ${renderHeroTitle(slide)}
    <div class="two-col pain-grid">
      <div class="info-cloud">
        ${["招聘网站岗位列表", "零散就业报告", "社交媒体问答", "城市和行业信息", "岗位 JD", "能力要求"].map((item, i) => `<span class="bubble b${i}">${escapeHtml(item)}</span>`).join("")}
        <div class="student-dot">学员</div>
      </div>
      <div class="problem-list">
        ${slide.problems.map(([title, text], i) => `
          <article>
            <b>0${i + 1}</b>
            <h3>${escapeHtml(title)}</h3>
            <p>${escapeHtml(text)}</p>
          </article>
        `).join("")}
      </div>
    </div>
    <div class="conclusion">${escapeHtml(slide.conclusion)}</div>
  `;
}

function renderUsers(slide) {
  if (slide.audiences) {
    return `
      ${renderHeroTitle(slide)}
      <div class="audience-chain">
        ${slide.audiences.map(([title, roles, needs], index) => `
          <article>
            <b>0${index + 1}</b>
            <h3>${escapeHtml(title)}</h3>
            <div class="role-row">${roles.map((role) => `<span>${escapeHtml(role)}</span>`).join("")}</div>
            ${list(needs, "need-list")}
          </article>
        `).join("")}
      </div>
      <div class="flow-core audience-flow">
        <div>高校就业与专业建设需求</div><span>→</span><strong>顾问/导师分析转化</strong><span>→</span><div>学员就业决策与能力提升</div>
      </div>
      <div class="signal-row">${slide.signals.map((signal) => `<span>${escapeHtml(signal)}</span>`).join("")}</div>
      <div class="conclusion">${escapeHtml(slide.conclusion)}</div>
    `;
  }
  return `
    ${renderHeroTitle(slide)}
    <div class="relationship">
      <div class="user-panel">
        <h3>2C 直接需求方</h3>
        ${list(slide.student, "compact")}
        <div class="question-stack">${slide.studentQuestions.map((q) => `<span>${escapeHtml(q)}</span>`).join("")}</div>
      </div>
      <div class="flow-core">
        <div>招聘数据</div><span>→</span><strong>专业服务者分析与转化</strong><span>→</span><div>学员就业决策</div>
      </div>
      <div class="user-panel service">
        <h3>2B / 2T 服务与传递方</h3>
        ${list(slide.service, "compact")}
        <div class="question-stack">${slide.serviceQuestions.map((q) => `<span>${escapeHtml(q)}</span>`).join("")}</div>
      </div>
    </div>
    <div class="signal-row">${slide.signals.map((signal) => `<span>${escapeHtml(signal)}</span>`).join("")}</div>
    <div class="conclusion">${escapeHtml(slide.conclusion)}</div>
  `;
}

function renderSolution(slide) {
  return `
    ${renderHeroTitle(slide)}
    <div class="stage-row">
      ${slide.stages.map(([stage, a, b], i) => `
        <article class="stage-card">
          <span>0${i + 1}</span><h3>${escapeHtml(stage)}</h3><p>${escapeHtml(a)}</p><p>${escapeHtml(b)}</p>
        </article>
      `).join("")}
    </div>
    <div class="module-row">
      ${slide.modules.map(([title, text]) => `<article><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`).join("")}
    </div>
    <div class="conclusion">${escapeHtml(slide.conclusion)}</div>
  `;
}

function renderEfficiency(slide) {
  return `
    ${renderHeroTitle(slide)}
    <div class="compare">
      <article><h3>传统方式</h3>${list(slide.before)}</article>
      <div class="upgrade-arrow"><span>AI 与自动化</span><b>→</b></div>
      <article class="active"><h3>专业就业地图</h3>${list(slide.after)}</article>
    </div>
    <div class="system-proof">
      ${slide.systemProof.map(([title, text]) => `<article><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`).join("")}
    </div>
    <div class="upgrade-tags">${slide.upgrades.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
    <div class="conclusion">${escapeHtml(slide.conclusion)}</div>
  `;
}

function renderDemo(slide) {
  return `
    ${renderHeroTitle(slide)}
    <div class="demo-layout">
      <div class="screenshot-frame">
        <img src="${escapeHtml(config.screenshotUrl)}" alt="系统主界面截图" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';" />
        <div class="placeholder">
          <strong>系统截图占位</strong>
          <span>请替换：public/presentation/screenshots/system-overview.png</span>
        </div>
        ${slide.labels.map((label, i) => `<mark class="callout c${i}">${escapeHtml(label)}</mark>`).join("")}
      </div>
      <aside class="demo-actions">
        <p>${escapeHtml(slide.conclusion)}</p>
        ${config.showDemoButton ? `<a class="primary" href="${escapeHtml(config.demoUrl)}" target="_blank" rel="noreferrer">进入系统演示</a>` : ""}
        <button class="secondary" data-action="video">观看演示录屏</button>
        <small>Demo 地址与录屏路径均来自 presentationConfig.js</small>
      </aside>
    </div>
  `;
}

function renderTrust(slide) {
  return `
    ${renderHeroTitle(slide)}
    <div class="trust-wheel">
      <div class="engine">可信<br />分析引擎</div>
      ${slide.mechanisms.map(([title, text], i) => `
        <article class="trust-card t${i}"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>
      `).join("")}
    </div>
    <div class="equation">${escapeHtml(slide.equation)}</div>
    <div class="conclusion">${escapeHtml(slide.conclusion)}</div>
  `;
}

function renderImplementation(slide) {
  return `
    ${renderHeroTitle(slide)}
    <div class="pipeline">
      ${slide.pipeline.map(([phase, name, method, output]) => `
        <article class="${name === "专业匹配" || name === "能力识别" ? "highlight" : ""}">
          <span>${escapeHtml(phase)}</span>
          <h3>${escapeHtml(name)}</h3>
          <p>${escapeHtml(method)}</p>
          <b>${escapeHtml(output)}</b>
        </article>
      `).join("")}
    </div>
    <div class="system-row">
      ${slide.system.map(([title, text]) => `<article><b>${escapeHtml(title)}</b><span>${escapeHtml(text)}</span></article>`).join("")}
    </div>
    <div class="tech-strip">${escapeHtml(slide.tech)}</div>
    <div class="conclusion">${escapeHtml(slide.conclusion)}</div>
  `;
}

function renderValue(slide) {
  return `
    ${renderHeroTitle(slide)}
    <div class="value-orbit">
      <div class="value-core">可规模化的<br />就业服务能力</div>
      ${slide.values.map(([title, text], i) => `<article class="v${i}"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`).join("")}
    </div>
    <div class="conclusion">${escapeHtml(slide.conclusion)}</div>
  `;
}

function renderRoadmap(slide) {
  return `
    ${renderHeroTitle(slide)}
    <div class="timeline">
      ${slide.versions.map(([version, title, text]) => `<article><b>${escapeHtml(version)}</b><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`).join("")}
    </div>
    <div class="ecosystem">
      <div>专业就业地图</div>
      ${slide.ecosystem.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
    </div>
    <div class="thanks">
      <strong>谢谢观看</strong>
      <span>${escapeHtml(config.presenter)} · ${escapeHtml(config.department)} · ${escapeHtml(config.date)}</span>
    </div>
  `;
}

function renderToc() {
  return `
    <div class="toc-panel">
      <button data-action="toc" class="close">×</button>
      <h2>章节目录</h2>
      ${config.sections.map((section) => `<article><b>${escapeHtml(section.range)}</b><span>${escapeHtml(section.title)}</span><small>${escapeHtml(section.duration)}</small></article>`).join("")}
    </div>
  `;
}

function renderNotes(slide, next) {
  return `
    <aside class="notes-panel">
      ${state.presenter ? `
        <div class="presenter-meta">
          <span>当前页：${state.index + 1}/${slides.length}</span>
          <span>章节：${escapeHtml(slide.section)}</span>
          <span>建议时间：${escapeHtml(slide.duration)}</span>
          <span>下一页：${next ? escapeHtml(next.title) : "结束"}</span>
        </div>
      ` : ""}
      <p>${escapeHtml(slide.note)}</p>
    </aside>
  `;
}

function renderVideoModal() {
  return `
    <div class="video-modal">
      <div class="video-box">
        <button class="close" data-action="video">×</button>
        <video src="${escapeHtml(config.videoUrl)}" controls></video>
        <div class="video-fallback">如视频无法播放，请替换 public/presentation/videos/demo.mp4</div>
        <div class="chapter-buttons">
          ${config.videoChapters.map((chapter) => `<button data-video-time="${chapter.time}">${escapeHtml(chapter.label)}</button>`).join("")}
        </div>
      </div>
    </div>
  `;
}

function bindDynamicEvents() {
  document.querySelectorAll("[data-action]").forEach((element) => {
    element.addEventListener("click", (event) => {
      event.stopPropagation();
      handleAction(element.dataset.action);
    });
  });
  document.querySelectorAll("[data-video-time]").forEach((button) => {
    button.addEventListener("click", () => {
      const video = document.querySelector("video");
      if (video) {
        video.currentTime = Number(button.dataset.videoTime);
        video.play().catch(() => {});
      }
    });
  });
}

function handleAction(action) {
  if (action === "next") goTo(state.index + 1);
  if (action === "prev") goTo(state.index - 1);
  if (action === "home") goTo(0);
  if (action === "toc") { state.toc = !state.toc; render(); }
  if (action === "notes") { state.notes = !state.notes; render(); }
  if (action === "presenter") { state.presenter = !state.presenter; state.notes = true; render(); }
  if (action === "video") { state.video = !state.video; render(); }
  if (action === "fullscreen") {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen().catch(() => {});
  }
}

document.addEventListener("keydown", (event) => {
  if (event.target.matches("video")) return;
  if (event.key === "ArrowRight" || event.key === " ") goTo(state.index + 1);
  if (event.key === "ArrowLeft") goTo(state.index - 1);
  if (event.key.toLowerCase() === "n") handleAction("notes");
  if (event.key.toLowerCase() === "p") handleAction("presenter");
  if (event.key === "Escape" && state.video) handleAction("video");
});

document.addEventListener("click", (event) => {
  if (event.target.closest("button, a, video, .toc-panel, .notes-panel, .video-box")) return;
  const direction = event.clientX > window.innerWidth / 2 ? 1 : -1;
  goTo(state.index + direction);
});

render();
