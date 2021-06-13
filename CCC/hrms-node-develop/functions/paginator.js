module.exports = {
	/**
	 * @Usage To calculate limit and offset which are to be passed in while fetching data
	 * @param {Number} pageNo Page Number for what data is to be fetched
	 * @param {Number} pageSize Limit of the data to be fetched
	 * @param {Number} count Total number of the data
	 * @returns {Object} returns object containing the calculated offset and limit
	 */
	paginator: function(pageNo, pageSize, count) {
		let limit = parseInt(pageSize, 10) || 10;
		let page = parseInt(pageNo, 10) || 1;
		let totalPages = parseInt(Math.ceil(count / limit));

		//caluculate CP
		const currentPage = (page) => {
			return page;
		};

		//caluculate PP
		const previousPage = (page) => {
			return page - 1;
		};

		//caluculate NP
		const nextPage = (page) => {
			return page + 1;
		};

		const getOffset = (page, limit) => {
			return page * limit - limit;
		};

		//check if page is less than zero
		if (page < 0) {
			page = 1;
		}

		//check if page is greater than totalPages
		if (page > totalPages) {
			page = totalPages;
		}

		return {
			offset: getOffset(page, limit),
			limit: limit
		};
	},

	/**
	 * @Usage To generate an object of all the passed options such as sort_by,sort_order etc
	 * @param {Object} filters conatins all the data such as sort_order,sort_by,page,limit,count etc
	 * @returns {Object} Returns the object containig all the options as per to be passed in findAll() method
	 */
	generateOptions: function(filters) {
		const { page, limit, sort_by = 'id', sort_order = 'ASC', search, id, count } = filters;
		const paginationOptions = this.paginator(page, limit, count);

		const order = [ [ sort_by, sort_order ] ];

		let options = { ...paginationOptions, order };

		if (id) {
			options = { ...options, where: { id: [ ...id.split(',') ] } };
		}
		return options;
	}
};
