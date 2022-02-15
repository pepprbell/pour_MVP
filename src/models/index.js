// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Audiobook } = initSchema(schema);

export {
  Audiobook
};