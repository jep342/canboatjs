module.exports = [
  {
    expected: {
      timestamp: '2017-04-15T14:57:58.470Z',
      prio: 6,
      src: 0,
      dst: 255,
      pgn: 126996,
      description: 'Product Information',
      fields: {
        nmea2000Version: 1.3,
        productCode: 28199,
        modelId: 'NMEA 2000 PC Interface (NGT-1)',
        softwareVersionCode: '1.100, 2.210',
        modelVersion: 'NGT-1-USB  hv1.03',
        modelSerialCode: '177800',
        certificationLevel: 'Level A',
        loadEquivalency: 1
      }
    },
    input:
      '2017-04-15T14:57:58.470Z,6,126996,0,255,134,14,05,27,6e,4e,4d,45,41,20,32,30,30,30,20,50,43,20,49,6e,74,65,72,66,61,63,65,20,28,4e,47,54,2d,31,29,ff,ff,31,2e,31,30,30,2c,20,32,2e,32,31,30,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,4e,47,54,2d,31,2d,55,53,42,20,20,68,76,31,2e,30,33,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,31,37,37,38,30,30,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,ff,00,01'
  }
]
