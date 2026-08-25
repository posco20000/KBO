"use client";

import { useMemo, useState } from "react";

type Status = "접수 중" | "마감 임박" | "모집 예정";

type Contest = {
  title: string;
  organizer: string;
  period: string;
  audience: string;
  category: string;
  status: Status;
  deadline: string;
  url: string;
};

const contests: Contest[] = [
  {
    title: "제8회 전국 학생 AI 경진대회",
    organizer: "KT · 한국경제신문 · 국립과천과학관",
    period: "07.15 — 08.31",
    audience: "전국 초·중·고등학생",
    category: "AI 교육",
    status: "접수 중",
    deadline: "D-11",
    url: "https://www.codingcontest.or.kr/",
  },
  {
    title: "2026 공공기관 AI 혁신 챌린지",
    organizer: "과학기술정보통신부 · 재정경제부 · NIA",
    period: "06.01 — 08.28 18:00",
    audience: "ALIO 공시 공공기관",
    category: "AI 혁신",
    status: "접수 중",
    deadline: "D-8",
    url: "https://aichallenge4all.or.kr/competitions/public-ai",
  },
  {
    title: "2026 전국민 AI 활용사례 공모전",
    organizer: "과학기술정보통신부",
    period: "07월 — 08월",
    audience: "대한민국 국민 누구나",
    category: "생성형 AI",
    status: "접수 중",
    deadline: "8월 마감",
    url: "https://aichallenge4all.or.kr/competitions/case-contest",
  },
  {
    title: "2026 리부트 AI 활용대회",
    organizer: "과학기술정보통신부 · ICT이노베이션스퀘어",
    period: "03월 — 08월 · 권역별 상이",
    audience: "AI 교육 이수 청년·여성",
    category: "AI 융합",
    status: "접수 중",
    deadline: "권역별 상이",
    url: "https://aichallenge4all.or.kr/competitions/youth-ai",
  },
  {
    title: "2026 로보틱스 챌린지",
    organizer: "과학기술정보통신부 · 한국과학창의재단",
    period: "권역별 접수 · 최대 08.30",
    audience: "초·중·고등학생 · 작품공모 누구나",
    category: "로보틱스",
    status: "마감 임박",
    deadline: "D-3~10",
    url: "https://aichallenge4all.or.kr/competitions/ai-robot",
  },
  {
    title: "제5회 국방 AI 경진대회 MAICON",
    organizer: "국방부 · 정보통신기획평가원",
    period: "09.01 — 09.30 예정",
    audience: "현역·군무원·만 19~34세 청년",
    category: "국방 AI",
    status: "모집 예정",
    deadline: "09.01 OPEN",
    url: "https://maicon.kr/",
  },
];

const filters: Array<"전체" | Status> = ["전체", "접수 중", "마감 임박", "모집 예정"];

export default function Home() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]>("전체");

  const filtered = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    return contests.filter((contest) => {
      const matchesStatus = filter === "전체" || contest.status === filter;
      const matchesQuery =
        !keyword ||
        [contest.title, contest.organizer, contest.category, contest.audience]
          .join(" ")
          .toLowerCase()
          .includes(keyword);
      return matchesStatus && matchesQuery;
    });
  }, [filter, query]);

  return (
    <main className="min-h-screen bg-[#f7f7f3] text-[#15171a]">
      <header className="border-b border-black/10 bg-[#f7f7f3]/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3 font-black tracking-[0.08em]">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-black text-[11px]">AI</span>
            <span className="text-sm">CONTEST KOREA</span>
          </a>
          <p className="text-xs font-bold text-black/45">2026 · 공식 공고 기준</p>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-6xl px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-24">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#315fe7]">AI contest directory</p>
        <div className="mt-5 grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end">
          <div>
            <h1 className="max-w-3xl text-[clamp(3rem,7vw,6.4rem)] font-black leading-[0.92] tracking-[-0.065em]">
              AI 공모전을
              <br />
              <span className="text-[#315fe7]">쉽게 찾으세요.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base font-medium leading-7 text-black/55">
              접수 일정과 참가 대상을 한눈에 비교하고 공식 공고에서 바로 지원하세요.
            </p>
          </div>
          <div className="grid grid-cols-3 border-y border-black/15 py-5 text-center lg:grid-cols-1 lg:gap-4 lg:text-left">
            <p className="text-xs font-bold text-black/45">접수 중 <strong className="ml-1 text-lg text-black">4</strong></p>
            <p className="text-xs font-bold text-black/45">마감 임박 <strong className="ml-1 text-lg text-[#315fe7]">1</strong></p>
            <p className="text-xs font-bold text-black/45">모집 예정 <strong className="ml-1 text-lg text-black">1</strong></p>
          </div>
        </div>

        <label className="mt-10 flex overflow-hidden rounded-xl border border-black/15 bg-white shadow-sm sm:max-w-2xl">
          <span className="sr-only">공모전 검색</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="공모전명, 주최기관, 참가 대상 검색"
            className="min-w-0 flex-1 bg-transparent px-5 py-4 text-sm font-medium outline-none placeholder:text-black/35"
          />
          <span aria-hidden="true" className="grid w-14 place-items-center bg-[#315fe7] text-lg text-white">⌕</span>
        </label>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div className="flex flex-col gap-5 border-t border-black/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2" aria-label="접수 상태 필터">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`rounded-full px-4 py-2 text-xs font-black transition ${
                  filter === item ? "bg-[#15171a] text-white" : "border border-black/10 bg-white text-black/55 hover:border-black/30"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <p className="text-sm font-bold text-black/45"><strong className="text-black">{filtered.length}</strong>개의 공모전</p>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-black/10 bg-white">
          {filtered.length ? (
            filtered.map((contest, index) => (
              <article key={contest.title} className={`group ${index ? "border-t border-black/10" : ""}`}>
                <a
                  href={contest.url}
                  target="_blank"
                  rel="noreferrer"
                  className="grid gap-5 p-5 transition hover:bg-[#f2f4ff] sm:p-7 lg:grid-cols-[1.5fr_1fr_150px] lg:items-center"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#e9edff] px-2.5 py-1 text-[10px] font-black text-[#315fe7]">{contest.category}</span>
                      <span className="text-[11px] font-black text-black/40">{contest.status}</span>
                    </div>
                    <h2 className="mt-3 text-xl font-black tracking-[-0.025em] sm:text-2xl">{contest.title}</h2>
                    <p className="mt-2 text-sm font-medium text-black/45">{contest.organizer}</p>
                  </div>
                  <dl className="grid grid-cols-2 gap-4 text-sm lg:grid-cols-1 lg:gap-2">
                    <div>
                      <dt className="text-[10px] font-black uppercase tracking-wider text-black/35">접수 기간</dt>
                      <dd className="mt-1 font-bold text-black/70">{contest.period}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-black uppercase tracking-wider text-black/35">참가 대상</dt>
                      <dd className="mt-1 font-bold text-black/70">{contest.audience}</dd>
                    </div>
                  </dl>
                  <div className="flex items-center justify-between border-t border-black/10 pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                    <strong className={`font-mono text-lg ${contest.status === "마감 임박" ? "text-[#315fe7]" : "text-black"}`}>{contest.deadline}</strong>
                    <span className="text-xl transition group-hover:translate-x-1">↗</span>
                  </div>
                </a>
              </article>
            ))
          ) : (
            <div className="px-6 py-16 text-center">
              <p className="font-black">검색 결과가 없습니다.</p>
              <button type="button" onClick={() => { setQuery(""); setFilter("전체"); }} className="mt-3 text-sm font-bold text-[#315fe7]">전체 목록 보기</button>
            </div>
          )}
        </div>

        <footer className="mt-8 flex flex-col gap-2 text-xs font-medium leading-5 text-black/40 sm:flex-row sm:items-center sm:justify-between">
          <p>2026.08.20 검수 · 신청 전 공식 공고에서 최종 일정을 확인하세요.</p>
          <p>© 2026 AI CONTEST KOREA</p>
        </footer>
      </section>
    </main>
  );
}

