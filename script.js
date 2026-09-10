// Ambil elemen dari HTML
const form = document.getElementById("Email kamu");
const nameInput = document.getElementById("Nama kamu");
const messageInput = document.getElementById("Pesan kamu...");
const output = document.getElementById("output");

// Saat form dikirim
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Biar tidak reload halaman

  const nama = nameInput.value;
  const pesan = messageInput.value;

  // Tampilkan hasil di halaman
  output.innerHTML = `
    <strong>Pesan diterima!</strong><br>
    Nama: ${nama} <br>
    Isi Pesan: ${pesan}
  `;

  // (Opsional) tampilkan juga di console browser
  console.log("Nama:", nama);
  console.log("Pesan:", pesan);

  // Reset form
  form.reset();
});
