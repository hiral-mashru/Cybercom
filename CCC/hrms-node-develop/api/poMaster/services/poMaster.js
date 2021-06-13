const path = require('path');
const { pomaster } = require(path.resolve('core', 'models.js'));

module.exports = {
	/**
	 * @Usage To fetch the all data of PoMaster according to filters provided
	 * @param {Object} filters contains all the filters as such as page,limit,sort_order,sort_by
	 * @returns {Object[]} Array of PoMaster details
	 */
	getPos: async (filters) => {
		try {
			const { count } = await pomaster.findAndCountAll();

			const options = setup.functions['paginator']['generateOptions']({ ...filters, count });

			const pos = await pomaster.findAll(options);

			if (!pos.length) {
				return { message: 'No records found', data: pos };
			}

			return { data: pos };
		} catch (error) {
			throw error;
		}
	},

	/**
	 * @Usage To get a PoMaster data with the specified id
	 * @param {Number} id PoMaster Id
	 * @returns {Object} returns object of and single data
	 */
	getPoById: async (id) => {
		try {
			const po = await pomaster.findByPk(id);

			if (!po) {
				return { message: 'No record found', data: po };
			}

			return { data: po };
		} catch (error) {
			throw error;
		}
	},

	/**
	 * @Usage To add new Pomaster to database
	 * @param {Object} data Contains the data of POmaster that comes in form-data/body of api
	 * @returns {Object} Returns newly added POMaster
	 */
	addPo: async (data) => {
		try {
			const newPo = await pomaster.create(data);

			if (!newPo) {
				return { message: 'Record not added' };
			}

			return { message: 'Record added sucessfully', data: newPo };
		} catch (error) {
			throw error;
		}
	},

	/**
	 * @Usage To update POMaster in database
	 * @param {Object} data Conatins the data of POMaster that needs to be updated
	 * @returns {Object} returns an object containing message of failure or success
	 */
	putPo: async (data, id) => {
		try {
			const updatedPo = await pomaster.update({ ...data }, { where: { id: id } });

			if (!updatedPo[0]) {
				return { message: 'Unable to update record', data: updatedPo };
			}

			return { message: 'Record updated successfully' };
		} catch (error) {
			throw error;
		}
	},

	/**
	 * @Usage To delete a POMaster with specified ID
	 * @param {Number} id Unique POMaster ID
	 * @returns {Object} Returns an Object containing success or falure message
	 */
	deletePo: async (id) => {
		try {
			const po = pomaster.destroy({ where: { id: id } }, { paranoid: true });

			if (!po) {
				return { message: 'Unable to delete data' };
			}

			return { message: 'Data deleted successfully' };
		} catch (error) {
			throw error;
		}
	}
};
