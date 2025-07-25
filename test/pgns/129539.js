module.exports = [
  {
    expected: {
      timestamp: '2016-02-28T19:57:03.429Z',
      prio: 6,
      src: 33,
      dst: 255,
      pgn: 129539,
      description: 'GNSS DOPs',
      fields: {
        sid: 199,
        desiredMode: 'Auto',
        actualMode: '3D',
        hdop: 0.79,
        vdop: 1.22,
        reserved: null,
        tdop: null
      }
    },
    input: '2016-02-28T19:57:03.429Z,6,129539,33,255,8,c7,d3,4f,00,7a,00,ff,7f'
  }
]
