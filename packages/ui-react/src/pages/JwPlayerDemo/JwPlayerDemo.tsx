import React, { useEffect, useRef, useState } from 'react';

import styles from './JwPlayerDemo.module.scss';

const options = {
  playlists: [
    { id: 'mzn2oX3p', label: 'Webcast Site' },
    { id: 'zs2OUgIZ', label: 'WebCast Player' },
    { id: '1PC9GvWT', label: 'Untitled dynamic playlist' },
    { id: 'nqlWJq6f', label: 'Radio' },
    { id: 'GSmD5HuO', label: 'Product Knowledge' },
    { id: 'owSrVMru', label: 'All Content' },
    { id: 'NOdbTdAJ', label: 'Border Gates' },
    { id: 'TKi7Q6z7', label: 'Roads' },
    { id: 'dP5Xo3lY', label: 'Default Recommendations Playlist' },
  ],
  media: [
    { id: 'QUiTgTUJ', label: 'Baso200 Campaign' },
    { id: 'KHIHYTb1', label: 'Apica - 2022' },
    { id: 'Z5DufAID', label: 'Self Service' },
    { id: '7bThaFOQ', label: 'Unlimited Wifi' },
    { id: 'DtyPwz7f', label: 'Carlton Centre, Maseru' },
    { id: 'C5IQ6HB6', label: 'Downtown Kingsway, Maseru' },
    { id: 'VGr0krkQ', label: 'Radio Lesotho' },
    { id: 'LQ4rfNmp', label: 'Ultimate Radio Lesotho' },
    { id: '4TxdxE1V', label: "Van Rooyen's Gate, Mafeteng" },
    { id: 'kaxnWtsc', label: 'Main Circle, Maseru' },
    { id: 'SvWpFdyu', label: 'Border Post, Maputsoe' },
    { id: 'SEHq7e82', label: 'Border Post, Maseru' },
    { id: '2581dfcH', label: 'Lakeside, Maseru' },
    { id: 'uzTTMURj', label: 'Lekhaloaneng, Maseru' },
    { id: 'lu8R4HcZ', label: 'Hillsview, Maseru' },
  ],
};

const playerScript = 'https://cdn.jwplayer.com/libraries/9ycau6FD.js';

const loadScript = () => {
  if (window.jwplayer) return Promise.resolve();
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = playerScript;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('JW Player script failed to load'));
    document.body.appendChild(script);
  });
};

declare global {
  interface Window {
    jwplayer: any;
  }
}

const JwPlayerDemo = () => {
  const playerRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState('playlist:mzn2oX3p');
  const [metadata, setMetadata] = useState('');

  const setupPlayer = (value: string) => {
    const [type, id] = value.split(':');
    const setupOptions: Record<string, any> = {
      width: '100%',
      aspectratio: '16:9',
    };
    if (type === 'playlist') {
      setupOptions.playlist = `https://cdn.jwplayer.com/v2/playlists/${id}`;
    } else {
      setupOptions.file = `https://cdn.jwplayer.com/videos/${id}.mp4`;
      setupOptions.image = `https://cdn.jwplayer.com/thumbs/${id}.jpg`;
    }

    const player = window.jwplayer(playerRef.current!).setup(setupOptions);
    player.on('playlistItem', (item: any) => {
      const duration = item.duration ? Math.round(item.duration) + 's' : '';
      const text = item.title ? `${item.title} ${duration}` : duration;
      setMetadata(text);
    });
  };

  useEffect(() => {
    loadScript().then(() => {
      setupPlayer(selected);
    });
  }, [selected]);

  return (
    <div>
      <h1>JW Player Demo</h1>
      <label htmlFor="content-select">Choose content:</label>{' '}
      <select
        id="content-select"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <optgroup label="Playlists">
          {options.playlists.map(({ id, label }) => (
            <option key={id} value={`playlist:${id}`}>
              {label}
            </option>
          ))}
        </optgroup>
        <optgroup label="Media">
          {options.media.map(({ id, label }) => (
            <option key={id} value={`media:${id}`}>
              {label}
            </option>
          ))}
        </optgroup>
      </select>

      <div id="playerContainer" className={styles.playerContainer}>
        <div id="jwplayer" ref={playerRef} />
        <div id="metadata" className={styles.metadata}>
          {metadata}
        </div>
      </div>
    </div>
  );
};

export default JwPlayerDemo;
