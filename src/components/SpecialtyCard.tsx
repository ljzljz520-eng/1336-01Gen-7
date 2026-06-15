import { Link } from 'react-router-dom';
import { Eye, Sun, Droplets, ArrowRight } from 'lucide-react';
import type { Specialty } from '../data/specialties';

interface Props {
  specialty: Specialty;
}

const iconMap = {
  eye: Eye,
  sun: Sun,
  droplets: Droplets,
};

export default function SpecialtyCard({ specialty }: Props) {
  const Icon = iconMap[specialty.icon];

  return (
    <Link
      to={`/specialty/${specialty.slug}`}
      className="card card-hover p-8 group block h-full"
    >
      <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-500 flex items-center justify-center mb-5 group-hover:bg-primary-500 group-hover:text-white transition-all">
        <Icon className="w-7 h-7" strokeWidth={1.75} />
      </div>

      <h3 className="font-display text-2xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
        {specialty.name}
      </h3>
      <p className="text-primary-600 text-sm font-medium mb-3">
        {specialty.subtitle}
      </p>

      <p className="text-neutral-500 text-sm leading-relaxed mb-5 line-clamp-3">
        {specialty.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {specialty.services.slice(0, 3).map((s) => (
          <span
            key={s.title}
            className="px-3 py-1 bg-neutral-50 text-neutral-600 text-xs rounded-full"
          >
            {s.title}
          </span>
        ))}
        {specialty.services.length > 3 && (
          <span className="px-3 py-1 bg-neutral-50 text-neutral-500 text-xs rounded-full">
            +{specialty.services.length - 3}
          </span>
        )}
      </div>

      <div className="inline-flex items-center gap-1 text-primary-600 text-sm font-medium group-hover:gap-2 transition-all">
        了解更多
        <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
}
