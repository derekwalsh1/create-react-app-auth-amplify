// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const GenderEnum = {
  "BOYS": "BOYS",
  "GIRLS": "GIRLS",
  "BOTH": "BOTH"
};

const SelectedViewEnum = {
  "DASHBOARD": "DASHBOARD",
  "COACHES": "COACHES",
  "MANAGE_ACTIVITY": "MANAGE_ACTIVITY",
  "MANAGE_POSTS": "MANAGE_POSTS",
  "CONTACT": "CONTACT"
};

const { EventLevel, EventGender, EventType, Event, CoachQualifications, CoachList, CurrentViewInfo, Activities, AppSettings } = initSchema(schema);

export {
  EventLevel,
  EventGender,
  EventType,
  Event,
  CoachQualifications,
  CoachList,
  CurrentViewInfo,
  Activities,
  AppSettings,
  GenderEnum,
  SelectedViewEnum
};