
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Jan', santri: 400, pendaftar: 240 },
  { name: 'Feb', santri: 420, pendaftar: 200 },
  { name: 'Mar', santri: 435, pendaftar: 310 },
  { name: 'Apr', santri: 450, pendaftar: 450 },
  { name: 'Mei', santri: 460, pendaftar: 300 },
  { name: 'Jun', santri: 470, pendaftar: 520 },
];

const StatCard: React.FC<{ label: string, value: string, icon: React.ReactNode, color: string, trend: string }> = ({ label, value, icon, color, trend }) => (
  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-xl ${color}`}>
        {icon}
      </div>
      <span className={`text-xs font-semibold ${trend.startsWith('+') ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20' : 'text-rose-600 bg-rose-50 dark:bg-rose-900/20'} px-2 py-1 rounded-full`}>
        {trend}
      </span>
    </div>
    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{label}</p>
    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mt-1">{value}</h3>
  </div>
);

const Dashboard: React.FC = () => {
  const isDark = document.documentElement.classList.contains('dark');
  const chartColor = isDark ? '#10b981' : '#059669';

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Assalamu'alaikum, Admin!</h1>
        <p className="text-slate-500 dark:text-slate-400">Ringkasan aktivitas Pesantren Insan Kamil hari ini.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          label="Total Santri" 
          value="1,240" 
          trend="+12%" 
          color="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600" 
          icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
        />
        <StatCard 
          label="Total Pengajar" 
          value="86" 
          trend="+2%" 
          color="bg-blue-100 dark:bg-blue-900/30 text-blue-600" 
          icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>}
        />
        <StatCard 
          label="Pendaftar Baru" 
          value="48" 
          trend="+34%" 
          color="bg-amber-100 dark:bg-amber-900/30 text-amber-600" 
          icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />
        <StatCard 
          label="Kreasi Santri" 
          value="312" 
          trend="+8%" 
          color="bg-purple-100 dark:bg-purple-900/30 text-purple-600" 
          icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="font-bold text-lg mb-6 text-slate-800 dark:text-white">Pertumbuhan Santri</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorSantri" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={chartColor} stopOpacity={0.1}/>
                    <stop offset="95%" stopColor={chartColor} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? "#1e293b" : "#f1f5f9"} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{borderRadius: '12px', background: isDark ? '#0f172a' : '#fff', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                />
                <Area type="monotone" dataKey="santri" stroke={chartColor} fillOpacity={1} fill="url(#colorSantri)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="font-bold text-lg mb-6 text-slate-800 dark:text-white">Pendaftaran Bulanan</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? "#1e293b" : "#f1f5f9"} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: isDark ? '#1e293b' : '#f8fafc'}}
                  contentStyle={{borderRadius: '12px', background: isDark ? '#0f172a' : '#fff', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="pendaftar" fill="#fbbf24" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden mb-6">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <h3 className="font-bold text-lg text-slate-800 dark:text-white">Aktivitas Terbaru</h3>
          <button className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold hover:underline">Lihat Semua</button>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {[
            { user: 'Siti Aminah', action: 'mendaftar sebagai santri baru', time: '5 menit yang lalu', avatar: '1' },
            { user: 'Ust. Zulkifli', action: 'mengunggah modul Kitab Kuning baru', time: '1 jam yang lalu', avatar: '2' },
            { user: 'Fathur Rahman', action: 'menerbitkan cerpen "Cahaya di Balik Jendela"', time: '3 jam yang lalu', avatar: '3' },
          ].map((act, i) => (
            <div key={i} className="p-4 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <img src={`https://picsum.photos/seed/${act.avatar}/40/40`} className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700" alt="" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-900 dark:text-slate-200">
                  <span className="font-semibold">{act.user}</span> {act.action}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">{act.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
