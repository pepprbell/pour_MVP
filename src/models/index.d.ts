import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ShortMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ForeignMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AudiobookMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AdMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DubbingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Short {
  readonly id: string;
  readonly Character: string;
  readonly Content: string;
  readonly Image?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Short, ShortMetaData>);
  static copyOf(source: Short, mutator: (draft: MutableModel<Short, ShortMetaData>) => MutableModel<Short, ShortMetaData> | void): Short;
}

export declare class Foreign {
  readonly id: string;
  readonly Actor: string;
  readonly Content: string;
  readonly Character: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Foreign, ForeignMetaData>);
  static copyOf(source: Foreign, mutator: (draft: MutableModel<Foreign, ForeignMetaData>) => MutableModel<Foreign, ForeignMetaData> | void): Foreign;
}

export declare class Audiobook {
  readonly id: string;
  readonly Author: string;
  readonly Book: string;
  readonly Link?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Audiobook, AudiobookMetaData>);
  static copyOf(source: Audiobook, mutator: (draft: MutableModel<Audiobook, AudiobookMetaData>) => MutableModel<Audiobook, AudiobookMetaData> | void): Audiobook;
}

export declare class Ad {
  readonly id: string;
  readonly Ad: string;
  readonly Image?: string;
  readonly Voice?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Ad, AdMetaData>);
  static copyOf(source: Ad, mutator: (draft: MutableModel<Ad, AdMetaData>) => MutableModel<Ad, AdMetaData> | void): Ad;
}

export declare class Dubbing {
  readonly id: string;
  readonly Character: string;
  readonly Content: string;
  readonly Type: string;
  readonly Image?: string;
  readonly Voice?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Dubbing, DubbingMetaData>);
  static copyOf(source: Dubbing, mutator: (draft: MutableModel<Dubbing, DubbingMetaData>) => MutableModel<Dubbing, DubbingMetaData> | void): Dubbing;
}