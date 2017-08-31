var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "aurelia-framework", "./web-api"], function (require, exports, aurelia_framework_1, web_api_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(api) {
            this.api = api;
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = "Contacts";
            config.map([
                { route: "", moduleId: "no-selection", title: "Select" },
                { route: "contacts/:id", moduleId: "contact-detail", name: "contacts" }
            ]);
            this.router = router;
        };
        return App;
    }());
    App = __decorate([
        aurelia_framework_1.inject(web_api_1.WebAPI),
        __metadata("design:paramtypes", [web_api_1.WebAPI])
    ], App);
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFLQSxJQUFhLEdBQUc7UUFHZCxhQUFtQixHQUFXO1lBQVgsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUFJLENBQUM7UUFFbkMsNkJBQWUsR0FBZixVQUFnQixNQUEyQixFQUFFLE1BQWM7WUFDekQsTUFBTSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7WUFDMUIsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDVCxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO2dCQUN4RCxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7YUFDeEUsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdkIsQ0FBQztRQUNILFVBQUM7SUFBRCxDQWRBLEFBY0MsSUFBQTtJQWRZLEdBQUc7UUFEZiwwQkFBTSxDQUFDLGdCQUFNLENBQUM7eUNBSVcsZ0JBQU07T0FIbkIsR0FBRyxDQWNmO0lBZFksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJDb25maWd1cmF0aW9uIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBXZWJBUEkgfSBmcm9tIFwiLi93ZWItYXBpXCI7XHJcblxyXG5AaW5qZWN0KFdlYkFQSSlcclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgcm91dGVyOiBSb3V0ZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhcGk6IFdlYkFQSSkgeyB9XHJcblxyXG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24sIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICBjb25maWcudGl0bGUgPSBcIkNvbnRhY3RzXCI7XHJcbiAgICBjb25maWcubWFwKFtcclxuICAgICAgeyByb3V0ZTogXCJcIiwgbW9kdWxlSWQ6IFwibm8tc2VsZWN0aW9uXCIsIHRpdGxlOiBcIlNlbGVjdFwiIH0sXHJcbiAgICAgIHsgcm91dGU6IFwiY29udGFjdHMvOmlkXCIsIG1vZHVsZUlkOiBcImNvbnRhY3QtZGV0YWlsXCIsIG5hbWU6IFwiY29udGFjdHNcIiB9XHJcbiAgICBdKTtcclxuXHJcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('contact-detail',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "./web-api", "./messages", "./utility"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, web_api_1, messages_1, utility_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContactDetail = (function () {
        function ContactDetail(api, ea) {
            this.api = api;
            this.ea = ea;
        }
        ContactDetail.prototype.activate = function (params, routeConfig) {
            var _this = this;
            this.routeConfig = routeConfig;
            return this.api.getContactDetails(params.id).then(function (contact) {
                _this.contact = contact;
                _this.routeConfig.navModel.setTitle(_this.contact.firstName);
                _this.originalContact = JSON.parse(JSON.stringify(_this.contact));
                _this.ea.publish(new messages_1.ContactViewed(_this.contact));
            });
        };
        Object.defineProperty(ContactDetail.prototype, "canSave", {
            get: function () {
                return this.contact.firstName && this.contact.lastName && !this.api.isRequesting;
            },
            enumerable: true,
            configurable: true
        });
        ContactDetail.prototype.save = function () {
            var _this = this;
            this.api.saveContact(this.contact).then(function (contact) {
                _this.contact = contact;
                _this.routeConfig.navModel.setTitle(_this.contact.firstName);
                _this.originalContact = JSON.parse(JSON.stringify(_this.contact));
                _this.ea.publish(new messages_1.ContactUpdated(_this.contact));
            });
        };
        ContactDetail.prototype.canDeactivate = function () {
            if (!utility_1.areEqual(this.originalContact, this.contact)) {
                var result = confirm('You have unsaved changes. Are you sure you wish to leave?');
                if (!result) {
                    this.ea.publish(new messages_1.ContactViewed(this.contact));
                }
                return result;
            }
            return true;
        };
        return ContactDetail;
    }());
    ContactDetail = __decorate([
        aurelia_framework_1.inject(web_api_1.WebAPI, aurelia_event_aggregator_1.EventAggregator),
        __metadata("design:paramtypes", [web_api_1.WebAPI, aurelia_event_aggregator_1.EventAggregator])
    ], ContactDetail);
    exports.ContactDetail = ContactDetail;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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dGFjdC1kZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcbmltcG9ydCB7IFdlYkFQSSB9IGZyb20gJy4vd2ViLWFwaSc7XHJcbmltcG9ydCB7IENvbnRhY3RVcGRhdGVkLCBDb250YWN0Vmlld2VkIH0gZnJvbSAnLi9tZXNzYWdlcyc7XHJcbmltcG9ydCB7IGFyZUVxdWFsIH0gZnJvbSAnLi91dGlsaXR5JztcclxuXHJcbmludGVyZmFjZSBDb250YWN0IHtcclxuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gICAgbGFzdE5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBpbmplY3QoV2ViQVBJLCBFdmVudEFnZ3JlZ2F0b3IpXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0RGV0YWlsIHtcclxuICAgIHJvdXRlQ29uZmlnO1xyXG4gICAgY29udGFjdDogQ29udGFjdDtcclxuICAgIG9yaWdpbmFsQ29udGFjdDogQ29udGFjdDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogV2ViQVBJLCBwcml2YXRlIGVhOiBFdmVudEFnZ3JlZ2F0b3IpIHsgfVxyXG5cclxuICAgIGFjdGl2YXRlKHBhcmFtcywgcm91dGVDb25maWcpIHtcclxuICAgICAgICB0aGlzLnJvdXRlQ29uZmlnID0gcm91dGVDb25maWc7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaS5nZXRDb250YWN0RGV0YWlscyhwYXJhbXMuaWQpLnRoZW4oY29udGFjdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFjdCA9IDxDb250YWN0PmNvbnRhY3Q7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVDb25maWcubmF2TW9kZWwuc2V0VGl0bGUodGhpcy5jb250YWN0LmZpcnN0TmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxDb250YWN0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmNvbnRhY3QpKTtcclxuICAgICAgICAgICAgdGhpcy5lYS5wdWJsaXNoKG5ldyBDb250YWN0Vmlld2VkKHRoaXMuY29udGFjdCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjYW5TYXZlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhY3QuZmlyc3ROYW1lICYmIHRoaXMuY29udGFjdC5sYXN0TmFtZSAmJiAhdGhpcy5hcGkuaXNSZXF1ZXN0aW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmUoKSB7XHJcbiAgICAgICAgdGhpcy5hcGkuc2F2ZUNvbnRhY3QodGhpcy5jb250YWN0KS50aGVuKGNvbnRhY3QgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhY3QgPSA8Q29udGFjdD5jb250YWN0O1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlQ29uZmlnLm5hdk1vZGVsLnNldFRpdGxlKHRoaXMuY29udGFjdC5maXJzdE5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsQ29udGFjdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5jb250YWN0KSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWEucHVibGlzaChuZXcgQ29udGFjdFVwZGF0ZWQodGhpcy5jb250YWN0KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuRGVhY3RpdmF0ZSgpIHtcclxuICAgICAgICBpZiAoIWFyZUVxdWFsKHRoaXMub3JpZ2luYWxDb250YWN0LCB0aGlzLmNvbnRhY3QpKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBjb25maXJtKCdZb3UgaGF2ZSB1bnNhdmVkIGNoYW5nZXMuIEFyZSB5b3Ugc3VyZSB5b3Ugd2lzaCB0byBsZWF2ZT8nKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVhLnB1Ymxpc2gobmV3IENvbnRhY3RWaWV3ZWQodGhpcy5jb250YWN0KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('contact-list',["require", "exports", "aurelia-event-aggregator", "./web-api", "./messages", "aurelia-framework"], function (require, exports, aurelia_event_aggregator_1, web_api_1, messages_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContactList = (function () {
        function ContactList(api, ea) {
            var _this = this;
            this.api = api;
            this.selectedId = 0;
            ea.subscribe(messages_1.ContactViewed, function (msg) { return _this.select(msg.contact); });
            ea.subscribe(messages_1.ContactUpdated, function (msg) {
                var id = msg.contact.id;
                var found = _this.contacts.find(function (x) { return x.id == id; });
                Object.assign(found, msg.contact);
            });
        }
        ContactList.prototype.created = function () {
            var _this = this;
            this.api.getContactList().then(function (contacts) { return _this.contacts = contacts; });
        };
        ContactList.prototype.select = function (contact) {
            this.selectedId = contact.id;
            return true;
        };
        return ContactList;
    }());
    ContactList = __decorate([
        aurelia_framework_1.inject(web_api_1.WebAPI, aurelia_event_aggregator_1.EventAggregator),
        __metadata("design:paramtypes", [web_api_1.WebAPI, aurelia_event_aggregator_1.EventAggregator])
    ], ContactList);
    exports.ContactList = ContactList;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQSxJQUFhLFdBQVc7UUFJcEIscUJBQW9CLEdBQVcsRUFBRSxFQUFtQjtZQUFwRCxpQkFPQztZQVBtQixRQUFHLEdBQUgsR0FBRyxDQUFRO1lBRi9CLGVBQVUsR0FBRyxDQUFDLENBQUM7WUFHWCxFQUFFLENBQUMsU0FBUyxDQUFDLHdCQUFhLEVBQUUsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO1lBQzdELEVBQUUsQ0FBQyxTQUFTLENBQUMseUJBQWMsRUFBRSxVQUFBLEdBQUc7Z0JBQzVCLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUN4QixJQUFJLEtBQUssR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUNoRCxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsNkJBQU8sR0FBUDtZQUFBLGlCQUVDO1lBREcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO1FBQ3pFLENBQUM7UUFFRCw0QkFBTSxHQUFOLFVBQU8sT0FBTztZQUNWLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDTCxrQkFBQztJQUFELENBckJBLEFBcUJDLElBQUE7SUFyQlksV0FBVztRQUR2QiwwQkFBTSxDQUFDLGdCQUFNLEVBQUUsMENBQWUsQ0FBQzt5Q0FLSCxnQkFBTSxFQUFNLDBDQUFlO09BSjNDLFdBQVcsQ0FxQnZCO0lBckJZLGtDQUFXIiwiZmlsZSI6ImNvbnRhY3QtbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcbmltcG9ydCB7IFdlYkFQSSB9IGZyb20gJy4vd2ViLWFwaSc7XHJcbmltcG9ydCB7IENvbnRhY3RVcGRhdGVkLCBDb250YWN0Vmlld2VkIH0gZnJvbSAnLi9tZXNzYWdlcyc7XHJcbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbkBpbmplY3QoV2ViQVBJLCBFdmVudEFnZ3JlZ2F0b3IpXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0TGlzdCB7XHJcbiAgICBjb250YWN0cztcclxuICAgIHNlbGVjdGVkSWQgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBXZWJBUEksIGVhOiBFdmVudEFnZ3JlZ2F0b3IpIHtcclxuICAgICAgICBlYS5zdWJzY3JpYmUoQ29udGFjdFZpZXdlZCwgbXNnID0+IHRoaXMuc2VsZWN0KG1zZy5jb250YWN0KSk7XHJcbiAgICAgICAgZWEuc3Vic2NyaWJlKENvbnRhY3RVcGRhdGVkLCBtc2cgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBtc2cuY29udGFjdC5pZDtcclxuICAgICAgICAgICAgbGV0IGZvdW5kID0gdGhpcy5jb250YWN0cy5maW5kKHggPT4geC5pZCA9PSBpZCk7XHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZm91bmQsIG1zZy5jb250YWN0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgIHRoaXMuYXBpLmdldENvbnRhY3RMaXN0KCkudGhlbihjb250YWN0cyA9PiB0aGlzLmNvbnRhY3RzID0gY29udGFjdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdChjb250YWN0KSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZElkID0gY29udGFjdC5pZDtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgZGVidWc6IHRydWUsXHJcbiAgdGVzdGluZzogdHJ1ZVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXHJcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xyXG4gIGF1cmVsaWEudXNlXHJcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcclxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcclxuXHJcbiAgaWYgKGVudmlyb25tZW50LmRlYnVnKSB7XHJcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcclxuICB9XHJcblxyXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XHJcbiAgICBhdXJlbGlhLnVzZS5wbHVnaW4oJ2F1cmVsaWEtdGVzdGluZycpO1xyXG4gIH1cclxuXHJcbiAgYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4gYXVyZWxpYS5zZXRSb290KCkpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('messages',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContactUpdated = (function () {
        function ContactUpdated(contact) {
            this.contact = contact;
        }
        return ContactUpdated;
    }());
    exports.ContactUpdated = ContactUpdated;
    var ContactViewed = (function () {
        function ContactViewed(contact) {
            this.contact = contact;
        }
        return ContactViewed;
    }());
    exports.ContactViewed = ContactViewed;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQ0ksd0JBQW1CLE9BQU87WUFBUCxZQUFPLEdBQVAsT0FBTyxDQUFBO1FBQUksQ0FBQztRQUNuQyxxQkFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksd0NBQWM7SUFJM0I7UUFDSSx1QkFBbUIsT0FBTztZQUFQLFlBQU8sR0FBUCxPQUFPLENBQUE7UUFBSSxDQUFDO1FBQ25DLG9CQUFDO0lBQUQsQ0FGQSxBQUVDLElBQUE7SUFGWSxzQ0FBYSIsImZpbGUiOiJtZXNzYWdlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb250YWN0VXBkYXRlZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29udGFjdCkgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0Vmlld2VkIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb250YWN0KSB7IH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('no-selection',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NoSelection = (function () {
        function NoSelection() {
            this.message = "Please Select a Contact.";
        }
        return NoSelection;
    }());
    exports.NoSelection = NoSelection;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vLXNlbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1lBQ0UsWUFBTyxHQUFHLDBCQUEwQixDQUFDO1FBQ3ZDLENBQUM7UUFBRCxrQkFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksa0NBQVciLCJmaWxlIjoibm8tc2VsZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE5vU2VsZWN0aW9uIHtcclxuICBtZXNzYWdlID0gXCJQbGVhc2UgU2VsZWN0IGEgQ29udGFjdC5cIjtcclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('utility',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function areEqual(obj1, obj2) {
        return Object.keys(obj1).every(function (key) { return obj2.hasOwnProperty(key) && (obj1[key] === obj2[key]); });
    }
    exports.areEqual = areEqual;
    ;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUEsa0JBQXlCLElBQUksRUFBRSxJQUFJO1FBQ2xDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQXJELENBQXFELENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBRkQsNEJBRUM7SUFBQSxDQUFDIiwiZmlsZSI6InV0aWxpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYXJlRXF1YWwob2JqMSwgb2JqMikge1xyXG5cdHJldHVybiBPYmplY3Qua2V5cyhvYmoxKS5ldmVyeSgoa2V5KSA9PiBvYmoyLmhhc093blByb3BlcnR5KGtleSkgJiYgKG9iajFba2V5XSA9PT0gb2JqMltrZXldKSk7XHJcbn07Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('web-api',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var latency = 200;
    var id = 0;
    function getId() {
        return ++id;
    }
    var contacts = [
        {
            id: getId(),
            firstName: 'John',
            lastName: 'Tolkien',
            email: 'tolkien@inklings.com',
            phoneNumber: '867-5309'
        },
        {
            id: getId(),
            firstName: 'Clive',
            lastName: 'Lewis',
            email: 'lewis@inklings.com',
            phoneNumber: '867-5309'
        },
        {
            id: getId(),
            firstName: 'Owen',
            lastName: 'Barfield',
            email: 'barfield@inklings.com',
            phoneNumber: '867-5309'
        },
        {
            id: getId(),
            firstName: 'Charles',
            lastName: 'Williams',
            email: 'williams@inklings.com',
            phoneNumber: '867-5309'
        },
        {
            id: getId(),
            firstName: 'Roger',
            lastName: 'Green',
            email: 'green@inklings.com',
            phoneNumber: '867-5309'
        }
    ];
    var WebAPI = (function () {
        function WebAPI() {
            this.isRequesting = false;
        }
        WebAPI.prototype.getContactList = function () {
            var _this = this;
            this.isRequesting = true;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    var results = contacts.map(function (x) {
                        return {
                            id: x.id,
                            firstName: x.firstName,
                            lastName: x.lastName,
                            email: x.email
                        };
                    });
                    resolve(results);
                    _this.isRequesting = false;
                }, latency);
            });
        };
        WebAPI.prototype.getContactDetails = function (id) {
            var _this = this;
            this.isRequesting = true;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    var found = contacts.filter(function (x) { return x.id == id; })[0];
                    resolve(JSON.parse(JSON.stringify(found)));
                    _this.isRequesting = false;
                }, latency);
            });
        };
        WebAPI.prototype.saveContact = function (contact) {
            var _this = this;
            this.isRequesting = true;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    var instance = JSON.parse(JSON.stringify(contact));
                    var found = contacts.filter(function (x) { return x.id == contact.id; })[0];
                    if (found) {
                        var index = contacts.indexOf(found);
                        contacts[index] = instance;
                    }
                    else {
                        instance.id = getId();
                        contacts.push(instance);
                    }
                    _this.isRequesting = false;
                    resolve(instance);
                }, latency);
            });
        };
        return WebAPI;
    }());
    exports.WebAPI = WebAPI;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QkFtQkM7WUFsQkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztnQkFDeEIsVUFBVSxDQUFDO29CQUNULElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNuRCxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFsQixDQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRXhELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ1YsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDcEMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQztvQkFDN0IsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixRQUFRLENBQUMsRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDO3dCQUN0QixRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUMxQixDQUFDO29CQUVELEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO29CQUMxQixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3BCLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNkLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNILGFBQUM7SUFBRCxDQXBEQSxBQW9EQyxJQUFBO0lBcERZLHdCQUFNIiwiZmlsZSI6IndlYi1hcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgbGF0ZW5jeSA9IDIwMDtcclxubGV0IGlkID0gMDtcclxuXHJcbmZ1bmN0aW9uIGdldElkKCkge1xyXG4gIHJldHVybiArK2lkO1xyXG59XHJcblxyXG5sZXQgY29udGFjdHMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IGdldElkKCksXHJcbiAgICBmaXJzdE5hbWU6ICdKb2huJyxcclxuICAgIGxhc3ROYW1lOiAnVG9sa2llbicsXHJcbiAgICBlbWFpbDogJ3RvbGtpZW5AaW5rbGluZ3MuY29tJyxcclxuICAgIHBob25lTnVtYmVyOiAnODY3LTUzMDknXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogZ2V0SWQoKSxcclxuICAgIGZpcnN0TmFtZTogJ0NsaXZlJyxcclxuICAgIGxhc3ROYW1lOiAnTGV3aXMnLFxyXG4gICAgZW1haWw6ICdsZXdpc0BpbmtsaW5ncy5jb20nLFxyXG4gICAgcGhvbmVOdW1iZXI6ICc4NjctNTMwOSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBnZXRJZCgpLFxyXG4gICAgZmlyc3ROYW1lOiAnT3dlbicsXHJcbiAgICBsYXN0TmFtZTogJ0JhcmZpZWxkJyxcclxuICAgIGVtYWlsOiAnYmFyZmllbGRAaW5rbGluZ3MuY29tJyxcclxuICAgIHBob25lTnVtYmVyOiAnODY3LTUzMDknXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogZ2V0SWQoKSxcclxuICAgIGZpcnN0TmFtZTogJ0NoYXJsZXMnLFxyXG4gICAgbGFzdE5hbWU6ICdXaWxsaWFtcycsXHJcbiAgICBlbWFpbDogJ3dpbGxpYW1zQGlua2xpbmdzLmNvbScsXHJcbiAgICBwaG9uZU51bWJlcjogJzg2Ny01MzA5J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IGdldElkKCksXHJcbiAgICBmaXJzdE5hbWU6ICdSb2dlcicsXHJcbiAgICBsYXN0TmFtZTogJ0dyZWVuJyxcclxuICAgIGVtYWlsOiAnZ3JlZW5AaW5rbGluZ3MuY29tJyxcclxuICAgIHBob25lTnVtYmVyOiAnODY3LTUzMDknXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdlYkFQSSB7XHJcbiAgaXNSZXF1ZXN0aW5nID0gZmFsc2U7XHJcblxyXG4gIGdldENvbnRhY3RMaXN0KCkge1xyXG4gICAgdGhpcy5pc1JlcXVlc3RpbmcgPSB0cnVlO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IGNvbnRhY3RzLm1hcCh4ID0+IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiB4LmlkLFxyXG4gICAgICAgICAgICBmaXJzdE5hbWU6IHguZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICBsYXN0TmFtZTogeC5sYXN0TmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IHguZW1haWxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xyXG4gICAgICAgIHRoaXMuaXNSZXF1ZXN0aW5nID0gZmFsc2U7XHJcbiAgICAgIH0sIGxhdGVuY3kpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRDb250YWN0RGV0YWlscyhpZCkge1xyXG4gICAgdGhpcy5pc1JlcXVlc3RpbmcgPSB0cnVlO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBsZXQgZm91bmQgPSBjb250YWN0cy5maWx0ZXIoeCA9PiB4LmlkID09IGlkKVswXTtcclxuICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZm91bmQpKSk7XHJcbiAgICAgICAgdGhpcy5pc1JlcXVlc3RpbmcgPSBmYWxzZTtcclxuICAgICAgfSwgbGF0ZW5jeSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNhdmVDb250YWN0KGNvbnRhY3QpIHtcclxuICAgIHRoaXMuaXNSZXF1ZXN0aW5nID0gdHJ1ZTtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGluc3RhbmNlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb250YWN0KSk7XHJcbiAgICAgICAgbGV0IGZvdW5kID0gY29udGFjdHMuZmlsdGVyKHggPT4geC5pZCA9PSBjb250YWN0LmlkKVswXTtcclxuXHJcbiAgICAgICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgICAgICBsZXQgaW5kZXggPSBjb250YWN0cy5pbmRleE9mKGZvdW5kKTtcclxuICAgICAgICAgIGNvbnRhY3RzW2luZGV4XSA9IGluc3RhbmNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpbnN0YW5jZS5pZCA9IGdldElkKCk7XHJcbiAgICAgICAgICBjb250YWN0cy5wdXNoKGluc3RhbmNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNSZXF1ZXN0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgcmVzb2x2ZShpbnN0YW5jZSk7XHJcbiAgICAgIH0sIGxhdGVuY3kpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        config.globalResources(['./elements/loading-indicator']);
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7UUFDcEQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRkQsOEJBRUMiLCJmaWxlIjoicmVzb3VyY2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGcmFtZXdvcmtDb25maWd1cmF0aW9ufSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xyXG4gICAgY29uZmlnLmdsb2JhbFJlc291cmNlcyhbJy4vZWxlbWVudHMvbG9hZGluZy1pbmRpY2F0b3InXSk7XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/loading-indicator',["require", "exports", "nprogress", "aurelia-framework"], function (require, exports, nprogress, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LoadingIndicator = (function () {
        function LoadingIndicator() {
            this.loading = false;
        }
        LoadingIndicator.prototype.loadingChanged = function (newValue) {
            if (newValue) {
                nprogress.start();
            }
            else {
                nprogress.done();
            }
        };
        return LoadingIndicator;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], LoadingIndicator.prototype, "loading", void 0);
    LoadingIndicator = __decorate([
        aurelia_framework_1.noView(['nprogress/nprogress.css'])
    ], LoadingIndicator);
    exports.LoadingIndicator = LoadingIndicator;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy9sb2FkaW5nLWluZGljYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFJQSxJQUFhLGdCQUFnQjtRQUQ3QjtZQUVZLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFTNUIsQ0FBQztRQVBDLHlDQUFjLEdBQWQsVUFBZSxRQUFRO1lBQ3JCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkIsQ0FBQztRQUNILENBQUM7UUFDSCx1QkFBQztJQUFELENBVkEsQUFVQyxJQUFBO0lBVFc7UUFBVCw0QkFBUTs7cURBQWlCO0lBRGYsZ0JBQWdCO1FBRDVCLDBCQUFNLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO09BQ3ZCLGdCQUFnQixDQVU1QjtJQVZZLDRDQUFnQiIsImZpbGUiOiJyZXNvdXJjZXMvZWxlbWVudHMvbG9hZGluZy1pbmRpY2F0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBucHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuaW1wb3J0IHtiaW5kYWJsZSwgbm9WaWV3fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5Abm9WaWV3KFsnbnByb2dyZXNzL25wcm9ncmVzcy5jc3MnXSlcclxuZXhwb3J0IGNsYXNzIExvYWRpbmdJbmRpY2F0b3Ige1xyXG4gIEBiaW5kYWJsZSBsb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIGxvYWRpbmdDaGFuZ2VkKG5ld1ZhbHVlKSB7XHJcbiAgICBpZiAobmV3VmFsdWUpIHtcclxuICAgICAgbnByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBucHJvZ3Jlc3MuZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"./styles.css\"></require><require from=\"./contact-list\"></require><nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\"><div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"#\"><i class=\"fa fa-user\"></i> <span>Contacts</span></a></div></nav><loading-indicator loading.bind=\"router.isNavigating || api.isRequesting\"></loading-indicator><div class=\"container\"><div class=\"row\"><contact-list class=\"col-md-4\"></contact-list><router-view class=\"col-md-8\"></router-view></div></div></template>"; });
define('text!styles.css', ['module'], function(module) { module.exports = "body { padding-top: 70px; }\r\n\r\nsection {\r\n  margin: 0 20px;\r\n}\r\n\r\na:focus {\r\n  outline: none;\r\n}\r\n\r\n.navbar-nav li.loader {\r\n    margin: 12px 24px 0 6px;\r\n}\r\n\r\n.no-selection {\r\n  margin: 20px;\r\n}\r\n\r\n.contact-list {\r\n  overflow-y: auto;\r\n  border: 1px solid #ddd;\r\n  padding: 10px;\r\n}\r\n\r\n.panel {\r\n  margin: 20px;\r\n}\r\n\r\n.button-bar {\r\n  right: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  border-top: 1px solid #ddd;\r\n  background: white;\r\n}\r\n\r\n.button-bar > button {\r\n  float: right;\r\n  margin: 20px;\r\n}\r\n\r\nli.list-group-item {\r\n  list-style: none;\r\n}\r\n\r\nli.list-group-item > a {\r\n  text-decoration: none;\r\n}\r\n\r\nli.list-group-item.active > a {\r\n  color: white;\r\n}\r\n"; });
define('text!contact-detail.html', ['module'], function(module) { module.exports = "<template><div class=\"panel panel-primary\"><div class=\"panel-heading\"><h3 class=\"panel-title\">Profile</h3></div><div class=\"panel-body\"><form role=\"form\" class=\"form-horizontal\"><div class=\"form-group\"><label class=\"col-sm-2 control-label\">First Name</label><div class=\"col-sm-10\"><input type=\"text\" placeholder=\"first name\" class=\"form-control\" value.bind=\"contact.firstName\"></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Last Name</label><div class=\"col-sm-10\"><input type=\"text\" placeholder=\"last name\" class=\"form-control\" value.bind=\"contact.lastName\"></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Email</label><div class=\"col-sm-10\"><input type=\"text\" placeholder=\"email\" class=\"form-control\" value.bind=\"contact.email\"></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Phone Number</label><div class=\"col-sm-10\"><input type=\"text\" placeholder=\"phone number\" class=\"form-control\" value.bind=\"contact.phoneNumber\"></div></div></form></div></div><div class=\"button-bar\"><button class=\"btn btn-success\" click.delegate=\"save()\" disabled.bind=\"!canSave\">Save</button></div></template>"; });
define('text!contact-list.html', ['module'], function(module) { module.exports = "<template><div class=\"contact-list\"><ul class=\"list-group\"><li repeat.for=\"contact of contacts\" class=\"list-group-item ${contact.id === $parent.selectedId ? 'active' : ''}\"><a route-href=\"route: contacts; params.bind: {id:contact.id}\" click.delegate=\"$parent.select(contact)\"><h4 class=\"list-group-item-heading\">${contact.firstName} ${contact.lastName}</h4><p class=\"list-group-item-text\">${contact.email}</p></a></li></ul></div></template>"; });
define('text!no-selection.html', ['module'], function(module) { module.exports = "<template><div class=\"no-selection text-center\"><h2>${message}</h2></div></template>"; });
//# sourceMappingURL=app-bundle.js.map