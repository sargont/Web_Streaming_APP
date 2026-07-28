export type Camera = {
  id: string;
  title: string;
  location: string;
  category: "City" | "Roads" | "Borders" | "Radio";
  streamUrl: string;
  isLive: boolean;
  featured?: boolean;
};

export const cameras: Camera[] = [
  {
    id: "main-circle",
    title: "Main Circle",
    location: "Maseru",
    category: "City",
    streamUrl: "https://5c50a1c26792b.streamlock.net/live/ngrp:AMEHAL.stream_all/playlist.m3u8?DVR",
    isLive: true,
    featured: true
  },
  {
    id: "lekhaloaneng",
    title: "Lekhaloaneng",
    location: "Maseru",
    category: "Roads",
    streamUrl: "https://5c50a1c26792b.streamlock.net/live/ngrp:Lekhaloaneng.stream_all/playlist.m3u8?DVR",
    isLive: true
  },
  {
    id: "maseru-border",
    title: "Maseru Border Post",
    location: "Maseru",
    category: "Borders",
    streamUrl: "https://5c50a1c26792b.streamlock.net/live/ngrp:MaseruBridge.stream_all/playlist.m3u8?DVR",
    isLive: true
  },
  {
    id: "lakeside",
    title: "Lakeside Road",
    location: "Maseru",
    category: "Roads",
    streamUrl: "https://5c50a1c26792b.streamlock.net/live/ngrp:LakesideLS.stream_all/playlist.m3u8?DVR",
    isLive: true
  },
  {
    id: "maputsoe-bridge",
    title: "Maputsoe Bridge",
    location: "Maputsoe",
    category: "Borders",
    streamUrl: "https://5c50a1c26792b.streamlock.net/live/ngrp:MaputsoeBridge.stream_all/playlist.m3u8?DVR",
    isLive: true
  },
  {
    id: "carlton-centre",
    title: "Carlton Centre",
    location: "Maseru",
    category: "City",
    streamUrl: "https://5c50a1c26792b.streamlock.net/live/ngrp:Carlton.stream_all/playlist.m3u8?DVR",
    isLive: true
  },
  {
    id: "kingsway",
    title: "Downtown Kingsway",
    location: "Maseru",
    category: "City",
    streamUrl: "https://5c50a1c26792b.streamlock.net/live/ngrp:Victoria.stream_all/playlist.m3u8?DVR",
    isLive: true
  },
  {
    id: "mafeteng-border",
    title: "Van Rooyen's Gate",
    location: "Mafeteng",
    category: "Borders",
    streamUrl: "https://5c50a1c26792b.streamlock.net/live/ngrp:MafetengBridge.stream_all/playlist.m3u8?DVR",
    isLive: true
  },
  {
    id: "hillsview",
    title: "Hillsview",
    location: "Maseru",
    category: "Roads",
    streamUrl: "https://5c50a1c26792b.streamlock.net/live/ngrp:HillsView.stream_all/playlist.m3u8?DVR",
    isLive: true
  },
  {
    id: "radio-lesotho",
    title: "Radio Lesotho",
    location: "National",
    category: "Radio",
    streamUrl: "https://5c50a1c26792b.streamlock.net/live/ngrp:RADIOLESOTHO_all/playlist.m3u8?DVR",
    isLive: true
  },
  {
    id: "ultimate-radio",
    title: "Ultimate Radio Lesotho",
    location: "National",
    category: "Radio",
    streamUrl: "https://5c50a1c26792b.streamlock.net/live/ngrp:ULTIMATE_all/playlist.m3u8?DVR",
    isLive: true
  }
];
