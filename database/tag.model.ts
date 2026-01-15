import { model, models, Schema } from "mongoose";

export interface ITagDoc {
  name: string;
  questions: number;
}

const TagSchema = new Schema<ITagDoc>(
  {
    name: { type: String, required: true, unique: true },
    questions: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Tag = models?.Tag || model<ITagDoc>("Tag", TagSchema);

export default Tag;