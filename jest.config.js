// rootDir -> Jest 구성 파일 또는 package.json이 포함된 디렉토리의 루트 또는 package.json이 없는 경우 pwd
module.exports = {
  // Jest가 파일을 검색하는 데 사용해야 하는 디렉토리의 경로 목록입니다. default: ['<rootDir>']
  roots: ['<rootDir>'],

  // 제품군의 각 테스트 파일이 실행되기 전에 테스트 프레임워크를 구성하거나 설정하기 위해 일부 코드를 실행하는 모듈의 경로 목록입니다. default: []
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  // 테스트에 사용할 테스트 환경입니다. default: 'node'
  testEnvironment: 'jsdom',

  // 정규식에서 변환기로의 경로에 대한 맵입니다. 변환기는 소스 파일을 변환하기 위한 동기 기능을 제공하는 모듈입니다. default: {"\\.[jt]sx?$": "babel-jest"}
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },

  // 변환 전에 모든 소스 파일 경로와 일치하는 정규 표현식 패턴 문자열의 배열입니다. 파일 경로가 패턴과 일치하면 변환되지 않습니다. default: ["/node_modules/", "\\.pnp\\.[^\\\/]+$"]
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$',
  ],

  // 테스트를 실행하기 전에 모든 테스트 경로와 일치하는 정규 표현식 패턴 문자열의 배열입니다. 테스트 경로가 패턴과 일치하면 건너뜁니다. default: ["/node_modules/"]
  testPathIgnorePatterns: [
    '/.next',
    '/.yarn',
  ],

  // Jest가 테스트 파일을 감지하는 데 사용하는 glob 패턴입니다. default: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ]
  testMatch: [
    '<rootDir>/__tests__/**/*.{ts,tsx}',
  ],

  // 이 옵션을 사용하면 사용자 정의 watch 플러그인을 사용할 수 있습니다. default: []
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],

  // 모듈에서 사용하는 파일 확장자의 배열입니다. default: ["js", "jsx", "ts", "tsx", "json", "node"]
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],

  // 단일 모듈로 이미지나 스타일과 같은 리소스를 제거할 수 있도록 하는 정규식에서 모듈 이름 또는 모듈 이름 배열로의 맵입니다. default: null
  moduleNameMapper: {
    '^components$': '<rootDir>/components',
    '^components/(.*)$': '<rootDir>/components/$1',
    '^utils$': '<rootDir>/utils',
    '^utils/(.*)$': '<rootDir>/utils/$1',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },

  // 모든 테스트 환경에서 사용할 수 있어야 하는 전역 변수 집합입니다. default: {}
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
};
