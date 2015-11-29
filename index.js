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
 * //   USER_FIND_START: USER_FIND_START,
 * //   USER_FIND_SUCCESS: USER_FIND_SUCCESS,
 * //   USER_FIND_ERROR: USER_FIND_ERROR,
 * //   findStart: USER_FIND_START,
 * //   findSuccess: USER_FIND_SUCCESS,
 * //   findError: USER_FIND_ERROR,
 * //   USER_GET_START: USER_GET_START,
 * //   ...
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
