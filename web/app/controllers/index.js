import _ from 'lodash';
import createAppController from './app-controller';
import createNotesController from './notes-controller';

export default function createActions (services) {
  let actions = {};

  _([
    createAppController,
    createNotesController,
  ]).map(
    controller => controller(services)
  ).flatMap(
    _.toPairs
  ).forEach(function ([name, action]) {
    if (actions.name) {
      throw new Error(`action "${name}" is already defined`);
    }
    actions[name] = action;
  });

  return actions;
}
