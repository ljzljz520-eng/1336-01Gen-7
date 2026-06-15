import { Link } from 'react-router-dom';
import { ArrowRight, User } from 'lucide-react';
import type { Doctor } from '../data/doctors';

interface Props {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: Props) {
  return (
    <Link
      to={`/doctors/${doctor.id}`}
      className="card card-hover p-6 group block"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-primary-50">
          {doctor.avatar ? (
            <img
              src={doctor.avatar}
              alt={doctor.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
              <User className="w-12 h-12 text-neutral-400" />
            </div>
          )}
        </div>

        <h3 className="font-display text-xl font-bold text-neutral-900 mb-1">
          {doctor.name}
        </h3>
        <p className="text-primary-600 text-sm font-medium mb-2">
          {doctor.title}
        </p>
        <p className="text-neutral-500 text-sm mb-4">{doctor.department}</p>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {doctor.specialty.slice(0, 2).map((s) => (
            <span
              key={s}
              className="px-2.5 py-1 bg-neutral-50 text-neutral-600 text-xs rounded-full"
            >
              {s}
            </span>
          ))}
        </div>

        <p className="text-neutral-500 text-sm mb-4">{doctor.experience}</p>

        <span className="inline-flex items-center gap-1 text-primary-600 text-sm font-medium group-hover:gap-2 transition-all">
          查看详情
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
