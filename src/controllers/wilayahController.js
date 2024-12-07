const wilayahModel = require('../models/wilayahModel');

const getAllProvinsi = (req, res) => {
  const provinsi = wilayahModel.getProvinsi();
  res.json(provinsi);
};

const getKabupatenByProvinsi = (req, res) => {
  const provinsiId = parseInt(req.params.provinsiId, 10);
  const kabupaten = wilayahModel.getKabupatenByProvinsiId(provinsiId);
  if (kabupaten.length === 0) {
    return res.status(404).json({ message: 'Kabupaten tidak ditemukan untuk provinsi ini.' });
  }
  res.json(kabupaten);
};

const getKecamatanByKabupaten = (req, res) => {
  const kabupatenId = parseInt(req.params.kabupatenId, 10);
  const kecamatan = wilayahModel.getKecamatanByKabupatenId(kabupatenId);
  if (kecamatan.length === 0) {
    return res.status(404).json({ message: 'Kecamatan tidak ditemukan untuk kabupaten ini.' });
  }
  res.json(kecamatan);
};

const getKelurahanByKecamatan = (req, res) => {
  const kecamatanId = parseInt(req.params.kecamatanId, 10);
  const kelurahan = wilayahModel.getKelurahanByKecamatanId(kecamatanId);
  if (kelurahan.length === 0) {
    return res.status(404).json({ message: 'Kelurahan tidak ditemukan untuk kecamatan ini.' });
  }
  res.json(kelurahan);
};

module.exports = {
  getAllProvinsi,
  getKabupatenByProvinsi,
  getKecamatanByKabupaten,
  getKelurahanByKecamatan,
};
