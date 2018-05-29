const Project = sequelize.define('project', {
    id: {
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
    },
    name: {
        type: Sequelize.STRING,
        notNull: true,
        max: 100
    },
    color: {
        type: Sequelize.STRING,
        is: ["^[a-z]+$",'i'],
        notNull: true,
        max: 50
    },
    isArchived: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    user_id: {
        type: Sequelize.DataTypes.UUID,
        allowNull: false,
    }
  })