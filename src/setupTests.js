const serializer = require('jest-glamor-react');
const { sheet } = require('emotion');

expect.addSnapshotSerializer(serializer(sheet));
