webpackJsonpac__name_([5],{

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(2);
var common_1 = __webpack_require__(15);
var forms_1 = __webpack_require__(11);
var nga_module_1 = __webpack_require__(31);
var ng2_tree_1 = __webpack_require__(755);
var components_routing_1 = __webpack_require__(662);
var components_component_1 = __webpack_require__(598);
var treeView_component_1 = __webpack_require__(599);
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            nga_module_1.NgaModule,
            ng2_tree_1.TreeModule,
            components_routing_1.routing
        ],
        declarations: [
            components_component_1.Components,
            treeView_component_1.TreeView,
        ]
    })
], ComponentsModule);
exports.ComponentsModule = ComponentsModule;


/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(443);

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(2);
var Rx_1 = __webpack_require__(500);
var NodeDraggableService = (function () {
    function NodeDraggableService() {
        this.draggableNodeEvents$ = new Rx_1.Subject();
    }
    NodeDraggableService.prototype.captureNode = function (node) {
        this.capturedNode = node;
    };
    NodeDraggableService.prototype.getCapturedNode = function () {
        return this.capturedNode;
    };
    NodeDraggableService.prototype.releaseCapturedNode = function () {
        this.capturedNode = null;
    };
    NodeDraggableService.decorators = [
        { type: core_1.Injectable },
    ];
    NodeDraggableService.ctorParameters = function () { return []; };
    return NodeDraggableService;
}());
exports.NodeDraggableService = NodeDraggableService;
//# sourceMappingURL=node-draggable.service.js.map

/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(2);
var Rx_1 = __webpack_require__(500);
var NodeMenuService = (function () {
    function NodeMenuService() {
        this.nodeMenuEvents$ = new Rx_1.Subject();
    }
    NodeMenuService.decorators = [
        { type: core_1.Injectable },
    ];
    NodeMenuService.ctorParameters = function () { return []; };
    return NodeMenuService;
}());
exports.NodeMenuService = NodeMenuService;
//# sourceMappingURL=node-menu.service.js.map

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(2);
var Components = (function () {
    function Components() {
    }
    return Components;
}());
Components = __decorate([
    core_1.Component({
        selector: 'components',
        template: "<router-outlet></router-outlet>"
    }),
    __metadata("design:paramtypes", [])
], Components);
exports.Components = Components;


/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(2);
var TreeView = (function () {
    function TreeView() {
        this.tree = {
            value: 'Programming languages by programming paradigm',
            children: [
                {
                    value: 'Object-oriented programming',
                    children: [
                        { value: 'Java' },
                        { value: 'C++' },
                        { value: 'C#' },
                    ]
                },
                {
                    value: 'Prototype-based programming',
                    children: [
                        { value: 'JavaScript' },
                        { value: 'CoffeeScript' },
                        { value: 'Lua' },
                    ]
                }
            ]
        };
    }
    return TreeView;
}());
TreeView = __decorate([
    core_1.Component({
        selector: 'tree-view',
        template: __webpack_require__(797),
    }),
    __metadata("design:paramtypes", [])
], TreeView);
exports.TreeView = TreeView;


/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

(function (NodeEditableEventAction) {
    NodeEditableEventAction[NodeEditableEventAction["Cancel"] = 0] = "Cancel";
})(exports.NodeEditableEventAction || (exports.NodeEditableEventAction = {}));
var NodeEditableEventAction = exports.NodeEditableEventAction;
//# sourceMappingURL=editable.type.js.map

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

(function (NodeMenuItemAction) {
    NodeMenuItemAction[NodeMenuItemAction["NewFolder"] = 0] = "NewFolder";
    NodeMenuItemAction[NodeMenuItemAction["NewTag"] = 1] = "NewTag";
    NodeMenuItemAction[NodeMenuItemAction["Rename"] = 2] = "Rename";
    NodeMenuItemAction[NodeMenuItemAction["Remove"] = 3] = "Remove";
})(exports.NodeMenuItemAction || (exports.NodeMenuItemAction = {}));
var NodeMenuItemAction = exports.NodeMenuItemAction;
(function (NodeMenuAction) {
    NodeMenuAction[NodeMenuAction["Close"] = 0] = "Close";
})(exports.NodeMenuAction || (exports.NodeMenuAction = {}));
var NodeMenuAction = exports.NodeMenuAction;
//# sourceMappingURL=menu.types.js.map

/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(2);
var tree_types_1 = __webpack_require__(762);
var node_draggable_service_1 = __webpack_require__(585);
var node_menu_service_1 = __webpack_require__(586);
var draggable_types_1 = __webpack_require__(757);
var menu_types_1 = __webpack_require__(643);
var editable_type_1 = __webpack_require__(642);
var tree_service_1 = __webpack_require__(645);
var event_utils_1 = __webpack_require__(646);
var _ = __webpack_require__(20);
var type_utils_1 = __webpack_require__(763);
var TreeInternalComponent = (function () {
    function TreeInternalComponent(nodeMenuService, nodeDraggableService, treeService, element) {
        this.nodeMenuService = nodeMenuService;
        this.nodeDraggableService = nodeDraggableService;
        this.treeService = treeService;
        this.element = element;
        this.nodeRemoved = new core_1.EventEmitter();
        this.isSelected = false;
        this.isMenuVisible = false;
    }
    TreeInternalComponent.prototype.ngOnInit = function () {
        this.indexInParent = 0;
        this.tree._indexInParent = this.indexInParent;
        this.isLeaf = !Array.isArray(this.tree.children);
        this.tree.options = tree_types_1.TreeModelOptions.merge(this.tree, this.parentTree);
        this.setUpNodeSelectedEventHandler();
        this.setUpMenuEventHandler();
        this.setUpDraggableEventHandler();
    };
    TreeInternalComponent.prototype.setUpNodeSelectedEventHandler = function () {
        var _this = this;
        this.treeService.nodeSelected$
            .filter(function (e) { return _this.tree !== e.node; })
            .subscribe(function () { return _this.isSelected = false; });
    };
    TreeInternalComponent.prototype.setUpMenuEventHandler = function () {
        var _this = this;
        this.nodeMenuService.nodeMenuEvents$
            .filter(function (e) { return _this.element.nativeElement !== e.sender; })
            .filter(function (e) { return e.action === menu_types_1.NodeMenuAction.Close; })
            .subscribe(function () { return _this.isMenuVisible = false; });
    };
    TreeInternalComponent.prototype.setUpDraggableEventHandler = function () {
        var _this = this;
        this.nodeDraggableService.draggableNodeEvents$
            .filter(function (e) { return e.action === draggable_types_1.NodeDraggableEventAction.Remove; })
            .filter(function (e) { return e.captured.element === _this.element; })
            .subscribe(function (e) { return _this.onChildRemoved({ node: e.captured.tree }, _this.parentTree); });
        this.nodeDraggableService.draggableNodeEvents$
            .filter(function (e) { return e.action !== draggable_types_1.NodeDraggableEventAction.Remove; })
            .filter(function (e) { return e.target === _this.element; })
            .filter(function (e) { return !_this.hasChild(e.captured.tree); })
            .subscribe(function (e) {
            if (_this.isSiblingOf(e.captured.tree)) {
                return _this.swapWithSibling(e.captured.tree);
            }
            if (_this.isFolder()) {
                return _this.moveNodeToThisTreeAndRemoveFromPreviousOne(e);
            }
            else {
                return _this.moveNodeToParentTreeAndRemoveFromPreviousOne(e);
            }
        });
    };
    TreeInternalComponent.prototype.moveNodeToThisTreeAndRemoveFromPreviousOne = function (e) {
        this.tree.children.push(e.captured.tree);
        this.nodeDraggableService.draggableNodeEvents$.next(_.merge(e, { action: draggable_types_1.NodeDraggableEventAction.Remove }));
        this.treeService.nodeMoved$.next({
            node: e.captured.tree,
            parent: this.tree
        });
    };
    TreeInternalComponent.prototype.moveNodeToParentTreeAndRemoveFromPreviousOne = function (e) {
        this.parentTree.children.splice(this.indexInParent, 0, e.captured.tree);
        this.nodeDraggableService.draggableNodeEvents$.next(_.merge(e, { action: draggable_types_1.NodeDraggableEventAction.Remove }));
        this.treeService.nodeMoved$.next({
            node: e.captured.tree,
            parent: this.parentTree
        });
    };
    TreeInternalComponent.prototype.isEditInProgress = function () {
        return this.tree._status === tree_types_1.TreeStatus.EditInProgress
            || this.tree._status === tree_types_1.TreeStatus.New;
    };
    TreeInternalComponent.prototype.isFolder = function () {
        return !this.isLeaf;
    };
    TreeInternalComponent.prototype.hasChild = function (child) {
        return _.includes(this.tree.children, child);
    };
    TreeInternalComponent.prototype.isSiblingOf = function (child) {
        return this.parentTree && _.includes(this.parentTree.children, child);
    };
    TreeInternalComponent.prototype.swapWithSibling = function (sibling) {
        var siblingIndex = this.parentTree.children.indexOf(sibling);
        var thisTreeIndex = this.parentTree.children.indexOf(this.tree);
        this.parentTree.children[siblingIndex] = this.tree;
        this.parentTree.children[thisTreeIndex] = sibling;
        this.tree._indexInParent = siblingIndex;
        sibling._indexInParent = thisTreeIndex;
        this.treeService.nodeMoved$.next({
            node: this.tree,
            parent: this.parentTree
        });
    };
    TreeInternalComponent.prototype.isNodeExpanded = function () {
        return this.tree._foldingType === tree_types_1.FoldingType.Expanded;
    };
    TreeInternalComponent.prototype.switchFoldingType = function (e, tree) {
        this.handleFoldingType(e.target.parentNode.parentNode, tree);
    };
    TreeInternalComponent.prototype.getFoldingTypeCssClass = function (node) {
        if (!node._foldingType) {
            if (node.children) {
                node._foldingType = tree_types_1.FoldingType.Expanded;
            }
            else {
                node._foldingType = tree_types_1.FoldingType.Leaf;
            }
        }
        return node._foldingType.cssClass;
    };
    TreeInternalComponent.prototype.getNextFoldingType = function (node) {
        if (node._foldingType === tree_types_1.FoldingType.Expanded) {
            return tree_types_1.FoldingType.Collapsed;
        }
        return tree_types_1.FoldingType.Expanded;
    };
    TreeInternalComponent.prototype.handleFoldingType = function (parent, node) {
        if (node._foldingType === tree_types_1.FoldingType.Leaf) {
            return;
        }
        node._foldingType = this.getNextFoldingType(node);
    };
    TreeInternalComponent.prototype.onMenuItemSelected = function (e) {
        switch (e.nodeMenuItemAction) {
            case menu_types_1.NodeMenuItemAction.NewTag:
                this.onNewSelected(e);
                break;
            case menu_types_1.NodeMenuItemAction.NewFolder:
                this.onNewSelected(e);
                break;
            case menu_types_1.NodeMenuItemAction.Rename:
                this.onRenameSelected();
                break;
            case menu_types_1.NodeMenuItemAction.Remove:
                this.onRemoveSelected();
                break;
            default:
                throw new Error("Chosen menu item doesn't exist");
        }
    };
    TreeInternalComponent.prototype.onRenameSelected = function () {
        this.tree._status = tree_types_1.TreeStatus.EditInProgress;
        this.isMenuVisible = false;
    };
    TreeInternalComponent.prototype.onRemoveSelected = function () {
        this.treeService.nodeRemoved$.next({
            node: this.tree,
            parent: this.parentTree
        });
        this.nodeRemoved.emit({ node: this.tree });
    };
    TreeInternalComponent.prototype.onNewSelected = function (e) {
        if (!this.tree.children || !this.tree.children.push) {
            this.tree.children = [];
        }
        var newNode = { value: '', _status: tree_types_1.TreeStatus.New };
        if (e.nodeMenuItemAction === menu_types_1.NodeMenuItemAction.NewFolder) {
            newNode.children = [];
        }
        this.isLeaf ? this.parentTree.children.push(newNode) : this.tree.children.push(newNode);
        this.isMenuVisible = false;
    };
    TreeInternalComponent.prototype.onChildRemoved = function (e, parent) {
        if (parent === void 0) { parent = this.tree; }
        var childIndex = _.findIndex(parent.children, function (child) { return child === e.node; });
        if (childIndex >= 0) {
            parent.children.splice(childIndex, 1);
        }
    };
    TreeInternalComponent.prototype.showMenu = function (e) {
        if (this.tree.options.static) {
            return;
        }
        if (event_utils_1.isRightButtonClicked(e)) {
            this.isMenuVisible = !this.isMenuVisible;
            this.nodeMenuService.nodeMenuEvents$.next({
                sender: this.element.nativeElement,
                action: menu_types_1.NodeMenuAction.Close
            });
        }
        e.preventDefault();
    };
    TreeInternalComponent.prototype.applyNewValue = function (e, node) {
        if (e.action === editable_type_1.NodeEditableEventAction.Cancel) {
            if (type_utils_1.isValueEmpty(e.value)) {
                return this.nodeRemoved.emit({ node: this.tree });
            }
            node._status = tree_types_1.TreeStatus.Modified;
            return;
        }
        if (type_utils_1.isValueEmpty(e.value)) {
            return;
        }
        var nodeOldValue = node.value;
        if (type_utils_1.isRenamable(node.value)) {
            node.value = type_utils_1.applyNewValueToRenamable(node.value, e.value);
        }
        else {
            node.value = e.value;
        }
        if (node._status === tree_types_1.TreeStatus.New) {
            this.treeService.nodeCreated$.next({ node: node, parent: this.parentTree });
        }
        if (node._status === tree_types_1.TreeStatus.EditInProgress) {
            this.treeService.nodeRenamed$.next({
                node: node,
                parent: this.parentTree,
                oldValue: nodeOldValue,
                newValue: node.value
            });
        }
        node._status = tree_types_1.TreeStatus.Modified;
    };
    TreeInternalComponent.prototype.onNodeSelected = function (e) {
        if (event_utils_1.isLeftButtonClicked(e)) {
            this.isSelected = true;
            this.treeService.nodeSelected$.next({ node: this.tree });
        }
    };
    TreeInternalComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'tree-internal',
                    template: "\n  <ul class=\"tree\" *ngIf=\"tree\">\n    <li>\n      <div (contextmenu)=\"showMenu($event)\" [nodeDraggable]=\"element\" [tree]=\"tree\">\n        <div class=\"folding\" (click)=\"switchFoldingType($event, tree)\" [ngClass]=\"getFoldingTypeCssClass(tree)\"></div>\n        <div href=\"#\" class=\"node-value\" *ngIf=\"!isEditInProgress()\" [class.node-selected]=\"isSelected\" (click)=\"onNodeSelected($event)\">{{tree.value}}</div>\n\n        <input type=\"text\" class=\"node-value\" *ngIf=\"isEditInProgress()\"\n               [nodeEditable]=\"tree.value\"\n               (valueChanged)=\"applyNewValue($event, tree)\"/>\n      </div>\n\n      <node-menu *ngIf=\"isMenuVisible\" (menuItemSelected)=\"onMenuItemSelected($event)\"></node-menu>\n\n      <template [ngIf]=\"isNodeExpanded()\">\n        <tree-internal *ngFor=\"let child of tree.children; let position = index\"\n              [parentTree]=\"tree\"\n              [indexInParent]=\"position\"\n              [tree]=\"child\"\n              (nodeRemoved)=\"onChildRemoved($event)\"></tree-internal>\n      </template>\n    </li>\n  </ul>\n  "
                },] },
    ];
    TreeInternalComponent.ctorParameters = function () { return [
        { type: node_menu_service_1.NodeMenuService, decorators: [{ type: core_1.Inject, args: [node_menu_service_1.NodeMenuService,] },] },
        { type: node_draggable_service_1.NodeDraggableService, decorators: [{ type: core_1.Inject, args: [node_draggable_service_1.NodeDraggableService,] },] },
        { type: tree_service_1.TreeService, decorators: [{ type: core_1.Inject, args: [tree_service_1.TreeService,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    TreeInternalComponent.propDecorators = {
        'tree': [{ type: core_1.Input },],
        'parentTree': [{ type: core_1.Input },],
        'indexInParent': [{ type: core_1.Input },],
        'nodeRemoved': [{ type: core_1.Output },],
    };
    return TreeInternalComponent;
}());
exports.TreeInternalComponent = TreeInternalComponent;
var TreeComponent = (function () {
    function TreeComponent(treeService) {
        this.treeService = treeService;
        this.nodeCreated = new core_1.EventEmitter();
        this.nodeRemoved = new core_1.EventEmitter();
        this.nodeRenamed = new core_1.EventEmitter();
        this.nodeSelected = new core_1.EventEmitter();
        this.nodeMoved = new core_1.EventEmitter();
    }
    TreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.treeService.nodeRemoved$.subscribe(function (e) {
            _this.nodeRemoved.emit(e);
        });
        this.treeService.nodeRenamed$.subscribe(function (e) {
            _this.nodeRenamed.emit(e);
        });
        this.treeService.nodeCreated$.subscribe(function (e) {
            _this.nodeCreated.emit(e);
        });
        this.treeService.nodeSelected$.subscribe(function (e) {
            _this.nodeSelected.emit(e);
        });
        this.treeService.nodeMoved$.subscribe(function (e) {
            _this.nodeMoved.emit(e);
        });
    };
    TreeComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'tree',
                    template: "<tree-internal [tree]=\"tree\"></tree-internal>",
                    providers: [tree_service_1.TreeService]
                },] },
    ];
    TreeComponent.ctorParameters = function () { return [
        { type: tree_service_1.TreeService, decorators: [{ type: core_1.Inject, args: [tree_service_1.TreeService,] },] },
    ]; };
    TreeComponent.propDecorators = {
        'tree': [{ type: core_1.Input },],
        'nodeCreated': [{ type: core_1.Output },],
        'nodeRemoved': [{ type: core_1.Output },],
        'nodeRenamed': [{ type: core_1.Output },],
        'nodeSelected': [{ type: core_1.Output },],
        'nodeMoved': [{ type: core_1.Output },],
    };
    return TreeComponent;
}());
exports.TreeComponent = TreeComponent;
//# sourceMappingURL=tree.component.js.map

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Rx_1 = __webpack_require__(500);
var core_1 = __webpack_require__(2);
var TreeService = (function () {
    function TreeService() {
        this.nodeMoved$ = new Rx_1.Subject();
        this.nodeRemoved$ = new Rx_1.Subject();
        this.nodeRenamed$ = new Rx_1.Subject();
        this.nodeCreated$ = new Rx_1.Subject();
        this.nodeSelected$ = new Rx_1.Subject();
    }
    TreeService.decorators = [
        { type: core_1.Injectable },
    ];
    TreeService.ctorParameters = function () { return []; };
    return TreeService;
}());
exports.TreeService = TreeService;
//# sourceMappingURL=tree.service.js.map

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isLeftButtonClicked(e) {
    return e.button === MouseButtons.Left;
}
exports.isLeftButtonClicked = isLeftButtonClicked;
function isRightButtonClicked(e) {
    return e.button === MouseButtons.Right;
}
exports.isRightButtonClicked = isRightButtonClicked;
function isEscapePressed(e) {
    return e.keyCode === Keys.Escape;
}
exports.isEscapePressed = isEscapePressed;
var Keys;
(function (Keys) {
    Keys[Keys["Escape"] = 27] = "Escape";
})(Keys || (Keys = {}));
var MouseButtons;
(function (MouseButtons) {
    MouseButtons[MouseButtons["Left"] = 0] = "Left";
    MouseButtons[MouseButtons["Right"] = 2] = "Right";
})(MouseButtons || (MouseButtons = {}));
//# sourceMappingURL=event.utils.js.map

/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(9);
var components_component_1 = __webpack_require__(598);
var treeView_component_1 = __webpack_require__(599);
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: components_component_1.Components,
        children: [
            { path: 'treeview', component: treeView_component_1.TreeView }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tree_component_1 = __webpack_require__(644);
exports.TreeComponent = tree_component_1.TreeComponent;
var tree_module_1 = __webpack_require__(761);
exports.TreeModule = tree_module_1.TreeModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var CapturedNode = (function () {
    function CapturedNode(anElement, aTree) {
        this.anElement = anElement;
        this.aTree = aTree;
    }
    CapturedNode.prototype.canBeDroppedAt = function (element) {
        return !this.sameAs(element) && !this.contains(element);
    };
    CapturedNode.prototype.contains = function (other) {
        return this.element.nativeElement.contains(other.nativeElement);
    };
    CapturedNode.prototype.sameAs = function (other) {
        return this.element === other;
    };
    Object.defineProperty(CapturedNode.prototype, "element", {
        get: function () {
            return this.anElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CapturedNode.prototype, "tree", {
        get: function () {
            return this.aTree;
        },
        enumerable: true,
        configurable: true
    });
    return CapturedNode;
}());
exports.CapturedNode = CapturedNode;
//# sourceMappingURL=captured-node.js.map

/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

(function (NodeDraggableEventAction) {
    NodeDraggableEventAction[NodeDraggableEventAction["Remove"] = 0] = "Remove";
})(exports.NodeDraggableEventAction || (exports.NodeDraggableEventAction = {}));
var NodeDraggableEventAction = exports.NodeDraggableEventAction;
//# sourceMappingURL=draggable.types.js.map

/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(2);
var node_draggable_service_1 = __webpack_require__(585);
var captured_node_1 = __webpack_require__(756);
var NodeDraggableDirective = (function () {
    function NodeDraggableDirective(element, nodeDraggableService, renderer) {
        this.element = element;
        this.nodeDraggableService = nodeDraggableService;
        this.renderer = renderer;
        this.disposersForDragListeners = [];
        this.nodeNativeElement = element.nativeElement;
    }
    NodeDraggableDirective.prototype.ngOnInit = function () {
        if (!this.tree.options.static) {
            this.renderer.setElementAttribute(this.nodeNativeElement, 'draggable', 'true');
            this.disposersForDragListeners.push(this.renderer.listen(this.nodeNativeElement, 'dragenter', this.handleDragEnter.bind(this)));
            this.disposersForDragListeners.push(this.renderer.listen(this.nodeNativeElement, 'dragover', this.handleDragOver.bind(this)));
            this.disposersForDragListeners.push(this.renderer.listen(this.nodeNativeElement, 'dragstart', this.handleDragStart.bind(this)));
            this.disposersForDragListeners.push(this.renderer.listen(this.nodeNativeElement, 'dragleave', this.handleDragLeave.bind(this)));
            this.disposersForDragListeners.push(this.renderer.listen(this.nodeNativeElement, 'drop', this.handleDrop.bind(this)));
            this.disposersForDragListeners.push(this.renderer.listen(this.nodeNativeElement, 'dragend', this.handleDragEnd.bind(this)));
        }
    };
    NodeDraggableDirective.prototype.ngOnDestroy = function () {
        this.disposersForDragListeners.forEach(function (dispose) { return dispose(); });
    };
    NodeDraggableDirective.prototype.handleDragStart = function (e) {
        e.stopPropagation();
        this.nodeDraggableService.captureNode(new captured_node_1.CapturedNode(this.nodeDraggable, this.tree));
        e.dataTransfer.setData('text', NodeDraggableDirective.DATA_TRANSFER_STUB_DATA);
        e.dataTransfer.effectAllowed = 'move';
    };
    NodeDraggableDirective.prototype.handleDragOver = function (e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };
    NodeDraggableDirective.prototype.handleDragEnter = function (e) {
        e.preventDefault();
        if (this.containsElementAt(e)) {
            this.addClass('over-drop-target');
        }
    };
    NodeDraggableDirective.prototype.handleDragLeave = function (e) {
        if (!this.containsElementAt(e)) {
            this.removeClass('over-drop-target');
        }
    };
    NodeDraggableDirective.prototype.handleDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.removeClass('over-drop-target');
        if (!this.isDropPossible(e)) {
            return false;
        }
        if (this.nodeDraggableService.getCapturedNode()) {
            return this.notifyThatNodeWasDropped();
        }
    };
    NodeDraggableDirective.prototype.isDropPossible = function (e) {
        var capturedNode = this.nodeDraggableService.getCapturedNode();
        return capturedNode
            && capturedNode.canBeDroppedAt(this.nodeDraggable)
            && this.containsElementAt(e);
    };
    NodeDraggableDirective.prototype.handleDragEnd = function (e) {
        this.removeClass('over-drop-target');
        this.nodeDraggableService.releaseCapturedNode();
    };
    NodeDraggableDirective.prototype.containsElementAt = function (e) {
        var _a = e.x, x = _a === void 0 ? e.clientX : _a, _b = e.y, y = _b === void 0 ? e.clientY : _b;
        return this.nodeNativeElement.contains(document.elementFromPoint(x, y));
    };
    NodeDraggableDirective.prototype.addClass = function (className) {
        var classList = this.nodeNativeElement.classList;
        classList.add(className);
    };
    NodeDraggableDirective.prototype.removeClass = function (className) {
        var classList = this.nodeNativeElement.classList;
        classList.remove(className);
    };
    NodeDraggableDirective.prototype.notifyThatNodeWasDropped = function () {
        var event = {
            captured: this.nodeDraggableService.getCapturedNode(),
            target: this.nodeDraggable
        };
        this.nodeDraggableService.draggableNodeEvents$.next(event);
    };
    NodeDraggableDirective.DATA_TRANSFER_STUB_DATA = 'some browsers enable drag-n-drop only when dataTransfer has data';
    NodeDraggableDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[nodeDraggable]'
                },] },
    ];
    NodeDraggableDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
        { type: node_draggable_service_1.NodeDraggableService, decorators: [{ type: core_1.Inject, args: [node_draggable_service_1.NodeDraggableService,] },] },
        { type: core_1.Renderer, decorators: [{ type: core_1.Inject, args: [core_1.Renderer,] },] },
    ]; };
    NodeDraggableDirective.propDecorators = {
        'nodeDraggable': [{ type: core_1.Input },],
        'tree': [{ type: core_1.Input },],
    };
    return NodeDraggableDirective;
}());
exports.NodeDraggableDirective = NodeDraggableDirective;
//# sourceMappingURL=node-draggable.directive.js.map

/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(2);
var editable_type_1 = __webpack_require__(642);
var NodeEditableDirective = (function () {
    function NodeEditableDirective(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.valueChanged = new core_1.EventEmitter(false);
    }
    NodeEditableDirective.prototype.ngOnInit = function () {
        var nativeElement = this.elementRef.nativeElement;
        this.renderer.invokeElementMethod(nativeElement, 'focus', []);
        this.renderer.setElementProperty(nativeElement, 'value', this.nodeValue);
    };
    NodeEditableDirective.prototype.applyNewValue = function (newNodeValue) {
        this.valueChanged.emit({ type: 'keyup', value: newNodeValue });
    };
    NodeEditableDirective.prototype.applyNewValueByLoosingFocus = function (newNodeValue) {
        this.valueChanged.emit({ type: 'blur', value: newNodeValue });
    };
    NodeEditableDirective.prototype.cancelEditing = function () {
        this.valueChanged.emit({
            type: 'keyup',
            value: this.nodeValue,
            action: editable_type_1.NodeEditableEventAction.Cancel
        });
    };
    NodeEditableDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[nodeEditable]'
                },] },
    ];
    NodeEditableDirective.ctorParameters = function () { return [
        { type: core_1.Renderer, decorators: [{ type: core_1.Inject, args: [core_1.Renderer,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    NodeEditableDirective.propDecorators = {
        'nodeValue': [{ type: core_1.Input, args: ['nodeEditable',] },],
        'valueChanged': [{ type: core_1.Output },],
        'applyNewValue': [{ type: core_1.HostListener, args: ['keyup.enter', ['$event.target.value'],] },],
        'applyNewValueByLoosingFocus': [{ type: core_1.HostListener, args: ['blur', ['$event.target.value'],] },],
        'cancelEditing': [{ type: core_1.HostListener, args: ['keyup.esc',] },],
    };
    return NodeEditableDirective;
}());
exports.NodeEditableDirective = NodeEditableDirective;
//# sourceMappingURL=node-editable.directive.js.map

/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(2);
var node_menu_service_1 = __webpack_require__(586);
var menu_types_1 = __webpack_require__(643);
var event_utils_1 = __webpack_require__(646);
var NodeMenuComponent = (function () {
    function NodeMenuComponent(renderer, nodeMenuService) {
        this.renderer = renderer;
        this.nodeMenuService = nodeMenuService;
        this.menuItemSelected = new core_1.EventEmitter();
        this.availableMenuItems = [
            {
                name: 'New tag',
                action: menu_types_1.NodeMenuItemAction.NewTag,
                cssClass: 'new-tag'
            },
            {
                name: 'New folder',
                action: menu_types_1.NodeMenuItemAction.NewFolder,
                cssClass: 'new-folder'
            },
            {
                name: 'Rename',
                action: menu_types_1.NodeMenuItemAction.Rename,
                cssClass: 'rename'
            },
            {
                name: 'Remove',
                action: menu_types_1.NodeMenuItemAction.Remove,
                cssClass: 'remove'
            }
        ];
        this.disposersForGlobalListeners = [];
    }
    NodeMenuComponent.prototype.ngOnInit = function () {
        this.disposersForGlobalListeners.push(this.renderer.listenGlobal('document', 'keyup', this.closeMenu.bind(this)));
        this.disposersForGlobalListeners.push(this.renderer.listenGlobal('document', 'click', this.closeMenu.bind(this)));
    };
    NodeMenuComponent.prototype.ngOnDestroy = function () {
        this.disposersForGlobalListeners.forEach(function (dispose) { return dispose(); });
    };
    NodeMenuComponent.prototype.onMenuItemSelected = function (e, selectedMenuItem) {
        if (event_utils_1.isLeftButtonClicked(e)) {
            this.menuItemSelected.emit({ nodeMenuItemAction: selectedMenuItem.action });
        }
    };
    NodeMenuComponent.prototype.closeMenu = function (e) {
        var mouseClicked = e instanceof MouseEvent;
        var escapePressed = e instanceof KeyboardEvent && event_utils_1.isEscapePressed(e);
        if (escapePressed || mouseClicked) {
            var nodeMenuEvent = {
                sender: e.target,
                action: menu_types_1.NodeMenuAction.Close
            };
            this.nodeMenuService.nodeMenuEvents$.next(nodeMenuEvent);
        }
    };
    NodeMenuComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'node-menu',
                    template: "\n    <div class=\"node-menu\">\n      <ul class=\"node-menu-content\">\n        <li class=\"node-menu-item\" *ngFor=\"let menuItem of availableMenuItems\"\n            (click)=\"onMenuItemSelected($event, menuItem)\">\n          <div class=\"node-menu-item-icon {{menuItem.cssClass}}\"></div>\n          <span class=\"node-menu-item-value\">{{menuItem.name}}</span>\n        </li>\n      </ul>\n    </div>\n  "
                },] },
    ];
    NodeMenuComponent.ctorParameters = function () { return [
        { type: core_1.Renderer, decorators: [{ type: core_1.Inject, args: [core_1.Renderer,] },] },
        { type: node_menu_service_1.NodeMenuService, decorators: [{ type: core_1.Inject, args: [node_menu_service_1.NodeMenuService,] },] },
    ]; };
    NodeMenuComponent.propDecorators = {
        'menuItemSelected': [{ type: core_1.Output },],
    };
    return NodeMenuComponent;
}());
exports.NodeMenuComponent = NodeMenuComponent;
//# sourceMappingURL=node-menu.component.js.map

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(2);
var tree_component_1 = __webpack_require__(644);
var common_1 = __webpack_require__(15);
var node_draggable_directive_1 = __webpack_require__(758);
var node_draggable_service_1 = __webpack_require__(585);
var node_editable_directive_1 = __webpack_require__(759);
var node_menu_component_1 = __webpack_require__(760);
var node_menu_service_1 = __webpack_require__(586);
var tree_service_1 = __webpack_require__(645);
var TreeModule = (function () {
    function TreeModule() {
    }
    TreeModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [node_draggable_directive_1.NodeDraggableDirective, tree_component_1.TreeComponent, node_editable_directive_1.NodeEditableDirective, node_menu_component_1.NodeMenuComponent, tree_component_1.TreeInternalComponent],
                    exports: [tree_component_1.TreeComponent],
                    providers: [node_draggable_service_1.NodeDraggableService, node_menu_service_1.NodeMenuService, tree_service_1.TreeService]
                },] },
    ];
    TreeModule.ctorParameters = function () { return []; };
    return TreeModule;
}());
exports.TreeModule = TreeModule;
//# sourceMappingURL=tree.module.js.map

/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _ = __webpack_require__(20);
var FoldingType = (function () {
    function FoldingType(_cssClass) {
        this._cssClass = _cssClass;
    }
    Object.defineProperty(FoldingType.prototype, "cssClass", {
        get: function () {
            return this._cssClass;
        },
        enumerable: true,
        configurable: true
    });
    FoldingType.Expanded = new FoldingType('node-expanded');
    FoldingType.Collapsed = new FoldingType('node-collapsed');
    FoldingType.Leaf = new FoldingType('node-leaf');
    return FoldingType;
}());
exports.FoldingType = FoldingType;
var TreeModelOptions = (function () {
    function TreeModelOptions() {
        this.static = false;
    }
    TreeModelOptions.merge = function (sourceA, sourceB) {
        return _.defaults({}, _.get(sourceA, 'options'), _.get(sourceB, 'options'), { static: false });
    };
    return TreeModelOptions;
}());
exports.TreeModelOptions = TreeModelOptions;
(function (TreeStatus) {
    TreeStatus[TreeStatus["New"] = 0] = "New";
    TreeStatus[TreeStatus["Modified"] = 1] = "Modified";
    TreeStatus[TreeStatus["EditInProgress"] = 2] = "EditInProgress";
})(exports.TreeStatus || (exports.TreeStatus = {}));
var TreeStatus = exports.TreeStatus;
//# sourceMappingURL=tree.types.js.map

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _ = __webpack_require__(20);
function applyNewValueToRenamable(value, newValue) {
    var renamableValue = _.merge({}, value);
    renamableValue.setName(newValue);
    return renamableValue;
}
exports.applyNewValueToRenamable = applyNewValueToRenamable;
function isValueEmpty(value) {
    return _.isEmpty(_.trim(value));
}
exports.isValueEmpty = isValueEmpty;
function isRenamable(value) {
    return value.setName !== undefined;
}
exports.isRenamable = isRenamable;
//# sourceMappingURL=type.utils.js.map

/***/ }),

/***/ 797:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n  <ba-card title=\"basic\">\n    <tree id=\"tree-view\" [tree]=\"tree\"></tree>\n  </ba-card>\n</div>\n"

/***/ })

});
//# sourceMappingURL=5.map