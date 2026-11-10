# Kalkulator Usia Bayi

Aplikasi Laravel + Vue.js sederhana untuk menghitung usia bayi dalam total bulan.

## Menjalankan di Laragon

1. Pastikan PHP, Composer, dan Node.js sudah tersedia.
2. Jalankan `composer install`.
3. Salin `.env.example` menjadi `.env`, lalu jalankan `php artisan key:generate`.
4. Jalankan `npm install` dan `npm run build`.
5. Buka folder proyek melalui Laragon, atau jalankan `php artisan serve`.

Perhitungan memakai bulan penuh: bila tanggal pada bulan berjalan belum mencapai tanggal lahir, satu bulan belum dihitung. Hasil selalu ditampilkan sebagai total bulan, bukan gabungan tahun dan bulan.
