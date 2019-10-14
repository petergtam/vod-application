import mongoose from 'mongoose';
import Movies from '../models/Movies';

exports.getHistory = async (req, res) => {
  try {
    const query = await Movies.find({}).exec();
    if (query == null) res.json(query);
    else res.json(query[0].watched);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.insertToHistory = async (req, res) => {
  try {
    const query = await Movies.findOneAndUpdate(
      {},
      {
        $push: {
          watched: {
            $each: [req.params.id],
            $position: 0
          }
        }
      }
    ).exec();
    if (query == null) {
      const watched = new Movies({ watched: req.params.id });
      try {
        const saved = await watched.save();
        console.log(`Success Saved ${saved}`);
        res.json(saved.watched);
      } catch (error) {
        console.log(`Saved ${error}`);
        res.status(500).send(error);
      }
    } else {
      console.log(`Success Query ${query}`);
      res.json(query.watched);
    }
  } catch (err) {
    console.log(`Query ${err}`);
    res.status(500).send(err);
  }
};
