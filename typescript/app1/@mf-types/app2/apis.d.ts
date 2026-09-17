
    export type RemoteKeys = 'app2/Button';
    type PackageType<T> = T extends 'app2/Button' ? typeof import('app2/Button') :any;