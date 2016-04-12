System.register(['angular2/core', '../shared/db-location.service', '../dbLocation/db-location-base.component'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, db_location_service_1, db_location_base_component_1;
    var DbLocationModelComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (db_location_service_1_1) {
                db_location_service_1 = db_location_service_1_1;
            },
            function (db_location_base_component_1_1) {
                db_location_base_component_1 = db_location_base_component_1_1;
            }],
        execute: function() {
            DbLocationModelComponent = (function (_super) {
                __extends(DbLocationModelComponent, _super);
                function DbLocationModelComponent(_dbLocationService) {
                    _super.call(this, _dbLocationService);
                    this._dbLocationService = _dbLocationService;
                }
                DbLocationModelComponent.prototype.ngOnInit = function () {
                    _super.prototype.ngOnInit.call(this);
                };
                ;
                DbLocationModelComponent = __decorate([
                    core_1.Component({
                        selector: 'bm-dbLocation',
                        templateUrl: 'app/dbLocation/db-location-model.component.html'
                    }), 
                    __metadata('design:paramtypes', [db_location_service_1.DbLocationService])
                ], DbLocationModelComponent);
                return DbLocationModelComponent;
            })(db_location_base_component_1.DbLocationBaseComponent);
            exports_1("DbLocationModelComponent", DbLocationModelComponent);
        }
    }
});
//# sourceMappingURL=C:/Users/arthur.lee/Documents/Visual Studio 2015/Projects/Angular2Forms/src/UI/wwwroot/app/dbLocation/db-location-model.component.js.map