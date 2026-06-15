import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  ClipboardCheck,
  UserCheck,
  ClipboardList,
  Stethoscope,
  CreditCard,
  FileText,
  CheckCircle2,
  AlertCircle,
  Phone,
  MapPin,
  Clock,
  Check,
  ChevronRight,
} from 'lucide-react';

const processSteps = [
  { icon: Calendar, title: '预约挂号', desc: '在线提交预约信息，选择就诊科室与时间' },
  { icon: ClipboardCheck, title: '预约确认', desc: '医院工作人员将在1个工作日内电话确认预约信息' },
  { icon: UserCheck, title: '到院登记', desc: '按预约时间到院，携带身份证等材料在前台登记' },
  { icon: Stethoscope, title: '医生面诊', desc: '医生问诊、检查，制定诊疗方案' },
  { icon: CreditCard, title: '缴费取药', desc: '完成缴费，领取药品或安排治疗' },
  { icon: FileText, title: '定期复诊', desc: '遵医嘱按时复查，跟进治疗效果' },
];

const firstVisitMaterials = [
  '本人有效身份证件（身份证、户口本等）',
  '医保卡/社保卡（如有）',
  '既往眼科检查报告（如有）',
  '正在使用的眼药水或药物清单',
  '佩戴的框架眼镜或隐形眼镜',
  '未成年人需监护人陪同，并携带监护人身份证',
];

const followUpMaterials = [
  '本人有效身份证件',
  '医保卡/社保卡',
  '上次就诊的病历和检查报告',
  '目前正在使用的药物',
];

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: '初诊',
    department: '',
    date: '',
    time: '',
    remark: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="pt-20 md:pt-24">
        <div className="bg-neutral-50 py-4 border-b border-neutral-100">
          <div className="container">
            <div className="flex items-center gap-2 text-neutral-500 text-sm">
              <Link to="/" className="hover:text-primary-600">首页</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-neutral-800">预约挂号</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="80" cy="20" r="50" fill="white" />
          </svg>
        </div>
        <div className="container relative">
          <div className="w-14 h-14 rounded-2xl bg-white/15 text-white flex items-center justify-center mb-5">
            <Calendar className="w-7 h-7" strokeWidth={1.75} />
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            预约挂号
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-2xl">
            在线预约，免排队优先就诊。提交信息后，医院工作人员将尽快与您联系确认。
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center">
            就诊流程
          </h2>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-neutral-200" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {processSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="relative">
                    <div className="card p-5 text-center h-full">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary-50 text-primary-500 flex items-center justify-center relative">
                        <Icon className="w-9 h-9" strokeWidth={1.75} />
                        <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary-500 text-white text-sm font-bold flex items-center justify-center">
                          {idx + 1}
                        </span>
                      </div>
                      <h3 className="font-semibold text-neutral-900 mb-1">{step.title}</h3>
                      <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-neutral-50">
        <div className="container">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center">
            就诊所需材料
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary-500 text-white flex items-center justify-center">
                  <ClipboardList className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-neutral-900">首次就诊</h3>
                  <p className="text-neutral-500 text-sm">初诊患者请携带以下材料</p>
                </div>
              </div>
              <ul className="space-y-3">
                {firstVisitMaterials.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-neutral-600">
                    <Check className="w-5 h-5 text-success-500 shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-success-500 text-white flex items-center justify-center">
                  <ClipboardCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-neutral-900">复诊患者</h3>
                  <p className="text-neutral-500 text-sm">复诊患者请携带以下材料</p>
                </div>
              </div>
              <ul className="space-y-3">
                {followUpMaterials.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-neutral-600">
                    <Check className="w-5 h-5 text-success-500 shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 max-w-4xl mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-sm text-amber-800">
                  <p className="font-semibold mb-1">温馨提示</p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>请按预约时间提前15分钟到院，避免影响就诊安排</li>
                    <li>如需取消或改期，请提前1天电话通知我们</li>
                    <li>糖尿病、高血压等慢性病患者，请常规服用药物后就诊</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
                填写预约信息
              </h2>

              {submitted ? (
                <div className="card p-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success-50 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-success-500" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-neutral-900 mb-3">
                    预约提交成功
                  </h3>
                  <p className="text-neutral-600 mb-6 max-w-md mx-auto">
                    感谢您的预约！医院工作人员将在1个工作日内通过电话
                    <span className="font-medium text-neutral-900"> {formData.phone} </span>
                    与您确认预约详情，请保持手机畅通。
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        type: '初诊',
                        department: '',
                        date: '',
                        time: '',
                        remark: '',
                      });
                    }}
                    className="btn-secondary"
                  >
                    再预约一个
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                        姓名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                        placeholder="请输入您的姓名"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                        联系电话 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{11}"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                        placeholder="请输入11位手机号码"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                        就诊类型 <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white"
                      >
                        <option value="初诊">初诊（首次就诊）</option>
                        <option value="复诊">复诊（曾在本院就诊）</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                        选择科室 <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white"
                      >
                        <option value="">请选择科室</option>
                        <option value="近视防控中心">近视防控中心</option>
                        <option value="白内障专科">白内障专科</option>
                        <option value="干眼门诊">干眼门诊</option>
                        <option value="综合眼科">综合眼科</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                        期望就诊日期 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                        期望时间段
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white"
                      >
                        <option value="">请选择时间段</option>
                        <option value="上午">上午（08:30-12:00）</option>
                        <option value="下午">下午（13:30-17:30）</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                        备注信息
                      </label>
                      <textarea
                        rows={4}
                        value={formData.remark}
                        onChange={(e) => setFormData({ ...formData, remark: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                        placeholder="如有特殊情况或需求，请在此说明（选填）"
                      />
                    </div>
                  </div>

                  <div className="mt-2 p-3 bg-neutral-50 rounded-lg text-xs text-neutral-500">
                    提交即表示您同意我们合理使用您的信息进行预约服务，我们承诺严格保护您的个人隐私。
                  </div>

                  <button type="submit" className="btn-primary w-full mt-5 text-base">
                    <Calendar className="w-5 h-5 mr-2" />
                    提交预约
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-2">
              <div className="space-y-6 sticky top-24">
                <div className="card p-6">
                  <h3 className="font-display text-lg font-bold text-neutral-900 mb-4">
                    其他联系方式
                  </h3>
                  <div className="space-y-4">
                    <a href="tel:400-123-4567" className="flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-50 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-500 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500">预约咨询电话</p>
                        <p className="font-semibold text-neutral-900">400-123-4567</p>
                      </div>
                    </a>
                    <div className="flex items-center gap-4 p-3 rounded-lg">
                      <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-500 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500">医院地址</p>
                        <p className="font-medium text-neutral-900">北京市朝阳区建国路88号启明医疗大厦</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 rounded-lg">
                      <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-500 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500">门诊时间</p>
                        <p className="font-medium text-neutral-900">周一至周五 08:30-17:30</p>
                        <p className="font-medium text-neutral-900">周六周日 09:00-17:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
