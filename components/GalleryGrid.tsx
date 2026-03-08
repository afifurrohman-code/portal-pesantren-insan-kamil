
import React from 'react';

interface GalleryGridProps {
  type: 'news' | 'extracurricular';
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ type }) => {
  const isNews = type === 'news';
  const title = isNews ? 'Berita & Kegiatan' : 'Ekstrakurikuler';
  const subtitle = isNews ? 'Kumpulan warta terbaru seputar Pesantren Insan Kamil.' : 'Berbagai wadah pengembangan diri santri di luar jam akademik.';

  const items = isNews ? [
    { id: 1, title: 'Kunjungan Syekh dari Al-Azhar Mesir', date: '20 Okt 2023', category: 'Event', image: '10' },
    { id: 2, title: 'Santri Insan Kamil Juara MTQ Nasional', date: '15 Okt 2023', category: 'Prestasi', image: '11' },
    { id: 3, title: 'Pembukaan Semester Ganjil 2023/2024', date: '10 Okt 2023', category: 'Akademik', image: '12' },
    { id: 4, title: 'Pembangunan Gedung Perpustakaan Baru', date: '05 Okt 2023', category: 'Fasilitas', image: '13' },
    { id: 5, title: 'Seminar Ekonomi Syariah & Digital', date: '01 Okt 2023', category: 'Pendidikan', image: '14' },
    { id: 6, title: 'Wisuda Huffadz 30 Juz Angkatan ke-10', date: '25 Sep 2023', category: 'Event', image: '15' },
  ] : [
    { id: 1, title: 'Panahan (Archery)', count: '45 Santri', category: 'Olahraga', image: '20' },
    { id: 2, title: 'Hadrah & Rebana', count: '30 Santri', category: 'Seni Budaya', image: '21' },
    { id: 3, title: 'Klub Robotik', count: '15 Santri', category: 'Sains & Teknologi', image: '22' },
    { id: 4, title: 'Pramuka Penggalang', count: '120 Santri', category: 'Kepanduan', image: '23' },
    { id: 5, title: 'Beladiri Tapak Suci', count: '60 Santri', category: 'Olahraga', image: '24' },
    { id: 6, title: 'Kaligrafi (Khath)', count: '25 Santri', category: 'Seni Budaya', image: '25' },
  ];

  return (
    <div className="space-y-8 animate-in zoom-in-95 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
          <p className="text-slate-500">{subtitle}</p>
        </div>
        <div className="flex gap-2">
           <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-slate-50">Filter Kategori</button>
           <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-emerald-700 shadow-sm">+ Tambah {isNews ? 'Berita' : 'Ekskul'}</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={`https://picsum.photos/seed/${item.image}/600/400`} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase shadow-sm">
                  {item.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-xs text-slate-400 gap-2 mb-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {isNews ? (item as any).date : (item as any).count}
              </div>
              <h3 className="font-bold text-lg text-slate-800 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm mt-2 line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id facilisis elit. Mauris ut neque sit amet dui interdum dictum.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
                <button className="text-emerald-600 font-semibold text-sm hover:underline">Baca Selengkapnya</button>
                <div className="flex gap-2">
                   <button className="p-2 bg-slate-100 rounded-lg text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                   </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
