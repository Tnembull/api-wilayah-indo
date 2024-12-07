const express = require('express');
const router = express.Router();
const wilayahController = require('../controllers/wilayahController');

router.get('/provinsi', wilayahController.getAllProvinsi);
router.get('/kabupaten/:provinsiId', wilayahController.getKabupatenByProvinsi);
router.get('/kecamatan/:kabupatenId', wilayahController.getKecamatanByKabupaten);
router.get('/kelurahan/:kecamatanId', wilayahController.getKelurahanByKecamatan);

module.exports = router;
