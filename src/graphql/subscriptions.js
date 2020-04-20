/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateMeeting = /* GraphQL */ `
  subscription OnCreateMeeting {
    onCreateMeeting {
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
      advisorUser {
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
export const onUpdateMeeting = /* GraphQL */ `
  subscription OnUpdateMeeting {
    onUpdateMeeting {
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
      advisorUser {
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
export const onDeleteMeeting = /* GraphQL */ `
  subscription OnDeleteMeeting {
    onDeleteMeeting {
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
      advisorUser {
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
export const onCreateAdvisingCategory = /* GraphQL */ `
  subscription OnCreateAdvisingCategory {
    onCreateAdvisingCategory {
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
export const onUpdateAdvisingCategory = /* GraphQL */ `
  subscription OnUpdateAdvisingCategory {
    onUpdateAdvisingCategory {
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
export const onDeleteAdvisingCategory = /* GraphQL */ `
  subscription OnDeleteAdvisingCategory {
    onDeleteAdvisingCategory {
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
export const onCreateCareerResource = /* GraphQL */ `
  subscription OnCreateCareerResource {
    onCreateCareerResource {
      id
      name
      description
      link
      date
      location
    }
  }
`;
export const onUpdateCareerResource = /* GraphQL */ `
  subscription OnUpdateCareerResource {
    onUpdateCareerResource {
      id
      name
      description
      link
      date
      location
    }
  }
`;
export const onDeleteCareerResource = /* GraphQL */ `
  subscription OnDeleteCareerResource {
    onDeleteCareerResource {
      id
      name
      description
      link
      date
      location
    }
  }
`;
