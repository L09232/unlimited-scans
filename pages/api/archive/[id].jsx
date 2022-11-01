import dbConnect from '../../../utils/dbConnect';
import Card from '../../../models/Card';

dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const cards = await Card.findById(id);

                if (!cards) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: cards });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const cards = await Card.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!cards) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: cards });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'DELETE':
            try {
                const deletedCard = await Card.deleteOne({ _id: id });

                if (!deletedCard) {
                    return res.status(400).json({ success: false })
                }

                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }
}