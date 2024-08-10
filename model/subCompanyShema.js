const mongoose = require('mongoose');


const subCompanySchema = new mongoose.Schema({
    nit: {
        type: Number,
        required: true
    },
    sCompany: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'company',
        required: true
      },
    sRazonSocial: {
        type: String,
        required: true
    },
    sTelefono: {
        type: Number,
        required: false
    },
    sDireccion: { 
        type: String,
        required: false
     },
    sFechaRegistro: {
        type: Date,
        default: Date.now
    },
    sEmail: {
        type: String,
        required: true,
        unique: true
    },
    sCiudad: {
        type: String,
        required: false
    },
    sede: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'sede',
        required: false
    }],
    sCompanyEconomicActivity: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'companyEconomicActivity',
        required: false
    }],
    sectorEconomico: {
        type: String,
        required: false,
        enum: ['Publico', 'Privado', 'Mixto']
    },
    razonIngreso: {
        type: String,
        required: true,
        enum: ['Eventual', 'Visita', 'Servicios']
    },
    fechaIngresoSistema: {
        type: Date,
        required: true,
    },
    fechaEgresoSistema: {
        type: Date,
        required: true,
    },
    logo: {
        type: String,
        required: true,
    }

});


module.exports = mongoose.model('subcompany', subCompanySchema);