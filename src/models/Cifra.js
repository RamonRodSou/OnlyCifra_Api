import { Schema, model } from "mongoose";

const StructSchema = new Schema({
 section:  String ,
 content:  [String] 
});

const CifraSchema = new Schema({
  title:  String ,
  tom:  String ,
  singer:  String ,
  Struct:  [StructSchema] , 
  description:  String ,
  createdAt: { type: Date, default: Date.now },
  use:{
   type: Schema.Types.ObjectId,
   ref: 'User',
  }  
});

export default model('Cifra', CifraSchema);
