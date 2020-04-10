/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      isAdvisor
      cometChatAuthToken
      bio
      college
      major
      credits
      classStanding
      advisingCategory {
        id
        name
        location
        description
        users {
          nextToken
        }
      }
      meetings {
        items {
          id
          date
          startTime
          endTime
          reasonForMeeting
          queryName
        }
        nextToken
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      isAdvisor
      cometChatAuthToken
      bio
      college
      major
      credits
      classStanding
      advisingCategory {
        id
        name
        location
        description
        users {
          nextToken
        }
      }
      meetings {
        items {
          id
          date
          startTime
          endTime
          reasonForMeeting
          queryName
        }
        nextToken
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      isAdvisor
      cometChatAuthToken
      bio
      college
      major
      credits
      classStanding
      advisingCategory {
        id
        name
        location
        description
        users {
          nextToken
        }
      }
      meetings {
        items {
          id
          date
          startTime
          endTime
          reasonForMeeting
          queryName
        }
        nextToken
      }
    }
  }
`;
export const createMeeting = /* GraphQL */ `
  mutation CreateMeeting(
    $input: CreateMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    createMeeting(input: $input, condition: $condition) {
      id
      date
      startTime
      endTime
      reasonForMeeting
      user {
        id
        firstName
        lastName
        email
        isAdvisor
        cometChatAuthToken
        bio
        college
        major
        credits
        classStanding
        advisingCategory {
          id
          name
          location
          description
        }
        meetings {
          nextToken
        }
      }
      queryName
    }
  }
`;
export const updateMeeting = /* GraphQL */ `
  mutation UpdateMeeting(
    $input: UpdateMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    updateMeeting(input: $input, condition: $condition) {
      id
      date
      startTime
      endTime
      reasonForMeeting
      user {
        id
        firstName
        lastName
        email
        isAdvisor
        cometChatAuthToken
        bio
        college
        major
        credits
        classStanding
        advisingCategory {
          id
          name
          location
          description
        }
        meetings {
          nextToken
        }
      }
      queryName
    }
  }
`;
export const deleteMeeting = /* GraphQL */ `
  mutation DeleteMeeting(
    $input: DeleteMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    deleteMeeting(input: $input, condition: $condition) {
      id
      date
      startTime
      endTime
      reasonForMeeting
      user {
        id
        firstName
        lastName
        email
        isAdvisor
        cometChatAuthToken
        bio
        college
        major
        credits
        classStanding
        advisingCategory {
          id
          name
          location
          description
        }
        meetings {
          nextToken
        }
      }
      queryName
    }
  }
`;
export const createAdvisingCategory = /* GraphQL */ `
  mutation CreateAdvisingCategory(
    $input: CreateAdvisingCategoryInput!
    $condition: ModelAdvisingCategoryConditionInput
  ) {
    createAdvisingCategory(input: $input, condition: $condition) {
      id
      name
      location
      description
      users {
        items {
          id
          firstName
          lastName
          email
          isAdvisor
          cometChatAuthToken
          bio
          college
          major
          credits
          classStanding
        }
        nextToken
      }
    }
  }
`;
export const updateAdvisingCategory = /* GraphQL */ `
  mutation UpdateAdvisingCategory(
    $input: UpdateAdvisingCategoryInput!
    $condition: ModelAdvisingCategoryConditionInput
  ) {
    updateAdvisingCategory(input: $input, condition: $condition) {
      id
      name
      location
      description
      users {
        items {
          id
          firstName
          lastName
          email
          isAdvisor
          cometChatAuthToken
          bio
          college
          major
          credits
          classStanding
        }
        nextToken
      }
    }
  }
`;
export const deleteAdvisingCategory = /* GraphQL */ `
  mutation DeleteAdvisingCategory(
    $input: DeleteAdvisingCategoryInput!
    $condition: ModelAdvisingCategoryConditionInput
  ) {
    deleteAdvisingCategory(input: $input, condition: $condition) {
      id
      name
      location
      description
      users {
        items {
          id
          firstName
          lastName
          email
          isAdvisor
          cometChatAuthToken
          bio
          college
          major
          credits
          classStanding
        }
        nextToken
      }
    }
  }
`;
export const createCareerResource = /* GraphQL */ `
  mutation CreateCareerResource(
    $input: CreateCareerResourceInput!
    $condition: ModelCareerResourceConditionInput
  ) {
    createCareerResource(input: $input, condition: $condition) {
      id
      name
      description
      link
      date
      location
    }
  }
`;
export const updateCareerResource = /* GraphQL */ `
  mutation UpdateCareerResource(
    $input: UpdateCareerResourceInput!
    $condition: ModelCareerResourceConditionInput
  ) {
    updateCareerResource(input: $input, condition: $condition) {
      id
      name
      description
      link
      date
      location
    }
  }
`;
export const deleteCareerResource = /* GraphQL */ `
  mutation DeleteCareerResource(
    $input: DeleteCareerResourceInput!
    $condition: ModelCareerResourceConditionInput
  ) {
    deleteCareerResource(input: $input, condition: $condition) {
      id
      name
      description
      link
      date
      location
    }
  }
`;
