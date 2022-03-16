// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Dubbing, Ad, Audiobook } = initSchema(schema);

export {
  Dubbing,
  Ad,
  Audiobook
};