
import React from 'react';

interface AcademicTableProps {
  type: 'teachers' | 'students';
}

const AcademicTable: React.FC<AcademicTableProps> = ({ type }) => {
  const isTeacher = type === 'teachers';
  const title = isTeacher ? 'Daftar Pengajar' : 'Daftar Santri';
  const subtitle = isTeacher ? 'Manajemen asatidz dan pengajar Pesantren Insan Kamil.' : 'Data induk santri yang terdaftar secara aktif.';

  const data = isTeacher ? [
    { id: 1, name: 'KH. Abdullah Syukri', role: 'Pengasuh / Fiqh', status: 'Aktif', join: '2010' },
    { id: 2, name: 'Ust. Ahmad Dahlan', role: 'Nahwu Shorof', status: 'Aktif', join: '2015' },
    { id: 3, name: 'Ustzh. Khadijah', role: 'Tahfidz Al-Qur\'an', status: 'Cuti', join: '2018' },
    { id: 4, name: 'Ust. Hasan Basri', role: 'Aqidah Akhlak', status: 'Aktif', join: '2012' },
    { id: 5, name: 'Ust. Ali Murtadho', role: 'Bahasa Arab', status: 'Aktif', join: '2020' },
  ] : [
    { id: 1, name: 'Muhammad Alif', role: 'Kelas 12 - A', status: 'Aktif', join: '2021' },
    { id: 2, name: 'Ahmad Faisal', role: 'Kelas 11 - C', status: 'Aktif', join: '2022' },
    { id: 3, name: 'Siti Maryam', role: 'Kelas 10 - B', status: 'Aktif', join: '2023' },
    { id: 4, name: 'Ibrahim Khalil', role: 'Kelas 12 - B', status: 'Lulus', join: '2020' },
    { id: 5, name: 'Umar Bakri', role: 'Kelas 10 - A', status: 'Aktif', join: '2023' },
  ];

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
          <p className="text-slate-500">{subtitle}</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition-colors font-medium">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Tambah {isTeacher ? 'Pengajar' : 'Santri'}
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Cari nama..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
            />
            <svg className="w-4 h-4 absolute left-3 top-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div className="flex gap-2">
            <select className="border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600 outline-none">
              <option>Status: Semua</option>
              <option>Aktif</option>
              <option>Non-Aktif</option>
            </select>
            <button className="border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filter
            </button>
          </div>
        </div>

        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-semibold tracking-wider">
            <tr>
              <th className="px-6 py-4">Nama Lengkap</th>
              <th className="px-6 py-4">{isTeacher ? 'Mata Pelajaran' : 'Kelas / Kelompok'}</th>
              <th className="px-6 py-4">Tahun Masuk</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={`https://picsum.photos/seed/${item.id + (isTeacher ? 100 : 200)}/40/40`} className="w-10 h-10 rounded-full border border-slate-100 shadow-sm" alt="" />
                    <span className="font-medium text-slate-900">{item.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-600 text-sm">{item.role}</td>
                <td className="px-6 py-4 text-slate-600 text-sm">{item.join}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                    item.status === 'Aktif' ? 'bg-emerald-100 text-emerald-700' : 
                    item.status === 'Lulus' ? 'bg-blue-100 text-blue-700' : 'bg-rose-100 text-rose-700'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-emerald-600">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-rose-600">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500">
          <p>Menampilkan 1 - 5 dari 124 data</p>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-200 rounded bg-white hover:bg-slate-100">Sebelumnya</button>
            <button className="px-3 py-1 bg-emerald-600 text-white rounded">1</button>
            <button className="px-3 py-1 border border-slate-200 rounded bg-white hover:bg-slate-100">2</button>
            <button className="px-3 py-1 border border-slate-200 rounded bg-white hover:bg-slate-100">Selanjutnya</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicTable;
