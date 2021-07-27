
export interface TrackInfo {
  /**The provider of the content*/
  source: "youtube";
  /**The content id of the track to play using the specified source*/
  contentId: string;
  /**Assumed 0 aka start of track*/
  startTime?: number;
  /**Assumed end of track*/
  endTime?: number;
}

/**Data specific to the crystaloscillator backend and audio frontend auxiliary webapp*/
export interface CrystalOscillatorMessage {
  type: "set-track"|"queue-track"|"queue-tracks"|"stop"|"pause"|"play"|"set-volume";
  /**Populated for type == set-track, track-track*/
  track?: TrackInfo;
  /**Populated for type == queue-tracks*/
  tracks?: TrackInfo[];
}

/**Data specific to the crystalbridge discord/minecraft bridge bot*/
export interface CrystalBridgeMessage {
  type: "message-sync";
  /**Populated for type == message-sync
   * The message to be synchronized with the other server (be it discord or minecraft)
  */
  message?: string;
  /**Populated for type == message-sync
   * The user that sent the message (be it on discord or minecraft)
  */
  messageUsername?: string;
}

/**A message specific to the crystal suite of network tools*/
export interface Message {
  type: "channel-message"|"channel-subscribe"|"channel-unsubscribe";
  /**When type == channel-message, channel specifies what API is being used for the data included in this message.
   * 
   * When type == channel-subscribe, channel specifies what we're asking to subscribe to
   * 
   * Wen type == channel-unsubscribe, channel specifies what we're asking to unsubscribe from
   */
  channel: "crystaloscillator"|"crystalbridge";
  /**Populated for channel == crystaloscillator*/
  msgCrystalOscillator?: CrystalOscillatorMessage;
  msgCrystalBridge?: CrystalBridgeMessage;
}

// export type { Queue } from "./queue"

const PLAEHOLDER = "placeholder";
function main () {
  console.log(PLAEHOLDER);
}
