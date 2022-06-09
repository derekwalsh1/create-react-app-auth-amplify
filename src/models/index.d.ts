import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class AppSettings {
  readonly id: string;
  readonly Company_Name?: string | null;
  constructor(init: ModelInit<AppSettings>);
  static copyOf(source: AppSettings, mutator: (draft: MutableModel<AppSettings>) => MutableModel<AppSettings> | void): AppSettings;
}