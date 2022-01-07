/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAdvertisement = /* GraphQL */ `
  mutation CreateAdvertisement(
    $input: CreateAdvertisementInput!
    $condition: ModelAdvertisementConditionInput
  ) {
    createAdvertisement(input: $input, condition: $condition) {
      id
      AdName
      Voice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAdvertisement = /* GraphQL */ `
  mutation UpdateAdvertisement(
    $input: UpdateAdvertisementInput!
    $condition: ModelAdvertisementConditionInput
  ) {
    updateAdvertisement(input: $input, condition: $condition) {
      id
      AdName
      Voice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAdvertisement = /* GraphQL */ `
  mutation DeleteAdvertisement(
    $input: DeleteAdvertisementInput!
    $condition: ModelAdvertisementConditionInput
  ) {
    deleteAdvertisement(input: $input, condition: $condition) {
      id
      AdName
      Voice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createAnimation = /* GraphQL */ `
  mutation CreateAnimation(
    $input: CreateAnimationInput!
    $condition: ModelAnimationConditionInput
  ) {
    createAnimation(input: $input, condition: $condition) {
      id
      CharacterName
      AnimationName
      Image
      Voice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAnimation = /* GraphQL */ `
  mutation UpdateAnimation(
    $input: UpdateAnimationInput!
    $condition: ModelAnimationConditionInput
  ) {
    updateAnimation(input: $input, condition: $condition) {
      id
      CharacterName
      AnimationName
      Image
      Voice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAnimation = /* GraphQL */ `
  mutation DeleteAnimation(
    $input: DeleteAnimationInput!
    $condition: ModelAnimationConditionInput
  ) {
    deleteAnimation(input: $input, condition: $condition) {
      id
      CharacterName
      AnimationName
      Image
      Voice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      id
      CharacterName
      GameName
      Company
      Type
      Image
      Voice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
      id
      CharacterName
      GameName
      Company
      Type
      Image
      Voice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
      id
      CharacterName
      GameName
      Company
      Type
      Image
      Voice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
