# QBD 官网设计图模块拆解

本文档根据 `src/assets/designImg` 下 8 张设计图整理，用于后续按页面、按模块开发与验收。

## 设计图清单

| 设计图 | 页面 | 建议路由 |
| --- | --- | --- |
| `首页-home.png` | 首页 | `/` |
| `关于我们.png` | 关于我们 | `/about` |
| `我们的技术.png` | 我们的技术 | `/technology` |
| `特征.png` | Traits / 特征 | `/traits` |
| `创始人详情.png` | 创始团队 | `/founding-team` |
| `新闻.png` | 新闻与研究 | `/news-research` |
| `新闻详情.png` | 新闻详情 | `/news-research/:slug` |
| `联系我们.png` | 联系我们 | `/contact` |

## 全站共用模块

### Header / 顶部导航

- Logo：`QBD` + `GENOME ENGINEERING`
- 主导航：
  - About Us
  - Technology，下拉入口提示
  - Traits
  - News & Research / News & Publications
  - Contact Us
- 语言切换：
  - EN
  - 中文
- 当前页面高亮：
  - 顶部绿色下划线
  - 当前导航文字绿色
- 移动端：
  - 折叠菜单
  - 语言切换保留
  - 点击菜单项后关闭菜单

### Footer / 页脚

- Logo 与公司简介
- 社交入口：
  - LinkedIn
  - X
  - WeChat
  - Email
- Footer 导航分组：
  - About Us：About QBD、Leadership Team、Careers
  - Technology：Genome Editing Technologies、Transformation Technologies、Biosafety Certifications、Trait Development
  - Traits：Soybean、Rice、Wheat、Corn、Other Crops
  - News & Research：News & Updates、Research Highlights、Events / Publications
  - Contact Us：地址、邮箱、电话
- 底部版权：
  - `© 2025 QBD. All Rights Reserved.`
  - Privacy Policy
  - Terms of Use

### 通用视觉与交互

- 绿色主按钮，右侧箭头
- 白底描边按钮，右侧箭头
- 页面常用结构：
  - 面包屑
  - 页面 Hero
  - 标题下绿色短线
  - 图文卡片
  - 数据统计横幅
  - CTA 横幅
- 所有展示文案需要支持中英文切换。
- PC 与移动端都要响应式：
  - 多列卡片在移动端改为单列
  - 表格在移动端需要可读布局
  - Header 导航折叠
  - 图片与文字避免重叠

## 1. 首页

### 1.1 首页 Hero

- 背景图：实验室幼苗、DNA 链视觉
- 左侧主标题：
  - `Advancing Genome Innovation.`
  - `Transforming Agriculture.`
- 简介文案：
  - QBD 是全球基因工程公司，专注通过创新技术和解决方案推进可持续农业。
- 操作按钮：
  - Our Technology，跳转技术页
  - About QBD，跳转关于我们
- 轮播指示点：
  - 3 个圆点
  - 当前项绿色
- 移动端：
  - 背景图淡化或置后
  - 标题与按钮单列排列

### 1.2 Our Leadership

- 标题：`Our Leadership`
- 展示 3 位领导卡片：
  - Dr. Zhuoqing Chen
    - Co-Founder & CEO
    - 简短经历描述
    - Learn More
  - Dr. Xiaodong Liu
    - Co-Founder & CTO
    - 简短经历描述
    - Learn More
  - Dr. Mingfang Yan
    - Co-Founder & CSO
    - 简短经历描述
    - Learn More
- 每张卡包含：
  - 人像
  - 姓名
  - 职位
  - 简介
  - Learn More 链接
- 移动端：
  - 3 卡改为单列或纵向堆叠

### 1.3 Innovation at QBD

- 标题：`Innovation at QBD`
- 顶部 4 个数据项：
  - `5+` Biosafety Certificates Granted
  - `20+` Crop Species Targeted
  - `Global` R&D and Business Footprint
  - `World-Class` Scientific and Regulatory Excellence
- 每个数据项包含：
  - 圆形浅绿图标
  - 大号绿色数值
  - 两行说明文字
  - PC 端中间有竖向分隔线
- 下方 2 个入口卡片：
  - Our Technology
    - 标题：Precision. Efficiency. Innovation.
    - 简介：基因编辑与转化技术赋能作物未来
    - Learn More 按钮
    - 背景图：实验室/植物基因编辑
  - Our Traits
    - 标题：Better Traits. Better Crops. Better Future.
    - 简介：开发高性能作物特征，应对农业挑战
    - Explore Traits 按钮
    - 背景图：作物/豆荚/玉米
- 按钮要求：
  - PC 端两个按钮保持同一水平线
  - 移动端按钮进入自然内容流，避免遮挡文字

### 1.4 Latest News & Updates

- 标题：`Latest News & Updates`
- 右侧入口：`View All News`
- 4 张新闻卡片：
  - Company News
    - May 21, 2025
    - QBD Announces Expansion of R&D Center in Shanghai
  - Research Update
    - May 08, 2025
    - QBD Advances Base Editing Platform with Higher Precision
  - Business Update
    - Apr 22, 2025
    - Strategic Partnership to Advance Drought Tolerant Soybean
  - Regulatory Update
    - Apr 10, 2025
    - QBD Receives New Biosafety Certificate Approval
- 每张卡包含：
  - 顶部图片
  - 分类标签
  - 日期
  - 标题
  - Read More 链接

### 1.5 首页 CTA

- 深绿色 DNA 背景横幅
- 标题：`Let's Build the Future of Agriculture Together`
- 副标题：欢迎合作、伙伴关系与创新机会
- 按钮：`Contact Us`

### 1.6 首页 Footer

- 使用全站 Footer。

## 2. 关于我们

### 2.1 About Hero

- 面包屑：Home > About Us
- 左侧：
  - Eyebrow：About QBD
  - 标题：Driving Innovation for Sustainable Agriculture
  - 两段公司介绍
  - Contact Us 按钮
- 右侧：
  - QBD 建筑图片
- 移动端：
  - 图文上下排列

### 2.2 Vision / Mission / Values

- 3 张信息卡：
  - Our Vision
    - 图标：眼睛
    - 文案：成为全球基因编辑技术领导者，推动可持续农业
  - Our Mission
    - 图标：靶心
    - 文案：开发创新基因编辑方案，提升作物产量、韧性和质量
  - Our Values
    - 图标：钻石
    - 文案：Innovation、Integrity、Collaboration、Commitment
- PC 三列，移动端单列。

### 2.3 Our Journey

- 横向时间轴：
  - 2013 Company founded
  - 2015 First genome editing platform established
  - 2017 First biosafety certificate obtained
  - 2019 Expanded to multiple crop systems
  - 2021 Advanced trait pipeline launched
  - 2023+ Continued innovation for food security
- 时间轴元素：
  - 绿色横线
  - 年份节点
  - 右侧箭头
- 移动端建议：
  - 改为纵向时间轴或横向滚动。

### 2.4 About 数据横幅

- 深绿色背景，DNA 暗纹
- 4 个统计项：
  - 40+ Crop Systems Developed
  - 5 Biosafety Certificates Approved
  - 30+ Scientists & Experts
  - 50+ Patents Filed
- 每项包含圆形图标、数字、说明。

### 2.5 Global Footprint

- 左侧：
  - 标题：Global Footprint
  - 简介：技术与合作覆盖全球
  - 数据：
    - 10+ Countries & Regions
    - 20+ Global Partnerships
    - 100+ Research Collaborations
- 右侧：
  - 世界地图点阵图
  - 连接弧线
  - 地区标记
- 底部地区图例：
  - North America
  - South America
  - Europe
  - Asia
  - Africa
  - Oceania

### 2.6 Regulatory Excellence

- 标题：Regulatory Excellence with Global Recognition
- 证书轮播区域：
  - 左右切换箭头
  - 证书缩略图
  - 机构与国家
  - 年份
- 展示项示例：
  - USDA (USA) 2018
  - APHIS (USA) 2019
  - CTNBio (Brazil) 2019
  - ICARDA (Philippines) 2020
  - NARO (Japan) 2021
- 底部轮播分页点。

### 2.7 Footer

- 使用全站 Footer。

## 3. 我们的技术

### 3.1 Technology Hero

- 面包屑：Home > Technology
- 左侧：
  - Eyebrow：Technology
  - 标题：Our Integrated Technology Platforms
  - 简介：整合基因编辑与转化技术，为作物改良提供精准高效方案
  - 按钮：View All Platforms
- 右侧：
  - DNA / 移液枪 / 实验室背景图

### 3.2 平台 Tabs

- Tabs：
  - All Platforms
  - Genome Editing
  - Transformation
  - Editing Tools
  - Breeding
  - Regeneration
  - Screening
- 当前 Tab：
  - 绿色背景
  - 白色文字
- 移动端：
  - 横向滚动 Tabs 或多行紧凑布局。

### 3.3 技术平台卡片

- 6 张卡片，PC 三列两行：
  - CRISPR/Cas System
    - Advanced CRISPR/Cas9 system with high editing efficiency and specificity.
  - Base Editing
    - Precise nucleotide conversions without double-strand breaks for safer edits.
  - Prime Editing
    - Versatile editing for all types of genetic changes with high precision.
  - Transformation Systems
    - Broad host range transformation platforms with high efficiency across species.
  - Regeneration Systems
    - Optimized tissue culture and regeneration systems for diverse crops.
  - High-throughput Screening
    - Advanced screening technologies for rapid identification of elite traits.
- 每张卡包含：
  - 图片
  - 标题
  - 简介
  - Learn More 链接

### 3.4 技术数据横幅

- 深绿色背景
- 4 个统计项：
  - 6 Integrated Platforms
  - 100+ Crop Species Supported
  - 200+ Research Projects Completed
  - 50+ Patents Filed

### 3.5 Technology CTA

- 浅色描边横幅
- 左侧圆形图标
- 标题：Innovating for a Better Future
- 简介：技术赋能科学家与育种者开发下一代作物
- 右侧按钮：Partner With Us

### 3.6 Footer

- 使用全站 Footer。

## 4. Traits / 特征

### 4.1 Traits Hero

- 面包屑：Home > Traits
- 左侧：
  - Eyebrow：Traits
  - 标题：Innovative Traits for High-Performing Crops
  - 简介：聚焦关键农艺性状，提高产量、质量和抗逆性
- 中间卖点列表：
  - Higher Yield
  - Stronger Resilience
  - Better Quality
  - Sustainable Solutions
- 右侧背景图：
  - 大豆/作物图片

### 4.2 作物 Tabs

- Tabs：
  - Soybean
  - Rice
  - Wheat
  - Corn
  - Other Crops
- 每个 Tab 有对应图标。
- 当前 Tab：
  - 绿色文字
  - 底部绿色线

### 4.3 Trait Pipeline 表格

- 表头：
  - Trait
  - Description
  - Stage
- Soybean 示例行：
  - High Oleic Acid
    - Increased oleic acid content for improved oil quality and nutritional value.
    - Stage：Commercial
  - Disease Resistance
    - Enhanced resistance to major fungal and viral diseases.
    - Stage：Field Trial
  - Herbicide Tolerance
    - Tolerance to broad-spectrum herbicides for better weed management.
    - Stage：Development
  - Drought Tolerance
    - Improved tolerance to water deficit and abiotic stress.
    - Stage：Early Research
  - Insect Resistance
    - Built-in protection against key insect pests to reduce crop damage.
    - Stage：Early Research
- Stage 标签颜色：
  - Commercial：浅绿
  - Field Trial：浅绿
  - Development：浅蓝
  - Early Research：浅灰
- 表格底部备注：
  - Pipeline status is updated periodically.
- 移动端：
  - 建议每行转成卡片式布局，避免横向挤压。

### 4.4 Traits 优势卡

- 4 项优势：
  - Science-Driven Innovation
  - Field-Proven Performance
  - Global Impact
  - Collaborative Approach
- 每项包含：
  - 绿色图标
  - 标题
  - 说明文字
  - 竖向分隔线

### 4.5 Traits CTA

- 浅色描边横幅
- 左侧图标：幼苗 + 实验器皿
- 标题：Let's Build the Future of Agriculture Together
- 简介：与全球伙伴合作开发下一代作物
- 按钮：Partner With Us

### 4.6 Footer

- 使用全站 Footer。

## 5. 创始团队

### 5.1 Founding Team Hero

- 面包屑：Home > Our Founding Team
- 左侧：
  - Eyebrow：Our Founding Team
  - 标题：World-class Scientists Driving Innovation
  - 简介：团队结合植物遗传、生物技术和作物改良经验
  - 按钮：Join Our Journey
- 右侧：
  - 植物/实验瓶背景图

### 5.2 创始人详情卡

- PC 三列展示 3 张卡：
  - Dr. Jian-Kang Zhu
    - Co-founder & Chief Scientific Officer
    - LinkedIn 图标
    - Research Focus：
      - Plant Genomics & Gene Regulation
      - Abiotic Stress Tolerance
      - Crop Yield Improvement
    - Key Achievements：
      - Pioneer in plant stress signaling research
      - Published 200+ papers in top journals
      - Fellow of the National Academy of Sciences (USA)
  - Dr. Dau-Hen Lu
    - Co-founder & Chief Technology Officer
    - LinkedIn 图标
    - Research Focus：
      - Genome Editing Technologies
      - Plant Transformation Systems
      - Functional Genomics
    - Key Achievements：
      - Developed high-efficiency transformation platforms for multiple crops
      - Established industry-leading genome editing pipelines
      - 50+ patents and patent applications
  - Dr. Zhiyong Liu
    - Co-founder & Chief Executive Officer
    - LinkedIn 图标
    - Research Focus：
      - Strategic Leadership
      - Agricultural Biotechnology
      - Product Development & Commercialization
    - Key Achievements：
      - 20+ years of leadership in agri-biotech
      - Led multiple biotech companies to successful product launches
      - Strong track record in global partnerships and business development
- 每张卡包含：
  - 大人像
  - 姓名
  - 职务
  - 社交图标
  - Research Focus 列表
  - Key Achievements 列表

### 5.3 Our Collective Strength

- 浅灰/白色横向卡片
- 标题：Our Collective Strength
- 4 项能力：
  - Deep Scientific Expertise
  - Proven Track Record
  - Collaborative Leadership
  - Global Impact
- 每项包含：
  - 圆形图标
  - 标题
  - 简短说明

### 5.4 Footer

- 使用全站 Footer。

## 6. 新闻与研究

### 6.1 News Hero

- 面包屑：Home > News & Research
- 左侧：
  - 大标题：News & Research
  - 副标题：Advancing genome innovation. Transforming agriculture.
  - 简介：展示科学进展、业务动态和基因工程创新
- 右侧：
  - 幼苗 + DNA 背景图

### 6.2 Latest News

- 标题：Latest News
- 右侧入口：View All News
- 4 张新闻卡：
  - QBD Announces Expansion of R&D Center in Shanghai
    - Company News
    - May 21, 2025
    - 简介：新设施将加速基因编辑与作物改良创新
  - QBD Advances Base Editing Platform with Higher Precision
    - Research Update
    - May 08, 2025
    - 简介：科学家在多作物上提升编辑精准度
  - Strategic Partnership to Advance Drought Tolerant Soybean
    - Business Update
    - Apr 22, 2025
    - 简介：与全球伙伴合作加速性状开发与商业化
  - QBD Receives New Biosafety Certificate Approval
    - Regulatory Update
    - Apr 10, 2025
    - 简介：新增生物安全证书支持更多作物物种
- 每张卡有：
  - 图片
  - 分类标签
  - 日期
  - 标题
  - 简介
  - Read More

### 6.3 Research Highlights

- 标题：Research Highlights
- 右侧入口：View All Research
- 4 张研究卡：
  - Genome Editing Platform Optimization
  - Transformation Technology Advancement
  - Trait Development Innovation
  - Biosafety Research Progress
- 每张卡包含：
  - 图片
  - 圆形图标
  - 标题
  - 简介
  - Learn More

### 6.4 Strategic Focus Areas

- 标题：Strategic Focus Areas
- 4 项焦点：
  - Precision Genome Editing
  - Sustainable Agriculture
  - Regulatory Excellence
  - Global Collaboration
- 每项包含：
  - 圆形图标
  - 标题
  - 说明文字
  - 竖向分隔线

### 6.5 Footer

- 使用全站 Footer。

## 7. 新闻详情

### 7.1 Article Hero

- Header 中有额外导航项：Biosafety & Regulatory
- 面包屑：
  - Home > News & Research > News > QBD Receives New Biosafety Certificate Approval
- 分类标签：Regulatory Update
- 标题：QBD Receives New Biosafety Certificate Approval
- 元信息：
  - 日期：April 10, 2025
  - 阅读时长：5 min read
  - 类型：Company News
- 分享区域：
  - LinkedIn
  - X
  - WeChat
  - Email
- 右侧背景图：
  - 幼苗 + DNA

### 7.2 正文主栏

- 摘要提示卡：
  - 左侧盾牌图标
  - 文案：审批体现 QBD 对负责任创新和安全有效基因工程技术的承诺
- 正文段落：
  - 介绍新生物安全证书
  - 说明对基因编辑大豆事件的监管支持
- 主图：
  - 大豆/作物图片
- 章节：About the Approval
  - 介绍证书覆盖范围与田间试验
- 3 个信息块：
  - Certificate Scope
  - Target Trait
  - Regulatory Significance
- 章节：Our Commitment to Biosafety
  - 安全、风险评估、国际监管框架
- 引用块：
  - 引号图标
  - Quote
  - 署名：Dr. Zhuoqing Chen, Co-Founder & CEO of QBD
- 章节：What’s Next?
  - 下一阶段田间评估
  - 数据支持监管申报

### 7.3 右侧侧栏

- Article Information 卡：
  - Category
  - Date
  - Reading Time
  - Tags：
    - Biosafety
    - Regulatory Approval
    - Soybean
    - Drought Tolerance
- Related News 卡：
  - QBD Expands R&D Center in Shanghai
  - Strategic Partnership to Advance Drought Tolerant Soybean
  - QBD Advances Trait Development for Sustainable Agriculture
  - View All News
- Related Technologies 卡：
  - Genome Editing Platform
  - Biosafety Excellence
  - Learn More 链接

### 7.4 Article CTA

- 深绿色 DNA 背景横幅
- 标题：Interested in collaborating with QBD?
- 简介：欢迎合作、研究协作和市场创新机会
- 按钮：Contact Us

### 7.5 Footer

- 使用全站 Footer。

## 8. 联系我们

### 8.1 Contact Hero

- 面包屑：Home > Contact Us
- 左侧：
  - 大标题：Contact Us
  - 副标题：Let's build the future of agriculture together.
  - 简介：欢迎合作、伙伴关系与创新机会
- 联系方式快捷项：
  - Email Us：info@qbd.com
  - Call Us：+86 21-5080 3067
- 右侧：
  - 幼苗实验室背景图

### 8.2 Our Offices

- 标题：Our Offices
- 3 张办公室卡片：
  - Shanghai, China
    - Headquarters
    - Building 1, No. 909, Jiangyue Road, Pudong New Area, Shanghai 201210, China
    - 电话：+86 21-5080 3067
    - 邮箱：info@qbd.com
  - St. Louis, USA
    - North America Office
    - 726 Heartland Trail, Suite 207, St. Louis, MO 63005, USA
    - 电话：+1 (314) 312-9780
    - 邮箱：info@qbd.com
  - Singapore
    - Asia Pacific Office
    - 1 Fusionopolis Way, #17-01 Connexis North, Singapore 138632
    - 电话：+65 8803 7536
    - 邮箱：info@qbd.com
- 每张卡包含：
  - 城市图片
  - 城市/国家
  - 办公室类型
  - 地址
  - 电话
  - 邮箱

### 8.3 Send Us a Message

- 联系表单字段：
  - Full Name，必填
  - Email Address，必填
  - Company / Organization
  - Phone Number
  - Subject，必填
  - Message，必填
- 按钮：Send Message
- 隐私提示：
  - 盾牌图标
  - 说明信息仅用于回复咨询
- 需要状态：
  - 默认
  - Focus
  - 必填错误
  - 提交中
  - 提交成功/失败

### 8.4 Find Us

- 地图区域：
  - 地图背景
  - QBD Genome Engineering Headquarters 标记
- 地图下方信息：
  - 地址
  - 营业时间：
    - Mon - Fri: 9:00 AM - 6:00 PM (CST)
    - Closed on weekends and public holidays
- 移动端：
  - 表单和地图上下排列

### 8.5 Contact CTA

- 浅色描边横幅
- 左侧握手图标
- 标题：Interested in partnering with QBD?
- 简介：持续开放农业创新和增长机会
- 按钮：Partner With Us

### 8.6 Footer

- 使用全站 Footer。

## 后续开发建议

### 优先抽象的复用组件

- `PageHero`
  - 面包屑、eyebrow、标题、描述、背景图、按钮
- `SectionHeading`
  - 标题 + 绿色短线 + 可选右侧链接
- `StatStrip`
  - 深绿色数据横幅
- `FeatureGrid`
  - 图标 + 标题 + 描述的多列展示
- `NewsCard`
  - 图片、标签、日期、标题、描述、链接
- `CtaBand`
  - 深色或浅色 CTA 横幅
- `SiteFooter`
  - 全站页脚
- `ResponsiveTabs`
  - 技术页、Traits 页共用

### 数据结构建议

- 页面展示数据尽量配置化：
  - 领导团队
  - 新闻列表
  - 技术平台
  - Trait 表格
  - 办公室信息
  - Footer 导航
- 文案全部进入 i18n：
  - `en-US.ts`
  - `zh-CN.ts`
- 图片路径集中管理，避免页面内散落过多 import。

### 响应式验收重点

- 320px 宽度下无横向滚动。
- Header 移动端菜单可正常打开/关闭。
- 表格在手机端不可挤压到不可读。
- 图片裁切保留主体，不遮挡核心文字。
- CTA 按钮不被长文案挤压变形。
- 中英文切换后标题、按钮和卡片不重叠。

