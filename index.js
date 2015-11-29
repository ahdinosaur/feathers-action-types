var constantCase = require('constant-case')

module.exports = createActionTypes

function addGroup (resource, actionTypes, group) {
  var pascalResource = constantCase(resource)
  var pascalGroup = constantCase(group)

  var start = pascalResource + '_' + pascalGroup + '_START'
  var success = pascalResource + '_' + pascalGroup + '_SUCCESS'
  var error = pascalResource + '_' + pascalGroup + '_ERROR'
  var startAlias = group + 'Start'
  var successAlias = group + 'Success'
  var errorAlias = group + 'Error'

  actionTypes[start] = start
  actionTypes[success] = success
  actionTypes[error] = error
  actionTypes[startAlias] = start
  actionTypes[successAlias] = success
  actionTypes[errorAlias] = error
}

/*
 * Given a resource name, returns respective feathers action types.
 *
 * Action types are represented as an object mapping
 * action type constants and aliases to action type constants.
 *
 * ```js
 * createActionTypes('users')
 * // => {
 * //   USERS_FIND_START: USERS_FIND_START,
 * //   USERS_FIND_SUCCESS: USERS_FIND_SUCCESS,
 * //   USERS_FIND_ERROR: USERS_FIND_ERROR,
 * //   findStart: USERS_FIND_START,
 * //   findSuccess: USERS_FIND_SUCCESS,
 * //   findError: USERS_FIND_ERROR,
 * //   USERS_GET_START: USERS_GET_START,
 * //   ...
 * //   USERS_CREATE_START: USERS_CREATE_START,
 * //   ...
 * //   USERS_UPDATE_START: USERS_UPDATE_START,
 * //   ...
 * //   USERS_PATCH_START: USERS_PATCH_START,
 * //   ...
 * //   USERS_REMOVE_START: USERS_REMOVE_START,
 * //   USERS_REMOVE_SUCCESS: USERS_REMOVE_SUCCESS,
 * //   USERS_REMOVE_ERROR: USERS_REMOVE_ERROR,
 * //   removeStart: USERS_REMOVE_START,
 * //   removeSuccess: USERS_REMOVE_SUCCESS,
 * //   removeError: USERS_REMOVE_ERROR,
 * // }
 * ```
 * @param {String} `resource`
 * @return {Object} `actionTypes`
 * @api public
 */
function createActionTypes (resource) {
  var actionTypes = {}

  addGroup(resource, actionTypes, 'find')
  addGroup(resource, actionTypes, 'get')
  addGroup(resource, actionTypes, 'create')
  addGroup(resource, actionTypes, 'update')
  addGroup(resource, actionTypes, 'patch')
  addGroup(resource, actionTypes, 'remove')

  return actionTypes
}
