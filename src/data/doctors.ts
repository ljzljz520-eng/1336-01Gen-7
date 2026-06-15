export interface Doctor {
  id: string;
  name: string;
  title: string;
  department: string;
  specialty: string[];
  experience: string;
  bio: string;
  avatar: string;
  education: string[];
  achievements: string[];
}

export const doctors: Doctor[] = [
  {
    id: 'd1',
    name: '王明华',
    title: '主任医师',
    department: '近视防控中心',
    specialty: ['青少年近视防控', '角膜塑形镜验配', '屈光不正矫治'],
    experience: '从事眼科临床工作25年',
    bio: '毕业于上海医科大学临床医学专业，曾在复旦大学附属眼耳鼻喉科医院进修学习。专注于青少年近视防控领域，擅长角膜塑形镜（OK镜）、RGP的个性化验配，在儿童青少年近视进展控制方面积累了丰富的临床经验。',
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=faces',
    education: ['上海医科大学 临床医学学士', '复旦大学附属眼耳鼻喉科医院 进修'],
    achievements: ['发表眼科相关学术论文10余篇', '中华医学会眼科学分会会员', '国际角膜塑形学会资深会员'],
  },
  {
    id: 'd2',
    name: '李秀兰',
    title: '副主任医师',
    department: '白内障专科',
    specialty: ['白内障超声乳化手术', '多焦点人工晶体植入', '青光眼白内障联合手术'],
    experience: '从事眼科临床工作20年',
    bio: '毕业于北京医科大学，曾赴日本东京大学医学部眼科访问学习。擅长各类白内障的诊断与手术治疗，尤其在复杂性白内障、超声乳化联合人工晶体植入手术方面具有较深造诣。',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=faces',
    education: ['北京医科大学 眼科学硕士', '日本东京大学医学部 访问学者'],
    achievements: ['完成白内障手术超过5000例', '省级医学科技进步奖获得者', '中华医学会眼科学分会白内障学组成员'],
  },
  {
    id: 'd3',
    name: '张建华',
    title: '主任医师',
    department: '干眼门诊',
    specialty: ['干眼症诊断与治疗', '角膜疾病', '眼表疾病'],
    experience: '从事眼科临床工作22年',
    bio: '中山大学眼科中心博士毕业，专注于眼表疾病及干眼症的临床研究与诊疗工作。在干眼症的分型诊断、个性化治疗方案制定方面有独到见解，擅长强脉冲光（IPL）、热脉动等干眼物理治疗。',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=faces',
    education: ['中山大学 眼科博士', '美国宾夕法尼亚大学眼科学 博士后'],
    achievements: ['主持省部级干眼研究课题3项', '发表SCI论文8篇', '中国医师协会眼科医师分会委员'],
  },
  {
    id: 'd4',
    name: '陈静怡',
    title: '主治医师',
    department: '近视防控中心',
    specialty: ['儿童视光', '弱视训练', '近视防控科普宣教'],
    experience: '从事眼科临床工作10年',
    bio: '温州医科大学眼视光专业毕业，长期从事儿童青少年眼视光临床工作。擅长儿童屈光不正的规范验光配镜、弱视的系统训练治疗，并积极参与近视防控科普宣教工作。',
    avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=faces',
    education: ['温州医科大学 眼视光学硕士'],
    achievements: ['国家二级验光技师', '多次获患者满意度好评', '医院科普宣讲团核心成员'],
  },
  {
    id: 'd5',
    name: '刘志强',
    title: '副主任医师',
    department: '白内障专科',
    specialty: ['年龄相关性白内障', '并发性白内障', '人工晶体选择咨询'],
    experience: '从事眼科临床工作18年',
    bio: '华中科技大学同济医学院毕业，专注于白内障临床诊疗工作。对各型白内障的早期诊断、手术时机把握及术后管理有丰富经验，注重与患者的术前沟通和术后随访。',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=faces',
    education: ['华中科技大学同济医学院 临床医学硕士'],
    achievements: ['完成各类白内障手术3000余例', '发表核心期刊论文6篇', '市医疗事故鉴定专家库成员'],
  },
  {
    id: 'd6',
    name: '周美玲',
    title: '主治医师',
    department: '干眼门诊',
    specialty: ['睑板腺功能障碍', '过敏性结膜炎', '眼表综合管理'],
    experience: '从事眼科临床工作8年',
    bio: '四川大学华西临床医学院毕业，专注于眼表疾病及干眼的规范化诊疗。擅长针对不同类型干眼患者制定个性化综合治疗方案，注重干眼的长期管理与生活方式指导。',
    avatar: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop&crop=faces',
    education: ['四川大学华西临床医学院 眼科学硕士'],
    achievements: ['干眼标准化诊疗培训认证', 'LipiFlow干眼治疗认证医师', '参与编写干眼科普书籍1部'],
  },
];
