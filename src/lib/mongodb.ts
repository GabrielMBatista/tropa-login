import { MongoClient } from "mongodb";

const uri = process.env.NEXT_PUBLIC_MONGODB_URI!;

const options = {};

let client: MongoClient;

declare global {
  interface Global {
    _mongoClientPromise: Promise<MongoClient>;
  }

  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient>;
}

if (!globalThis._mongoClientPromise) {
  client = new MongoClient(uri, options);
  globalThis._mongoClientPromise = client.connect();
}

const clientExport: Promise<MongoClient> = globalThis._mongoClientPromise;

export default clientExport;
