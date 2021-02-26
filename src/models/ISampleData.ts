export interface IMedia {
  url: string;
  type: string;
}

interface IAction {
  comment?: string;
  task_id?: string | null;
  title?: string;
  user?: string;
  date?: string;
  action_taken?: boolean;
  action_id?: number;
}

export interface IDetails {
  format: string;
  value: string;
  title: string;
  link?: string;
}

interface ILocation {
  latitude: number;
  type: string;
  longitude: number;
}

interface IExtras {
  new: boolean;
  vehicle_id: number;
  driver_id: string;
}

export interface IData {
  media: IMedia[];
  actions: IAction[];
  details: IDetails[];
  type: string;
  id: number;
  location: ILocation;
  extras: IExtras;
}

interface IActionDescription {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
}

interface IImmediateAlerts {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
}

interface IAsset {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
}

interface IPerformance {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
  "6": string;
  "7": string;
  "8": string;
  "9": string;
  "10": string;
  "11": string;
}

interface IObservation {
  "0": string;
  "1": string;
}

interface ITypeDetail {
  observation: IObservation;
  vcr: string;
  immediate_alerts: IImmediateAlerts;
  incident: string;
  cleancity: string;
  asset: IAsset;
  performance: IPerformance;
}

export interface Data {
  last_update_time: number;
  timezone: string;
  action_descriptions: IActionDescription;
  success: boolean;
  type_detail: ITypeDetail;
  msg: string;
  data: IData[];
  type: string;
}
