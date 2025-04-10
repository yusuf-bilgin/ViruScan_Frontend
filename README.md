# 🛡️ ViruScan_Frontend

**ViruScan** — Spring Boot ve React kullanılarak geliştirilmiş bir full-stack antivirüs tarama uygulamasının **frontend** bölümüdür. 
Kullanıcılar sisteme kayıt olup giriş yaptıktan sonra, dosya yükleyerek **Windows Defender** üzerinden virüs taraması yaptırabilir. Tarama sonuçları ve dosya bilgileri sistemde saklanır ve kullanıcı arayüzü üzerinden görüntülenebilir.

This is the frontend of full-stack application I developed in 3-4 weeks using Spring Boot and React. In the backend, I execute a script file to access Windows Defender through PowerShell, scanning a requested file. The scanning result, along with information such as the uploaded file's name, size, type, and more, is then stored in the database. On the frontend, I attempted to automate this process to some extent. After users complete registration and login processes, they can upload files for virus scanning. The information about the uploaded files can be viewed in a table. User information such as passwords is hashed with SHA-256 before being stored in the database. Users with matching email and password in the 'user' table can access the 'files' table.

---

## 🚀 Özellikler

- 🧾 Kullanıcı kayıt ve giriş sistemi (SHA-256 ile şifreleme)
- 📤 Dosya yükleyerek virüs taraması yaptırma
- 🖥️ Windows Defender ile PowerShell üzerinden tarama (backend)
- 📊 Yüklenen dosyaların sonuçlarını tablo halinde görüntüleme
- 🧠 Uçtan uca otomatikleştirilmiş bir dosya tarama deneyimi
- 🛠️ React (Functional Components + Hooks)
- 📚 Axios (API bağlantısı için)

---

## 🖼️ Uygulama Akışı

1. Kullanıcı kayıt olur ve giriş yapar.
2. Giriş yapan kullanıcı bir dosya yükler.
3. Backend, PowerShell ile Windows Defender’ı çalıştırarak dosyayı tarar.
4. Tarama sonucu, dosya adı, boyutu, türü ve diğer detaylarla birlikte veritabanına kaydedilir.
5. Kullanıcı, yüklediği tüm dosyaların bilgilerini tabloda görebilir.

### 🔹 Backend (ayrı bir repoda):
- Spring Boot
- PowerShell entegrasyonu ile Windows Defender
- SHA-256 hashing (şifre güvenliği)
- PostgreSQL veritabanı

---

## 🧪 Güvenlik

- Kullanıcı parolaları SHA-256 algoritması ile hashlenerek saklanır.
- Her kullanıcı sadece kendi dosyalarına erişebilir.
- Kimlik doğrulama sonrası kullanıcılar `files` tablosuna erişebilir.
