'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('lote_de_entradas','ativo',{
                allowNull: false,
                type: Sequelize.BOOLEAN
            }
        );
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('lote_de_entradas', 'ativo');
    }
};