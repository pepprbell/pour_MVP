import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AdvertisementMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AnimationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GameMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Advertisement {
  readonly id: string;
  readonly AdName: string;
  readonly Voice?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Advertisement, AdvertisementMetaData>);
  static copyOf(source: Advertisement, mutator: (draft: MutableModel<Advertisement, AdvertisementMetaData>) => MutableModel<Advertisement, AdvertisementMetaData> | void): Advertisement;
}

export declare class Animation {
  readonly id: string;
  readonly CharacterName: string;
  readonly AnimationName: string;
  readonly Image?: string;
  readonly Voice?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Animation, AnimationMetaData>);
  static copyOf(source: Animation, mutator: (draft: MutableModel<Animation, AnimationMetaData>) => MutableModel<Animation, AnimationMetaData> | void): Animation;
}

export declare class Game {
  readonly id: string;
  readonly CharacterName: string;
  readonly GameName: string;
  readonly Company?: string;
  readonly Type?: string;
  readonly Image?: string;
  readonly Voice?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Game, GameMetaData>);
  static copyOf(source: Game, mutator: (draft: MutableModel<Game, GameMetaData>) => MutableModel<Game, GameMetaData> | void): Game;
}