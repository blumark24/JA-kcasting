import React, { useEffect, useState } from 'react';
import {
  Award,
  Building2,
  Camera,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clapperboard,
  Filter,
  Menu,
  MessageCircle,
  Mic,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Tv,
  Users,
  X,
  Zap
} from 'lucide-react';

const WHATSAPP_NUMBER = '966533116166';
const whatsappUrl = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const MESSAGES = {
  talentReg: 'مرحباً، أرغب بالتسجيل كموهبة في منصة JA kcasting وتوثيق ملفي الخاص للفرص القادمة.',
  companyRequest: 'مرحباً، أبحث عن مواهب مناسبة لمشروع إعلاني أو إنتاجي قادم وأرغب بالتنسيق مع JA kcasting.',
  castingRequest: 'مرحباً، أريد إرسال طلب كاستنج واختيار مواهب مناسبة وفق مواصفات محددة لمشروعنا عبر JA kcasting.',
  generalConsult: 'مرحباً، أرغب بالتواصل مع إدارة JA kcasting للاستفسار عن خدمات التنسيق والكاستنج الفوري.',
  categoryConsult: (catName) => `مرحباً، أرغب بالاستفسار عن المواهب المتاحة أو التسجيل في قسم: ${catName}`
};

const categories = [
  {
    title: 'الممثلين والممثلات',
    icon: Clapperboard,
    color: 'text-[#D6A756]',
    description: 'كفاءات تمثيلية سعودية لتأدية الأدوار السينمائية والدرامية والمسلسلات التلفزيونية بجودة فنية استثنائية.',
    skills: ['تمثيل درامي وسينمائي محترف', 'تأدية الحوارات بلهجة محلية نقية', 'تعبيرات وجهية متقدمة']
  },
  {
    title: 'الوجوه الإعلانية',
    icon: Tv,
    color: 'text-[#00C2FF]',
    description: 'ملامح متميزة وحضور كاريزمي يلائم الحملات الترويجية والبراندات واللوحات الإعلانية.',
    skills: ['كاريزما أمام الكاميرا', 'تفاعل سريع مع توجيهات المخرج', 'مرونة في جلسات التصوير']
  },
  {
    title: 'المؤدين الصوتيين',
    icon: Mic,
    color: 'text-[#0EA5A1]',
    description: 'خامات صوتية فخمة ومخارج حروف سليمة تخدم الإعلانات والدبلجة والكتب الصوتية والرد الآلي.',
    skills: ['لهجات سعودية متعددة', 'نبرات رسمية وحماسية', 'مخارج حروف عربية سليمة']
  },
  {
    title: 'مودلز التصوير والأزياء',
    icon: Camera,
    color: 'text-[#1E5BFF]',
    description: 'عارضو أزياء ومنتجات ذوو خبرة لتلبية متطلبات جلسات التصوير للعلامات الراقية والبراندات الوطنية.',
    skills: ['عرض المنتجات والأزياء', 'حركة احترافية أمام العدسات', 'مظهر راق ومناسب للهوية']
  },
  {
    title: 'صناع المحتوى والمؤثرين',
    icon: Sparkles,
    color: 'text-[#D6A756]',
    description: 'صناع محتوى رقمي يمتلكون القدرة على تقديم أفكاركم وخدماتكم بأساليب تسويقية تفاعلية ومبتكرة.',
    skills: ['تحدث واثق ومقنع', 'ابتكار أفكار تسويقية', 'سرد قصصي رقمي']
  },
  {
    title: 'مقدمي الفعاليات والبرامج',
    icon: Users,
    color: 'text-[#00C2FF]',
    description: 'مقدمون ومقدمات بأسلوب حواري لبق لإدارة المؤتمرات والندوات وحفلات الإطلاق والفعاليات الرسمية.',
    skills: ['لباقة وبروتوكول', 'نبرة صوت قوية', 'ثقة على المسرح']
  }
];

const trustPoints = [
  ['مواهب سعودية موثقة', 'ندقق مهارات ولهجات المسجلين لضمان الاحترافية.'],
  ['تنسيق كاستنج منظم', 'نختصر وقتكم بعرض الوجوه المطابقة لمتطلباتكم.'],
  ['تواصل خاص وسري', 'الترشيحات والمراسلات تتم بسرية كاملة.'],
  ['ترشيح ذكي وسريع', 'مطابقة دقيقة حسب المدينة والعمر واللهجة ونوع الظهور.']
];

const faqs = [
  ['كيف أقوم بالتسجيل كموهبة؟', 'اضغط على زر التسجيل عبر واتساب، وسيقوم المنسق بالتواصل معك لتسجيل بياناتك الفنية الأساسية وإضافتك لقاعدة المواهب.'],
  ['كيف تطلب الشركات كاستنج؟', 'أرسل تفاصيل المشروع والمواصفات المطلوبة، وسنفرز قاعدة البيانات ونرشح الوجوه الأنسب بسرية وسرعة.'],
  ['هل توجد رسوم اشتراك شهرية؟', 'لا توجد اشتراكات شهرية أو رسوم خفية. يتم التعامل مع كل مشروع حسب احتياجه ونطاقه.'],
  ['ما المناطق التي تغطونها؟', 'نغطي مناطق المملكة العربية السعودية مع أولوية لتوفير مواهب قريبة من موقع التصوير.']
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-[#1E5BFF] via-[#00C2FF] to-[#D6A756] shadow-[0_0_20px_rgba(30,91,255,0.4)]">
        <span className="text-xl font-black tracking-widest text-white">JA</span>
      </div>
      <div className="text-right">
        <span className="block bg-gradient-to-l from-white via-slate-200 to-[#00C2FF] bg-clip-text text-xl font-black tracking-tight text-transparent sm:text-2xl">
          JA <span className="text-[#D6A756]">kcasting</span>
        </span>
        <span className="block text-[10px] font-bold uppercase tracking-widest text-[#D6A756]">Talent & Audition</span>
      </div>
    </div>
  );
}

function Cta({ href, children, icon: Icon = MessageCircle, variant = 'primary' }) {
  const classes = variant === 'dark'
    ? 'border border-slate-800 bg-[#0B1E33] hover:border-slate-700 hover:bg-[#122A47]'
    : 'bg-gradient-to-r from-[#1E5BFF] via-[#00C2FF] to-[#0EA5A1] shadow-[0_10px_25px_-5px_rgba(30,91,255,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(0,194,255,0.5)]';

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-3 rounded-xl px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${classes}`}>
      <Icon className="h-5 w-5 text-[#D6A756]" />
      <span>{children}</span>
    </a>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('talent');
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [projectType, setProjectType] = useState('commercial');
  const [targetAge, setTargetAge] = useState('25-35');
  const [targetDialect, setTargetDialect] = useState('saudi-najd');
  const [isMatching, setIsMatching] = useState(false);
  const [matchResult, setMatchResult] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;900&display=swap';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  useEffect(() => {
    setIsMatching(true);
    const timer = setTimeout(() => {
      let count = 14;
      let accuracy = '98.7%';
      if (projectType === 'movie') {
        count = 9;
        accuracy = '96.5%';
      }
      if (projectType === 'voiceover') {
        count = 22;
        accuracy = '99.2%';
      }
      setMatchResult({ count, accuracy });
      setIsMatching(false);
    }, 650);
    return () => clearTimeout(timer);
  }, [projectType, targetAge, targetDialect]);

  const selected = categories[selectedCategory];
  const SelectedIcon = selected.icon;
  const navLinks = [
    ['#hero', 'الرئيسية'],
    ['#categories', 'أقسام المواهب'],
    ['#for-talents', 'للمواهب'],
    ['#for-companies', 'للشركات'],
    ['#how-it-works', 'كيف نعمل'],
    ['#matching', 'الترشيح الذكي']
  ];

  return (
    <div dir="rtl" className="min-h-screen overflow-x-hidden bg-[#07111F] font-['Tajawal',sans-serif] text-white selection:bg-[#00C2FF] selection:text-[#07111F]">
      <header className="sticky top-0 z-50 border-b border-[#1E5BFF]/10 bg-[#07111F]/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Logo />
            <nav className="hidden items-center gap-8 text-sm font-medium text-[#AAB6C5] md:flex">
              {navLinks.map(([href, label]) => <a key={href} href={href} className="transition-colors hover:text-white">{label}</a>)}
            </nav>
            <a href={whatsappUrl(MESSAGES.generalConsult)} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-[#1E5BFF] to-[#00C2FF] px-6 py-2.5 text-sm font-bold text-white transition-all hover:scale-105 md:inline-flex">
              <MessageCircle className="h-4 w-4 text-[#D6A756]" />
              تواصل مخصص عبر واتساب
            </a>
            <button onClick={() => setMobileMenuOpen((value) => !value)} className="rounded-lg p-2 text-[#AAB6C5] hover:bg-[#0B1E33] hover:text-white md:hidden" aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="animate-fadeIn border-b border-[#1E5BFF]/10 bg-[#0B1E33] px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map(([href, label]) => <a key={href} href={href} onClick={() => setMobileMenuOpen(false)} className="py-1.5 text-right text-base font-medium text-[#AAB6C5] hover:text-white">{label}</a>)}
              <Cta href={whatsappUrl(MESSAGES.generalConsult)}>تواصل مخصص عبر واتساب</Cta>
            </div>
          </div>
        )}
      </header>

      <section id="hero" className="relative overflow-hidden border-b border-[#1E5BFF]/10 py-12 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(30,91,255,0.18),transparent_50%)]" />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="space-y-8 text-right lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-800 bg-[#0B1E33] px-4 py-2 text-xs font-semibold text-[#D6A756] sm:text-sm">
              <Sparkles className="h-4 w-4 animate-pulse" />
              منصة سعودية ذكية لاكتشاف المواهب والكاستنج الفوري الموثوق
            </div>
            <h1 className="text-4xl font-black leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-6xl">
              موهبتك تستحق الظهور… <br />
              <span className="bg-gradient-to-l from-white via-[#00C2FF] to-[#1E5BFF] bg-clip-text text-transparent">وفرصتك الحقيقية تبدأ هنا</span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-[#AAB6C5] sm:text-lg md:text-xl">
              يربط JA kcasting المواهب الإبداعية بشركات الإنتاج ووكالات الإعلان والبراندات الباحثة عن وجوه مميزة وأداء احترافي في المملكة العربية السعودية.
            </p>
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Cta href={whatsappUrl(MESSAGES.talentReg)}>سجّل كموهبة الآن</Cta>
              <Cta href={whatsappUrl(MESSAGES.companyRequest)} variant="dark" icon={Search}>أبحث عن موهبة لمشروعي</Cta>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 text-xs text-slate-400 md:text-sm">
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[#0EA5A1]" /> تواصل خاص وسري ومحمي بالكامل</span>
              <span className="flex items-center gap-1.5"><Award className="h-4 w-4 text-[#D6A756]" /> فرز وترشيح احترافي يطابق ميزانيتك</span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="space-y-6 rounded-2xl border border-slate-800 bg-[#0B1E33]/90 p-6 shadow-2xl">
              <div className="flex items-center gap-4 rounded-xl border border-[#1E5BFF]/25 bg-[#07111F]/80 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#D6A756] bg-[#1E5BFF]/10"><Users className="h-6 w-6 text-[#D6A756]" /></div>
                <div className="min-w-0 flex-1 text-right">
                  <div className="flex items-center justify-between gap-3"><h4 className="truncate text-sm font-bold text-white">موهبة تمثيلية سعودية</h4><span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400">نشط</span></div>
                  <p className="mt-1 text-xs text-slate-400">الرياض • لهجة نجدية • العمر ٢٦ سنة</p>
                </div>
              </div>
              <div className="space-y-3 rounded-xl border border-slate-800 bg-[#07111F]/80 p-4 text-right">
                <span className="flex items-center gap-1.5 text-xs font-bold text-[#00C2FF]"><Filter className="h-3.5 w-3.5" /> كاستنج نشط قيد التنسيق</span>
                <p className="text-xs font-medium leading-relaxed text-white">مطلوب وجه إعلاني بملامح حيوية لتمثيل براند قهوة سعودية مختصة بالرياض وجدة.</p>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-[#00C2FF]/20 bg-gradient-to-r from-[#1E5BFF]/10 to-[#0EA5A1]/10 p-3">
                <span className="text-xs text-slate-300">دقة المطابقة والترشيح الفوري:</span><span className="rounded bg-[#00C2FF]/10 px-2 py-1 text-xs font-bold text-[#00C2FF]">98.9%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#1E5BFF]/10 bg-[#0B1E33] py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map(([title, desc]) => <div key={title} className="flex gap-4 rounded-xl p-4 hover:bg-[#07111F]/50"><CheckCircle2 className="h-6 w-6 flex-shrink-0 text-[#0EA5A1]" /><div className="text-right"><h3 className="mb-1 text-sm font-bold text-white">{title}</h3><p className="text-xs leading-relaxed text-[#AAB6C5]">{desc}</p></div></div>)}
        </div>
      </section>

      <section id="categories" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
            <span className="rounded-full bg-[#00C2FF]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#00C2FF]">تنوع واحترافية فائقة</span>
            <h2 className="text-3xl font-black text-white sm:text-4xl">تصنيفات مواهب تغطي كافة الاحتياجات الإبداعية</h2>
            <p className="text-[#AAB6C5]">نفرز وننظم قاعدة واسعة من الوجوه السعودية المميزة لتلائم أفكار حملاتكم وإعلاناتكم.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="space-y-3 md:col-span-4">
              {categories.map((cat, index) => {
                const Icon = cat.icon;
                return <button key={cat.title} onClick={() => setSelectedCategory(index)} className={`flex w-full items-center justify-between rounded-xl border p-4 text-right transition-all ${selectedCategory === index ? 'border-transparent bg-gradient-to-l from-[#1E5BFF] to-[#00C2FF] text-white shadow-lg' : 'border-slate-800 bg-[#0B1E33] text-[#AAB6C5] hover:text-white'}`}><span className="flex items-center gap-3"><Icon className={`h-6 w-6 ${selectedCategory === index ? 'text-white' : cat.color}`} /><span className="font-bold">{cat.title}</span></span></button>;
              })}
            </div>
            <div className="flex min-h-[400px] flex-col justify-between rounded-2xl border border-slate-800 bg-[#0B1E33]/80 p-6 shadow-xl sm:p-8 md:col-span-8">
              <div className="space-y-6 text-right">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4"><SelectedIcon className={`h-10 w-10 ${selected.color}`} /><div><h3 className="text-2xl font-black text-white">{selected.title}</h3><p className="text-xs font-semibold text-[#00C2FF]">تنسيق متاح ونشط فوراً • مهارات موثقة</p></div></div>
                <p className="text-lg leading-relaxed text-[#AAB6C5]">{selected.description}</p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">{selected.skills.map((skill) => <div key={skill} className="flex items-center gap-2.5 rounded-lg border border-slate-800 bg-[#07111F]/50 p-2.5 text-sm text-slate-300"><CheckCircle2 className="h-4 w-4 text-[#0EA5A1]" />{skill}</div>)}</div>
              </div>
              <a href={whatsappUrl(MESSAGES.categoryConsult(selected.title))} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl border border-[#1E5BFF]/30 bg-[#07111F] px-6 py-3 text-sm font-bold text-white hover:bg-[#1E5BFF]"><MessageCircle className="h-4 w-4 text-[#00C2FF]" /> تواصل خاص لهذا القسم</a>
            </div>
          </div>
        </div>
      </section>

      <section id="matching" className="border-y border-slate-800 bg-[#0B1E33]/30 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="space-y-6 text-right lg:col-span-6"><div className="inline-flex items-center gap-2 rounded-full border border-[#1E5BFF]/20 bg-[#1E5BFF]/10 px-3 py-1 text-xs font-semibold text-[#00C2FF]"><Zap className="h-3.5 w-3.5" /> فرز وتصفية الكاستنج فورياً</div><h2 className="text-3xl font-black text-white sm:text-4xl">ترشيح فوري يطابق متطلبات مشروعكم الإعلاني</h2><p className="text-lg leading-relaxed text-[#AAB6C5]">نطابق الفئة العمرية والنطاق الجغرافي واللهجات ونوع الظهور لتوفير أفضل الخيارات وحفظ وقتكم.</p></div>
          <div className="rounded-2xl border border-slate-700/60 bg-[#0B1E33] p-6 text-right shadow-xl sm:p-8 lg:col-span-6">
            <h3 className="mb-6 flex items-center justify-between border-b border-slate-800 pb-3 text-lg font-bold text-white"><span>محاكي المطابقة الفورية</span><span className="text-xs text-[#00C2FF]">Casting Simulator</span></h3>
            {[
              ['نوع المشروع:', projectType, setProjectType, [['commercial', 'إعلان تجاري'], ['movie', 'عمل درامي'], ['voiceover', 'أداء صوتي']]],
              ['الفئة العمرية:', targetAge, setTargetAge, [['18-24', '١٨ - ٢٤'], ['25-35', '٢٥ - ٣٥'], ['36+', 'أكبر من ٣٦']]],
              ['اللهجة:', targetDialect, setTargetDialect, [['saudi-najd', 'نجدية'], ['saudi-hijaz', 'حجازية'], ['saudi-janub', 'جنوبية']]]
            ].map(([label, value, setter, items]) => <div key={label} className="mb-5"><label className="mb-2 block text-xs font-bold text-slate-400">{label}</label><div className="grid grid-cols-3 gap-2">{items.map(([id, itemLabel]) => <button key={id} onClick={() => setter(id)} className={`rounded-lg border px-3 py-2 text-xs font-bold transition-all ${value === id ? 'border-transparent bg-[#00C2FF] text-[#07111F]' : 'border-slate-800 bg-[#07111F] text-slate-400 hover:text-white'}`}>{itemLabel}</button>)}</div></div>)}
            <div className="mt-6 rounded-xl border border-[#1E5BFF]/20 bg-[#07111F] p-4 text-right">{isMatching ? <p className="text-center text-xs text-slate-400">جاري تصفية قاعدة مواهب JA kcasting...</p> : <div className="flex items-center justify-between"><span className="text-xs text-slate-400">المواهب المطابقة:</span><span className="rounded-full bg-[#00C2FF]/10 px-2.5 py-0.5 text-sm font-black text-[#00C2FF]">{matchResult?.count} بروفايل • {matchResult?.accuracy}</span></div>}</div>
            <a href={whatsappUrl(MESSAGES.castingRequest)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1E5BFF] px-6 py-3.5 text-sm font-black text-white hover:bg-[#00C2FF] hover:text-[#07111F]"><MessageCircle className="h-4 w-4" /> اطلب ترشيح هذه المواهب فوراً</a>
          </div>
        </div>
      </section>

      <section id="for-talents" className="border-y border-[#1E5BFF]/10 bg-[#0B1E33]/40 py-20">
        <div id="for-companies" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex justify-center"><div className="flex rounded-xl border border-slate-800 bg-[#0B1E33] p-1.5"><button onClick={() => setActiveTab('talent')} className={`rounded-lg px-5 py-2.5 text-sm font-bold ${activeTab === 'talent' ? 'bg-gradient-to-r from-[#1E5BFF] to-[#00C2FF] text-white' : 'text-[#AAB6C5]'}`}>بوابة المواهب</button><button onClick={() => setActiveTab('company')} className={`rounded-lg px-5 py-2.5 text-sm font-bold ${activeTab === 'company' ? 'bg-gradient-to-r from-[#1E5BFF] to-[#00C2FF] text-white' : 'text-[#AAB6C5]'}`}>بوابة الشركات</button></div></div>
          <div className="grid grid-cols-1 items-center gap-12 text-right lg:grid-cols-12"><div className="space-y-6 lg:col-span-7"><h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">{activeTab === 'talent' ? 'ابنِ حضورك الاحترافي ودع فرص الكاستنج تبحث عنك!' : 'اختصر فوضى البحث العشوائي والوجوه غير المجهزة'}</h2><p className="text-lg leading-relaxed text-[#AAB6C5]">{activeTab === 'talent' ? 'أظهر موهبتك ومؤهلاتك الفنية بشكل منظم، واستقبل الترشيحات المناسبة لمواصفاتك وخبراتك.' : 'أرسل تفاصيل الـ Brief الخاص بطلبك الفني وسيقوم خبراؤنا بتزويدك بقائمة مطابقة للمواصفات المطلوبة.'}</p><Cta href={whatsappUrl(activeTab === 'talent' ? MESSAGES.talentReg : MESSAGES.castingRequest)} icon={activeTab === 'talent' ? MessageCircle : Send}>{activeTab === 'talent' ? 'سجّل كموهبة الآن عبر واتساب' : 'أرسل طلب كاستنج عبر واتساب'}</Cta></div><div className="lg:col-span-5"><div className="rounded-2xl border border-slate-800 bg-[#0B1E33] p-6"><div className="flex aspect-[4/3] flex-col items-center justify-center rounded-xl border border-slate-800 bg-slate-900 p-6 text-center"><span className="text-4xl font-black text-[#00C2FF]">JA</span><p className="mt-3 text-sm font-bold text-white">JA Verified</p><p className="mt-1 text-xs text-slate-400">ترشيح خاص وسري ومحمي</p></div></div></div></div>
        </div>
      </section>

      <section id="how-it-works" className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mx-auto mb-16 max-w-3xl space-y-4 text-center"><h2 className="text-3xl font-black text-white sm:text-4xl">كيف نعمل في JA kcasting؟</h2><p className="text-[#AAB6C5]">آلية عمل بسيطة، سريعة، وموثوقة تضمن أفضل تنسيق وتواصل خاص وآمن.</p></div><div className="grid grid-cols-1 gap-8 lg:grid-cols-3">{['إرسال البيانات أو Brief المشروع', 'فرز وتدقيق المواهب المطابقة', 'تأكيد الاختيار وبدء التنسيق'].map((step, index) => <div key={step} className="rounded-2xl border border-slate-800 bg-[#0B1E33]/60 p-6 text-right"><span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-[#1E5BFF] to-[#00C2FF] font-black">{index + 1}</span><h3 className="mb-2 text-lg font-bold text-white">{step}</h3><p className="text-sm leading-relaxed text-slate-400">يتولى فريق JA kcasting تنسيق هذه المرحلة بوضوح وخصوصية لضمان تجربة احترافية للطرفين.</p></div>)}</div></div></section>

      <section className="border-t border-slate-800 py-20"><div className="mx-auto max-w-4xl px-4 text-right sm:px-6 lg:px-8"><div className="mb-12 space-y-4 text-center"><h2 className="text-2xl font-black text-white sm:text-3xl">الأسئلة الأكثر شيوعاً</h2><p className="text-slate-400">إجابات مباشرة لتسهيل فهم آلية الكاستنج والتنسيق.</p></div><div className="space-y-4">{faqs.map(([q, a], idx) => <div key={q} className="overflow-hidden rounded-xl border border-slate-800 bg-[#0B1E33]"><button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="flex w-full items-center justify-between p-5 text-right font-bold text-white hover:bg-slate-800/40"><span>{q}</span>{openFaq === idx ? <ChevronUp className="h-5 w-5 text-[#00C2FF]" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}</button>{openFaq === idx && <div className="animate-slideDown border-t border-slate-800 bg-[#07111F]/50 p-5 text-sm leading-relaxed text-slate-300">{a}</div>}</div>)}</div></div></section>

      <section className="border-t border-[#1E5BFF]/10 bg-gradient-to-t from-[#0B1E33] to-[#07111F] py-20 text-center"><div className="mx-auto max-w-4xl space-y-8 px-4"><h2 className="text-3xl font-black text-white sm:text-5xl">مستعد لتبدأ رحلتك التنسيقية معنا؟</h2><p className="mx-auto max-w-2xl text-[#AAB6C5]">راسلنا الآن عبر الواتساب لتوجيه طلبك للمسار الصحيح: تسجيل موهبتك أو إرسال Brief للبحث والفلترة.</p><div className="flex flex-col items-center justify-center gap-4 sm:flex-row"><Cta href={whatsappUrl(MESSAGES.talentReg)}>سجّل كموهبة الآن</Cta><Cta href={whatsappUrl(MESSAGES.castingRequest)} variant="dark" icon={Send}>أرسل طلب كاستنج خاص</Cta></div></div></section>

      <footer className="border-t border-slate-900 bg-[#07111F] py-12 text-slate-400"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8"><Logo /><p className="max-w-xl text-right text-sm">وكالتكم الرقمية لاختيار وتصفية أفضل الكوادر والوجوه والأداء الصوتي الاحترافي بما يتلاءم مع مشاريعكم الفنية والتسويقية في المملكة.</p><a href={whatsappUrl(MESSAGES.generalConsult)} className="text-right text-lg font-black text-[#00C2FF] hover:underline">0533116166</a><p className="text-xs text-slate-500">© 2026 JA kcasting. جميع الحقوق محفوظة.</p></div></footer>

      <div className="fixed bottom-6 left-6 z-50"><a href={whatsappUrl(MESSAGES.generalConsult)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-3 text-sm font-extrabold text-white shadow-[0_4px_20px_rgba(16,185,129,0.4)] transition-all hover:scale-105"><MessageCircle className="h-5 w-5" /> تواصل خاص</a></div>
    </div>
  );
}
