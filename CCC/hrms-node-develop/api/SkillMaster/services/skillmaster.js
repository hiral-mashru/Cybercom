const path = require('path');
const { skillmaster } = require(path.resolve('core', 'models.js'));

module.exports = {
	/**
	 * @Usage To fetch the all data of SkillMaster according to filters provided
	 * @param {Object} filters contains all the filters as such as page,limit,sort_order,sort_by
	 * @returns {Object[]} Array of SkillMaster details
	 */
	getSkills: async (filters) => {
		try {
			const { count } = await skillmaster.findAndCountAll();

			const options = setup.functions['paginator']['generateOptions']({ ...filters, count });

			const skills = await skillmaster.findAll(options);

			if (skills.length === 0) {
				return { message: 'No records found', data: skills };
			}

			return { data: skills };
		} catch (error) {
			throw error;
		}
	},

	/**
	 * @Usage To get a SkillMaster data with the specified id
	 * @param {Number} id SkillMaster Id
	 * @returns {Object} returns object of and single data
	 */
	getSkillById: async (id) => {
		try {
			const skill = await skillmaster.findByPk(id);

			if (!skill) {
				return { message: 'Skill not found', data: skill };
			}

			return { data: skill };
		} catch (error) {
			throw error;
		}
	},

	/**
	 * @Usage To add new SkillMaster to database
	 * @param {Object} data Contains the data of SkillMaster that comes in form-data/body of api
	 * @returns {Object} Returns newly added SkillMaster
	 */
	addSkill: async (data) => {
		try {
			const skill = await skillmaster.create(data);

			if (!skill) {
				return { message: 'Unable to add skill', data: skill };
			}

			return { message: 'Skill added successfully', data: skill };
		} catch (error) {
			throw error;
		}
	},

	/**
	 * @Usage To update SkilllMaster in database
	 * @param {Object} data Conatins the data of SkilllMaster that needs to be updated
	 * @returns {Object} returns an object containing message of failure or success
	 */
	putSkill: async (skill, id) => {
		try {
			const updatedSkill = await skillmaster.update({ ...skill }, { where: { id: id } });

			if (!updatedSkill[0]) {
				return { message: 'No row was updated' };
			}

			return { message: 'Row updated successfully' };
		} catch (error) {
			throw error;
		}
	},

	/**
	 * @Usage To delete a SkillMaster with specified ID
	 * @param {Number} id Unique SkillMaster ID
	 * @returns {Object} Returns an Object containing success or falure message
	 */
	deleteSkill: async (id) => {
		try {
			const skill = await skillmaster.destroy({ where: { id: id } }, { paranoid: true });

			if (!skill) {
				return { message: 'Unable to delete record' };
			}

			return { message: 'Record deleted successfully' };
		} catch (error) {
			throw error;
		}
	}
};
