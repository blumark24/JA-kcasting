import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  CheckCircle2, 
  Search, 
  Users, 
  Building2, 
  Sparkles, 
  ArrowLeft, 
  Volume2, 
  Video, 
  Camera, 
  Menu, 
  X, 
  ChevronDown, 
  ChevronUp, 
  Award, 
  Zap, 
  ShieldCheck,
  Tv,
  Mic,
  Clapperboard,
  Filter,
  ArrowUpRight,
  Send,
  Star,
  Play
} from 'lucide-react';

const WHATSAPP_NUMBER = "966533116166";

// Helper to generate custom Whatsapp URL for private conversions
const whatsappUrl = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

// Message Templates for deep customization & high conversion
const MESSAGES = {
  talentReg: "مرحباً، أرغب بالتسجيل كموهبة في منصة JA kcasting وتوثيق ملفي الخاص للفرص القادمة.",
  companyRequest: "مرحباً، أبحث عن مواهب مناسبة لمشروع إعلاني أو إنتاجي قادم وأرغب بالتنسيق مع JA kcasting.",
  castingRequest: "مرحباً، أريد إرسال طلب كاستنج واختيار مواهب مناسبة وفق مواصفات محددة لمشروعنا عبر JA kcasting.",
  generalConsult: "مرحباً، أرغب بالتواصل مع إدارة JA kcasting للاستفسار عن خدمات التنسيق والكاستنج الفوري.",
  talentCategory: (category) => `مرحباً، أنا مهتم بالتسجيل كموهبة في قسم (${category}) عبر منصة JA kcasting أو الاستفسار عن ترشيحات هذا القسم.`
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('talent'); // 'talent' or 'company' for Split Guide Section
  const [selectedCategory, setSelectedCategory] = useState(0);
  
  // Interactive Live Matching Simulator States
  const [projectType, setProjectType] = useState('commercial');
  const [targetAge, setTargetAge] = useState('25-35');
  const [targetDialect, setTargetDialect] = useState('saudi-najd');
  const [isMatching, setIsMatching] = useState(false);
  const [matchResult, setMatchResult] = useState(null);

  // FAQ state
  const [openFaq, setOpenFaq] = useState(null);

  const runSimulator = () => {
    setIsMatching(true);
    setMatchResult(null);
    setTimeout(() => {
      setIsMatching(false);
      let count = 14;
      let accuracy = "98.7%";
      if (projectType === 'movie') { count = 9; accuracy = "96.5%"; }
      if (projectType === 'voiceover') { count = 22; accuracy = "99.2%"; }
      
      setMatchResult({
        count: count,
        accuracy: accuracy,
        status: "وجوه جاهزة ومتاحة فوراً للتنسيق والتعاقد الخاص"
      });
    }, 1100);
  };

  useEffect(() => {
    runSimulator();
  }, [projectType, targetAge, targetDialect]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categories = [
    {
      id: 0,
      title: "الممثلين والممثلات",
      icon: <Clapperboard className="w-6 h-6 text-[#D6A756]" />,
      description: "وجوه احترافية وكفاءات سعودية لتأدية الأدوار السينمائية، الدرامية والمسلسلات بجودة تمثيلية استثنائية.",
      skills: ["تمثيل سينمائي", "أدوار درامية مركبة", "حفظ وتأدية الحوارات وسرعة البديهة", "تعبيرات وجهية متقدمة للتصوير"]
    },
    {
      id: 1,
      title: "الوجوه الإعلانية (Commercial Cast)",
      icon: <Tv className="w-6 h-6 text-[#00C2FF]" />,
      description: "ملامح متميزة وحضور كاريزمي ساحر يلائم الحملات الترويجية الكبرى، لوحات الشوارع، والبراندات المحلية والعالمية.",
      skills: ["كاريزما أمام الكاميرا", "تصوير تجاري سريع", "مرونة عالية في توجيهات المخرج", "حضور يعكس الهوية المحلية"]
    },
    {
      id: 2,
      title: "المؤدين الصوتيين (Voiceover)",
      icon: <Mic className="w-6 h-6 text-[#0EA5A1]" />,
      description: "خامات صوتية فخمة ومخارج حروف سليمة تخدم الكتب الصوتية، الإعلانات، الدبلجة، ومختلف اللهجات المحلية بذكاء.",
      skills: ["لهجة سعودية نجدية/حجازية/بيضاء", "نبرات حماسية وإقناعية ورسمية", "مخارج حروف عربية سليمة"]
    },
    {
      id: 3,
      title: "مودلز التصوير والأزياء",
      icon: <Camera className="w-6 h-6 text-[#1E5BFF]" />,
      description: "عارضو أزياء ومنتجات ذوو خبرة في وضعيات التصوير الاحترافي لخدمة المتاجر الإلكترونية وكتالوجات الموضة الراقية.",
      skills: ["عرض أزياء تراثية وعصرية", "جلسات تصوير خارجية وداخلية", "تناسق رائع ومظهر احترافي مميز"]
    },
    {
      id: 4,
      title: "صناع المحتوى والمؤثرين",
      icon: <Sparkles className="w-6 h-6 text-[#D6A756]" />,
      description: "صناع محتوى رقمي يمتلكون قاعدة جماهيرية وتأثير لتقديم منتجاتكم وخدماتكم بطرق مبتكرة وحديثة.",
      skills: ["التحدث بثقة أمام الكاميرا", "سرد قصصي تفاعلي مشوق", "ابتكار أفكار تسويقية مبتكرة"]
    },
    {
      id: 5,
      title: "مقدمي الفعاليات والبرامج",
      icon: <Users className="w-6 h-6 text-[#00C2FF]" />,
      description: "مقدمون ومقدمات بأسلوب حواري لبق للغاية لإدارة المؤتمرات والندوات وحفلات الإطلاق والفعاليات الرسمية والترفيهية.",
      skills: ["إدارة الحضور والارتجال الذكي", "نبرة صوت جهورية ولباقة عالية", "ثقة مطلقة على خشبة المسرح"]
    },
    {
      id: 6,
      title: "الكومبارس والمجموعات",
      icon: <Users className="w-6 h-6 text-gray-400" />,
      description: "مجاميع وخلفيات للمشاهد الكبرى والمسلسلات والفعاليات الجماهيرية لتوفير واقعية مذهلة لكافة أعمالكم.",
      skills: ["تنفيذ توجيهات الإخراج بدقة", "انضباط كامل في مواعيد التصوير", "ملامح وخلفيات متنوعة ومتعددة الأعمار"]
    }
  ];

  const trustPoints = [
    { title: "مواهب إعلانية موثقة", desc: "ندقق ونفحص مهارات ولهجات المسجلين لضمان المصداقية التامة." },
    { title: "تنسيق كاستنج منظم", desc: "نختصر الوقت والجهد بعرض الوجوه المطابقة لمتطلباتكم بدقة متناهية." },
    { title: "تواصل خاص وسري", desc: "لا توجد بيانات عامة مكشوفة، كل المراسلات والترشيحات تتم بسرية تامة." },
    { title: "ترشيح ذكي وسريع", desc: "نطابق متطلبات مشروعكم مع الموهبة الملائمة جغرافياً وعمرياً ولهجة." }
  ];

  const faqs = [
    { q: "كيف أقوم بالتسجيل كموهبة في JA kcasting؟", a: "التسجيل آمن، سري، ومجاني بالكامل. اضغط على زر 'سجّل كموهبة عبر واتساب' وسيقوم المنسق الخاص بنا بالتواصل معك وطلب صورك وتفاصيل مهاراتك وعينات أعمالك لتسجيلك فوراً في قاعدة البيانات الخاصة بالمنصة." },
    { q: "أنا شركة إنتاج أو وكالة إعلانية، كيف أطلب كاستنج؟", a: "بكل سهولة! اضغط على 'أرسل طلب كاستنج'، أرسل لنا تفاصيل ومواصفات الموهبة المطلوبة (العمر، الجنس، المدينة، اللهجة، ونوع الظهور)، وسنقوم فوراً بالبحث والفلترة في قاعدة بياناتنا السرية وترشيح الوجوه الأنسب لمشروعكم لتختاروا منها." },
    { q: "هل هناك أي رسوم اشتراك شهرية؟", a: "لا، منصة JA kcasting لا تعتمد على نظام الاشتراكات الشهرية أو الرسوم المخفية. نحن نركز على الوساطة الاحترافية، وتوفير كاستنج منظم وتنسيق خاص فائق الجودة لكل مشروع على حدة لضمان النتائج الممتازة." },
    { q: "ما هي المناطق الجغرافية التي تغطونها؟", a: "نحن نغطي كافة مناطق المملكة العربية السعودية بشكل رئيسي (الرياض، جدة، المنطقة الشرقية، مكة المكرمة، المدينة المنورة، وباقي المدن والمحافظات) لضمان توفير مواهب محلية قريبة من موقع التصوير لتقليل تكاليف النقل والخدمات." }
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-[#07111F] text-white font-sans selection:bg-[#00C2FF] selection:text-[#07111F] overflow-x-hidden">
      
      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#07111F]/90 backdrop-blur-md border-b border-[#1E5BFF]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Elegant JA kcasting Logo Block */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#1E5BFF] via-[#00C2FF] to-[#D6A756] flex items-center justify-center shadow-[0_0_20px_rgba(30,91,255,0.4)] relative overflow-hidden group">
                <span className="text-xl font-black text-white tracking-widest relative z-10">JA</span>
                <span className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-l from-white via-slate-200 to-[#00C2FF] bg-clip-text text-transparent">
                  JA kcasting
                </span>
                <span className="text-[#D6A756] text-[10px] block font-bold tracking-widest uppercase">
                  TALENT & AUDITION
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#AAB6C5]">
              <a href="#hero" className="hover:text-white transition-colors duration-200">الرئيسية</a>
              <a href="#categories" className="hover:text-white transition-colors duration-200">أقسام المواهب</a>
              <a href="#for-talents" className="hover:text-white transition-colors duration-200">للمواهب</a>
              <a href="#for-companies" className="hover:text-white transition-colors duration-200">للشركات</a>
              <a href="#how-it-works" className="hover:text-white transition-colors duration-200">كيف نعمل</a>
              <a href="#matching" className="hover:text-white transition-colors duration-200">الترشيح الذكي</a>
            </nav>

            {/* Main Premium CTA */}
            <div className="hidden md:flex items-center">
              <a 
                href={whatsappUrl(MESSAGES.generalConsult)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1E5BFF] to-[#00C2FF] text-white text-sm font-bold hover:shadow-[0_0_20px_rgba(0,194,255,0.4)] hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-[#D6A756]" />
                <span>تواصل مخصص عبر واتساب</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-[#AAB6C5] hover:text-white hover:bg-[#0B1E33] focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B1E33] border-b border-[#1E5BFF]/10 py-5 px-6 animate-fadeIn">
            <div className="flex flex-col gap-4">
              <a 
                href="#hero" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#AAB6C5] hover:text-white py-1.5 text-base font-medium"
              >
                الرئيسية
              </a>
              <a 
                href="#categories" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#AAB6C5] hover:text-white py-1.5 text-base font-medium"
              >
                أقسام المواهب
              </a>
              <a 
                href="#for-talents" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#AAB6C5] hover:text-white py-1.5 text-base font-medium"
              >
                للمواهب
              </a>
              <a 
                href="#for-companies" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#AAB6C5] hover:text-white py-1.5 text-base font-medium"
              >
                للشركات
              </a>
              <a 
                href="#how-it-works" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#AAB6C5] hover:text-white py-1.5 text-base font-medium"
              >
                كيف نعمل
              </a>
              <div className="h-[1px] bg-slate-800 my-2"></div>
              <a 
                href={whatsappUrl(MESSAGES.generalConsult)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#1E5BFF] to-[#00C2FF] text-white text-base font-bold"
              >
                <MessageCircle className="w-5 h-5" />
                <span>تواصل مخصص عبر واتساب</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      {}
      <section id="hero" className="relative py-12 md:py-24 overflow-hidden border-b border-[#1E5BFF]/10">
        {/* Glowing visual indicators and stage lights background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(30,91,255,0.18),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00C2FF]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#D6A756]/5 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Right-aligned text content in Arabic */}
            <div className="lg:col-span-7 space-y-8 text-right">
              
              {/* Premium Verification Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0B1E33] border border-[#1E5BFF]/30 text-xs sm:text-sm font-semibold text-[#00C2FF]">
                <Sparkles className="w-4 h-4 text-[#D6A756] animate-pulse" />
                <span>منصة سعودية ذكية لاكتشاف المواهب والكاستنج الفوري</span>
              </div>

              {/* Massive Cinematic Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.2] lg:leading-[1.15]">
                موهبتك تستحق الظهور… <br/>
                <span className="bg-gradient-to-l from-white via-[#00C2FF] to-[#1E5BFF] bg-clip-text text-transparent">
                  وفرصتك الحقيقية تبدأ معنا
                </span>
              </h1>

              {/* Saudi Market Oriented Subheadline */}
              <p className="text-base sm:text-lg md:text-xl text-[#AAB6C5] font-normal leading-relaxed max-w-2xl">
                برؤية احترافية تامة، تقوم <strong className="text-white">JA kcasting</strong> بربط المواهب الإبداعية الفذة بشركات الإنتاج السينمائي والدرامي، وكالات الإعلان، والبراندات الرائدة الباحثة عن وجوه محلية مميزة لتصوير الإعلانات، المسلسلات، الحملات التجارية، والفعاليات في المملكة العربية السعودية.
              </p>

              {/* High-converting CTAs targeting different segments directly through WhatsApp */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a 
                  href={whatsappUrl(MESSAGES.talentReg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#1E5BFF] via-[#00C2FF] to-[#0EA5A1] text-white text-base font-bold shadow-[0_10px_25px_-5px_rgba(30,91,255,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(0,194,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 text-[#D6A756]" />
                  <span>سجّل كموهبة الآن</span>
                </a>
                
                <a 
                  href={whatsappUrl(MESSAGES.companyRequest)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0B1E33] hover:bg-[#122A47] text-white text-base font-bold border border-[#1E5BFF]/20 hover:border-[#00C2FF]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <Search className="w-5 h-5 text-[#D6A756]" />
                  <span>أبحث عن موهبة لمشروعي</span>
                </a>
              </div>

              {/* Minimal Trust Indicator with Local Saudi Tone */}
              <div className="pt-6 flex flex-wrap gap-x-6 gap-y-3 items-center text-xs md:text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0EA5A1]" /> تواصل خاص وسري ومحمي بالكامل
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700 hidden sm:inline-block"></span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#D6A756]" /> ترشيح احترافي منسق ومطابق بدقة
                </span>
              </div>

            </div>

            {/* Left Side: Cinematic Mock Composition of JA kcasting Ecosystem */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[400px] lg:max-w-none">
                
                {/* Glowing Background Glows */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1E5BFF]/20 to-[#00C2FF]/10 rounded-3xl filter blur-xl transform -rotate-3 scale-105"></div>
                
                {/* Premium Glassmorphic Card Mock */}
                <div className="relative bg-[#0B1E33]/90 border border-slate-700/50 rounded-2xl p-6 shadow-2xl space-y-6">
                  
                  {/* Verified Actor Mock Card */}
                  <div className="bg-[#07111F]/80 border border-[#1E5BFF]/25 rounded-xl p-4 flex items-center gap-4 shadow-lg hover:border-[#00C2FF]/40 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-[#1E5BFF]/10 flex-shrink-0 flex items-center justify-center border-2 border-[#D6A756] relative overflow-hidden">
                      <Users className="w-6 h-6 text-[#D6A756]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-white truncate">موهبة تمثيلية (سعودي)</h4>
                        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">موثق</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">الرياض • لهجة نجدية • العمر ٢٧</p>
                      <div className="flex gap-2 mt-2">
                        <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">سينما ودراما</span>
                        <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">إعلانات تجارية</span>
                      </div>
                    </div>
                  </div>

                  {/* Active Casting Request widget */}
                  <div className="bg-[#07111F]/80 border border-slate-700 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#00C2FF] font-bold flex items-center gap-1.5">
                        <Filter className="w-3.5 h-3.5" /> طلب كاستنج جاري الآن
                      </span>
                      <span className="text-[10px] text-slate-400 font-semibold">بث حي</span>
                    </div>
                    <p className="text-xs text-white font-medium leading-relaxed">
                      مطلوب وجه إعلاني بملامح حيوية كاريزمية لتصوير حملة وطنية كبرى بمدينة جدة.
                    </p>
                    <div className="flex items-center justify-between pt-2.5 border-t border-slate-800 text-[11px]">
                      <span className="text-slate-400">الفئة: <strong className="text-[#D6A756]">وجوه إعلانية</strong></span>
                      <span className="text-slate-400">العدد المطلوب: <strong className="text-white">٥ مواهب</strong></span>
                    </div>
                  </div>

                  {/* Trust Badge block */}
                  <div className="bg-gradient-to-r from-[#1E5BFF]/10 to-[#0EA5A1]/10 border border-[#00C2FF]/20 rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#00C2FF] animate-ping"></div>
                      <span className="text-xs text-slate-300">معدل دقة المطابقة الفورية والفلترة:</span>
                    </div>
                    <span className="text-xs font-bold text-[#00C2FF] bg-[#00C2FF]/10 px-2 py-1 rounded">98.9%</span>
                  </div>

                </div>

                {/* Absolutes orbiting the design */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-tr from-[#D6A756] to-yellow-500 text-[#07111F] text-xs font-black px-4 py-2 rounded-lg shadow-xl transform rotate-3 flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  <span>تنسيق خاص وبسرية كاملة</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST / POSITIONING STRIP */}
      {}
      <section className="bg-[#0B1E33] py-8 border-b border-[#1E5BFF]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-[#07111F]/50 transition-colors duration-200">
                <div className="w-10 h-10 rounded-lg bg-[#1E5BFF]/10 flex items-center justify-center text-[#00C2FF] flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#0EA5A1]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">{point.title}</h3>
                  <p className="text-xs text-[#AAB6C5] leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TALENT CATEGORIES */}
      {}
      <section id="categories" className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,rgba(14,165,161,0.05),transparent_40%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00C2FF] uppercase tracking-widest bg-[#00C2FF]/10 px-3.5 py-1.5 rounded-full">
              تنوع بلا حدود
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              مواهب ووجوه لكافة مشاريعكم الإبداعية
            </h2>
            <p className="text-base sm:text-lg text-[#AAB6C5]">
              سواء كان مشروعكم إعلانياً، سينمائياً، أو صانع محتوى محلي بالكامل، نساعدكم في JA kcasting على الوصول للفئة المناسبة بسرعة واحترافية.
            </p>
          </div>

          {/* Selector Grid with Visual Box */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Right List Selector */}
            <div className="md:col-span-4 space-y-3">
              {categories.map((cat, index) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(index)}
                  className={`w-full text-right p-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                    selectedCategory === index
                      ? 'bg-gradient-to-l from-[#1E5BFF] to-[#00C2FF] border-transparent text-white shadow-lg shadow-[#1E5BFF]/20 scale-[1.02]'
                      : 'bg-[#0B1E33] border-slate-800 text-[#AAB6C5] hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`p-1.5 rounded-lg ${selectedCategory === index ? 'bg-white/10 text-white' : 'bg-slate-800 text-slate-300'}`}>
                      {cat.icon}
                    </span>
                    <span className="font-bold text-sm sm:text-base">{cat.title}</span>
                  </div>
                  <ArrowLeft className={`w-4 h-4 transform transition-transform ${selectedCategory === index ? 'translate-x-1 text-white' : 'text-slate-500'}`} />
                </button>
              ))}
            </div>

            {/* Showcase detailed visual box */}
            <div className="md:col-span-8 bg-[#0B1E33]/80 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden min-h-[400px]">
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-b from-[#1E5BFF]/10 to-transparent blur-3xl rounded-full"></div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                  <div className="w-12 h-12 rounded-xl bg-[#07111F] flex items-center justify-center border border-[#1E5BFF]/20">
                    {categories[selectedCategory].icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      {categories[selectedCategory].title}
                    </h3>
                    <p className="text-xs text-[#00C2FF] font-semibold">قسم مرشح ومعتمد • فلترة وتحقق فني</p>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-[#AAB6C5] leading-relaxed">
                  {categories[selectedCategory].description}
                </p>

                {/* Sub features */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">المعايير والمهارات المتوفرة في هذا القسم:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {categories[selectedCategory].skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2.5 text-sm text-slate-300 bg-[#07111F]/50 p-2.5 rounded-lg border border-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-[#0EA5A1] flex-shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp conversion integration */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                <p className="text-xs sm:text-sm text-slate-400 text-center sm:text-right">
                  هل تجد في نفسك الموهبة في فئة <strong className="text-white">{categories[selectedCategory].title}</strong>؟ تواصل معنا فوراً لتسجيل ملفك مجاناً وبكل سرية.
                </p>
                <a
                  href={whatsappUrl(MESSAGES.talentCategory(categories[selectedCategory].title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#07111F] hover:bg-[#1E5BFF] border border-[#1E5BFF]/30 hover:border-transparent text-white font-bold text-sm hover:shadow-lg transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 text-[#00C2FF]" />
                  <span>انضم لهذا القسم عبر واتساب</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* TARGET AUDIENCE SPLIT SECTION */}
      {}
      <section className="py-20 bg-[#0B1E33]/40 border-y border-[#1E5BFF]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Navigation Toggle Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-[#0B1E33] p-1.5 rounded-xl border border-slate-800 flex shadow-inner">
              <button
                onClick={() => setActiveTab('talent')}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'talent'
                    ? 'bg-gradient-to-r from-[#1E5BFF] to-[#00C2FF] text-white shadow-md'
                    : 'text-[#AAB6C5] hover:text-white'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>للمواهب والوجوه الإبداعية</span>
              </button>
              <button
                onClick={() => setActiveTab('company')}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'company'
                    ? 'bg-gradient-to-r from-[#1E5BFF] to-[#00C2FF] text-white shadow-md'
                    : 'text-[#AAB6C5] hover:text-white'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>للشركات ومخرجي الكاستنج</span>
              </button>
            </div>
          </div>

          {/* Conditional Layout Panels */}
          {activeTab === 'talent' ? (
            <div id="for-talents" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-fadeIn">
              
              {/* Left Content text */}
              <div className="lg:col-span-7 space-y-6 text-right">
                <span className="text-xs font-bold text-[#D6A756] tracking-widest uppercase bg-[#D6A756]/10 px-3 py-1 rounded-full">
                  فرصة حقيقية للتمكين والظهور
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                  ابنِ حضورك الاحترافي ودع أفضل فرص الكاستنج والإنتاج تبحث عنك!
                </h2>
                <p className="text-[#AAB6C5] text-base sm:text-lg leading-relaxed">
                  أظهر موهبتك الفذة ومؤهلاتك الفنية بشكل منظم معنا. تضمن لك منصة <strong className="text-white">JA kcasting</strong> فرصة الترشيح الفوري للمشاريع الإعلانية، التلفزيونية، والأفلام السينمائية الكبرى بمجرد مطابقة بياناتك.
                </p>

                {/* Benefits list */}
                <div className="space-y-4 pt-4">
                  {[
                    "تسجيل وتوثيق بياناتك الفنية الأساسية والخبرات والملامح بسهولة مطلقة.",
                    "رفع وعرض صورك، مقاطع الفيديو التعريفية، وأعمالك السابقة بخصوصية تامة.",
                    "إيضاح دقيق للمهارات الفنية، اللهجات المحلية، ونقاط القوة لسهولة المطابقة.",
                    "استقبال عروض كاستنج وترشيحات رسمية تتناسب مباشرة مع ملامحك وموهبتك.",
                    "تنسيق تعاقدي محمي، آمن ومكتمل بنسبة 100% عبر الواتساب."
                  ].map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#0EA5A1]/10 flex items-center justify-center text-[#0EA5A1] mt-1 flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-slate-300 text-sm sm:text-base">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <a
                    href={whatsappUrl(MESSAGES.talentReg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#1E5BFF] to-[#00C2FF] text-white font-bold text-base hover:scale-105 transition-all duration-300 shadow-lg shadow-[#1E5BFF]/20"
                  >
                    <MessageCircle className="w-5 h-5 text-[#D6A756]" />
                    <span>سجّل كموهبة الآن عبر واتساب</span>
                  </a>
                </div>

              </div>

              {/* Right Mock Graphic */}
              <div className="lg:col-span-5 relative">
                <div className="bg-[#0B1E33] border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-[#D6A756]/10 rounded-full blur-2xl"></div>
                  
                  <div className="space-y-4 relative z-10">
                    <h3 className="text-xs font-bold text-[#D6A756] tracking-widest uppercase">بطاقة فنية موثقة ومعتمدة</h3>
                    <div className="aspect-[4/3] w-full rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-16 h-16 rounded-xl bg-[#1E5BFF]/10 flex items-center justify-center border-2 border-[#1E5BFF] mb-3">
                        <span className="text-2xl font-black text-[#00C2FF]">JA</span>
                      </div>
                      <p className="text-sm font-bold text-white">الملف التعريفي: معتمد ومكتمل</p>
                      <p className="text-xs text-slate-400 mt-1">المهارات: تمثيل سينمائي، إعلانات حيوية</p>
                      <div className="flex gap-1.5 mt-3.5 flex-wrap justify-center">
                        <span className="text-[10px] bg-[#1E5BFF]/15 text-[#00C2FF] px-2.5 py-1 rounded">الرياض</span>
                        <span className="text-[10px] bg-[#1E5BFF]/15 text-[#00C2FF] px-2.5 py-1 rounded">لهجة نجدية</span>
                        <span className="text-[10px] bg-[#1E5BFF]/15 text-[#00C2FF] px-2.5 py-1 rounded">العمر 25</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            <div id="for-companies" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-fadeIn">
              
              {/* Left Content text for Companies */}
              <div className="lg:col-span-7 space-y-6 text-right">
                <span className="text-xs font-bold text-[#00C2FF] tracking-widest uppercase bg-[#00C2FF]/10 px-3 py-1 rounded-full">
                  فلترة احترافية وسرعة تنسيق
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                  اختصر عناء وفوضى البحث العشوائي والوجوه غير الملائمة لمشاريعكم
                </h2>
                <p className="text-[#AAB6C5] text-base sm:text-lg leading-relaxed">
                  بدلاً من تضييع الساعات الطويلة في تصفح المجموعات العشوائية والتواصل غير المنظم، أرسل لنا تفاصيل الـ Brief الخاص بطلبك الفني وسيقوم خبراؤنا بفلترة وتزويدك بقائمة مطابقة تماماً للمواصفات والأعمار واللهجات المطلوبة.
                </p>

                {/* Benefits */}
                <div className="space-y-4 pt-4">
                  {[
                    "استقبال ومراجعة تفاصيل الـ Brief لمتطلبات عملكم بسرية واحترافية.",
                    "فهم وتحليل دقيق لملامح ونبرات الموهبة أو المؤدي الصوتي المطلوب.",
                    "فلترة ذكية وشاملة حسب المدينة، الفئة العمرية، اللهجة المحلية، والمهارات الفنية.",
                    "تنظيم وتنسيق فني ومادي شفاف وعادل يضمن التزام الجميع.",
                    "إشراف ومتابعة لوجستية وفنية متكاملة حتى انتهاء جلسات التصوير بنجاح."
                  ].map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#00C2FF]/10 flex items-center justify-center text-[#00C2FF] mt-1 flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-slate-300 text-sm sm:text-base">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <a
                    href={whatsappUrl(MESSAGES.castingRequest)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#1E5BFF] via-[#0EA5A1] to-[#00C2FF] text-white font-bold text-base hover:scale-105 transition-all duration-300 shadow-lg shadow-[#1E5BFF]/20"
                  >
                    <Send className="w-5 h-5 text-[#D6A756]" />
                    <span>أرسل طلب كاستنج عبر واتساب</span>
                  </a>
                </div>

              </div>

              {/* Right Side Graphics */}
              <div className="lg:col-span-5 relative">
                <div className="bg-[#0B1E33] border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C2FF]/10 rounded-full blur-2xl"></div>
                  
                  <div className="space-y-4 relative z-10">
                    <h3 className="text-xs font-bold text-[#00C2FF] tracking-widest uppercase">مراجعة الـ Brief وتأكيد الترشيح</h3>
                    <div className="aspect-[4/3] w-full rounded-xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between">
                      <div className="space-y-2">
                        <p className="text-xs text-slate-400">جهة الطلب: <span className="text-white font-bold">وكالة إنتاج وتسويق إعلامي</span></p>
                        <p className="text-xs text-slate-400">المشروع المطلوب: <span className="text-white">إعلان تجاري لبراند قهوة سعودية مختصة</span></p>
                        <p className="text-xs text-slate-400">مواصفات الموهبة: <span className="text-[#D6A756] font-bold">ممثلة سعودية (لهجة نجدية) + وجهين إعلانيين</span></p>
                      </div>
                      <div className="pt-3 border-t border-slate-800 flex justify-between items-center">
                        <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded font-bold">جاهز ومطابق بنجاح</span>
                        <span className="text-xs font-bold text-[#00C2FF]">JA Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </section>

      {/* HOW IT WORKS */}
      {}
      <section id="how-it-works" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#0EA5A1] uppercase tracking-widest bg-[#0EA5A1]/10 px-3.5 py-1.5 rounded-full">
              تكامل وتنسيق مرن
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              كيف نعمل في JA kcasting؟
            </h2>
            <p className="text-base sm:text-lg text-[#AAB6C5]">
              خطوات واضحة، سريعة، وبسيطة تجنبكم التعقيدات وتضمن أفضل تواصل خاص ومحمي لكافة الأطراف.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Steps for Talents */}
            <div className="bg-[#0B1E33]/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <Users className="w-6 h-6 text-[#D6A756]" />
                <h3 className="text-xl font-bold text-white">دليل انضمام المواهب والوجوه</h3>
              </div>

              <div className="space-y-6">
                {[
                  { step: "١", title: "ترسل بياناتك الأساسية وصورك عبر واتساب", desc: "بمجرد ضغطك على زر التسجيل والبدء، سيطلب منك المنسق قائمة بالصور والمعلومات لتنظيم ملفك." },
                  { step: "٢", title: "مراجعة الملف الفني وتصنيفه بدقة", desc: "نقوم بتنظيم وحفظ بروفايلك الخاص في الفئات المناسبة لموهبتك لضمان الفلترة الفعالة." },
                  { step: "٣", title: "الترشيح والربط المباشر مع المشاريع والشركات", desc: "عند وصول طلب كاستنج يطابق تماماً مواصفاتك ولهجتك الفنية، نقوم بربطك وبدء التنسيق فوراً." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#1E5BFF] to-[#00C2FF] flex items-center justify-center text-white text-sm font-black flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps for Companies */}
            <div className="bg-[#0B1E33]/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <Building2 className="w-6 h-6 text-[#00C2FF]" />
                <h3 className="text-xl font-bold text-white">دليل طلب الكاستنج للشركات</h3>
              </div>

              <div className="space-y-6">
                {[
                  { step: "١", title: "مراسلتنا بملخص متطلبات مشروعك (Brief)", desc: "شاركنا مواصفات الوجه أو المؤدي الصوتي المطلوب، الفئة العمرية، اللهجة المحلية ومكان التصوير." },
                  { step: "٢", title: "فلترة سريعة وترشيح الوجوه المطابقة والمتاحة", desc: "نبحث في قاعدة بياناتنا السرية ونستخلص قائمة بالوجوه الأكثر ملاءمة وجاهزية فوراً." },
                  { step: "٣", title: "تأكيد الاختيار وبدء التنسيق والإنتاج", desc: "نضمن لك ترتيب الاتفاقات، المواعيد واللوجستيات لإجراء تصوير احترافي خالي من العيوب." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#D6A756] to-yellow-500 flex items-center justify-center text-[#07111F] text-sm font-black flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* INTERACTIVE SMART MATCHING SIMULATOR */}
      {}
      <section id="matching" className="py-20 bg-[#0B1E33]/30 border-t border-b border-slate-800 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#1E5BFF]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual simulation descriptions */}
            <div className="lg:col-span-6 space-y-6 text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E5BFF]/10 text-xs font-semibold text-[#00C2FF] border border-[#1E5BFF]/20">
                <Zap className="w-3.5 h-3.5" />
                <span>محاكاة ذكية للكاستنج</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                ترشيح وفلترة أسرع لضمان ملائمة المشروع بنسبة 100%
              </h2>
              <p className="text-[#AAB6C5] text-base sm:text-lg leading-relaxed">
                ندرك في <strong className="text-white">JA kcasting</strong> أهمية الفلترة الدقيقة لتناسب طبيعة ورسالة مشروعك الإعلاني أو الفني. نعتمد على محددات ذكية تشمل الفئة العمرية، النطاق الجغرافي، اللهجات المحلية الدقيقة، ونوع الظهور لتوفير الخيارات الأمثل.
              </p>
              
              <div className="bg-[#0B1E33] border border-slate-800 p-4 rounded-xl space-y-3">
                <h4 className="text-xs font-bold text-slate-400">مثال توضيحي لعمليات المطابقة لدينا:</h4>
                <p className="text-sm text-slate-300">
                  عند تحديدك <strong className="text-white">"إعلان تجاري"</strong> لمدينة <strong className="text-white">جدة</strong> بلهجة <strong className="text-white">حجازية</strong>، يسحب منسقنا القائمة الجاهزة والخالية من التعقيدات للبدء الفوري بالتواصل والتنسيق.
                </p>
              </div>
            </div>

            {/* Interactive Widget Simulator */}
            <div className="lg:col-span-6 bg-[#0B1E33] border border-slate-700/60 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center justify-between">
                <span>محاكي المطابقة الفورية (توضيحي)</span>
                <span className="text-xs text-[#00C2FF] font-bold">JA Casting Simulator</span>
              </h3>

              <div className="space-y-5">
                
                {/* 1. Project Type Selector */}
                <div>
                  <label className="block text-xs text-slate-400 mb-2 font-bold uppercase tracking-wider">نوع المشروع المطلوب:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'commercial', label: 'إعلان تجاري' },
                      { id: 'movie', label: 'عمل سينمائي / دراما' },
                      { id: 'voiceover', label: 'أداء صوتي / دبلجة' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setProjectType(item.id)}
                        className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all duration-200 ${
                          projectType === item.id 
                            ? 'bg-[#1E5BFF] border-transparent text-white shadow-md' 
                            : 'bg-[#07111F] border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Target Age Selector */}
                <div>
                  <label className="block text-xs text-slate-400 mb-2 font-bold uppercase tracking-wider">الفئة العمرية:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: '18-24', label: '١٨ - ٢٤ سنة' },
                      { id: '25-35', label: '٢٥ - ٣٥ سنة' },
                      { id: '36+', label: 'أكبر من ٣٦ سنة' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setTargetAge(item.id)}
                        className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all duration-200 ${
                          targetAge === item.id 
                            ? 'bg-[#00C2FF] border-transparent text-[#07111F] shadow-md' 
                            : 'bg-[#07111F] border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Target Dialect Selector */}
                <div>
                  <label className="block text-xs text-slate-400 mb-2 font-bold uppercase tracking-wider">اللهجة المفضلة:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'saudi-najd', label: 'نجدية / بيضاء' },
                      { id: 'saudi-hijaz', label: 'حجازية' },
                      { id: 'saudi-janub', label: 'جنوبية / شرقية' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setTargetDialect(item.id)}
                        className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all duration-200 ${
                          targetDialect === item.id 
                            ? 'bg-[#0EA5A1] border-transparent text-white shadow-md' 
                            : 'bg-[#07111F] border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated Output Matches */}
                <div className="pt-4 border-t border-slate-800 mt-6 space-y-3">
                  {isMatching ? (
                    <div className="flex flex-col items-center justify-center py-4 space-y-2">
                      <div className="w-6 h-6 border-2 border-[#1E5BFF] border-t-transparent rounded-full animate-spin"></div>
                      <p className="text-xs text-slate-400">جاري تصفية ومطابقة قاعدة بيانات الوجوه...</p>
                    </div>
                  ) : matchResult ? (
                    <div className="bg-[#07111F] border border-[#1E5BFF]/20 rounded-xl p-4 space-y-2.5 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-400">المواهب المتاحة للمطابقة:</span>
                        <span className="text-sm font-black text-[#00C2FF] bg-[#00C2FF]/10 px-2.5 py-0.5 rounded-full">
                          {matchResult.count} بروفايل جاهز
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-400">معدل دقة وموثوقية الترشيح:</span>
                        <span className="text-sm font-bold text-[#D6A756]">{matchResult.accuracy}</span>
                      </div>
                      <div className="flex items-center justify-between pt-1 border-t border-slate-800/40">
                        <span className="text-xs text-slate-400">جاهزية التنسيق:</span>
                        <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          {matchResult.status}
                        </span>
                      </div>
                    </div>
                  ) : null}
                </div>

                {/* Conversion Button inside Simulator */}
                <a
                  href={whatsappUrl(MESSAGES.castingRequest)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1E5BFF] hover:bg-[#00C2FF] text-white hover:text-[#07111F] text-sm font-black transition-all duration-300 shadow-lg mt-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>اطلب ترشيح هذه المواهب فوراً</span>
                </a>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* PRIVATE CONTACT DIRECT PATH SECTION */}
      {}
      <section className="py-20 relative bg-gradient-to-b from-[#07111F] via-[#0B1E33] to-[#07111F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#D6A756] uppercase tracking-widest bg-[#D6A756]/10 px-3.5 py-1.5 rounded-full">
              تواصل خاص ومباشر
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              كل تنسيق ناجح يبدأ بمحادثة سريعة
            </h2>
            <p className="text-[#AAB6C5] text-base sm:text-lg">
              سواء كنت موهبة صاعدة تبحث عن فرص ممتازة، أو شركة تبحث عن تصفية سريعة لوجوه إعلانك القادم، تواصل معنا مباشرة على الواتساب.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Box 1: Talent */}
            <div className="bg-[#0B1E33] border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-[#D6A756]/30 transition-all duration-300 relative group">
              <div className="absolute top-4 left-4 text-[#D6A756]/10 group-hover:text-[#D6A756]/20 transition-colors">
                <Users className="w-16 h-16" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D6A756]"></span>
                  أنا موهبة / وجه إعلاني
                </h3>
                <p className="text-sm text-[#AAB6C5] leading-relaxed">
                  أريد التسجيل وعرض مهاراتي ولهجتي وصوري لنكون على أهبة الاستعداد لترشيحك لأول إعلان تجاري أو عمل سينمائي مناسب معك في المملكة.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href={whatsappUrl(MESSAGES.talentReg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-l from-[#D6A756]/20 to-[#D6A756]/5 hover:from-[#D6A756] hover:to-[#D6A756] text-[#D6A756] hover:text-[#07111F] font-bold text-sm border border-[#D6A756]/40 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>سجّل كموهبة الآن</span>
                </a>
              </div>
            </div>

            {/* Box 2: Enterprise / Agency */}
            <div className="bg-[#0B1E33] border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-[#00C2FF]/30 transition-all duration-300 relative group">
              <div className="absolute top-4 left-4 text-[#00C2FF]/10 group-hover:text-[#00C2FF]/20 transition-colors">
                <Building2 className="w-16 h-16" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00C2FF]"></span>
                  أنا شركة / مخرج كاستنج
                </h3>
                <p className="text-sm text-[#AAB6C5] leading-relaxed">
                  أبحث عن ممثلين، وجوه إعلانية، عارضين أو مؤدين صوتيين لفيلم، مسلسل أو حملة تجارية للبراند الخاص بنا وأريد ترشيحاً دقيقاً للغاية وبدون فوضى.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href={whatsappUrl(MESSAGES.castingRequest)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-l from-[#1E5BFF] to-[#00C2FF] hover:from-[#00C2FF] hover:to-[#1E5BFF] text-white font-bold text-sm transition-all duration-300 shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>أرسل طلب كاستنج خاص</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      {}
      <section className="py-20 relative border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white">الأسئلة الأكثر شيوعاً</h2>
            <p className="text-sm sm:text-base text-slate-400">إجابات مباشرة لتسهيل تفاصيل فهم عملنا المشترك في JA kcasting.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#0B1E33] border border-slate-800 rounded-xl overflow-hidden transition-all">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-right p-5 flex items-center justify-between font-bold text-sm sm:text-base text-white hover:bg-slate-800/40 transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 text-[#00C2FF]" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>
                {openFaq === idx && (
                  <div className="p-5 bg-[#07111F]/50 border-t border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed animate-slideDown">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA SECTION */}
      {}
      <section className="py-20 bg-gradient-to-t from-[#0B1E33] to-[#07111F] relative border-t border-[#1E5BFF]/10 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,91,255,0.08),transparent_40%)]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            مستعد لتبدأ رحلتك التنسيقية معنا؟
          </h2>
          <p className="text-base sm:text-lg text-[#AAB6C5] max-w-2xl mx-auto">
            راسلنا الآن عبر الواتساب لتوجيه طلبك للمسار الصحيح: تسجيل موهبتك وتوثيقها مجاناً، أو استلام تفاصيل الـ Brief للبحث عن الكادر الإعلاني الأمثل لمشروعك.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={whatsappUrl(MESSAGES.talentReg)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#D6A756] to-amber-500 text-[#07111F] font-black text-base shadow-lg shadow-[#D6A756]/15 hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span>سجّل كموهبة الآن</span>
            </a>

            <a
              href={whatsappUrl(MESSAGES.castingRequest)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#0B1E33] hover:bg-[#122A47] text-white font-bold text-base border border-slate-700 hover:border-slate-600 hover:scale-105 transition-all duration-300"
            >
              <Send className="w-5 h-5 text-[#00C2FF]" />
              <span>أرسل طلب كاستنج خاص</span>
            </a>
          </div>

          <p className="text-xs text-slate-500 pt-2">بدون رسوم تسجيل خفية • بدون باقات اشتراك شهرية • سرية تامة وسرعة تفاعلية</p>
        </div>
      </section>

      {/* FOOTER */}
      {}
      <footer className="bg-[#07111F] border-t border-slate-900 py-12 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-900">
            
            {/* Logo and Tagline */}
            <div className="md:col-span-5 space-y-3 text-right">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#1E5BFF] to-[#D6A756] flex items-center justify-center shadow-md">
                  <span className="text-sm font-black text-white">JA</span>
                </div>
                <div>
                  <span className="text-lg font-black text-white">JA kcasting</span>
                  <span className="text-[#D6A756] text-[10px] block font-bold">منصة المواهب الذكية للإعلانات والإنتاج</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
                وكالتكم الرقمية النخبوية لاختيار وتصفية أفضل الكوادر والوجوه والأداء الصوتي الاحترافي بما يتلاءم مع طبيعة وميزانية مشاريعكم في المملكة العربية السعودية.
              </p>
            </div>

            {/* Navigation links */}
            <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="space-y-2.5">
                <h4 className="font-bold text-white">الروابط السريعة</h4>
                <ul className="space-y-2">
                  <li><a href="#hero" className="hover:text-white transition-colors">الرئيسية</a></li>
                  <li><a href="#categories" className="hover:text-white transition-colors">أقسام المواهب</a></li>
                  <li><a href="#how-it-works" className="hover:text-white transition-colors">كيف نعمل</a></li>
                </ul>
              </div>
              <div className="space-y-2.5">
                <h4 className="font-bold text-white">الدعم والتنسيق</h4>
                <ul className="space-y-2">
                  <li><a href={whatsappUrl(MESSAGES.talentReg)} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">تسجيل المواهب</a></li>
                  <li><a href={whatsappUrl(MESSAGES.castingRequest)} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">طلبات الكاستنج</a></li>
                  <li><a href={whatsappUrl(MESSAGES.generalConsult)} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">الاستفسارات الخاصة</a></li>
                </ul>
              </div>
            </div>

            {/* Direct Phone support */}
            <div className="md:col-span-3 text-right space-y-2 text-xs sm:text-sm">
              <h4 className="font-bold text-white">التواصل المباشر والخاص</h4>
              <p className="text-slate-300">الرقم المعتمد لإجراء المطابقة والفرز:</p>
              <a 
                href={whatsappUrl(MESSAGES.generalConsult)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00C2FF] font-black text-lg hover:underline block"
              >
                0533116166
              </a>
            </div>

          </div>

          {/* Copyright strip */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© 2026 JA kcasting. جميع الحقوق محفوظة.</p>
            <div className="flex gap-4">
              <span className="hover:text-slate-400">ترشيح خاص وسري</span>
              <span>•</span>
              <span className="hover:text-slate-400">لا قيود ولا اشتراكات مدفوعة</span>
            </div>
          </div>

        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      {}
      <div className="fixed bottom-6 left-6 z-50">
        <a
          href={whatsappUrl(MESSAGES.generalConsult)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_6px_30px_rgba(16,185,129,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 text-sm font-extrabold group"
          aria-label="Contact on WhatsApp"
        >
          {/* Animated Glow Pulsing behind button */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500/30 blur-sm opacity-50 group-hover:opacity-85 transition-opacity pointer-events-none animate-ping"></span>
          
          <MessageCircle className="w-5 h-5 text-white relative z-10" />
          <span className="relative z-10">تواصل خاص</span>
        </a>
      </div>

    </div>
  );
}