# 🍽️ FoodHub - Recipe Management Application

> A modern full-stack web application for discovering, managing, and sharing your favorite recipes.

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![PHP](https://img.shields.io/badge/PHP-8.1-purple.svg)](https://php.net/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-orange.svg)](https://mysql.com/)
[![XAMPP](https://img.shields.io/badge/XAMPP-Ready-blue.svg)](https://www.apachefriends.org/)

## 📋 Gambaran Proyek

FoodHub adalah aplikasi web full-stack modern yang dirancang untuk manajemen dan penemuan resep. Dibangun dengan frontend React, backend PHP, dan database MySQL, aplikasi ini menyediakan platform intuitif bagi pengguna untuk mencari, menyimpan, dan mengelola resep favorit mereka.

### ✨ Fitur Utama

- **Pencarian Resep**: Integrasi dengan Spoonacular API untuk menemukan ribuan resep
- **Koleksi Pribadi**: Simpan dan atur resep favorit Anda
- **Fitur Interaktif**: Suka resep dan tambahkan komentar pribadi
- **Desain Responsif**: Dioptimalkan untuk desktop, tablet, dan perangkat mobile
- **UI Modern**: Interface yang bersih dan animasi menggunakan Bootstrap 5 dan Framer Motion
- **Operasi CRUD**: Kemampuan manajemen resep lengkap

### 🛠️ Stack Teknologi

**Frontend:**
- React 18 dengan Vite
- Bootstrap 5 untuk styling
- Framer Motion untuk animasi
- Axios untuk komunikasi API
- React Router untuk navigasi

**Backend:**
- PHP 8.1
- Database MySQL 8.0
- Arsitektur RESTful API
- CORS diaktifkan untuk cross-origin requests

**Development & Deployment:**
- XAMPP untuk Windows
- Konfigurasi berbasis environment
- Apache untuk backend API

### 🏗️ Struktur Proyek

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React Frontend │    │   PHP Backend   │    │  MySQL Database │
│   (Port 3000)   │◄──►│   (Port 8080)   │◄──►│   (Port 3306)   │
│                 │    │                 │    │                 │
│ • Components    │    │ • REST API      │    │ • recipes       │
│ • Hooks         │    │ • CORS Config   │    │ • comments      │
│ • Animations    │    │ • Input Valid.  │    │ • feedback_likes│
└─────────────────┘    └─────────────────┘    └─────────────────┘
           │                       │
           └───────────────────────┼───────────► Spoonacular API
                                   │           (External)
                                   │
                              ┌─────────┐
                              │ XAMPP  │
                              │Windows │
                              └─────────┘
```

## 🚀 Instalasi & Setup

### Prasyarat

- Node.js 18+ dan npm
- XAMPP untuk Windows
- Git

### Setup dengan XAMPP (Windows)

1. **Clone repository**:
   ```bash
   git clone <repository-url>
   cd Project_Penweb_Kelompok7
   ```

2. **Setup XAMPP**:
   - Download dan install XAMPP dari https://www.apachefriends.org/
   - Start Apache dan MySQL dari XAMPP Control Panel

3. **Setup Backend**:
   - Copy folder `recipes-api` ke `C:\xampp\htdocs\`
   - Buka phpMyAdmin di http://localhost/phpmyadmin
   - Buat database baru bernama `recipes_db`
   - Import file `recipes-api/database.sql`

4. **Konfigurasi Database**:
   Edit file `recipes-api/db.php` sesuai konfigurasi XAMPP:
   ```php
   $host = 'localhost';
   $dbname = 'recipes_db';
   $username = 'root';
   $password = ''; // Kosong untuk XAMPP default
   ```

5. **Setup Frontend**:
   ```bash
   npm install
   ```

6. **Buat file environment**:
   Buat file `.env` di root folder:
   ```bash
   VITE_API_KEY=your_spoonacular_api_key
   VITE_BACKEND_URL=http://localhost/recipes-api
   ```

7. **Jalankan aplikasi**:
   ```bash
   npm run dev
   ```

8. **Akses aplikasi**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost/recipes-api
   - phpMyAdmin: http://localhost/phpmyadmin

## 📚 Dokumentasi

Dokumentasi lengkap tersedia di folder `/docs`:

- **01-project-overview.md** - Tujuan dan fitur proyek
- **02-architecture.md** - Arsitektur sistem dan desain
- **03-database.md** - Skema database dan query
- **04-api-reference.md** - Dokumentasi API lengkap
- **05-setup-guide.md** - Instruksi instalasi dan setup
- **06-deployment.md** - Panduan deployment produksi
- **07-frontend.md** - Dokumentasi frontend React
- **08-backend.md** - Dokumentasi backend PHP
- **09-testing.md** - Strategi testing dan implementasi
- **10-presentation.md** - Material presentasi dan panduan demo

## 🔒 Fitur Keamanan

- **Validasi Input**: Semua input pengguna divalidasi dan disanitasi
- **Pencegahan SQL Injection**: Prepared statements digunakan untuk query database
- **Proteksi CORS**: Header CORS yang tepat dikonfigurasi
- **Error Handling**: Pesan error yang aman tanpa informasi sensitif
- **Sanitasi Data**: Filtering HTML dan script tag

## 🧪 Testing

Proyek ini menyertakan setup testing yang komprehensif:

```bash
# Jalankan frontend tests
npm test

# Jalankan tests dengan coverage
npm run test:coverage

# Jalankan E2E tests
npm run test:e2e
```

## 🤝 Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/fitur-keren`)
3. Commit perubahan (`git commit -m 'Tambah fitur keren'`)
4. Push ke branch (`git push origin feature/fitur-keren`)
5. Buka Pull Request

## 📄 Lisensi

Proyek ini dilisensikan di bawah MIT License - lihat file LICENSE untuk detail.

## 🙏 Acknowledgments

- **Spoonacular API** untuk data resep
- **Bootstrap** untuk komponen UI
- **Framer Motion** untuk animasi
- **React** community untuk dokumentasi yang excellent

---

*Dibangun dengan ❤️ untuk para pecinta resep di mana pun*
