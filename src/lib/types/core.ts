export enum Platform {
  YouTube,
}

export type Track = {
  id: string;
  videoID: string;
  added: Date;
  disabled: Date | null;
  platform: Platform;
  length: number;
};
