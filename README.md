# lumoshive-academy-batch1-go
This repo is contain all of my project from lumoshive academy bootcamp batch 1 as backend developer (go lang)

Game Project Scratch : Flappy Bird 
**Tentang Game. **
Game “Flappy Bird” adalah permainan sederhana namun adiktif dimana pemain 
mengendalikan burung yang terbang melewati serangkaian rintangan pipa. Pemain harus 
menekan tombol space untuk membuat burung melompat ke atas, sementara gravitasi 
terus menarik ke bawah. Tujuan game ini adalah menjaga burung tetap terbang melewati 
sela-sela pipa untuk mendapatkan 1 skor setelah melewatinya tanpa menabraknya atau 
jatuh ke tanah. 
Dalam game ini, pipa dari atas dan bawah terus muncul dari kanan layer menuju 
sisi kiri layer dengan kecepatan konstan dengan panjang pipa atas yang berbeda-beda. 
Saat mencapai poin tertentu, akan ada perubahan pada warna dan ukuran burung dan 
bentuk dari pipa. Tantangan utama dari game ini adalah mengatur waktu dan ritme 
gerakan burung untuk memastikan ia melewati setiap celah pipa dengan selamat. 
**Dokumentasi. **
1. Sprite. 
• Burung. 
Merupakan sprite utama dama game ini yang diberikan efek 
melompat jika pemain menekan tombol space. Sprite ini memiliki 3 costume 
yang berbeda dari warna dan detail khusus. 
• Pipa. 
Terdapat 2 sprite pipa yang berada di atas dan bawah. Untuk 
panjang pipa atas bersifat dinamis untuk memberi celah yang berbeda 
untuk burung lewati. Sprite ini berulang kali muncul dari kanan ke kiri layer 
dan memiliki beberapa bentuk yang berbeda yang dapat mempengaruh 
jarak antara 2 pipa. 
• Latar belakang. 
Latar belakang menggambarkan langit biru dan tanah di bawahnya, 
memberikan konteks visual yang jelas untuk permainan.. 
2. Logika Game. 
• Kontrol Gerakan. 
Game dimulai saat pemain menekan tombol space dan harus 
menjaga posisi burung dengan menekan tombol yang sama agar tidak 
mengenai pipa atau tahan. 
• Gravitasi dan Melompat. 
Gravitasi disimulasikan dengan menambah nilai negative secara 
bertahap pada posisi y burung, sementara melompat dilakukan dengan 
menambah nilai positif pada posisi y.  
• Gerakan Pipa. 
Pipa muncul dari kanan layer dan bergerak ke arah kiri secara 
berulang kali saat pemain menekan tombol space hingga burung 
menyentuh pipa atau tanah. 
• Bermain Ulang. 
Saat permainan berakhir, akan muncul tombol bermain ulang yang 
jika di klik, permainan akan berjalan kembali dengan skor yang dimulai dari 
angka nol 
• Keluar dari permainan. 
Saat permainan berakhir, akan muncul tombol keluar yang jika diklik, 
pemain akan keluar dari permainan dan mematikan program. 
3. Kondisi Kalah. 
Pemain akan kalah jika burung menyentuh salah satu pipa atau tanah. Saat 
kondisi kalah, permainan berhenti dan menampilkan kata “game over”, skor terbaik 
pemain, tombol untuk bermain ulang dan tombol untuk keluar dari permainan. 
4. Pencatatan Skor. 
• Setiap kali burung berhasil melewati 1 set pipa, skor bermain akan 
bertambah 1 poin yang akan ditampilkan selama permainan masih aktif. 
• Skor terbaik akan muncul setiap pemain mengalami kekalahan. Jika skor 
terakhir main lebih besar dari skor terbaik yang tercatat, skor terbaik akan 
terganti dan ada keterangan “new best”. 
5. Variable dan Block yang Digunakan. 
• Posisi x : untuk mengatur posisi pipa yang bergerak dari kanan ke kiri. 
• Posisi y : untuk mengatur posisi vertical burung. 
• Switch costume : untuk mengubah costume dari sprite. 
• Score : untuk mencatat skor selama permainan. 
• Best score : untuk mencatat skore terbaik selama permainan. 
• Broadcast start game : trigger untuk memulai game saat pemain menekan 
tombol space. 
• Broadcast game over : trigger untuk menghentikan permainan sementara. 
• Variable game over : perkondisian saat menerima trigger game over. 
• Quit : trigger untuk menghentikan program secara keseluruhan. 
• Show : block look untuk menampilkan sprite. 
• Hide : block look untuk menyembunyikan sprite. 
• Block control : digunakan untuk mengelola kondisi permainan seperti 
melompat, gravitasi, tabrakan dan gerakan pipa. 
• Block Event : digunakan untuk mengelola trigger broadcast. 
• Block Sound : digunakan untuk menambah backsound saat permainan 
dimulai dan saat pemain menekan spasi atau menabrak pipa atau tanah. 
• Block Sensor : digunakan saat pemain menekan spasi dan mendeteksi 
burung apakah menyentuh pipa atau tanah.  
6. Peningkatan (Level). 
• Pipa bagian atas memiliki panjang atau posisi y yang dinamis yang akan 
mempengaruhi ukuran celah yang akan di lewati burung. 
• Dimulai pada skor 10, costume dari burung akan berubah dan akan ada 
penambahan ukuran dari burung sebanyak 2x. Lalu dimulai skor 30, ukuran 
burung akan menetap di ukuran terakhir dan akan terus berganti costume 
selama 5 detik. 
• Dimulai pada skor 15, pipa atas akan berubah bentuk yang akan 
mempengaruhi celah yang akan dilewati burung. Dan pada skor tertentu 
pipa terus berubah bentuk dalam interval waktu 3 detik. 
• Dimulai pada skor 17, pipa bawah akan berubah bentuk yang akan 
mempengaruhi celah yang akan dilewati burung. Dan pada skor tertentu 
pipa terus berubah bentuk dalam interval waktu 3 detik. 
7. Catatan Teknis. 
Proyek ini dibuat menggunakan Scratch versi .sb3, yang dapat dibuka dan 
dimodifikasi di editor Scratch online atau aplikasi Scratch offline. Semua sprite dan 
skrip disusun menggunakan antarmuka drag-and-drop yang intuitif. 
