module.exports = {
	getAction: async (req, res, next) => {
		const filters = req.query;

		try {
			const skills = await setup.moduleServices['SkillMaster']['skillmaster']['getSkills'](
				filters
			);

			res.status(200).json(skills);
		} catch (error) {
			next(error);
		}
	},

	getByIdAction: async (req, res, next) => {
		try {
			const { id } = req.params;

			if (!parseInt(id)) {
				throw new Error('Id must be a number');
			}

			const skill = await setup.moduleServices['SkillMaster']['skillmaster']['getSkillById'](
				id
			);

			res.status(200).json(skill);
		} catch (error) {
			next(error);
		}
	},

	postAction: async (req, res, next) => {
		try {
			const { skill } = req.body;

			const newSkill = await setup.moduleServices['SkillMaster']['skillmaster']['addSkill'](
				skill
			);

			res.status(200).json(newSkill);
		} catch (error) {
			next(error);
		}
	},

	putAction: async (req, res, next) => {
		try {
			const { skill } = req.body;
			const { id } = req.params;

			if (!parseInt(id)) {
				throw new Error('Id must be a number');
			}

			const updatedSkill = await setup.moduleServices['SkillMaster']['skillmaster'][
				'putSkill'
			](skill, id);

			res.status(200).json(updatedSkill);
		} catch (error) {
			next(error);
		}
	},

	deleteAction: async (req, res, next) => {
		try {
			const { id } = req.params;

			if (!parseInt(id)) {
				throw new Error('Id must be a number');
			}

			const skill = await setup.moduleServices['SkillMaster']['skillmaster']['deleteSkill'](
				id
			);

			res.status(200).json(skill);
		} catch (error) {
			next(error);
		}
	},
};
