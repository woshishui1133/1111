export default {
    state: {
        menuTree: [{
            "code": 200,
            "success": true,
            "data": [{
                    "menuId": 2,
                    "menuName": "一级菜单",
                    "parentMenuId": 0,
                    "url": "menu/singleMenu/index",
                    "type": 1,
                    "icon": "el-icon-wind-power",
                    "orderIndex": 1,
                    "children": []
                },
                {
                    "menuId": 3,
                    "menuName": "二级菜单",
                    "parentMenuId": 0,
                    "url": "",
                    "type": 1,
                    "icon": "el-icon-ice-cream-round",
                    "orderIndex": 1,
                    "children": [{
                            "menuId": 301,
                            "menuName": "二级1-1",
                            "parentMenuId": 3,
                            "url": "menu/secondMenu/second1-1",
                            "type": 2,
                            "icon": "el-icon-milk-tea",
                            "orderIndex": 1,
                            "children": []
                        },
                        {
                            "menuId": 302,
                            "menuName": "二级1-2",
                            "parentMenuId": 3,
                            "url": "menu/secondMenu/second1-2",
                            "type": 2,
                            "icon": "el-icon-potato-strips",
                            "orderIndex": 2,
                            "children": []
                        },
                        {
                            "menuId": 303,
                            "menuName": "二级1-3",
                            "parentMenuId": 3,
                            "url": "menu/secondMenu/second1-3",
                            "type": 2,
                            "icon": "el-icon-lollipop",
                            "orderIndex": 3,
                            "children": []
                        }
                    ]
                },
                {
                    "menuId": 4,
                    "menuName": "三级多级菜单",
                    "parentMenuId": 0,
                    "url": "",
                    "type": 1,
                    "icon": "el-icon-ice-cream-round",
                    "orderIndex": 1,
                    "children": [{
                            "menuId": 401,
                            "menuName": "三级1-1",
                            "parentMenuId": 4,
                            "url": "menu/threeMenu/three1-1",
                            "type": 2,
                            "icon": "el-icon-milk-tea",
                            "orderIndex": 1,
                            "children": []
                        },
                        {
                            "menuId": 402,
                            "menuName": "二级1-2",
                            "parentMenuId": 4,
                            "url": "",
                            "type": 2,
                            "icon": "el-icon-potato-strips",
                            "orderIndex": 2,
                            "children": [{
                                    "menuId": 40201,
                                    "menuName": "三级1-2-1",
                                    "parentMenuId": 402,
                                    "url": "menu/threeMenu/nextMenu/three1-2-1",
                                    "type": 2,
                                    "icon": "el-icon-milk-tea",
                                    "orderIndex": 1,
                                    "children": []
                                },
                                {
                                    "menuId": 40202,
                                    "menuName": "三级1-2-2",
                                    "parentMenuId": 402,
                                    "url": "menu/threeMenu/nextMenu/three1-2-2",
                                    "type": 2,
                                    "icon": "el-icon-potato-strips",
                                    "orderIndex": 2,
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ],
            "message": "成功"
        }],
        menuLoad: false, //菜单是否已经加载状态避免重复加载，刷新又将变成false

    },
    getters: {
        menuLoad(state) {
            return state.menuLoad
        }
    },
    mutations: {
        setMenuLoad(state, menuLoad) {
            state.menuLoad = menuLoad;
        },
        setMenuTree(state, menuTree) {
            state.menuTree = menuTree;
        }
    },
    actions: {
        getMenuTree() {

        }
    }


}