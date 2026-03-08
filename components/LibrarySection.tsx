
import React from 'react';
import { Page } from '../types';

interface LibrarySectionProps {
  type: Page;
}

const LibrarySection: React.FC<LibrarySectionProps> = ({ type }) => {
  const isKitab = type === Page.Library_Kitab;
  const isJournal = type === Page.Library_Journal;
  const title = isKitab ? 'Kitab Kuning' : isJournal ? 'Jurnal Ilmiah' : 'Koleksi Buku';

  const items = [
    { id: 1, title: 'Fathul Qorib Al-Mujib', author: 'Syekh Ibnu Qosim Al-Ghazi', category: 'Fiqh', lang: 'Arab', status: 'Tersedia' },
    { id: 2, title: 'Ar-Risalah', author: 'Imam Asy-Syafi\'i', category: 'Ushul Fiqh', lang: 'Arab', status: 'Dipinjam' },
    { id: 3, title: 'Adab Al-Alim wa Al-Muta\'allim', author: 'KH. Hasyim Asy\'ari', category: 'Akhlak', lang: 'Arab-Indo', status: 'Tersedia' },
    { id: 4, title: 'Tafsir Jalalain', author: 'Imam Jalaluddin as-Suyuthi', category: 'Tafsir', lang: 'Arab', status: 'Tersedia' },
    { id: 5, title: 'Bidayatul Hidayah', author: 'Imam Al-Ghazali', category: 'Tasawwuf', lang: 'Arab', status: 'Tersedia' },
    { id: 6, title: 'Nahwu Al-Wadhih', author: 'Ali Al-Jarim', category: 'Lughah', lang: 'Arab', status: 'Dipinjam' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
          <p className="text-slate-500">Perpustakaan Digital Insan Kamil: Akses ilmu tanpa batas.</p>
        </div>
        <div className="flex gap-2">
           <button className="bg-amber-400 text-emerald-900 px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-amber-500">Peminjaman Saya</button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center gap-4">
        <div className="relative flex-1">
          <input type="text" placeholder="Cari judul, pengarang, atau kategori..." className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
          <svg className="w-5 h-5 absolute left-3 top-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <select className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-600 outline-none">
          <option>Semua Kategori</option>
          <option>Fiqh</option>
          <option>Tafsir</option>
          <option>Hadits</option>
          <option>Akhlak</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-200 hover:shadow-lg transition-all flex gap-4">
            <div className="w-24 h-32 bg-slate-100 rounded-lg flex-shrink-0 shadow-inner flex flex-col items-center justify-center p-2 text-center border-l-4 border-emerald-600">
               <span className="text-[10px] uppercase font-bold text-slate-400 mb-1">{item.category}</span>
               <span className="text-xs font-serif font-bold text-slate-700 leading-tight line-clamp-3">{item.title}</span>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-sm leading-snug">{item.title}</h4>
                <p className="text-xs text-slate-500 mt-1 italic">{item.author}</p>
                <div className="flex gap-2 mt-2">
                   <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase font-bold">{item.lang}</span>
                   <span className={`text-[10px] px-2 py-0.5 rounded uppercase font-bold ${item.status === 'Tersedia' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                     {item.status}
                   </span>
                </div>
              </div>
              <div className="flex gap-2">
                 <button className="flex-1 text-xs bg-emerald-50 text-emerald-700 font-bold py-2 rounded-lg hover:bg-emerald-100">Pinjam</button>
                 <button className="px-3 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                   </svg>
                 </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibrarySection;
