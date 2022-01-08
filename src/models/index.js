// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Short, Foreign, Audiobook, Advertisement, Dubbing } = initSchema(schema);

export {
  Short,
  Foreign,
  Audiobook,
  Advertisement,
  Dubbing
};