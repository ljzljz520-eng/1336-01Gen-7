# 启明眼科医院 - 官方形象站

民营眼科医院官方网站，面向患者提供专科介绍、医生团队展示、在线预约挂号及眼科科普知识服务。

## 功能模块

- **首页**：品牌形象展示、专科入口、医生团队、就诊流程、科普推荐
- **专科中心**：近视防控、白内障、干眼门诊三大专科详细介绍
- **医生团队**：按科室筛选医生列表、医生个人详情页
- **预约挂号**：6步就诊流程说明、初诊/复诊所需材料清单、在线预约表单（生成预约编号）
- **眼健康科普**：分类筛选文章列表、文章详情页（标注更新时间与审核医生）

## 医疗合规

- 疗效描述使用"有助于"、"可以改善"、"适用于"等审慎措辞，禁止绝对化用语
- 科普文章均有专业医生审核标识，正文末尾附免责声明
- 各专科页面包含温馨提示，说明效果因人而异

## 技术栈

- React 18 + TypeScript
- Vite 6
- Tailwind CSS 3
- React Router 7
- Zustand（预约状态管理）
- Lucide React（图标）

## 项目结构

```
src/
├── components/       # 通用组件（Navbar / Footer / DoctorCard / ArticleCard / SpecialtyCard）
├── data/             # Mock 数据（doctors / specialties / articles）
├── hooks/            # 状态管理（useAppointmentStore）
├── pages/            # 页面组件
│   ├── Home.tsx
│   ├── Appointment.tsx
│   ├── DoctorList.tsx
│   ├── DoctorDetail.tsx
│   ├── ArticleList.tsx
│   ├── ArticleDetail.tsx
│   └── specialty/
│       ├── Myopia.tsx
│       ├── Cataract.tsx
│       └── DryEye.tsx
├── App.tsx           # 路由配置
├── main.tsx
└── index.css         # Tailwind 主题与全局样式
```

## 本地运行

```bash
npm install
npm run dev
```

## 构建部署

```bash
npm run build
npm run preview
```
