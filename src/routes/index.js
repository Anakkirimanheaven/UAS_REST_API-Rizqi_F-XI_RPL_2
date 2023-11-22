const router = require('express').Router();
const routeSupplier = require('./supplier');
const routeBarang = require('./barang');
const routePembeli = require('./pembeli');
const routeTransaksi = require('./transaksi');
const routePembayaran = require('./pembayaran');

router.use('/supplier', routeSupplier)
router.use('/barang', routeBarang)
router.use('/pembeli', routePembeli)
router.use('/transaksi', routeTransaksi)
router.use('/pembayaran', routePembayaran)

module.exports = router;