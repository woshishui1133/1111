export default {
    state: {
        //是否折叠
        isCollapse: false,
        //访问页合集
        mainTabs: [],
        //当前访问页名
        mainTabsActiveName: '',
    },
    getters: {
        isCollapse: (state) => {
            return state.isCollapse
        }
    },
    mutations: {
        toggleCollapse(state) {
            state.isCollapse = !state.isCollapse
        },
        updateMainTabs(state, tabe) {
            state.mainTabs = tabe
        },
        updateMainTabsActiveName(state, name) {
            state.mainTabsActiveName = name
        }
    },
    actions: {}

}