// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AppSettings } = initSchema(schema);

export {
  AppSettings
};