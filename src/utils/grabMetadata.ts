import clientPromise from './mongodb';
import { MongoClient } from 'mongodb';

export default async function grabMetadata() {
  try {
    const client: MongoClient = await clientPromise;
    const database = client.db('assets');
    const metadataCollection = database.collection('metadata');
    const query = {};
    const options = {
      // Only returns the fields from the FundForm interface
      projection: { _id: 1 },
    };
    const metadata = await metadataCollection
      .find(query, options)
      .sort({ quantity: 1 })
      .limit(1000)
      .toArray();
    // console.log(fund);
    return JSON.parse(JSON.stringify(metadata));
  } catch (err) {
    console.log(err);
  }
}
