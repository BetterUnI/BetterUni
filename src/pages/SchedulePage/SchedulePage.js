import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import { API, graphqlOperation } from "aws-amplify";
import { listAdvisingCategorys as ListAdvisingCategories } from "../../graphql/queries";
import AdvisorList from "../../components/AdvisorList/AdvisorList";
import CategoryList from "../../components/CategoryList/CategoryList";

const advisors = [
  {
    id: 0,
    name: "Sarah Parker",
    advisingCategory: "CST Advising",
    url: "images/avatars/avatar_2.png"
  },
  {
    id: 1,
    name: "Jack Doe",
    advisingCategory: "CST Advising",
    url: "images/avatars/avatar_1.png"
  },
  {
    id: 2,
    name: "Jane Smith",
    advisingCategory: "CST Advising",
    url: "images/avatars/avatar_6.png"
  },
  {
    id: 3,
    name: "Michael Smith",
    advisingCategory: "CST Advising",
    url: "images/avatars/avatar_5.png"
  },
  {
    id: 4,
    name: "Maria Garcia",
    advisingCategory: "Career Center",
    url: "images/avatars/avatar_9.png"
  },
  {
    id: 5,
    name: "Josh McAfee",
    advisingCategory: "CST Advising",
    url: "images/avatars/avatar_7.png"
  }
];

export function SchedulePage() {
  /* 
    Will use UserContext to set UserContext provider data - this will update the current user's meeting data across all components
    See this video: https://youtu.be/lhMKvyLRWo0?t=265
  */
  // eslint-disable-next-line no-unused-vars
  const user = useContext(UserContext);

  const [advCats, setAdvCats] = useState([]);

  useEffect(() => {
    API.graphql(graphqlOperation(ListAdvisingCategories))
      .then(res => {
        const advCats = res.data.listAdvisingCategorys.items;
        setAdvCats(advCats);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h1>Schedule page</h1>
      <p>This is the schedule page</p>
      <CategoryList categories={advCats} />
      <AdvisorList advisors={advisors} />
    </>
  );
}
