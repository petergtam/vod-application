import mongoose, { Schema } from 'mongoose';

const MovieSchema = new Schema({ watched: [String] });

export default mongoose.model('Movies', MovieSchema);
