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
