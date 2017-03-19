import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

const context = require.context('./test', true, /\.spec\.js$/);

context.keys().forEach(context);