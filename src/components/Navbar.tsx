import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const navItems = [
  { label: '首页', path: '/' },
  { label: '近视防控', path: '/specialty/myopia' },
  { label: '白内障', path: '/specialty/cataract' },
  { label: '干眼门诊', path: '/specialty/dry-eye' },
  { label: '医生团队', path: '/doctors' },
  { label: '眼健康科普', path: '/articles' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-white'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <div>
              <div className="font-display text-lg font-bold text-neutral-900">启明眼科</div>
              <div className="text-xs text-neutral-500">专业眼科诊疗服务</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <Phone className="w-4 h-4 text-primary-500" />
              <span className="font-medium">400-123-4567</span>
            </div>
            <Link to="/appointment" className="btn-primary !py-2 !px-5 text-sm">
              <Calendar className="w-4 h-4 mr-1.5" />
              在线预约
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-neutral-700 hover:bg-neutral-100 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-100 animate-fade-in">
          <div className="container py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-neutral-100 space-y-3">
              <div className="flex items-center gap-2 px-4 text-neutral-600">
                <Phone className="w-4 h-4 text-primary-500" />
                <span>400-123-4567</span>
              </div>
              <Link to="/appointment" className="btn-primary w-full">
                <Calendar className="w-4 h-4 mr-1.5" />
                在线预约
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
