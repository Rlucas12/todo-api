const User = sequelize.define('user', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
    },
    firstname: {
        type: Sequelize.STRING,
        is: ["^[a-z]+$",'i'],
        notNull: true,
        max: 50
    },
    lastname: {
        type: Sequelize.STRING,
        is: ["^[a-z]+$",'i'],
        notNull: true,
        max: 50
    },
    email: {
        type: Sequelize.STRING,
        isEmail: true,
        notNull: true
    }
  })