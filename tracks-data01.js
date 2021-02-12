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

const state = { tracks: dummy, instruments: [], tempo: 120 };

const tracksCopy = [];
for (const [t, track] of dummy.entries()) {
  tracksCopy.push({ track: t + 1, bars: [] });

  for (const [B, bar] of track.bars.entries()) {
    tracksCopy[t].bars.push({ bar: B + 1, beats: [] });

    for (const [bt, beat] of bar.beats.entries()) {
      tracksCopy[t].bars[B].beats.push({ beat: bt + 1, notes: [] });

      for (const [n, note] of beat.notes.entries()) {
        const position = (B + 1) * (bt + 1) * (n + 1);

        tracksCopy[t].bars[B].beats[bt].notes.push({
          id: `pos-${position}-note-${n + 1}-beat-${bt + 1}-bar-${
            B + 1
          }-track-${t + 1}`,
          pos: position,
          note: n + 1,
          beat: bt + 1,
          bar: B + 1,
          track: t + 1,
          play: false,
        });
      }
    }
  }
}

const returnState = { ...state, tracks: tracksCopy };

console.log(returnState);
console.log("----------------");
console.log(returnState.tracks);
console.log("----------------");
console.log(returnState.tracks[1].bars[0].beats);
console.log("----------------");
console.log(returnState.tracks[1].bars[1].beats[1].notes);
console.log("----------------");
console.log(returnState.tracks[0].bars[1].beats[1].notes[3]);

// a.forEach((track, t) =>
//   track.bars.forEach((bar, B) =>
//     bar.beats.forEach((beat, b) =>
//       beat.notes.forEach((note, n) =>
//         console.log({ n: n + 1, b: b + 1, B: B + 1, T: t + 1 })
//       )
//     )
//   )
// );
// a.forEach((track) => console.dir(track));
// a.entries((e, i) => console.log(i));
