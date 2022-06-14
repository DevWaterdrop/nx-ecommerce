module.exports = {
  displayName: 'shared-ui',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    '^.+\\.(svg|png|jpg|jpeg|gif|webp)$': '<rootDir>/empty.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/shared/ui',
};
