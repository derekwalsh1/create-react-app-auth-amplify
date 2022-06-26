import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum GenderEnum {
  BOYS = "BOYS",
  GIRLS = "GIRLS",
  BOTH = "BOTH"
}

export enum SelectedViewEnum {
  DASHBOARD = "DASHBOARD",
  COACHES = "COACHES",
  MANAGE_ACTIVITY = "MANAGE_ACTIVITY",
  MANAGE_POSTS = "MANAGE_POSTS",
  CONTACT = "CONTACT"
}



export declare class EventLevel {
  readonly id: string;
  readonly Name?: string | null;
  readonly Description?: string | null;
  constructor(init: ModelInit<EventLevel>);
  static copyOf(source: EventLevel, mutator: (draft: MutableModel<EventLevel>) => MutableModel<EventLevel> | void): EventLevel;
}

export declare class EventGender {
  readonly id: string;
  readonly Title?: string | null;
  readonly Description?: string | null;
  constructor(init: ModelInit<EventGender>);
  static copyOf(source: EventGender, mutator: (draft: MutableModel<EventGender>) => MutableModel<EventGender> | void): EventGender;
}

export declare class EventType {
  readonly id: string;
  readonly Title?: string | null;
  readonly Description?: string | null;
  constructor(init: ModelInit<EventType>);
  static copyOf(source: EventType, mutator: (draft: MutableModel<EventType>) => MutableModel<EventType> | void): EventType;
}

export declare class Event {
  readonly id: string;
  readonly Title?: string | null;
  readonly Description?: string | null;
  readonly EventType?: EventType | null;
  readonly EventGender?: EventGender | null;
  readonly EventLevel?: EventLevel | null;
  constructor(init: ModelInit<Event>);
  static copyOf(source: Event, mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void): Event;
}

export declare class CoachQualifications {
  readonly id: string;
  readonly Title?: string | null;
  readonly Description?: string | null;
  readonly coachlistID: string;
  constructor(init: ModelInit<CoachQualifications>);
  static copyOf(source: CoachQualifications, mutator: (draft: MutableModel<CoachQualifications>) => MutableModel<CoachQualifications> | void): CoachQualifications;
}

export declare class CoachList {
  readonly id: string;
  readonly FirstName?: string | null;
  readonly LastName?: string | null;
  readonly Email?: string | null;
  readonly Phone1?: string | null;
  readonly Phone2?: string | null;
  readonly Qualifications?: (string | null)[] | null;
  readonly Experience?: (string | null)[] | null;
  readonly Image?: string | null;
  readonly CoachQualifications?: (CoachQualifications | null)[] | null;
  constructor(init: ModelInit<CoachList>);
  static copyOf(source: CoachList, mutator: (draft: MutableModel<CoachList>) => MutableModel<CoachList> | void): CoachList;
}

export declare class CurrentViewInfo {
  readonly id: string;
  readonly SelectedView?: SelectedViewEnum | keyof typeof SelectedViewEnum | null;
  constructor(init: ModelInit<CurrentViewInfo>);
  static copyOf(source: CurrentViewInfo, mutator: (draft: MutableModel<CurrentViewInfo>) => MutableModel<CurrentViewInfo> | void): CurrentViewInfo;
}

export declare class Activities {
  readonly id: string;
  readonly Title?: string | null;
  readonly Description?: string | null;
  readonly Cost?: number | null;
  readonly Gender?: GenderEnum | keyof typeof GenderEnum | null;
  constructor(init: ModelInit<Activities>);
  static copyOf(source: Activities, mutator: (draft: MutableModel<Activities>) => MutableModel<Activities> | void): Activities;
}

export declare class AppSettings {
  readonly id: string;
  readonly CompanyName?: string | null;
  readonly CompanyPhone?: string | null;
  readonly CompanyDescriptionShort?: string | null;
  readonly CompanyDescriptionLong?: string | null;
  readonly Logo1?: string | null;
  constructor(init: ModelInit<AppSettings>);
  static copyOf(source: AppSettings, mutator: (draft: MutableModel<AppSettings>) => MutableModel<AppSettings> | void): AppSettings;
}