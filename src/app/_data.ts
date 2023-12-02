export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;
export const years = [2022, 2023];

export type Month = (typeof months)[number];

export type Savings = {
  speed: number;
  stopping: number;
  lanes: number;
  turning: number;
  "phone-usage": number;
};

export type Data = {
  maxSavings: Savings;
  totalSavings: Record<number, Partial<Record<Month, Savings>>>;
};

const maxSavings = {
  speed: 10,
  stopping: 30,
  lanes: 50,
  turning: 20,
  "phone-usage": 100,
};

export const data = {
  maxSavings,
  totalSavings: {
    "2022": {
      January: {
        speed: 4,
        stopping: 23,
        lanes: 15,
        turning: 0,
        "phone-usage": 50,
      },
      February: {
        speed: 0,
        stopping: 12,
        lanes: 24,
        turning: 8,
        "phone-usage": 22,
      },
      March: {
        speed: 7,
        stopping: 7,
        lanes: 15,
        turning: 18,
        "phone-usage": 6,
      },
      April: {
        speed: 6,
        stopping: 3,
        lanes: 14,
        turning: 4,
        "phone-usage": 30,
      },
      May: {
        speed: 6,
        stopping: 21,
        lanes: 44,
        turning: 20,
        "phone-usage": 4,
      },
      June: {
        speed: 5,
        stopping: 26,
        lanes: 11,
        turning: 17,
        "phone-usage": 70,
      },
      July: {
        speed: 6,
        stopping: 2,
        lanes: 6,
        turning: 16,
        "phone-usage": 33,
      },
      August: {
        speed: 9,
        stopping: 20,
        lanes: 25,
        turning: 0,
        "phone-usage": 61,
      },
      September: {
        speed: 0,
        stopping: 18,
        lanes: 41,
        turning: 0,
        "phone-usage": 56,
      },
      October: {
        speed: 6,
        stopping: 13,
        lanes: 0,
        turning: 4,
        "phone-usage": 9,
      },
      November: {
        speed: 7,
        stopping: 21,
        lanes: 3,
        turning: 10,
        "phone-usage": 69,
      },
      December: {
        speed: 9,
        stopping: 5,
        lanes: 41,
        turning: 20,
        "phone-usage": 33,
      },
    },
    "2023": {
      January: {
        speed: 0,
        stopping: 18,
        lanes: 25,
        turning: 13,
        "phone-usage": 40,
      },
      February: {
        speed: 9,
        stopping: 20,
        lanes: 30,
        turning: 4,
        "phone-usage": 17,
      },
      March: {
        speed: 10,
        stopping: 18,
        lanes: 3,
        turning: 19,
        "phone-usage": 82,
      },
      April: {
        speed: 3,
        stopping: 27,
        lanes: 33,
        turning: 10,
        "phone-usage": 10,
      },
      May: {
        speed: 7,
        stopping: 29,
        lanes: 11,
        turning: 9,
        "phone-usage": 12,
      },
      June: {
        speed: 4,
        stopping: 7,
        lanes: 2,
        turning: 1,
        "phone-usage": 29,
      },
      July: {
        speed: 7,
        stopping: 22,
        lanes: 34,
        turning: 20,
        "phone-usage": 57,
      },
      August: {
        speed: 3,
        stopping: 9,
        lanes: 41,
        turning: 12,
        "phone-usage": 61,
      },
      September: {
        speed: 10,
        stopping: 1,
        lanes: 14,
        turning: 2,
        "phone-usage": 87,
      },
      October: {
        speed: 8,
        stopping: 16,
        lanes: 45,
        turning: 16,
        "phone-usage": 43,
      },
      November: {
        speed: 8,
        stopping: 30,
        lanes: 14,
        turning: 5,
        "phone-usage": 88,
      },
      December: {
        speed: 10,
        stopping: 28,
        lanes: 0,
        turning: 0,
        "phone-usage": 27,
      },
    },
  },
} as Data;

// export const data = {
//   maxSavings,
//   totalSavings: years
//     .map((year) => {
//       return {
//         [year]: months
//           .map((month) => {
//             return {
//               [month]: {
//                 speed: Math.floor(Math.random() * (maxSavings.speed + 1)),
//                 stopping: Math.floor(Math.random() * (maxSavings.stopping + 1)),
//                 lanes: Math.floor(Math.random() * (maxSavings.lanes + 1)),
//                 turning: Math.floor(Math.random() * (maxSavings.turning + 1)),
//                 "phone-usage": Math.floor(
//                   Math.random() * (maxSavings["phone-usage"] + 1),
//                 ),
//               },
//             };
//           })
//           .reduce((prev, cur) => ({ ...prev, ...cur })),
//       };
//     })
//     .reduce((prev, cur) => ({ ...prev, ...cur })),
// } as Data;
// console.log({ data });
