export interface CommunityRuleObject {
  id: number;
  description: string;
}
export interface CommunityFlareObject {
  id: number;
  description: string;
}
export interface CommunityObject {
  id: number;
  name: string;
  members: number;
  rules: CommunityRuleObject[];
  flares: CommunityFlareObject[];
  // optional
}
function communityData() {
  const communities: CommunityObject[] = [
    {
      id: 12,
      name: "CebTech",
      members: 45,
      rules: [
        {
          id: 1,
          description: "No offensive language or harassment.",
        },
        {
          id: 2,
          description:
            "Maintain a respectful and constructive tone in discussions.",
        },
      ],
      flares: [
        {
          id: 3,
          description: "Pahungaw",
        },
        {
          id: 4,
          description: "Concern",
        },
      ],
    },
    {
      id: 13,
      name: "Bisdako",
      members: 98,

      rules: [
        {
          id: 5,
          description: "No offensive language or harassment.",
        },
        {
          id: 6,
          description: "Maintain a respectful conversation.",
        },
      ],
      flares: [
        {
          id: 7,
          description: "Diskasyon",
        },
        {
          id: 8,
          description: "Rants",
        },
      ],
    },
  ];

  return communities;
}

export default communityData;
