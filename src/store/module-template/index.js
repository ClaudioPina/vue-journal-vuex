import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutation from './mutation'

const myCustomModule = {
    namespaced: true,
    actions,
    getters,
    mutation,
    state
}

export default myCustomModule