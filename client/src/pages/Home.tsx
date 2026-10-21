import { useEffect, useRef, useState } from "react";

type Work = {
  id: string;
  title: string;
  videoId: string;
  image: string;
  category: string;
  year: string;
  runtime?: string;
  role: string;
  camera: string;
  lens: string;
  lighting: string;
  tools: string;
  overview: string;
  background: string;
  clientTask: string;
  judgment: string;
  concept: string;
  storyFlow: string;
  production: string;
  postProduction: string;
  result?: string;
  credit: string;
};

const works: Work[] = [
  {
    id: "01",
    title: "한국의 美, 국보급 커스텀 PC",
    videoId: "7vzfG8ZOfUc",
    image: "https://i.ytimg.com/vi/7vzfG8ZOfUc/maxresdefault.jpg",
    category: "브랜드 필름 / 제작 과정 다큐멘터리",
    role: "기획 · 대본 · 촬영 · 편집 (단독 진행)",
    camera: "Sony A7C, A7AC / DJI Osmo Pocket",
    lens: "Sony FE 24mm F1.4 GM, FE 24-70mm F2.8 GM",
    lighting: "Nanlite Forza 60 + 소프트박스, 럭스64",
    tools: "Premiere Pro, After Effects, Photoshop",
    year: "2026.02",
    runtime: "10분",
    overview: "완성품이 아니라, 완성되기까지를 보여준다.",
    background: "커스텀 PC 시장의 콘텐츠는 대부분 스펙표로 끝납니다. 그런데 고가 제품일수록 고객이 진짜 궁금해하는 건 부품 목록이 아니라 \"이 돈을 이 회사에 맡겨도 되는가\"입니다.\n\n제품이 아니라 제작 과정이 신뢰의 근거가 된다고 판단했고, 그 판단에서 이 영상의 기획이 출발했습니다.",
    clientTask: "고가 커스텀 PC의 구매 심리 장벽을 낮출 것",
    judgment: "스펙 설명으로는 이 장벽을 넘을 수 없다고 봤습니다. 그래서 홍보 영상이 아니라 10분짜리 제작 과정 다큐멘터리라는 형식 자체를 제안하고 선택했습니다. 공정을 요약하면 신뢰도 함께 요약된다고 판단했습니다.",
    concept: "한 대의 PC가 사람의 손을 거쳐 완성되기까지, 주문에서 출고까지의 전 과정을 하나의 호흡으로 담았습니다. 10분이라는 긴 러닝타임은 의도된 선택입니다.",
    storyFlow: "01 주문 접수 → 02 설계 → 03 제작 → 04 벤치 테스트 → 05 포장 → 06 출고·설치",
    production: "[전체 흐름 샷 — 삼각대 고정]\n작업대 전경을 고정 프레임으로 담아 시간이 쌓이는 감각을 만들었습니다. 24-70mm F2.8 GM으로 화각을 유연하게 가져갔습니다.\n\n[디테일 샷 — 핸드헬드]\n부품 조립, 케이블 정리, 납땜 장면은 직접 카메라를 들고 촬영했습니다. 24mm F1.4 GM의 얕은 심도로 손끝과 부품에만 초점을 남겼습니다.\n\n[보조 촬영 — Osmo Pocket]\n미러리스가 들어가기 어려운 케이스 내부와 좁은 각도의 이동 샷은 짐벌 내장 카메라로 보완했습니다.",
    postProduction: "가볍지 않은, 무게감 있는 분위기를 목표로 했습니다. 빠른 컷 대신 장면의 호흡을 살려 정교함과 신뢰감을 표현했습니다. 채도를 낮추고 대비를 눌러 작업장의 금속과 사람의 손을 같은 톤에 두었습니다.",
    result: "· 조회수 1.1만\n· 영상 공개 이후 커스텀 제작 의뢰 증가, 채널 구독자 증가\n· 유명 연예인 실구매로 연결\n· 댓글에 구매 욕구 표현 다수\n\n제품 설명 없이 제작 과정만으로 구매 의향이 형성된다는 것을 확인한 프로젝트입니다.",
    credit: "기획 · 대본 · 촬영 · 편집 — 김태완",
  },
  {
    id: "02",
    title: "1300만원 하이엔드 PC, 에셜론 W",
    videoId: "x6vXt624O60",
    image: "https://i.ytimg.com/vi/x6vXt624O60/maxresdefault.jpg",
    category: "제품 필름 / 하이엔드 프로덕트",
    role: "기획 · 대본 · 촬영 · 편집 (단독 진행)",
    camera: "Sony A7C",
    lens: "Sony FE 24mm F1.4 GM, FE 24-70mm F2.8 GM",
    lighting: "Nanlite Forza 60 + 소프트박스, 럭스64",
    tools: "Premiere Pro, After Effects",
    year: "2026.03",
    runtime: "1분 28초",
    overview: "1300만원이라는 숫자를, 스펙이 아닌 화면으로 납득시킨다.",
    background: "가격이 높은 제품일수록 스펙 나열은 오히려 설득력을 잃습니다. 같은 부품을 쓴 다른 제품과 숫자로는 구분되지 않기 때문입니다.\n\n1300만원의 근거는 부품표가 아니라 마감의 밀도와 조립의 완성도에 있다고 보고, 그 차이가 눈에 보이도록 만드는 데 집중했습니다.",
    clientTask: "1300만원이라는 가격의 정당성을 영상으로 확보할 것",
    judgment: "스펙을 나열할수록 경쟁 제품과 구분되지 않는다고 봤습니다. 설명을 최소화하고 화면의 밀도로만 설득하는 방식을 택했습니다. 내레이션과 자막을 덜어낸 대신, 조명에 반나절을 썼습니다.",
    concept: "설명하지 않고 보여줍니다. 제품 표면의 질감과 내부 구조의 밀도가 스스로 말하도록 구성했습니다.",
    storyFlow: "01 제품 외관 → 02 내부 부품 디테일 → 03 수냉 시스템 → 04 성능 시연 → 05 브랜드 메시지",
    production: "[조명 세팅에 반나절]\n알루미늄 표면, 강화유리, 케이블 슬리빙은 빛의 각도에 따라 완전히 다르게 보입니다. Nanlite Forza 60에 소프트박스를 물리고 럭스64로 측면 질감을 살리는 배치를 반복 테스트했습니다.\n\n[삼각대 고정 중심의 정적인 촬영]\n움직임을 줄이고 프레임을 정확하게 잡았습니다.\n\n[포인트 요소 클로즈업]\n수냉 쿨러의 유체 흐름, LED 발광, 커넥터 마감은 24mm F1.4 GM으로 따로 촬영해 컷 사이에 배치했습니다.",
    postProduction: "하이라이트를 억제하고 블랙을 깊게 내려 알루미늄과 강화유리의 반사만 살아남도록 정리했습니다. 과한 트랜지션 대신 컷의 호흡과 여백으로 완성도를 쌓았습니다.",
    result: "· 영상 공개 이후 확인된 주문 3건\n· 동일 라인 파생 모델까지 주문 확장\n\n제품 필름이 홍보물이 아니라 영업 자산으로 기능한 사례입니다.",
    credit: "기획 · 대본 · 촬영 · 편집 — 김태완",
  },
  {
    id: "03",
    title: "「LED 전부 빼주세요」 1700만 원 RTX 5090 커스텀 수냉 PC",
    videoId: "Witge76c0_o",
    image: "https://i.ytimg.com/vi/Witge76c0_o/maxresdefault.jpg",
    category: "제품 필름 / 고객 요청 기반 제작기",
    year: "2026.03",
    runtime: "6분 59초",
    overview: "빼달라는 요청에서, 시장의 변화가 보였다.",
    role: "기획 · 대본 · 촬영 · 편집 (단독 진행)",
    camera: "Sony A7C 2대 운용",
    lens: "Sony FE 24mm F1.4 GM, FE 24-70mm F2.8 GM",
    lighting: "Nanlite Forza 60 + 소프트박스, 럭스64",
    tools: "Premiere Pro, After Effects",
    background: "커스텀 PC 영상은 대부분 화려한 LED를 전면에 세웁니다.\n그런데 1700만 원짜리 주문에서 LED를 전부 빼달라는 요청이 들어왔습니다.\n\n처음에는 특이한 요구로 보였지만, 게이밍이 아니라\n작업용·AI 연산용으로 고사양 PC를 맞추는 고객이 늘고 있다는 신호였습니다.\n이 시장에서 LED는 장점이 아니라 방해 요소입니다.",
    clientTask: "고객의 LED 제거 요청을 반영한 1700만 원 커스텀 PC 제작기를 만들 것",
    judgment: "이 요청을 특이 사례로만 소비하면 한 편으로 끝난다고 봤습니다.\n대신 작업용 PC에 왜 LED가 불필요한지, 끄는 방법과\n아예 제외하는 선택지가 무엇인지를 영상 안에서 설명하는 구성을 택했습니다.\n\n제목은 고객의 말을 그대로 따서 궁금증을 만들고,\n본문에서는 같은 고민을 하는 시청자에게 실제 판단 기준을 남기는 방향입니다.\n한 사람의 요청을 여러 사람의 질문으로 바꾸는 것이 이 영상의 목표였습니다.",
    concept: "제품을 자랑하는 영상이 아니라, 선택을 돕는 영상으로 만들었습니다.\n고사양 PC를 게임이 아닌 용도로 맞추려는 시청자가\n이 영상 하나로 LED에 대한 판단을 끝낼 수 있도록 정보를 배치했습니다.",
    storyFlow: "01 고객 요청 소개 → 02 사양 공개 → 03 LED 제외 이유 설명 → 04 제작 과정 → 05 LED 온·오프 및 제외 선택지 안내 → 06 완성",
    production: "[카메라 2대 운용]\nSony A7C 두 대를 동시에 운용해 전체 작업 흐름과 부품 디테일을\n같은 타이밍에 확보했습니다. 재촬영 없이 컷을 확보하기 위한 선택입니다.\n\n[LED 없는 제품의 촬영]\n발광 요소가 없으면 화면이 단조로워집니다.\n금속 표면, 수냉 튜빙, 케이블 정리 상태에 조명을 나눠 걸어\n빛이 아니라 질감으로 밀도를 만드는 방향으로 촬영했습니다.",
    postProduction: "설명이 중심인 영상이라 정보와 화면의 속도를 맞추는 데 집중했습니다.\n자막이 나오는 구간은 컷을 길게 가져가고,\n조립 과정은 빠르게 붙여 지루함을 덜어냈습니다.\n\n색보정은 중성적인 톤으로 잡아 부품의 실제 색이 왜곡되지 않도록 했습니다.\n구매 판단에 쓰이는 영상이므로 과한 색 연출은 배제했습니다.\n\n같은 소재를 쇼츠로도 제작했습니다.\n7분 롱폼이 제작 과정과 설명을 함께 담았다면,\n쇼츠는 \"LED가 없는 이유\" 하나만 남기고 나머지를 전부 덜어냈습니다.\n플랫폼에 따라 무엇을 버릴지 정하는 것이 편집의 시작입니다.",
    result: "· 조회수 2.4만\n· 댓글 92개\n· 영상 시청 후 주문 5건 이상\n\n세 작업물 중 가장 높은 지표를 기록했습니다.\n제품의 화려함이 아니라 시청자의 실제 고민에 답한 구성이\n조회수와 주문 양쪽으로 이어진 사례입니다.",
    credit: "기획 · 대본 · 촬영 · 편집 — 김태완",
  },
];

const otherWorks: { title: string; videoId: string; image: string; category: string; views?: string; comments?: string }[] = [];

const shorts = [
  { id: "01", videoId: "hLzgLFGG698", format: "밈 · 콩트", title: "램이랑 그래픽카드 교환", views: "조회수 551만", comments: "댓글 1,118" },
  { id: "02", videoId: "ao1W3gOJK1E", format: "밈 · 콩트", title: "동사무소에서 주운 PC의 정체??", views: "조회수 308만", comments: "댓글 1,040" },
  { id: "03", videoId: "QdnO1wY9kWg", format: "정보 전달", title: "현시점 그래픽카드 족보 한눈에 이해하기", views: "조회수 164만", comments: "" },
  { id: "04", videoId: "EgCTJGgiPi8", format: "제품", title: "1,300만원 AMD 신상 PC 51초 조립", views: "조회수 15만", comments: "" },
  { id: "05", videoId: "EshqW-Alwl0", format: "정보 전달", title: "오픈케이스, 왜 다들 말리는걸까 2편", views: "조회수 8.8만", comments: "댓글 93" },
  { id: "06", videoId: "pR1FOwzPZeg", format: "밈 · 콩트", title: "65만원짜리 RAM vs 신라면 1,030개, 당신의 선택은?", views: "조회수 1.6만", comments: "댓글 26" },
  { id: "07", videoId: "nem4iGhh1XM", format: "제품 홍보 · 직접 출연", title: "아이폰 14로 촬영한 X500프로 홍보영상", views: "조회수 7,094", comments: "댓글 12" },
];

function YouTubeFrame({ videoId, title }: { videoId: string; title: string }) {
  return <iframe title={title} src={`https://www.youtube.com/embed/${videoId}?controls=1&playsinline=1&rel=0`} allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowFullScreen />;
}

function WorkDetail({ work, onClose }: { work: Work; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); onClose(); return; }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button, a[href], iframe, [tabindex]:not([tabindex="-1"])')).filter((node) => !node.hasAttribute("disabled"));
      if (!focusable.length) return;
      const first = focusable[0]; const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);
  const blocks = [
    ["OVERVIEW", work.overview], ["BACKGROUND", work.background], ["CONCEPT", work.concept], ["STORY FLOW", work.storyFlow], ["PRODUCTION", work.production], ["POST PRODUCTION", work.postProduction], ["RESULT", work.result], ["CREDIT", work.credit],
  ].filter(([, value]) => value);
  return <div ref={dialogRef} className="case-detail" role="dialog" aria-modal="true" aria-labelledby={`case-${work.id}-title`}><div className="case-detail-inner"><button ref={closeRef} className="case-close" onClick={onClose} aria-label="상세 내용 닫기">닫기 ×</button><p className="label">CASE {work.id} · {work.category}</p><h2 id={`case-${work.id}-title`}>{work.title}</h2><div className="case-video"><YouTubeFrame videoId={work.videoId} title={`${work.title} 상세 영상`} /></div><section className="case-info"><h3>PROJECT INFO</h3><dl><div><dt>CLIENT</dt><dd>몬스타㈜</dd></div><div><dt>ROLE</dt><dd>{work.role}</dd></div><div><dt>CAMERA</dt><dd>{work.camera}</dd></div><div><dt>LENS</dt><dd>{work.lens}</dd></div><div><dt>LIGHTING</dt><dd>{work.lighting}</dd></div><div><dt>TOOLS</dt><dd>{work.tools}</dd></div><div><dt>YEAR</dt><dd>{work.year}</dd></div>{work.runtime && <div><dt>RUNTIME</dt><dd>{work.runtime}</dd></div>}</dl></section><section className="case-objective"><div><p className="label">OBJECTIVE · 클라이언트 과제</p><p>{work.clientTask}</p></div><div className="case-objective-judgment"><p className="label">OBJECTIVE · 나의 판단</p><p>{work.judgment}</p></div></section>{blocks.map(([label, value]) => <section className={`case-block ${label === "RESULT" ? "case-block--result" : ""}`} key={label}><p className="label">{label}</p><div className="case-prose">{String(value).split("\n").map((line, index) => <p key={`${label}-${index}`}>{line || "\u00a0"}</p>)}</div></section>)}{work.id === "03" && <a className="related-short" href="#shorts" onClick={onClose}>RELATED — 쇼츠 「1,700만 원 커스텀 수랭인데 LED가 없는 이유」</a>}</div></div>;
}


/* ── Apple-style layout ─────────────────────────────────────────────── */

// 프로필 사진: client/public/profile.jpg 를 넣으면 자동으로 표시됩니다.
const PROFILE_IMG = "./profile.jpg";

const caseStats: Record<string, [string, string][]> = {
  "01": [["1.1만", "조회수"], ["실구매", "유명 연예인 구매로 연결"]],
  "02": [["3건", "공개 후 확인된 주문"], ["1분 28초", "내레이션 없이"]],
  "03": [["2.4만", "조회수"], ["5건+", "시청 후 주문"]],
};

const processSteps: [string, string][] = [
  ["리서치", "레퍼런스를 모으고, AI로 기획 초안을 빠르게 잡습니다."],
  ["기획·대본", "시청자가 궁금해할 한 문장을 정하고, 답을 찾아가는 장면의 순서를 설계합니다."],
  ["촬영", "답이 되는 장면을 현장에서 확보합니다."],
  ["편집·색보정", "정보와 감정의 호흡을 조절합니다."],
  ["모션 그래픽", "이해를 돕는 그래픽을 더합니다."],
  ["업로드", "유튜브·인스타그램·틱톡 포맷에 맞춰 전달합니다."],
];

function ProfilePhoto() {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className="ap-photo ap-photo--empty" aria-hidden="true" />;
  return <div className="ap-photo"><img src={PROFILE_IMG} alt="김태완 프로필 사진" onError={() => setFailed(true)} /></div>;
}

function Thumb({ src, alt = "" }: { src: string; alt?: string }) {
  return <img loading="lazy" decoding="async" src={src} alt={alt} onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = event.currentTarget.src.replace("maxresdefault", "hqdefault"); }} />;
}

export default function Home() {
  const [activeWork, setActiveWork] = useState<Work | null>(null);
  const [activeShort, setActiveShort] = useState<string | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const railRef = useRef<HTMLDivElement>(null);
  useEffect(() => { const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]")); const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 }); nodes.forEach((node) => observer.observe(node)); return () => observer.disconnect(); }, []);
  useEffect(() => { document.body.style.overflow = activeWork ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [activeWork]);
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  const openWork = (work: Work) => { lastFocused.current = document.activeElement as HTMLElement; setActiveWork(work); };
  const scrollRail = (dir: number) => { const rail = railRef.current; if (!rail) return; rail.scrollBy({ left: dir * rail.clientWidth * 0.8, behavior: "smooth" }); };
  const [lead, ...rest] = works;

  const caseTile = (work: Work, size: "lg" | "md", tone: "dark" | "light") => <article key={work.id} className={`ap-tile ap-tile--${size} ap-tile--${tone}`} data-reveal>
    <button className="ap-tile-hit" onClick={() => openWork(work)} aria-label={`${work.title} 자세히 보기`} />
    <div className="ap-tile-copy">
      <p className="ap-eyebrow">{work.category.split(" / ")[0]}</p>
      <h3>{work.title}</h3>
      <p className="ap-tile-sub">{work.overview}</p>
      <dl className="ap-stats">{(caseStats[work.id] ?? []).map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      <span className="ap-link">자세히 보기</span>
    </div>
    <div className="ap-tile-media"><Thumb src={work.image} /></div>
  </article>;

  return <div className="ap">
    <header className="ap-nav">
      <div className="ap-nav-inner">
        <button className="ap-nav-brand" onClick={() => go("#top")}>김태완</button>
        <nav aria-label="주요 메뉴">
          <button onClick={() => go("#works")}>작업</button>
          <button onClick={() => go("#shorts")}>쇼츠</button>
          <button onClick={() => go("#about")}>소개</button>
          <button onClick={() => go("#contact")}>연락</button>
        </nav>
      </div>
    </header>

    <main id="top">
      {/* HERO */}
      <section className="ap-hero">
        <div className="ap-wrap ap-hero-copy">
          <p className="ap-hero-eyebrow">영상 PD 김태완</p>
          <h1>1,049만 회,<br />멈춰서 봤습니다.</h1>
          <p className="ap-hero-sub">대표 쇼츠 7편의 누적 조회수입니다. <br />3초 안에 붙잡는 영상을 기획부터 편집까지 혼자 만듭니다.</p>
          <div className="ap-hero-links">
            <button className="ap-btn" onClick={() => go("#works")}>작업 보기</button>
            <button className="ap-link ap-link--btn" onClick={() => go("#contact")}>연락하기</button>
          </div>
        </div>
        <div className="ap-wrap-wide">
          <button className="ap-hero-media" onClick={() => openWork(works[1])} aria-label="에셜론 W 자세히 보기">
            <Thumb src={works[1].image} />
            <span className="ap-hero-caption"><b>에셜론 W 제품 필름</b> 1분 28초 · 기획·촬영·편집 100%</span>
          </button>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="ap-numbers" data-reveal>
        <div className="ap-wrap">
          <h2 className="ap-headline">숫자로 보면. <span>2년 동안 혼자 만든 결과입니다.</span></h2>
          <dl className="ap-number-grid">
            <div><dd>505<small>편</small></dd><dt>몬스타㈜에서 기획·촬영·편집한<br />전체 콘텐츠</dt></div>
            <div><dd>2<small>년</small></dd><dt>기획·촬영·편집을<br />혼자 맡은 기간</dt></div>
            <div><dd>8<small>건+</small></dd><dt>케이스 영상 공개 후<br />확인된 주문</dt></div>
          </dl>
        </div>
      </section>

      {/* WORKS */}
      <section id="works" className="ap-section">
        <div className="ap-wrap">
          <h2 className="ap-headline" data-reveal>롱폼 영상. <span>설명 대신, 화면으로 설득합니다.</span></h2>
        </div>
        <div className="ap-wrap-wide ap-tiles">
          {caseTile(lead, "lg", "dark")}
          <div className="ap-tile-row">{rest.map((work, index) => caseTile(work, "md", index === 0 ? "light" : "dark"))}</div>
        </div>
      </section>

      {/* SHORTS */}
      <section id="shorts" className="ap-shorts">
        <div className="ap-wrap">
          <h2 className="ap-headline ap-headline--dark" data-reveal>쇼츠. <span>3초 안에 붙잡고, 끝까지 보게 만듭니다.</span></h2>
          <p className="ap-shorts-total" data-reveal><b>1,049만 회</b> 대표 쇼츠 7편 누적 조회수 · 2026년 8월 기준</p>
        </div>
        <div className="ap-rail" ref={railRef} data-reveal>
          {shorts.map((short) => <article key={short.id} className="ap-short">
            <div className="ap-short-media">{activeShort === short.id ? <YouTubeFrame videoId={short.videoId} title={`${short.title} 쇼츠`} /> : <button onClick={() => setActiveShort(short.id)} aria-label={`${short.title} 재생`}><img loading="lazy" decoding="async" src={`https://img.youtube.com/vi/${short.videoId}/hqdefault.jpg`} alt="" /><span className="ap-play" aria-hidden="true" /></button>}</div>
            <p className="ap-short-format">{short.format}</p>
            <h3>{short.title}</h3>
            <p className="ap-short-views">{short.views}{short.comments && ` · ${short.comments}`}</p>
          </article>)}
        </div>
        <div className="ap-wrap ap-rail-foot">
          <a className="ap-link ap-link--dark" href="https://www.youtube.com/@MONSTARPC/shorts" target="_blank" rel="noopener noreferrer">채널에서 쇼츠 더 보기</a>
          <div className="ap-rail-ctrl"><button onClick={() => scrollRail(-1)} aria-label="이전">‹</button><button onClick={() => scrollRail(1)} aria-label="다음">›</button></div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="ap-section ap-about">
        <div className="ap-wrap">
          <div className="ap-about-intro" data-reveal>
            <ProfilePhoto />
            <div>
              <h2 className="ap-headline">만든 사람. <span>공간에서 출발해, 영상의 순서를 짭니다.</span></h2>
              <p className="ap-about-body">시각디자인을 전공하고 해운대 모래축제, 센텀 열린음악회 같은 대형 행사에서 부스를 기획하고 운영했습니다. 하루 수만 명이 지나가는 자리에서 무엇을 먼저 보게 할지 설계하던 일이, 지금은 장면의 순서를 짜는 일이 되었습니다.</p>
            </div>
          </div>

          <div className="ap-specs" data-reveal>
            <h3 className="ap-specs-title">사양</h3>
            <dl>
              <div><dt>경력</dt><dd><p><b>몬스타㈜</b> 영상 PD · 영상디자이너<span>2024.07 – 2026.09</span></p><p className="ap-dim">브랜드 영상 전담. 기획·대본·촬영·편집 단독 진행, 유튜브·인스타그램·틱톡 운영.</p><p><b>렉킹볼 아티스트 커뮤니티</b> 전시·부스 기획 및 운영<span>2024.03 – 2024.07</span></p></dd></div>
              <div><dt>학력</dt><dd><p><b>경남정보대학교</b> 시각디자인학과<span>2025.02 졸업</span></p></dd></div>
              <div><dt>편집</dt><dd><p>Premiere Pro, After Effects, Photoshop, CapCut</p></dd></div>
              <div><dt>촬영</dt><dd><p>Sony A7C, A7AC · DJI Osmo Pocket</p><p className="ap-dim">FE 24mm F1.4 GM, FE 24-70mm F2.8 GM</p><p className="ap-dim">Nanlite Forza 60, 유쾌한생각 럭스64</p></dd></div>
              <div><dt>AI 보조</dt><dd><p>Claude, Gemini, NotebookLM</p><p className="ap-dim">레퍼런스를 찾고 기획 초안을 작성하는 데 씁니다. 초안은 빠르게, 최종 판단은 직접 내립니다.</p></dd></div>
            </dl>
          </div>

          <div className="ap-process" data-reveal>
            <h3 className="ap-specs-title">작업 방식</h3>
            <ol>{processSteps.map(([title, body], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><b>{title}</b><p>{body}</p></li>)}</ol>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="ap-contact" data-reveal>
        <div className="ap-wrap">
          <h2>다음 장면을<br />같이 만들어요.</h2>
          <p>기획 참여, 현장 촬영, 롱폼과 쇼츠 편집. 필요한 범위만 알려주세요.</p>
          <div className="ap-contact-links">
            <a className="ap-btn" href="mailto:xodhksmc@naver.com">메일 보내기</a>
            <a className="ap-link ap-link--btn" href="tel:01082520074">010-8252-0074</a>
          </div>
        </div>
      </section>
    </main>

    <footer className="ap-footer">
      <div className="ap-wrap">
        <p>xodhksmc@naver.com · 010-8252-0074 · <a href="https://www.youtube.com/@MONSTARPC" target="_blank" rel="noopener noreferrer">YouTube @MONSTARPC</a> · 부산</p>
        <p>© 2026 김태완. 영상 PD · 기획 · 촬영 · 편집</p>
      </div>
    </footer>
    {activeWork && <WorkDetail work={activeWork} onClose={() => { setActiveWork(null); requestAnimationFrame(() => lastFocused.current?.focus()); }} />}
  </div>;
}
