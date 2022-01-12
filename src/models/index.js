// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Short, Foreign, Audiobook, Ad, Dubbing } = initSchema(schema);

export {
  Short,
  Foreign,
  Audiobook,
  Ad,
  Dubbing
};