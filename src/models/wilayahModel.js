const fs = require('fs');
const path = require('path');

// Fungsi untuk membaca data dari file JSON
const getData = (file) => {
  const filePath = path.join(__dirname, '../data', `${file}.json`);
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

// Ambil semua provinsi
const getProvinsi = () => getData('provinsi');

// Ambil semua kabupaten
const getKabupaten = () => getData('kabupaten');

// Ambil kabupaten berdasarkan id provinsi
const getKabupatenByProvinsiId = (provinsiId) => {
  const kabupaten = getKabupaten();
  return kabupaten.filter(k => k.provinsiId === provinsiId);
};

// Ambil semua kecamatan
const getKecamatan = () => getData('kecamatan');

// Ambil kecamatan berdasarkan id kabupaten
const getKecamatanByKabupatenId = (kabupatenId) => {
  const kecamatan = getKecamatan();
  return kecamatan.filter(k => k.kabupatenId === kabupatenId);
};

// Ambil semua kelurahan
const getKelurahan = () => getData('kelurahan');

// Ambil kelurahan berdasarkan id kecamatan
const getKelurahanByKecamatanId = (kecamatanId) => {
  const kelurahan = getKelurahan();
  return kelurahan.filter(k => k.kecamatanId === kecamatanId);
};

module.exports = {
  getProvinsi,
  getKabupaten,
  getKabupatenByProvinsiId,
  getKecamatan,
  getKecamatanByKabupatenId,
  getKelurahan,
  getKelurahanByKecamatanId,
};
