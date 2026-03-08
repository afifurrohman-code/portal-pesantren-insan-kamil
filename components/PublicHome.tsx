
import React from 'react';

interface PublicHomeProps {
    onAdminEnter: () => void;
}

const PublicHome: React.FC<PublicHomeProps> = ({ onAdminEnter }) => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-emerald-100 dark:selection:bg-emerald-900/50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-emerald-200 dark:shadow-none">IK</div>
            <span className="font-bold text-xl tracking-tighter uppercase">Insan Kamil</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600 dark:text-slate-400">
            <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Beranda</a>
            <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Program</a>
            <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Pustaka</a>
            <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Tentang Kami</a>
          </div>
          <button 
            onClick={onAdminEnter}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-xl shadow-emerald-200 dark:shadow-none transition-all hover:scale-105 active:scale-95"
          >
            Portal Staff
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-emerald-100 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-amber-100 dark:bg-amber-900/10 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl space-y-8 animate-in slide-in-from-bottom-10 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
               </span>
               Penerimaan Santri Baru 2024 Dibuka
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-slate-900 dark:text-white">
              Membangun Generasi <br /> 
              <span className="text-emerald-600 dark:text-emerald-500">Beradab & Berilmu</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              Pesantren Insan Kamil menggabungkan nilai-nilai luhur kepesantrenan dengan keunggulan teknologi digital untuk masa depan umat yang gemilang.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold transition-all hover:shadow-2xl hover:scale-105">Daftar Sekarang</button>
              <button className="border-2 border-slate-200 dark:border-slate-800 px-8 py-4 rounded-2xl font-bold hover:bg-white dark:hover:bg-slate-800 transition-all">Lihat Kurikulum</button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="py-20 bg-emerald-900 dark:bg-emerald-950 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
                <p className="text-4xl font-bold mb-2">1,200+</p>
                <p className="text-emerald-300 text-sm font-medium uppercase tracking-widest">Santri Aktif</p>
            </div>
            <div>
                <p className="text-4xl font-bold mb-2">80+</p>
                <p className="text-emerald-300 text-sm font-medium uppercase tracking-widest">Asatidz Berlisensi</p>
            </div>
            <div>
                <p className="text-4xl font-bold mb-2">30+</p>
                <p className="text-emerald-300 text-sm font-medium uppercase tracking-widest">Program Unggulan</p>
            </div>
            <div>
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="text-emerald-300 text-sm font-medium uppercase tracking-widest">Digital Learning</p>
            </div>
        </div>
      </section>

      {/* Latest News Preview */}
      <section className="py-20 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-12">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Warta Pesantren</h2>
                <p className="text-slate-500 mt-2">Kabar terbaru dan aktivitas harian keluarga besar Insan Kamil.</p>
            </div>
            <button className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">Semua Berita →</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
                <div key={i} className="group cursor-pointer">
                    <div className="h-64 rounded-3xl overflow-hidden mb-6 bg-slate-200 dark:bg-slate-800">
                        <img src={`https://picsum.photos/seed/public-${i}/600/400`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                    </div>
                    <p className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase mb-2">Pendidikan • 2 jam lalu</p>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white leading-snug group-hover:text-emerald-600 transition-colors">Implementasi Kurikulum Berbasis AI di Madrasah Aliyah</h4>
                </div>
            ))}
        </div>
      </section>

      <footer className="bg-slate-900 dark:bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center space-y-8">
           <h3 className="text-3xl font-bold tracking-tighter uppercase">Insan Kamil</h3>
           <p className="text-slate-500 max-w-lg mx-auto">Jl. Pesantren No. 42, Kota Digital, Indonesia. Email: salam@insankamil.edu</p>
           <div className="pt-8 border-t border-slate-800 text-xs text-slate-600">
              &copy; 2024 Pesantren Insan Kamil Digital Portal. All rights reserved.
           </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicHome;
