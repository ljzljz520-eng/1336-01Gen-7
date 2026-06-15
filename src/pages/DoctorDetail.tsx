import { useState, useMemo } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Calendar, User, GraduationCap, Award, Stethoscope, ArrowLeft, ChevronRight } from 'lucide-react';
import { doctors } from '../data/doctors';
import { specialties } from '../data/specialties';

export default function DoctorDetail() {
  const { id } = useParams();
  const doctor = useMemo(() => doctors.find((d) => d.id === id), [id]);

  if (!doctor) {
    return <Navigate to="/doctors" replace />;
  }

  const specialty = specialties.find((s) => doctor.department.includes(s.name));

  return (
    <div>
      <section className="pt-20 md:pt-24">
        <div className="bg-neutral-50 py-4 border-b border-neutral-100">
          <div className="container">
            <div className="flex items-center gap-2 text-neutral-500 text-sm">
              <Link to="/" className="hover:text-primary-600">首页</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/doctors" className="hover:text-primary-600">医生团队</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-neutral-800">{doctor.name}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <Link
            to="/doctors"
            className="inline-flex items-center gap-1 text-neutral-600 hover:text-primary-600 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回医生列表</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            <div className="lg:col-span-1">
              <div className="card p-8 text-center sticky top-24">
                <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden mb-5 ring-6 ring-primary-50">
                  {doctor.avatar ? (
                    <img
                      src={doctor.avatar}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
                      <User className="w-16 h-16 text-neutral-400" />
                    </div>
                  )}
                </div>

                <h1 className="font-display text-2xl font-bold text-neutral-900 mb-1">
                  {doctor.name}
                </h1>
                <p className="text-primary-600 font-medium mb-2">{doctor.title}</p>
                <p className="text-neutral-500 text-sm mb-5">{doctor.department}</p>
                <p className="text-neutral-600 text-sm mb-6">{doctor.experience}</p>

                <div className="space-y-3 text-left mb-6">
                  <div className="flex flex-wrap gap-2">
                    {doctor.specialty.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1.5 bg-primary-50 text-primary-700 text-sm rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to="/appointment" className="btn-primary w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  预约这位医生
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="card p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <Stethoscope className="w-6 h-6 text-primary-500" />
                  个人简介
                </h2>
                <p className="text-neutral-600 leading-relaxed">{doctor.bio}</p>
              </div>

              <div className="card p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-primary-500" />
                  教育背景
                </h2>
                <ul className="space-y-3">
                  {doctor.education.map((e, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-neutral-600">
                      <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 shrink-0" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary-500" />
                  学术成就与荣誉
                </h2>
                <ul className="space-y-3">
                  {doctor.achievements.map((a, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-neutral-600">
                      <div className="w-2 h-2 rounded-full bg-success-500 mt-2 shrink-0" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {specialty && (
                <div className="card p-6 md:p-8 bg-gradient-to-br from-primary-50 to-white">
                  <h2 className="font-display text-xl font-bold text-neutral-900 mb-3">
                    所属专科
                  </h2>
                  <p className="text-neutral-600 mb-4">{specialty.description}</p>
                  <Link
                    to={`/specialty/${specialty.slug}`}
                    className="inline-flex items-center gap-1 text-primary-600 font-medium hover:gap-2 transition-all"
                  >
                    查看专科详情
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
