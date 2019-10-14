import movies from '../controllers/Movies';

export default app => {
  app.route('/history').get(movies.getHistory);
  app.route('/history/:id').put(movies.insertToHistory);
};
