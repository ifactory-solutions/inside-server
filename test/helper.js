import mongoose from 'mongoose';

process.env.NODE_ENV = 'test';

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost/test';

const config = {
  db: {
    test: MONGO_URL,
  },
  connection: null,
};

function connect() {
  return new Promise((resolve, reject) => {
    if (config.connection) {
      return resolve();
    }

    mongoose.Promise = Promise;

    const options = {
      server: {
        auto_reconnect: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000,
      },
    };

    mongoose.connect(MONGO_URL, options);

    config.connection = mongoose.connection;

    config.connection.once('open', resolve).on('error', e => {
      if (e.message.code === 'ETIMEDOUT') {
        console.log(e);

        mongoose.connect(MONGO_URL, options);
      }

      console.log(e);
      reject(e);
    });

    return undefined;
  });
}

function clearDatabase() {
  return new Promise(resolve => {
    let cont = 0;
    const max = Object.keys(mongoose.connection.collections).length;
    for (const i in mongoose.connection.collections) {
      mongoose.connection.collections[i].remove(() => {
        cont += 1;
        if (cont >= max) {
          resolve();
        }
      });
    }
  });
}

export function getContext(context) {
  return {
    ...context,
    req: {},
  };
}

export async function setupTest() {
  await connect();
  await clearDatabase();
}
