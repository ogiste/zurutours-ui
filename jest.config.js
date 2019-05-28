module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>src/setupTests.js'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules', 'bower_components', 'dist'],
  coveragePathIgnorePatterns: ['src/index.js', 'src/reducers/index.js', 'src/store/index.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss|sass|less)$': 'identity-obj-proxy'
  }
};
