
import React, { useState } from 'react';

const SettingsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'general' | 'users'>('general');

  const users = [
    { id: 1, name: 'Ahmad Al-Fatih', role: 'Super Admin', email: 'ahmad@insankamil.edu', status: 'Active' },
    { id: 2, name: 'Siti Aminah', role: 'Academic Admin', email: 'siti@insankamil.edu', status: 'Active' },
    { id: 3, name: 'Ustadz Yusuf', role: 'Teacher', email: 'yusuf@insankamil.edu', status: 'Inactive' },
    { id: 4, name: 'Zulfa Azizah', role: 'Editor', email: 'zulfa@insankamil.edu', status: 'Active' },
  ];

  return (
    <div className="max-w-5xl space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Pengaturan Sistem</h1>
            <p className="text-slate-500 dark:text-slate-400">Konfigurasi operasional dan manajemen hak akses portal.</p>
        </div>
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            <button 
                onClick={() => setActiveTab('general')}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === 'general' ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-sm' : 'text-slate-500'}`}
            >
                Umum
            </button>
            <button 
                onClick={() => setActiveTab('users')}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === 'users' ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-sm' : 'text-slate-500'}`}
            >
                User & Roles
            </button>
        </div>
      </header>

      {activeTab === 'general' ? (
        <div className="grid grid-cols-1 gap-6">
            <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800 font-bold text-slate-800 dark:text-slate-200">Umum & Identitas</div>
                <div className="p-6 space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                        <h5 className="text-sm font-semibold text-slate-800 dark:text-slate-200">Nama Lembaga</h5>
                        <p className="text-xs text-slate-500">Nama resmi yang muncul di dokumen dan portal.</p>
                        </div>
                        <input type="text" defaultValue="Pesantren Insan Kamil" className="w-full md:w-64 px-4 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white rounded-lg outline-none focus:ring-2 focus:ring-emerald-500" />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-t pt-4 border-slate-50 dark:border-slate-800">
                        <div>
                        <h5 className="text-sm font-semibold text-slate-800 dark:text-slate-200">Tahun Ajaran Aktif</h5>
                        <p className="text-xs text-slate-500">Menentukan data default yang ditampilkan.</p>
                        </div>
                        <select className="w-full md:w-64 px-4 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white rounded-lg outline-none focus:ring-2 focus:ring-emerald-500">
                        <option>2023/2024 Genap</option>
                        <option selected>2024/2025 Ganjil</option>
                        </select>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800 font-bold text-slate-800 dark:text-slate-200">Keamanan & Database</div>
                <div className="p-6 flex flex-wrap gap-4">
                    <button className="px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 font-bold text-sm rounded-xl hover:bg-emerald-100">Backup Database</button>
                    <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm rounded-xl hover:bg-slate-200">Log Aktivitas</button>
                    <button className="px-4 py-2 bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400 font-bold text-sm rounded-xl hover:bg-rose-100">Wipe Cache</button>
                </div>
            </section>
        </div>
      ) : (
        <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <h3 className="font-bold text-slate-800 dark:text-white">Manajemen User</h3>
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-emerald-700">+ Tambah User</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 uppercase text-xs font-semibold">
                            <tr>
                                <th className="px-6 py-4">User</th>
                                <th className="px-6 py-4">Role</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {users.map(user => (
                                <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-emerald-600 text-xs">
                                                {user.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{user.name}</p>
                                                <p className="text-xs text-slate-500">{user.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase ${
                                            user.role === 'Super Admin' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                                            user.role === 'Academic Admin' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                                            'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                                        }`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1.5">
                                            <div className={`w-2 h-2 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-300'}`}></div>
                                            <span className="text-xs text-slate-600 dark:text-slate-400">{user.status}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-emerald-600 p-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                <h3 className="font-bold text-slate-800 dark:text-white mb-6">Permission Matrix</h3>
                <div className="space-y-4">
                    {[
                        { name: 'Akses Akademik', desc: 'Melihat dan mengubah data guru & santri', enabled: true },
                        { name: 'Kelola Pustaka', desc: 'Menambah & menghapus koleksi kitab/buku', enabled: true },
                        { name: 'Modulasi Galeri', desc: 'Publish berita dan event terbaru', enabled: false },
                        { name: 'Keuangan', desc: 'Akses laporan pembayaran SPP & Wakaf', enabled: false },
                    ].map((perm, i) => (
                        <div key={i} className="flex items-center justify-between p-3 border border-slate-100 dark:border-slate-800 rounded-xl">
                            <div>
                                <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{perm.name}</p>
                                <p className="text-xs text-slate-500">{perm.desc}</p>
                            </div>
                            <div className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${perm.enabled ? 'bg-emerald-500' : 'bg-slate-200 dark:bg-slate-800'}`}>
                                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${perm.enabled ? 'right-1' : 'left-1'}`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default SettingsView;
