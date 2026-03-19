import { useState, useCallback } from "react";
import type { View, Language, University } from "./types";
import { lightTheme, darkTheme } from "./data/theme";
import { translations } from "./i18n/translations";
import { useIsMobile } from "./hooks/useIsMobile";

// Layout
import { Header } from "./componets/layout/Header";
import { Footer } from "./componets/layout/Footer";
import { BottomNav } from "./componets/layout/BottomNav";

// Pages
import { HomePage } from "./componets/pages/HomePage";
import { UniversitiesPage } from "./componets/pages/UniversitiesPage";
import { UniDetailPage } from "./componets/pages/UniDetailPage";
import { SearchPage } from "./componets/pages/SearchPage";

export default function App() {
  const [view, setView] = useState<View>("home");
  const [lang, setLang] = useState<Language>("en");
  const [dark, setDark] = useState(false);
  const [selectedUni, setSelectedUni] = useState<University | null>(null);

  const isMobile = useIsMobile();
  const th = dark ? darkTheme : lightTheme;
  const t = translations[lang];

  const navigate = useCallback((v: View) => setView(v), []);
  const viewUni = useCallback((u: University) => {
    setSelectedUni(u);
    setView("uni-detail");
  }, []);
  const toggleDark = useCallback(() => setDark((d) => !d), []);

  return (
    <div
      style={{
        fontFamily: "'Outfit','Segoe UI',system-ui,sans-serif",
        minHeight: "100vh",
        background: th.bg,
        color: th.text,
        transition: "background 0.3s, color 0.3s",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0 }
        @keyframes fadeUp       { from { opacity:0; transform:translateY(14px) } to { opacity:1; transform:translateY(0) } }
        @keyframes fadeSlideIn  { from { opacity:0; transform:translateX(-6px) } to { opacity:1; transform:translateX(0) } }
        @keyframes expandIn     { from { opacity:0; transform:scaleY(0.96) } to { opacity:1; transform:scaleY(1) } }
        input, select, button   { font-family: inherit }
        ::-webkit-scrollbar     { width: 5px }
        ::-webkit-scrollbar-thumb { background: ${th.borderStrong}; border-radius: 99px }
      `}</style>

      <Header
        view={view}
        onNav={navigate}
        lang={lang}
        setLang={setLang}
        dark={dark}
        toggleDark={toggleDark}
        th={th}
        t={t}
        isMobile={isMobile}
      />

      <main
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          width: "100%",
          flex: 1,
          padding: isMobile ? "20px 14px 90px" : "32px 24px",
        }}
      >
        {view === "home" && (
          <HomePage
            onNav={navigate}
            onViewUni={viewUni}
            th={th}
            t={t}
            isMobile={isMobile}
          />
        )}
        {view === "universities" && (
          <UniversitiesPage
            onViewUni={viewUni}
            th={th}
            t={t}
            isMobile={isMobile}
          />
        )}
        {view === "uni-detail" && selectedUni && (
          <UniDetailPage
            university={selectedUni}
            onBack={() => navigate("universities")}
            th={th}
            t={t}
            isMobile={isMobile}
          />
        )}
        {view === "search" && <SearchPage th={th} t={t} isMobile={isMobile} />}
      </main>

      {!isMobile && <Footer th={th} />}
      {isMobile && <BottomNav view={view} onNav={navigate} th={th} t={t} />}
    </div>
  );
}
