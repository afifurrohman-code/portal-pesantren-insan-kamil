
import React, { useState } from 'react';

const RegistrationForm: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-4xl mx-auto animate-in slide-in-from-top-10 duration-700">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Pendaftaran Santri Baru</h1>
        <p className="text-slate-500 mt-2">Tahun Ajaran 2024/2025. Silakan lengkapi formulir di bawah ini.</p>
      </div>

      {/* Progress Stepper */}
      <div className="flex items-center justify-center mb-10">
        {[1, 2, 3].map((s) => (
          <React.Fragment key={s}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${step >= s ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
              {s}
            </div>
            {s < 3 && <div className={`w-20 h-1 transition-colors ${step > s ? 'bg-emerald-600' : 'bg-slate-200'}`} />}
          </React.Fragment>
        ))}
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
        <div className="p-8 lg:p-12">
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-800 border-b pb-4">Data Pribadi Calon Santri</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Nama Lengkap</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Masukkan nama lengkap..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">NIK (Sesuai KK)</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="16 digit NIK..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Tempat Lahir</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Contoh: Jakarta" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Tanggal Lahir</label>
                  <input type="date" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-slate-700">Alamat Lengkap</label>
                  <textarea rows={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Jalan, RT/RW, Kecamatan, Kota/Kabupaten..."></textarea>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-800 border-b pb-4">Data Orang Tua / Wali</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Nama Ayah</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Nama Ibu</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Pekerjaan Wali</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">No. WhatsApp Aktif</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="08xxxxxx" />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8 text-center py-10">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                 </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Siap untuk Mengirim?</h3>
              <p className="text-slate-500 max-w-md mx-auto">Pastikan semua data yang diisi telah benar. Kami akan memproses verifikasi dalam 3x24 jam kerja.</p>
              
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-amber-800 text-sm text-left">
                 <strong>Penting:</strong> Setelah menekan tombol kirim, Anda tidak dapat mengubah data secara mandiri. Perubahan data harus melalui admin pusat.
              </div>
            </div>
          )}

          <div className="mt-12 flex justify-between">
            {step > 1 ? (
              <button 
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 border border-slate-200 rounded-xl text-slate-600 font-bold hover:bg-slate-50"
              >
                Kembali
              </button>
            ) : <div />}
            
            <button 
              onClick={() => {
                if(step < 3) setStep(step + 1);
                else alert('Pendaftaran Terkirim!');
              }}
              className="px-10 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all"
            >
              {step === 3 ? 'Kirim Pendaftaran' : 'Lanjutkan'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
