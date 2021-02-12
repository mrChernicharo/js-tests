// let a = [[[[{a:'a'},{a:'a'},{a:'a'},{a:'a'}]]]]

// let b ={
//   tempo:120,
//   instruments: [{name: 'bass kick', sound: 'file/mp3', img: 'http://img.img'}],
//   tracks:[{bar: 1,bars:[{beat: 1, beats:[{note:1, notes:[{id: 'xx',position: 1,beat: 1,bar:1, track:1, play:false}]}]}]}]
// }

////
const initial = { tracks: 2, bars: 2, beats: 2, notes: 4 };

const dummy = Array(initial.tracks).fill({
  track: 0,
  bars: Array(initial.bars).fill({
    bar: 0,
    beats: Array(initial.beats).fill({
      beat: 0,
      notes: Array(initial.notes).fill({
        id: "xx",
        position: 0,
        beat: 0,
        bar: 0,
        track: 0,
        play: false,
      }),
    }),
  }),
});

const initialState = { tracks: dummy, instruments: [], tempo: 120 };

function updateStateTracks(state) {
  console.log("updating State tracks");
  const tracksCopy = [];
  state.tracks.forEach((track, t) => {
    tracksCopy.push({ track: t + 1, bars: [] });

    track.bars.forEach((bar, B) => {
      tracksCopy[t].bars.push({ bar: B + 1, beats: [] });

      bar.beats.forEach((beat, b) => {
        tracksCopy[t].bars[B].beats.push({ beat: b + 1, notes: [] });

        beat.notes.forEach((note, n) => {
          const position =
            B * (beat.notes.length + bar.beats.length) * (b + 1) + (n + 1);

          tracksCopy[t].bars[B].beats[b].notes.push({
            id: `pos-${position}-note-${n + 1}-beat-${b + 1}-bar-${
              B + 1
            }-track-${t + 1}`,
            pos: position,
            note: n + 1,
            beat: b + 1,
            bar: B + 1,
            track: t + 1,
            play: false,
          });
        });
      });
    });
  });
  console.log(tracksCopy);
  return { ...state, tracks: [...tracksCopy] };
}

const newState = updateStateTracks(initialState);
console.log();

console.log(newState.tracks[0].bars[0].beats[0].notes[0]);
console.log(newState.tracks[0].bars[0].beats[0].notes[1]);
console.log(newState.tracks[0].bars[0].beats[0].notes[2]);
console.log(newState.tracks[0].bars[0].beats[0].notes[3]);
console.log(newState.tracks[0].bars[0].beats[1].notes[0]);
console.log(newState.tracks[0].bars[0].beats[1].notes[1]);
console.log(newState.tracks[0].bars[0].beats[1].notes[2]);
console.log(newState.tracks[0].bars[0].beats[1].notes[3]);
console.log(newState.tracks[0].bars[1].beats[0].notes[0]);
console.log(newState.tracks[0].bars[1].beats[0].notes[1]);
console.log(newState.tracks[0].bars[1].beats[0].notes[2]);
console.log(newState.tracks[0].bars[1].beats[0].notes[3]);
console.log(newState.tracks[0].bars[1].beats[1].notes[0]);
console.log(newState.tracks[0].bars[1].beats[1].notes[1]);
console.log(newState.tracks[0].bars[1].beats[1].notes[2]);
console.log(newState.tracks[0].bars[1].beats[1].notes[3]);
