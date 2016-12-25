System.registerDynamic("src/ngrx-action-creator-factory", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    /* Action Creator Factory
     * ======================
     * Creates typed action creators functions
     * const addTodo = ActionCreatorFactory.create<string>('ADD_TODO')
     *
     **/
    var ActionCreator = function () {
        function ActionCreator(type, payload) {
            if (type === void 0) {
                type = 'NOT_SET';
            }
            this.type = type;
            this.payload = payload;
        }
        return ActionCreator;
    }();
    exports.ActionCreator = ActionCreator;
    var ActionCreatorFactory = function () {
        function ActionCreatorFactory() {}
        ActionCreatorFactory.create = function (type, defaultPayloadValue) {
            return function (payload) {
                var _payload = payload || typeof payload !== 'undefined' ? payload : defaultPayloadValue;
                return new ActionCreator(type, _payload);
            };
        };
        return ActionCreatorFactory;
    }();
    ActionCreatorFactory = __decorate([core_1.Injectable(), __metadata("design:paramtypes", [])], ActionCreatorFactory);
    exports.ActionCreatorFactory = ActionCreatorFactory;
    return module.exports;
});
System.registerDynamic("src/index", ["@angular/core", "@angular/common", "./ngrx-action-creator-factory"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var common_1 = $__require("@angular/common");
    var ngrx_action_creator_factory_1 = $__require("./ngrx-action-creator-factory");
    var NgrxActionCreatorFactoryModule = function () {
        function NgrxActionCreatorFactoryModule() {}
        return NgrxActionCreatorFactoryModule;
    }();
    NgrxActionCreatorFactoryModule = __decorate([core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [],
        exports: [ngrx_action_creator_factory_1.ActionCreatorFactory],
        providers: [ngrx_action_creator_factory_1.ActionCreatorFactory]
    }), __metadata("design:paramtypes", [])], NgrxActionCreatorFactoryModule);
    exports.NgrxActionCreatorFactoryModule = NgrxActionCreatorFactoryModule;
    return module.exports;
});
System.registerDynamic("ngrx-action-creator-factory", ["./src/ngrx-action-creator-factory", "./src/index"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    var ngrx_action_creator_factory_1 = $__require("./src/ngrx-action-creator-factory");
    __export($__require("./src/ngrx-action-creator-factory"));
    __export($__require("./src/index"));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        providers: [ngrx_action_creator_factory_1.ActionCreatorFactory]
    };
    return module.exports;
});