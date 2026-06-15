import { Link } from 'react-router-dom';
import { Calendar, ShieldCheck, UserCircle, ArrowRight } from 'lucide-react';
import type { Article } from '../data/articles';
import { doctors } from '../data/doctors';

interface Props {
  article: Article;
}

export default function ArticleCard({ article }: Props) {
  const reviewer = doctors.find((d) => d.id === article.reviewedBy);

  return (
    <Link
      to={`/articles/${article.id}`}
      className="card card-hover overflow-hidden group flex flex-col"
    >
      <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded-full">
            {article.category}
          </span>
        </div>

        <h3 className="font-display text-lg font-bold text-neutral-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {article.title}
        </h3>

        <p className="text-neutral-500 text-sm line-clamp-2 mb-4 flex-1">
          {article.summary}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-neutral-100">
          <div className="flex items-center gap-1 text-xs text-neutral-500">
            <Calendar className="w-3.5 h-3.5" />
            <span>更新于 {article.updatedAt}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-1 text-xs text-success-600 bg-success-50 px-2 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="font-medium">医学审核</span>
            </div>
            {reviewer && (
              <div className="flex items-center gap-1 text-xs text-neutral-600">
                <UserCircle className="w-3.5 h-3.5" />
                <span>{reviewer.name}</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-3 inline-flex items-center gap-1 text-primary-600 text-sm font-medium group-hover:gap-2 transition-all">
          阅读全文
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
