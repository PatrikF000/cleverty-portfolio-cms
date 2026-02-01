import * as migration_20251030_065630 from './20251030_065630';

export const migrations = [
  {
    up: migration_20251030_065630.up,
    down: migration_20251030_065630.down,
    name: '20251030_065630'
  },
];
