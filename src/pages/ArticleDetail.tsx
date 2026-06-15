import { useMemo } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  Calendar,
  ShieldCheck,
  UserCircle,
  ArrowLeft,
  ChevronRight,
  User,
  Stethoscope,
  BookOpen,
} from 'lucide-react';
import { articles } from '../data/articles';
import { doctors } from '../data/doctors';

export default function ArticleDetail() {
  const { id } = useParams();
  const article = useMemo(() => articles.find((a) => a.id === id), [id]);
  const reviewer = useMemo(
    () => (article ? doctors.find((d) => d.id === article.reviewedBy) : undefined),
    [article]
  );

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  const relatedArticles = articles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <div>
      <section className="pt-20 md:pt-24">
        <div className="bg-neutral-50 py-4 border-b border-neutral-100">
          <div className="container">
            <div className="flex items-center gap-2 text-neutral-500 text-sm">
              <Link to="/" className="hover:text-primary-600">首页</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/articles" className="hover:text-primary-600">眼健康科普</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-neutral-800 truncate">{article.title}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500">
        <div className="container">
          <Link
            to="/articles"
            className="inline-flex items-center gap-1 text-primary-100 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回科普列表</span>
          </Link>

          <span className="inline-block px-3 py-1 bg-white/15 backdrop-blur-sm text-white text-sm rounded-full mb-4">
            {article.category}
          </span>

          <h1 className="font-display text-2xl md:text-4xl font-bold text-white mb-6 leading-tight max-w-4xl">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-primary-100">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">更新时间：{article.updatedAt}</span>
            </div>
            <div className="flex items-center gap-2 bg-success-500/20 text-success-50 px-3 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-sm font-medium">已通过医学专业审核</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-3">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100 mb-10">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="max-w-none">
                <div className="space-y-5 text-neutral-700 leading-[1.9] text-base md:text-lg">
                  {article.content.map((p, idx) => (
                    <p key={idx} className="first-letter:text-3xl first-letter:font-bold first-letter:text-primary-600 first-letter:font-display first-letter:mr-1 first-letter:float-left first-letter:leading-none">
                      {p}
                    </p>
                  ))}
                </div>

                <div className="mt-10 p-5 bg-amber-50 rounded-xl border border-amber-100">
                  <p className="text-sm text-amber-800 leading-relaxed">
                    <span className="font-semibold">免责声明：</span>
                    本文内容仅供健康科普参考，不能替代专业医生的诊断和治疗建议。如有眼部不适，请及时到正规医疗机构就诊。
                  </p>
                </div>
              </div>

              {reviewer && (
                <div className="mt-10">
                  <h3 className="font-display text-xl font-bold text-neutral-900 mb-5 flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-success-500" />
                    审核医生
                  </h3>
                  <div className="card p-6">
                    <Link to={`/doctors/${reviewer.id}`} className="flex items-start gap-5">
                      <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 ring-4 ring-primary-50">
                        {reviewer.avatar ? (
                          <img
                            src={reviewer.avatar}
                            alt={reviewer.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
                            <User className="w-10 h-10 text-neutral-400" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display text-xl font-bold text-neutral-900 mb-1">
                          {reviewer.name}
                        </h4>
                        <p className="text-primary-600 font-medium mb-1">{reviewer.title}</p>
                        <p className="text-neutral-500 text-sm mb-3">{reviewer.department}</p>
                        <p className="text-neutral-600 text-sm leading-relaxed line-clamp-2">
                          {reviewer.bio}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {reviewer.specialty.slice(0, 3).map((s) => (
                            <span
                              key={s}
                              className="px-2.5 py-1 bg-neutral-50 text-neutral-600 text-xs rounded-full"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="space-y-6 sticky top-24">
                <div className="card p-6 bg-gradient-to-br from-primary-500 to-primary-600 text-white border-0">
                  <h3 className="font-display text-lg font-bold mb-2">
                    有眼部不适？
                  </h3>
                  <p className="text-primary-100 text-sm mb-5">
                    让专业眼科医生为您提供诊疗建议
                  </p>
                  <Link to="/appointment" className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-primary-600 font-semibold transition-all hover:shadow-lg">
                    <BookOpen className="w-4 h-4 mr-2" />
                    立即预约
                  </Link>
                </div>

                {relatedArticles.length > 0 && (
                  <div className="card p-6">
                    <h3 className="font-display text-lg font-bold text-neutral-900 mb-5 flex items-center gap-2">
                      <Stethoscope className="w-5 h-5 text-primary-500" />
                      相关文章
                    </h3>
                    <div className="space-y-4">
                      {relatedArticles.map((ra) => (
                        <Link
                          key={ra.id}
                          to={`/articles/${ra.id}`}
                          className="block group"
                        >
                          <h4 className="font-medium text-neutral-900 mb-1.5 line-clamp-2 group-hover:text-primary-600 transition-colors">
                            {ra.title}
                          </h4>
                          <div className="flex items-center gap-3 text-xs text-neutral-500">
                            <span>{ra.updatedAt}</span>
                            <span className="px-2 py-0.5 bg-neutral-100 rounded">{ra.category}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <div className="card p-6">
                  <h3 className="font-display text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-success-500" />
                    医学审核
                  </h3>
                  <div className="space-y-3 text-sm text-neutral-600">
                    <p>本文由本院专业眼科医师进行医学内容审核，确保内容科学、准确。</p>
                    <p className="text-neutral-500">
                      <span className="inline-flex items-center gap-1 text-success-600 font-medium">
                        <UserCircle className="w-4 h-4" />
                        {reviewer?.name || '专业医生团队'}
                      </span>
                      {' '}审核 · 最后更新：{article.updatedAt}
                    </p>
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
