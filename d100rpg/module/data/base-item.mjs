import d100rpgDataModel from "./base-model.mjs";

export default class d100rpgItemBase extends d100rpgDataModel {

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = {};

    schema.description = new fields.StringField({ required: true, blank: true });

    return schema;
  }

}