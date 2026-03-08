
import React from 'react';
import { Page } from '../types';

interface CreationsListProps {
  type: Page;
}

const CreationsList: React.FC<CreationsListProps> = ({ type }) => {
  const getTitle = () => {
    switch (type) {
      case Page.Creations_Bio: return 'Biografi';
      case Page.Creations_Story: return 'Cerpen (Cerita Pendek)';
      case Page.Creations_Essay: return 'Esai Ilmiah';
      case Page.Creations_Opinion: return 'Opini Santri';
      case Page.Creations_Poetry: return 'Puisi & Sastra';
      case Page.Creations_Review: return 'Resensi Buku';
      default: return 'Kreasi Santri';
    }
  };

  const creations = [
    { id: 1, title: 'Senja di Pesantren', author: 'Ahmad Rafli', date: '22 Okt 2023', reads: '1.2k', rating: '4.8' },
    { id: 2, title: 'Menggapai Mimpi dengan Doa', author: 'Siti Sarah', date: '18 Okt 2023', reads: '850', rating: '4.9' },
    { id: 3, title: 'Matahari di Balik Kitab', author: 'Faisal Akbar', date: '15 Okt 2023', reads: '2.1k', rating: '5.0' },
    { id: 4, title: 'Rindu dalam Doa Malam', author: 'Nurul Huda', date: '12 Okt 2023', reads: '540', rating: '4.7' },
    { id: 5, title: 'Goresan Pena Santri', author: 'Zulfa Azizah', date: '10 Okt 2023', reads: '920', rating: '4.6' },
  ];

  return (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{getTitle()}</h1>
          <p className="text-slate-500">Wadah apresiasi karya tulis dan kreativitas santri.</p>
        </div>
        <button className="bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-emerald-700 shadow-sm transition-all flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Kirim Karya Baru
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {creations.map((item) => (
          <div key={item.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 items-center hover:shadow-md transition-shadow">
            <div className="w-full md:w-32 h-32 rounded-xl bg-slate-100 flex-shrink-0 flex items-center justify-center overflow-hidden">
               <img src={`https://picsum.photos/seed/${item.id + 300}/150/150`} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-semibold text-emerald-600 uppercase">
                <span>{item.date}</span>
                <span className="w-1 h-1 bg-emerald-300 rounded-full"></span>
                <span>{item.author}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 hover:text-emerald-600 transition-colors cursor-pointer">{item.title}</h3>
              <p className="text-slate-500 text-sm line-clamp-2">
                "Setiap tetes tinta yang jatuh adalah saksi bisu perjuangan menuntut ilmu di bawah naungan langit Insan Kamil..."
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4 text-xs text-slate-400 font-medium pt-2">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {item.rating}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {item.reads} dibaca
                </span>
              </div>
            </div>
            <div className="flex gap-2">
               <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-200 transition-colors">Draft</button>
               <button className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreationsList;
