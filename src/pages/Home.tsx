import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Phone, UserCheck, ClipboardList, Stethoscope, FileText, CreditCard, HeartPulse, ShieldCheck } from 'lucide-react';
import SpecialtyCard from '../components/SpecialtyCard';
import DoctorCard from '../components/DoctorCard';
import ArticleCard from '../components/ArticleCard';
import { specialties } from '../data/specialties';
import { doctors } from '../data/doctors';
import { articles } from '../data/articles';

const processSteps = [
  { icon: UserCheck, title: '预约挂号', desc: '线上预约或电话预约，选择科室与时间' },
  { icon: ClipboardList, title: '登记就诊', desc: '到院后凭身份证登记，领取就诊号' },
  { icon: Stethoscope, title: '医生面诊', desc: '医生问诊检查，制定诊疗方案' },
  { icon: FileText, title: '缴费取药', desc: '窗口或自助机缴费，药房取药' },
];

export default function Home() {
  return (
    <div>
      <section className="relative pt-20 md:pt-24 overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="20" cy="30" r="40" fill="white" />
            <circle cx="80" cy="70" r="50" fill="white" />
          </svg>
        </div>
        <div className="container relative py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm text-white text-sm rounded-full mb-6">
              专业眼科 · 科学诊疗
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              守护清晰视界
              <br />
              <span className="text-primary-100">点亮美好未来</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-10 leading-relaxed max-w-2xl">
              启明眼科医院，专注于近视防控、白内障诊疗、干眼症治疗等眼科专业服务。经验丰富的医师团队，先进的诊疗设备，为您的眼健康保驾护航。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-primary-600 font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5 mr-2" />
                在线预约挂号
              </Link>
              <a
                href="tel:400-123-4567"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white/40 text-white font-semibold text-lg transition-all duration-300 hover:bg-white/10"
              >
                <Phone className="w-5 h-5 mr-2" />
                400-123-4567
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary-600 font-medium text-sm">SPECIALTY CENTER</span>
            <h2 className="section-title mt-2">专科中心</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              三大核心专科，覆盖各年龄段眼健康需求
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {specialties.map((s) => (
              <SpecialtyCard key={s.id} specialty={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="text-primary-600 font-medium text-sm">MEDICAL TEAM</span>
              <h2 className="section-title mt-2">医生团队</h2>
              <p className="section-subtitle">
                经验丰富的眼科医师团队，为您提供专业诊疗服务
              </p>
            </div>
            <Link
              to="/doctors"
              className="inline-flex items-center gap-1 text-primary-600 font-medium hover:gap-2 transition-all"
            >
              查看全部医生
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {doctors.slice(0, 4).map((d) => (
              <DoctorCard key={d.id} doctor={d} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary-600 font-medium text-sm">APPOINTMENT PROCESS</span>
            <h2 className="section-title mt-2">就诊流程</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              简单四步，轻松完成就诊
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative">
                  <div className="card p-6 text-center h-full">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-50 text-primary-500 flex items-center justify-center relative">
                      <Icon className="w-8 h-8" strokeWidth={1.75} />
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary-500 text-white text-sm font-bold flex items-center justify-center">
                        {idx + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-neutral-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                  {idx < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-neutral-200" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link to="/appointment" className="btn-primary">
              <CreditCard className="w-5 h-5 mr-2" />
              立即预约就诊
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <span className="text-primary-600 font-medium text-sm">WHY CHOOSE US</span>
              <h2 className="section-title mt-2 mb-4">为什么选择我们</h2>
              <p className="text-neutral-500 mb-8 leading-relaxed">
                启明眼科医院始终坚持"以患者为中心"的服务理念，致力于为每一位患者提供专业、规范、温馨的眼科医疗服务。
              </p>
              <div className="space-y-4">
                {[
                  { icon: HeartPulse, title: '专业医师团队', desc: '平均从业经验15年以上' },
                  { icon: ShieldCheck, title: '规范诊疗流程', desc: '严格遵循医疗规范标准' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary-500">
                        <Icon className="w-6 h-6" strokeWidth={1.75} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-1">{item.title}</h4>
                        <p className="text-neutral-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {[
                  { num: '25+', label: '年临床经验' },
                  { num: '6', label: '资深医师' },
                  { num: '50000+', label: '年服务患者' },
                  { num: '98%', label: '患者满意度' },
                ].map((s, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-100"
                  >
                    <div className="font-display text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                      {s.num}
                    </div>
                    <p className="text-neutral-600">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="text-primary-600 font-medium text-sm">HEALTH EDUCATION</span>
              <h2 className="section-title mt-2">眼健康科普</h2>
              <p className="section-subtitle">
                专业医生审核，科学权威的眼健康知识
              </p>
            </div>
            <Link
              to="/articles"
              className="inline-flex items-center gap-1 text-primary-600 font-medium hover:gap-2 transition-all"
            >
              查看全部文章
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {articles.slice(0, 3).map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="90" cy="10" r="60" fill="white" />
          </svg>
        </div>
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              有眼部不适？让专业医生为您解答
            </h2>
            <p className="text-primary-100 text-lg mb-8">
              立即预约挂号，获取专业的眼科诊疗建议
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-primary-600 font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
              >
                <Calendar className="w-5 h-5 mr-2" />
                预约挂号
              </Link>
              <a
                href="tel:400-123-4567"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white/40 text-white font-semibold text-lg transition-all duration-300 hover:bg-white/10"
              >
                <Phone className="w-5 h-5 mr-2" />
                电话咨询
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
