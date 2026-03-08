
import React, { useState, useEffect } from 'react';
import { Page, NavItem } from './types';
import { Icons } from './constants';
import Dashboard from './components/Dashboard';
import AcademicTable from './components/AcademicTable';
import GalleryGrid from './components/GalleryGrid';
import CreationsList from './components/CreationsList';
import LibrarySection from './components/LibrarySection';
import RegistrationForm from './components/RegistrationForm';
import SettingsView from './components/SettingsView';
import ProfileView from './components/ProfileView';
import PublicHome from './components/PublicHome';

const NAVIGATION: NavItem[] = [
  { id: Page.Dashboard, label: 'Dashboard', icon: <Icons.Dashboard className="w-5 h-5" /> },
  {
    id: Page.Academic_Teachers,
    label: 'Akademik',
    icon: <Icons.Academic className="w-5 h-5" />,
    children: [
      { id: Page.Academic_Teachers, label: 'Pengajar', icon: null },
      { id: Page.Academic_Students, label: 'Santri', icon: null },
    ]
  },
  {
    id: Page.Gallery_News,
    label: 'Galeri',
    icon: <Icons.Gallery className="w-5 h-5" />,
    children: [
      { id: Page.Gallery_News, label: 'Berita', icon: null },
      { id: Page.Gallery_Extracurricular, label: 'Ekstrakurikuler', icon: null },
    ]
  },
  {
    id: Page.Creations_Bio,
    label: 'Kreasi Santri',
    icon: <Icons.Creation className="w-5 h-5" />,
    children: [
      { id: Page.Creations_Bio, label: 'Biografi', icon: null },
      { id: Page.Creations_Story, label: 'Cerpen', icon: null },
      { id: Page.Creations_Essay, label: 'Esai', icon: null },
      { id: Page.Creations_Opinion, label: 'Opini', icon: null },
      { id: Page.Creations_Poetry, label: 'Puisi', icon: null },
      { id: Page.Creations_Review, label: 'Resensi', icon: null },
    ]
  },
  {
    id: Page.Library_Kitab,
    label: 'Pustaka',
    icon: <Icons.Library className="w-5 h-5" />,
    children: [
      { id: Page.Library_Kitab, label: 'Kitab Kuning', icon: null },
      { id: Page.Library_Book, label: 'Buku', icon: null },
      { id: Page.Library_Journal, label: 'Jurnal', icon: null },
    ]
  },
  { id: Page.Registration, label: 'Pendaftaran', icon: <Icons.Registration className="w-5 h-5" /> },
  { id: Page.Settings, label: 'Pengaturan', icon: <Icons.Settings className="w-5 h-5" /> },
  { id: Page.Profile, label: 'My Profile', icon: <Icons.Profile className="w-5 h-5" /> },
];

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.Dashboard);
  const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth > 1024);
  const [isDarkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');
  const [viewMode, setViewMode] = useState<'admin' | 'guest'>('admin');
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleMenu = (label: string) => {
    setExpandedMenus(prev => ({ ...prev, [label]: !prev[label] }));
  };

  const renderContent = () => {
    if (viewMode === 'guest') return <PublicHome onAdminEnter={() => setViewMode('admin')} />;

    switch (activePage) {
      case Page.Dashboard: return <Dashboard />;
      case Page.Academic_Teachers: return <AcademicTable type="teachers" />;
      case Page.Academic_Students: return <AcademicTable type="students" />;
      case Page.Gallery_News: return <GalleryGrid type="news" />;
      case Page.Gallery_Extracurricular: return <GalleryGrid type="extracurricular" />;
      case Page.Creations_Bio: 
      case Page.Creations_Story:
      case Page.Creations_Essay:
      case Page.Creations_Opinion:
      case Page.Creations_Poetry:
      case Page.Creations_Review:
        return <CreationsList type={activePage} />;
      case Page.Library_Kitab:
      case Page.Library_Book:
      case Page.Library_Journal:
        return <LibrarySection type={activePage} />;
      case Page.Registration: return <RegistrationForm />;
      case Page.Settings: return <SettingsView />;
      case Page.Profile: return <ProfileView />;
      default: return <Dashboard />;
    }
  };

  if (viewMode === 'guest') {
    return (
        <div className="min-h-screen dark:bg-slate-950">
            {renderContent()}
            <button 
                onClick={() => setDarkMode(!isDarkMode)}
                className="fixed bottom-6 right-6 p-4 bg-white dark:bg-slate-800 shadow-xl rounded-full z-50 text-slate-800 dark:text-amber-400 border border-slate-200 dark:border-slate-700"
            >
                {isDarkMode ? '🌙' : '☀️'}
            </button>
        </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 bg-emerald-900 dark:bg-emerald-950 text-white transition-all duration-300 ${isSidebarOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full lg:w-20 lg:translate-x-0'} overflow-y-auto flex-shrink-0 z-30 shadow-2xl lg:shadow-none`}>
        <div className="p-6 flex items-center gap-3 border-b border-emerald-800 dark:border-emerald-900">
          <div className="w-8 h-8 bg-amber-400 rounded-lg flex-shrink-0 flex items-center justify-center font-bold text-emerald-900 shadow-lg">IK</div>
          {(isSidebarOpen || window.innerWidth < 1024) && <span className="font-bold text-lg tracking-tight uppercase truncate">Insan Kamil</span>}
        </div>
        
        <nav className="p-4 space-y-1">
          {NAVIGATION.map((item) => (
            <div key={item.id}>
              {item.children ? (
                <div>
                  <button 
                    onClick={() => (isSidebarOpen ? toggleMenu(item.label) : setSidebarOpen(true))}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-emerald-800 dark:hover:bg-emerald-900/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-300 group-hover:text-white">{item.icon}</span>
                      {isSidebarOpen && <span>{item.label}</span>}
                    </div>
                    {isSidebarOpen && (
                      <svg 
                        className={`w-4 h-4 transition-transform ${expandedMenus[item.label] ? 'rotate-180' : ''}`} 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                  {isSidebarOpen && expandedMenus[item.label] && (
                    <div className="ml-9 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => {
                            setActivePage(child.id);
                            if (window.innerWidth < 1024) setSidebarOpen(false);
                          }}
                          className={`w-full text-left p-2 text-sm rounded-lg transition-colors ${activePage === child.id ? 'bg-emerald-700 text-white' : 'text-emerald-100 hover:bg-emerald-800'}`}
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => {
                    setActivePage(item.id);
                    if (window.innerWidth < 1024) setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors group ${activePage === item.id ? 'bg-amber-400 text-emerald-900 shadow-md font-medium' : 'hover:bg-emerald-800'}`}
                >
                  <span className={`${activePage === item.id ? 'text-emerald-900' : 'text-emerald-300 group-hover:text-white'}`}>{item.icon}</span>
                  {isSidebarOpen && <span>{item.label}</span>}
                </button>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 lg:px-6 z-10 transition-colors">
          <div className="flex items-center gap-4">
            <button 
                onClick={() => setSidebarOpen(!isSidebarOpen)}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400"
            >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <button 
                onClick={() => setViewMode('guest')}
                className="hidden sm:flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
            >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Lihat Portal Publik
            </button>
          </div>

          <div className="flex items-center gap-2 lg:gap-4">
            <button 
                onClick={() => setDarkMode(!isDarkMode)}
                className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
                {isDarkMode ? '☀️' : '🌙'}
            </button>

            <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 mx-1"></div>

            <div className="flex items-center gap-3">
              <div className="hidden md:block text-right">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Ahmad Al-Fatih</p>
                <p className="text-xs text-slate-500">Super Admin</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-800 overflow-hidden flex items-center justify-center">
                <img src="https://picsum.photos/seed/admin/40/40" alt="Admin" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Body */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-10 scroll-smooth">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
