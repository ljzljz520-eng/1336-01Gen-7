import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Filter, ChevronRight } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import { articles } from '../data/articles';

const categories = ['全部', '近视防控', '白内障', '干眼', '通用眼健康'];

export default function ArticleList() {
  const [cat, setCat] = useState('全部');

  const filteredArticles = useMemo(() => {
    if (cat === '全部') return articles;
    return articles.filter((a) => a.category === cat);
  }, [cat]);

  return (
    <div>
      <section className="pt-20 md:pt-24">
        <div className="bg-neutral-50 py-4 border-b border-neutral-100">
          <div className="container">
            <div className="flex items-center gap-2 text-neutral-500 text-sm">
              <Link to="/" className="hover:text-primary-600">首页</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-neutral-800">眼健康科普</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-14 overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="20" cy="80" r="50" fill="white" />
          </svg>
        </div>
        <div className="container relative">
          <div className="w-14 h-14 rounded-2xl bg-white/15 text-white flex items-center justify-center mb-5">
            <BookOpen className="w-7 h-7" strokeWidth={1.75} />
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            眼健康科普
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-2xl">
            专业眼科医生审核，为您提供科学、权威、实用的眼健康知识
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8">
            <div className="flex items-center gap-2 text-neutral-600 font-medium">
              <Filter className="w-5 h-5" />
              <span>按分类浏览：</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    cat === c
                      ? 'bg-primary-500 text-white shadow-md'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredArticles.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-neutral-500">该分类下暂无科普文章</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
