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

type Savings = {
  speed: number;
  stopping: number;
  lanes: number;
  turning: number;
  "phone-usage": number;
};

export type Data = {
  maxSavings: Savings;
  totalSavings: Record<number, Record<Month, Savings>>;
};

export const data = {
  maxSavings: {
    speed: 10,
    stopping: 30,
    lanes: 50,
    turning: 20,
    "phone-usage": 100,
  },
  totalSavings: {
    2022: {
      January: {
        speed: 10,
        stopping: 30,
        lanes: 50,
        turning: 20,
        "phone-usage": 100,
      },
      February: {
        speed: 10,
        stopping: 30,
        lanes: 50,
        turning: 20,
        "phone-usage": 100,
      },
      March: {
        speed: 10,
        stopping: 30,
        lanes: 50,
        turning: 20,
        "phone-usage": 100,
      },
      April: {
        speed: 10,
        stopping: 30,
        lanes: 50,
        turning: 20,
        "phone-usage": 100,
      },
      May: {
        speed: 10,
        stopping: 30,
        lanes: 50,
        turning: 20,
        "phone-usage": 100,
      },
      June: {
        speed: 10,
        stopping: 30,
        lanes: 50,
        turning: 20,
        "phone-usage": 100,
      },
      July: {
        speed: 10,
        stopping: 30,
        lanes: 50,
        turning: 20,
        "phone-usage": 100,
      },
      August: {
        speed: 10,
        stopping: 30,
        lanes: 50,
        turning: 20,
        "phone-usage": 100,
      },
      September: {
        speed: 10,
        stopping: 30,
        lanes: 50,
        turning: 20,
        "phone-usage": 100,
      },
      October: {
        speed: 10,
        stopping: 30,
        lanes: 50,
        turning: 20,
        "phone-usage": 100,
      },
      November: {
        speed: 10,
        stopping: 30,
        lanes: 50,
        turning: 20,
        "phone-usage": 100,
      },
      December: {
        speed: 10,
        stopping: 30,
        lanes: 50,
        turning: 20,
        "phone-usage": 100,
      },
    },
    2023: {
      January: {
        speed: 10,
        stopping: 30,
        lanes: 50,
        turning: 20,
        "phone-usage": 100,
      },
      February: {
        speed: 10,
        stopping: 30,
        lanes: 50,
        turning: 20,
        "phone-usage": 100,
      },
      March: {
        speed: 10,
        stopping: 30,
        lanes: 50,
        turning: 20,
        "phone-usage": 100,
      },
      April: {
        speed: 10,
        stopping: 30,
        lanes: 50,
        turning: 20,
        "phone-usage": 100,
      },
      May: {
        speed: 10,
        stopping: 30,
        lanes: 50,
        turning: 20,
        "phone-usage": 100,
      },
      June: {
        speed: 10,
        stopping: 30,
        lanes: 50,
        turning: 20,
        "phone-usage": 100,
      },
      July: {
        speed: 10,
        stopping: 30,
        lanes: 50,
        turning: 20,
        "phone-usage": 100,
      },
      August: {
        speed: 10,
        stopping: 30,
        lanes: 50,
        turning: 20,
        "phone-usage": 100,
      },
      September: {
        speed: 10,
        stopping: 30,
        lanes: 50,
        turning: 20,
        "phone-usage": 100,
      },
      October: {
        speed: 10,
        stopping: 30,
        lanes: 50,
        turning: 20,
        "phone-usage": 100,
      },
      November: {
        speed: 10,
        stopping: 30,
        lanes: 50,
        turning: 20,
        "phone-usage": 100,
      },
      December: {
        speed: 10,
        stopping: 30,
        lanes: 50,
        turning: 20,
        "phone-usage": 100,
      },
    },
  },
} satisfies Data;
