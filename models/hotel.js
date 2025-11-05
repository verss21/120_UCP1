module.exports = (sequelize, DataTypes) => {
    const Hotel = sequelize.define("Tentrem", {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipe_kamar: {
            type : DataTypes.VARCHAR,
            allowNull: true
        },
        kapasitas_tamu: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        lantai: {
            type: DataTypes.VARCHAR,
            allowNull: true
        },
        fasilitas: {
            type: DataTypes.VARCHAR,
            allowNull: true
        },
        tanggal_pesan: {
            type: DataTypes.DATE,
            allowNull: true
        }

    },{
        tableName: "Hotel",
        freezeTableName: true,
        timestamps: true
    });
    return Hotel;
};