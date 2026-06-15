import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Users, Filter, Calendar } from 'lucide-react';
import DoctorCard from '../components/DoctorCard';
import { doctors } from '../data/doctors';

const departments = ['全部', '近视防控中心', '白内障专科', '干眼门诊'];

export default function DoctorList() {
  const [dept, setDept] = useState('全部');

  const filteredDoctors = useMemo(() => {
    if (dept === '全部') return doctors;
    return doctors.filter((d) => d.department === dept);
  }, [dept]);

  return (
    <div>
      <section className="relative pt-20 md:pt-24 overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="20" cy="30" r="40" fill="white" />
            <circle cx="80" cy="70" r="50" fill="white" />
          </svg>
        </div>
        <div className="container relative py-12 md:py-20">
          <div className="flex items-center gap-2 text-primary-100 text-sm mb-4">
            <Link to="/" className="hover:text-white">首页</Link>
            <span>/</span>
            <span>医生团队</span>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-white/15 text-white flex items-center justify-center mb-5">
            <Users className="w-7 h-7" strokeWidth={1.75} />
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            医生团队
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-2xl">
            专业眼科医师团队，平均从业经验15年以上，为您的眼健康保驾护航
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8">
            <div className="flex items-center gap-2 text-neutral-600 font-medium">
              <Filter className="w-5 h-5" />
              <span>按科室筛选：</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {departments.map((d) => (
                <button
                  key={d}
                  onClick={() => setDept(d)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    dept === d
                      ? 'bg-primary-500 text-white shadow-md'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDoctors.map((d) => (
              <DoctorCard key={d.id} doctor={d} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-neutral-500 mb-4">需要专业医生为您提供诊疗服务？</p>
            <Link to="/appointment" className="btn-primary">
              <Calendar className="w-5 h-5 mr-2" />
              在线预约挂号
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
