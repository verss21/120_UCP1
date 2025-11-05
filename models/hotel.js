module.exports = (sequelize, DataTypes) => {
    const Hotel = sequelize.define("Hotel", {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipe_kamar: {
            type : DataTypes.STRING,
            allowNull: false
        },
        kapasitas_tamu: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        lantai: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fasilitas: {
            type: DataTypes.STRING,
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
