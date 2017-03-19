import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import App from '../../app/components/App'
import '../../app/static/styles/main.sass'

describe('<App />', function() {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />)
	})

	it('has a wrapper with a class', () => {
		expect(wrapper.find('.container'))
			.to.have.length(1);
	});
});