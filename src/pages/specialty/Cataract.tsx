import { Link } from 'react-router-dom';
import { CheckCircle, HelpCircle, AlertTriangle, Calendar, Sun } from 'lucide-react';
import { specialties } from '../../data/specialties';
import { doctors } from '../../data/doctors';
import DoctorCard from '../../components/DoctorCard';

export default function Cataract() {
  const specialty = specialties.find((s) => s.slug === 'cataract')!;
  const deptDoctors = doctors.filter((d) => d.department === specialty.name);

  return (
    <div>
      <section className="relative pt-20 md:pt-24 overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="80" cy="70" r="50" fill="white" />
          </svg>
        </div>
        <div className="container relative py-12 md:py-20">
          <div className="flex items-center gap-2 text-primary-100 text-sm mb-4">
            <Link to="/" className="hover:text-white">首页</Link>
            <span>/</span>
            <span>{specialty.name}</span>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-white/15 text-white flex items-center justify-center mb-5">
            <Sun className="w-7 h-7" strokeWidth={1.75} />
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            {specialty.name}
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-2xl">
            {specialty.subtitle}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-5">
                专科介绍
              </h2>
              <p className="text-neutral-600 leading-relaxed text-lg mb-8">
                {specialty.description}
              </p>

              <h3 className="font-display text-xl font-bold text-neutral-900 mb-4">
                服务项目
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {specialty.services.map((s) => (
                  <div key={s.title} className="card p-5">
                    <h4 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-500 shrink-0" />
                      {s.title}
                    </h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-display text-xl font-bold text-neutral-900 mb-4">
                适宜人群
              </h3>
              <div className="flex flex-wrap gap-3 mb-10">
                {specialty.applicablePeople.map((p) => (
                  <span
                    key={p}
                    className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {p}
                  </span>
                ))}
              </div>

              <h3 className="font-display text-xl font-bold text-neutral-900 mb-5 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-primary-500" />
                常见问题
              </h3>
              <div className="space-y-4">
                {specialty.faq.map((f, idx) => (
                  <div key={idx} className="card p-5">
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      Q：{f.q}
                    </h4>
                    <p className="text-neutral-600 leading-relaxed">
                      A：{f.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="card p-6">
                  <h3 className="font-display text-lg font-bold text-neutral-900 mb-4">
                    温馨提示
                  </h3>
                  <ul className="space-y-3">
                    {specialty.notes.map((n, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-neutral-600">
                        <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{n}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card p-6 bg-gradient-to-br from-primary-500 to-primary-600 text-white border-0">
                  <h3 className="font-display text-lg font-bold mb-3">
                    预约{specialty.name}
                  </h3>
                  <p className="text-primary-100 text-sm mb-5">
                    在线预约，享受优先就诊服务
                  </p>
                  <Link to="/appointment" className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-primary-600 font-semibold transition-all hover:shadow-lg">
                    <Calendar className="w-4 h-4 mr-2" />
                    立即预约
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-neutral-50">
        <div className="container">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center">
            本专科医生
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deptDoctors.map((d) => (
              <DoctorCard key={d.id} doctor={d} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
