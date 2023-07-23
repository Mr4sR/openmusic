/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */

const Joi = require('joi');

const PlaylistPayloadSchema = Joi.object({
  name: Joi.string().required(),
});

const AddSongPayloadSchema = Joi.object({
  songId: Joi.string().required(),
});

module.exports = {
  PlaylistPayloadSchema,
  AddSongPayloadSchema,
};
