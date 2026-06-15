import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div>
                <div className="font-display text-lg font-bold">启明眼科医院</div>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              专业眼科诊疗，致力于为各年龄段人群提供优质的眼健康服务。科学诊疗，规范服务，守护您的清晰视界。
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">专科中心</h3>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li><Link to="/specialty/myopia" className="hover:text-white transition-colors">近视防控中心</Link></li>
              <li><Link to="/specialty/cataract" className="hover:text-white transition-colors">白内障专科</Link></li>
              <li><Link to="/specialty/dry-eye" className="hover:text-white transition-colors">干眼门诊</Link></li>
              <li><Link to="/doctors" className="hover:text-white transition-colors">医生团队</Link></li>
              <li><Link to="/articles" className="hover:text-white transition-colors">眼健康科普</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">联系我们</h3>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                <span>北京市朝阳区建国路88号启明医疗大厦1-3层</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                <span>400-123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                <span>contact@qiming-eye.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">就诊时间</h3>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                <div>
                  <p className="mb-1">周一至周五</p>
                  <p className="text-white">08:30 - 17:30</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                <div>
                  <p className="mb-1">周六至周日</p>
                  <p className="text-white">09:00 - 17:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                <div>
                  <p className="mb-1">急诊（24小时）</p>
                  <p className="text-white">全天开放</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">
            © 2026 启明眼科医院 版权所有
          </p>
          <div className="text-sm text-neutral-500 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span>京ICP备12345678号</span>
            <span>京公网安备11010502000000号</span>
            <span>医疗机构执业许可证：000000000000000</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-neutral-800">
          <p className="text-xs text-neutral-600 text-center leading-relaxed">
            温馨提示：本站内容仅供健康科普参考，不作为诊断及医疗依据。如有不适，请及时前往正规医疗机构就诊。
          </p>
        </div>
      </div>
    </footer>
  );
}
