'use strict'

const _ = require('lodash')
const joi = require('joi')

module.exports = {
	schema: {
		// Describe the attributes with joi here
		std_date_span: joi.string().valid('std_date_span_day', 'std_date_span_month', 'std_date_span_year'),
		startDate: joi.string().regex(/^[0-9]+$/),
		endDate: joi.string().regex(/^[0-9]+$/)
	},
	forClient(obj) {
		// Implement outgoing transformations here
		obj = _.omit(obj, ['_id', '_rev', '_oldRev']);
		return obj;
	},
	fromClient(obj) {
		// Implement incoming transformations here
		return obj;
	}
};
