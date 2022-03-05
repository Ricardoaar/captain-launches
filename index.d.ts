type HookStorage = {
  items: any;
  saveItem: (newItems: any) => void;
  loading: boolean;
  error: boolean;
  sync: number;
};
type ReducerAction = {
  type: string;
  payload?: any;
};

type LocalStorageState = {
  sync: number;
  loading: boolean;
  items: any;
  error: boolean;
};

type TimeObject = {
  day: number;
  hour: number;
  minute: number;
  second: number;
};

type RocketLaunchType = {
  mission: string;
  dateUtc: string;
  dateLocal: string | null;
};

type LaunchFetchData = {
  date_utc: string;
  date_local: string;
  name: string;
};
