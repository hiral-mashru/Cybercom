const path = require('path');
const { technologymaster } = require(path.resolve('core', 'models.js'));

module.exports = {
	/**
	 * @Usage To fetch the all data of TechnologyMaster according to filters provided
	 * @param {Object} filters contains all the filters as such as page,limit,sort_order,sort_by
	 * @returns {Object[]} Array of TechnologyMaster details
	 */
	getTechnologies: async (filters) => {
		try {
			const { count } = await technologymaster.findAndCountAll();

			const options = setup.functions['paginator']['generateOptions']({ ...filters, count });

			const technologies = await technologymaster.findAll(options);

			if (technologies.length === 0) {
				return { message: 'No records found', data: technologies };
			}

			return { data: technologies };
		} catch (error) {
			throw error;
		}
	},

	/**
	 * @Usage To get a TechnologyMaster data with the specified id
	 * @param {Number} id TechnologyMaster Id
	 * @returns {Object} returns object of and single data
	 */
	getTechnologyById: async (id) => {
		try {
			const technology = await technologymaster.findByPk(id);

			if (!technology) {
				return { message: 'No record found', data: technology };
			}

			return { data: technology };
		} catch (error) {
			throw error;
		}
	},

	/**
	 * @Usage To add new TechnologyMaster to database
	 * @param {Object} data Contains the data of TechnologyMaster that comes in form-data/body of api
	 * @returns {Object} Returns newly added TechnologyMaster
	 */
	addTechnology: async (data) => {
		try {
			const technology = await technologymaster.create(data);

			if (!technology) {
				return { message: 'Unable to add data', data: technology };
			}

			return { data: technology };
		} catch (error) {
			error.message = 'Cannot add data';
			throw error;
		}
	},

	/**
	 * @Usage To update TechnologyMaster in database
	 * @param {Object} data Conatins the data of TechnologyMaster that needs to be updated
	 * @returns {Object} returns an object containing message of failure or success
	 */
	putTechnology: async (technology, id) => {
		try {
			const updatedTechnology = await technologymaster.update({ ...technology }, { where: { id: id } });

			if (!updatedTechnology[0]) {
				return { message: 'No row was updated' };
			}

			return { message: 'Row updated successfully' };
		} catch (error) {
			throw error;
		}
	},

	/**
	 * @Usage To delete a TechnologyMaster with specified ID
	 * @param {Number} id Unique TechnologyMaster ID
	 * @returns {Object} Returns an Object containing success or falure message
	 */
	deleteTechnology: async (id) => {
		try {
			const technology = await technologymaster.destroy({ where: { id: id } }, { paranoid: true });

			if (!technology) {
				return { message: 'Unable to delete record' };
			}

			return { message: 'Record deleted successfully' };
		} catch (error) {
			throw error;
		}
	}
};
