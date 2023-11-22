const supplier = require('./controller_supplier');
const barang = require('./controller_barang');
const pembeli = require('./controller_pembeli');
const transaksi = require('./controller_transaksi');
const pembayaran = require('./controller_pembayaran');

module.exports = {
          supplier,
          barang,
          pembeli,
          transaksi,
          pembayaran
};