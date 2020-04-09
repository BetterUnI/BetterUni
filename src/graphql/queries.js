/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getMeeting = /* GraphQL */ `
  query GetMeeting($id: ID!) {
    getMeeting(id: $id) {
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
export const listMeetings = /* GraphQL */ `
  query ListMeetings(
    $filter: ModelMeetingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMeetings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        }
        queryName
      }
      nextToken
    }
  }
`;
export const getAdvisingCategory = /* GraphQL */ `
  query GetAdvisingCategory($id: ID!) {
    getAdvisingCategory(id: $id) {
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
export const listAdvisingCategorys = /* GraphQL */ `
  query ListAdvisingCategorys(
    $filter: ModelAdvisingCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdvisingCategorys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        location
        description
        users {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getCareerResource = /* GraphQL */ `
  query GetCareerResource($id: ID!) {
    getCareerResource(id: $id) {
      id
      name
      description
      link
      date
      location
    }
  }
`;
export const listCareerResources = /* GraphQL */ `
  query ListCareerResources(
    $filter: ModelCareerResourceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCareerResources(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        link
        date
        location
      }
      nextToken
    }
  }
`;
export const meetingsByDate = /* GraphQL */ `
  query MeetingsByDate(
    $queryName: String
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMeetingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    meetingsByDate(
      queryName: $queryName
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        }
        queryName
      }
      nextToken
    }
  }
`;
