
import React from 'react';

const ProfileView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-10 duration-700">
      <div className="relative">
        <div className="h-48 w-full bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-3xl"></div>
        <div className="absolute -bottom-12 left-8 flex items-end gap-6">
           <div className="w-32 h-32 rounded-3xl bg-white p-1 shadow-xl">
              <img src="https://picsum.photos/seed/admin/128/128" className="w-full h-full object-cover rounded-[1.25rem]" alt="Profile" />
           </div>
           <div className="mb-4">
              <h1 className="text-3xl font-bold text-slate-900">Ahmad Al-Fatih</h1>
              <p className="text-slate-500 font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                Administrator Utama
              </p>
           </div>
        </div>
      </div>

      <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
               <h3 className="font-bold text-slate-800 mb-6">Informasi Akun</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Username</label>
                    <p className="text-slate-700 font-medium">alfatih_admin</p>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                    <p className="text-slate-700 font-medium">ahmad.fatih@insankamil.edu</p>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Telepon</label>
                    <p className="text-slate-700 font-medium">+62 812-3456-7890</p>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Dibuat Pada</label>
                    <p className="text-slate-700 font-medium">12 Januari 2023</p>
                  </div>
               </div>
               <div className="mt-8 pt-6 border-t border-slate-100">
                  <button className="bg-emerald-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-emerald-700 shadow-md">Edit Profil</button>
               </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
               <h3 className="font-bold text-slate-800 mb-6">Biografi Singkat</h3>
               <p className="text-slate-600 leading-relaxed">
                  Bertanggung jawab atas integrasi sistem digital di Pesantren Insan Kamil. Fokus pada otomasi data santri dan ketersediaan sumber belajar digital melalui fitur Pustaka dan Kreasi Santri.
               </p>
            </div>
         </div>

         <div className="space-y-6">
            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
               <h4 className="font-bold text-amber-900 mb-2">Peringkat Admin</h4>
               <p className="text-amber-700 text-sm mb-4">Level Akses: Super Administrator</p>
               <div className="w-full bg-amber-200 h-2 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-amber-600"></div>
               </div>
               <p className="text-xs text-amber-600 mt-2">Akses penuh ke seluruh modul sistem.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
               <h4 className="font-bold text-slate-800 mb-4">Sesi Terakhir</h4>
               <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Chrome (Windows 11)</span>
                    <span className="font-bold text-slate-700">Aktif Sekarang</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">iPhone 13 (Safari)</span>
                    <span className="text-slate-400">2 jam yang lalu</span>
                  </div>
               </div>
               <button className="w-full mt-4 py-2 text-xs font-bold text-rose-600 border border-rose-100 rounded-lg hover:bg-rose-50">Keluar dari Semua Perangkat</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ProfileView;
