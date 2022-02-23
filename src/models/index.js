// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Ad, Audiobook } = initSchema(schema);

export {
  Ad,
  Audiobook
};