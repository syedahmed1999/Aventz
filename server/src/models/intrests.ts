import { Model, model, Schema } from 'mongoose';
import { Mortgage } from '../types/types';

const mortgageLoanSchema = new Schema(
  {
    loanNo: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    type: {
      type: String,
      enum: ['Resi', 'Comm', 'NNN', 'Hotel', 'Multi', 'Other', '']
    },
    streetNo: {
      type: String
    },
    street1: {
      type: String
    },
    street2: {
      type: String
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    zipCode: {
      type: String
    },
    borrorOneFirst: {
      type: String
    },
 
  },
  {
    versionKey: false
  }
);

export const MortgageLoan: Model<Mortgage> = model(
  'MortgageLoan',
  mortgageLoanSchema
);
