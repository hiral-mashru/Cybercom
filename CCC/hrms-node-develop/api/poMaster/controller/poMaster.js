module.exports = {
	getAction: async (req, res, next) => {
		const filters = req.query;

		try {
			const pos = await setup.moduleServices['poMaster']['poMaster']['getPos'](filters);
			res.status(200).json(pos);
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

			const po = await setup.moduleServices['poMaster']['poMaster']['getPoById'](id);

			res.status(200).json(po);
		} catch (error) {
			next(error);
		}
	},
	addAction: async (req, res, next) => {
		try {
			const { po } = req.body;

			const newPo = await setup.moduleServices['poMaster']['poMaster']['addPo'](po);

			res.status(200).json(newPo);
		} catch (error) {
			next(error);
		}
	},
	putAction: async (req, res, next) => {
		try {
			const { id } = req.params;
			const { po } = req.body;

			if (!parseInt(id)) {
				throw new Error('Id must be a number');
			}

			const updatedPo = await setup.moduleServices['poMaster']['poMaster']['putPo'](po, id);

			res.status(200).json(updatedPo);
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

			const po = await setup.moduleServices['poMaster']['poMaster']['deletePo'](id);

			res.status(200).json(po);
		} catch (error) {
			next(error);
		}
	},
};
