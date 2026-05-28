'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navigation from '@/components/ui/Navigation';
import Cursor from '@/components/ui/Cursor';
import Footer from '@/components/ui/Footer';

const POPUPS = [
  {
    id: 1,
    title: 'OVERLAB × 더현대 서울',
    date: '2024년 5월 – 6월',
    location: '더현대, 강남, 서울',
    desc: '스포츠 장비가 일상의 오브제로 변환되는 완전한 여정을 선보이는 3주간의 몰입형 전시. 인터랙티브 아카이브 스테이션, 소재 샘플, 단독 제품.',
    highlights: ['인터랙티브 아카이브', '라이브 토크', '단독 제품'],
    status: '진행 중',
  },
  {
    id: 2,
    title: '아카이브 팝업 at Candyland',
    date: '2024년 3월 – 4월',
    location: '홍대, 서울',
    desc: '신진 지속가능 브랜드를 조명하는 독립 큐레이터와의 협업 팝업. 50개 큐레이션 컬렉션과 커뮤니티 이벤트, 제품 시연.',
    highlights: ['커뮤니티 이벤트', '제품 시연', '아티스트 협업'],
    status: '완료',
  },
  {
    id: 3,
    title: 'OVERLAB 플래그십 익스피리언스',
    date: '상시 운영',
    location: '마포구 디자인가 123, 서울',
    desc: '아카이브, 전시 공간, 워크숍이 공존하는 상설 플래그십 스토어. 아카이브 가이드 투어, 개인 컨설팅, 단독 인스토어 이벤트.',
    highlights: ['상설 아카이브', '개인 피팅', '워크숍 공간'],
    status: '진행 중',
  },
  {
    id: 4,
    title: '서울 디자인 페스티벌 전시',
    date: '2023년 10월',
    location: 'DDP, 중구, 서울',
    desc: '대표 지속가능 브랜드로 DDP에서 60+ 작품 전시. 순환 디자인, 소재 혁신, 패션 아카이브의 미래에 관한 패널 토론.',
    highlights: ['60+ 작품', '패널 토론', '수상 인정'],
    status: '완료',
  },
  {
    id: 5,
    title: '콜레트 파리 데뷔',
    date: '2024년 2월 – 3월',
    location: '213 Rue Saint-Honoré, 파리',
    desc: '파리의 상징적인 콘셉트 스토어에서의 유럽 데뷔. 단독 한정판 유럽 컬렉션 런칭, 1층 전체의 아카이브 설치.',
    highlights: ['유럽 런칭', '한정판', '럭셔리 리테일'],
    status: '완료',
  },
  {
    id: 6,
    title: 'Browns 쇼어디치 레지던시',
    date: '2024년 1월 – 2월',
    location: 'Redchurch Street, 쇼어디치, 런던',
    desc: '프리미엄 런던 부티크에서의 한 달간 레지던시. 인스토어 설치와 소재 아카이빙 및 지속가능한 크래프트에 관한 주간 디자인 토크.',
    highlights: ['아티스트 레지던시', '디자인 토크', '설치 미술'],
    status: '완료',
  },
];

const UPCOMING = [
  { title: 'OVERLAB × Dover Street Market 도쿄', date: '2024년 7월', location: '도쿄, 일본' },
  { title: '서울 디자인 위크 설치', date: '2024년 9월', location: '서울, 한국' },
];

export default function PopUpPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <main className="relative w-full overflow-x-hidden bg-bg-primary">
      <Cursor />
      <Navigation />

      {/* ── Hero ── */}
      <section
        className="relative w-full min-h-[70vh] flex items-end overflow-hidden"
        style={{ backgroundColor: '#181A16' }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 60% 20%, rgba(163,230,53,0.1) 0%, transparent 55%)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
            opacity: 0.6,
          }} />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 xl:px-20 pb-16 md:pb-20 pt-36 max-w-screen-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px" style={{ backgroundColor: 'var(--lime-primary)' }} />
              <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'rgba(245,245,239,0.4)' }}>
                경험 공간
              </span>
            </div>
            <h1
              className="font-ko text-white mb-8"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 6rem)', letterSpacing: '-0.02em', lineHeight: 1.05 }}
            >
              팝업 &amp;<br />
              <span style={{ color: 'var(--lime-primary)' }}>전시회</span>
            </h1>
            <p className="font-serif italic leading-relaxed max-w-lg"
              style={{ color: 'rgba(245,245,239,0.78)', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
              OVERLAB 아카이브가 생동하는 임시 및 상설 공간. 전시, 워크숍, 몰입형 경험.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Filter tabs ── */}
      <div
        className="sticky top-0 z-30 px-6 md:px-12 lg:px-16 xl:px-20 py-4 backdrop-blur-xl"
        style={{ backgroundColor: 'rgba(245,245,239,0.92)', borderBottom: '1px solid rgba(17,17,17,0.08)' }}
      >
        <div className="max-w-screen-2xl mx-auto flex gap-2">
          {['전체', '진행 중', '완료'].map((f, i) => (
            <button key={f} className="font-mono text-xs uppercase tracking-[0.2em] px-4 py-2 transition-all duration-300"
              style={{
                border: `1px solid ${i === 0 ? 'var(--lime-primary)' : 'rgba(17,17,17,0.2)'}`,
                color: i === 0 ? '#111111' : '#6B6B6B',
                backgroundColor: i === 0 ? 'var(--lime-primary)' : 'transparent',
              }}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* ── Events list ── */}
      <section ref={ref} className="relative w-full py-16 md:py-20 px-6 md:px-12 lg:px-16 xl:px-20 bg-bg-primary">
        <div className="max-w-screen-2xl mx-auto space-y-6 md:space-y-8">
          {POPUPS.map((popup, i) => (
            <motion.div
              key={popup.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.8 }}
            >
              <div
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 p-8 md:p-10 lg:p-12 overflow-hidden transition-colors duration-300"
                style={{ border: '1px solid rgba(17,17,17,0.1)' }}
              >
                {/* Hover wash */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ backgroundColor: 'rgba(163,230,53,0.03)' }} />

                {/* Image placeholder */}
                <div className="lg:col-span-4 relative img-placeholder overflow-hidden"
                  style={{ aspectRatio: '4/3', minHeight: '200px' }}>
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className="font-mono text-xs tracking-[0.2em] uppercase px-2.5 py-1"
                      style={{
                        backgroundColor: popup.status === '진행 중' ? 'var(--lime-primary)' : 'rgba(17,17,17,0.6)',
                        color: popup.status === '진행 중' ? '#111111' : 'rgba(245,245,239,0.8)',
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      {popup.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-8 relative z-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: popup.status === '진행 중' ? 'var(--lime-primary)' : '#6B6B6B' }}
                    />
                    <span className="font-mono text-xs text-text-muted uppercase tracking-[0.2em]">
                      {popup.status}
                    </span>
                  </div>

                  <h3
                    className="font-ko text-text-primary mb-3 group-hover:text-lime-primary transition-colors duration-300"
                    style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.8rem)', letterSpacing: '-0.01em', lineHeight: 1.2 }}
                  >
                    {popup.title}
                  </h3>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mb-5">
                    <span className="font-serif italic text-text-secondary text-sm">
                      <span className="font-mono text-xs text-text-muted uppercase tracking-[0.15em] mr-2">날짜:</span>
                      {popup.date}
                    </span>
                    <span className="font-serif italic text-text-secondary text-sm">
                      <span className="font-mono text-xs text-text-muted uppercase tracking-[0.15em] mr-2">장소:</span>
                      {popup.location}
                    </span>
                  </div>

                  <p className="font-serif italic text-text-secondary text-sm leading-relaxed mb-6 max-w-xl">
                    {popup.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {popup.highlights.map((h) => (
                      <span key={h} className="font-mono text-xs uppercase tracking-[0.15em] px-3 py-1"
                        style={{ backgroundColor: 'rgba(163,230,53,0.15)', color: 'var(--lime-on-light)', fontWeight: 500 }}>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Upcoming ── */}
      <section className="relative w-full py-20 md:py-28 px-6 md:px-12 lg:px-16 xl:px-20 bg-bg-secondary"
        style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }}>
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-1 rounded-full bg-lime-primary flex-shrink-0" />
            <h2 className="font-ko text-text-primary"
              style={{ fontSize: 'clamp(1.7rem, 3.2vw, 3.5rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              곧 오픈
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {UPCOMING.map((event, i) => (
              <motion.div
                key={i}
                className="group p-8 md:p-10 hover:border-lime-primary/40 transition-all duration-300"
                style={{ border: '1px solid rgba(17,17,17,0.1)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="font-mono text-xs uppercase tracking-[0.2em] px-2.5 py-1 mb-5 inline-block"
                  style={{ backgroundColor: 'rgba(163,230,53,0.15)', color: 'var(--lime-on-light)', fontWeight: 500 }}>
                  곧 오픈
                </span>
                <h3 className="font-ko text-text-primary mb-4 group-hover:text-lime-primary transition-colors duration-300"
                  style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.6rem)', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                  {event.title}
                </h3>
                <div className="flex gap-6">
                  <span className="font-serif italic text-text-secondary text-sm">
                    <span className="font-mono text-xs text-text-muted uppercase tracking-[0.15em] mr-2">날짜:</span>
                    {event.date}
                  </span>
                  <span className="font-serif italic text-text-secondary text-sm">
                    <span className="font-mono text-xs text-text-muted uppercase tracking-[0.15em] mr-2">장소:</span>
                    {event.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="relative w-full py-20 md:py-24 px-6 md:px-12 lg:px-16 xl:px-20 bg-bg-primary"
        style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }}>
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="font-ko text-text-primary mb-3"
              style={{ fontSize: 'clamp(1.7rem, 3.2vw, 3.5rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              연결 상태 유지
            </h2>
            <p className="font-serif italic text-text-secondary text-base max-w-md">
              다가오는 이벤트, 단독 컬렉션, 아카이브 출시에 대한 우선 접근을 위해 구독하세요.
            </p>
          </div>
          <div className="flex w-full md:w-auto max-w-sm">
            <input
              type="email"
              placeholder="이메일 주소"
              className="flex-1 px-5 py-3 font-serif text-sm focus:outline-none"
              style={{
                border: '1px solid rgba(17,17,17,0.15)',
                borderRight: 'none',
                backgroundColor: 'transparent',
                color: '#111111',
              }}
            />
            <button
              className="px-6 font-mono text-xs tracking-widest uppercase whitespace-nowrap"
              style={{ backgroundColor: 'var(--lime-primary)', color: '#111111', border: '1px solid var(--lime-primary)' }}
            >
              구독하기
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
