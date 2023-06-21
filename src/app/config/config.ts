import 'dotenv/config';
import convict from 'convict';

// Define a schema
const config = convict({
    server: {
        port: {
            doc: 'Port of the server',
            format: 'Number',
            default: 3001,
            env: 'PORT',
        },
    },
    env: {
        doc: 'The application environment.',
        format: ['production', 'beta', 'development'],
        default: 'development',
        env: 'NODE_ENV',
    },
    // ip: {
    //     doc: 'The IP address to bind.',
    //     format: 'ipaddress',
    //     default: '127.0.0.1',
    //     env: 'IP_ADDRESS',
    // },
    // port: {
    //     doc: 'The port to bind.',
    //     format: 'port',
    //     default: 8080,
    //     env: 'PORT',
    //     arg: 'port'
    // },
    db: {
        host: {
            doc: 'Database host name/IP',
            format: 'String',
            default: 'DATABASE_MONGO_URL',
            env: 'DATABASE_MONGO_URL',
        },
    },
    //     name: {
    //         doc: 'Database name',
    //         format: String,
    //         default: 'users'
    //     }
    // },
    // admins: {
    //     doc: 'Users with write access, or null to grant full access without login.',
    //     format: Array,
    //     nullable: true,
    //     default: null
    // }
});

config.validate();

export default config;