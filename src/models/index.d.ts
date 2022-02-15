import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AudiobookMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
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