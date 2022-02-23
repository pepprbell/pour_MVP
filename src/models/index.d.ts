import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AdMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AudiobookMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Ad {
  readonly id: string;
  readonly Link?: string;
  readonly Ad: string;
  readonly Date?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Ad, AdMetaData>);
  static copyOf(source: Ad, mutator: (draft: MutableModel<Ad, AdMetaData>) => MutableModel<Ad, AdMetaData> | void): Ad;
}

export declare class Audiobook {
  readonly id: string;
  readonly Author: string;
  readonly Book: string;
  readonly Image?: string;
  readonly Link?: string;
  readonly Date?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Audiobook, AudiobookMetaData>);
  static copyOf(source: Audiobook, mutator: (draft: MutableModel<Audiobook, AudiobookMetaData>) => MutableModel<Audiobook, AudiobookMetaData> | void): Audiobook;
}