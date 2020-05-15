module.exports = {
  name: 'trial1',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/trial1',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
