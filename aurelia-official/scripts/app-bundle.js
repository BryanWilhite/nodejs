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
        App = __decorate([
            aurelia_framework_1.inject(web_api_1.WebAPI),
            __metadata("design:paramtypes", [web_api_1.WebAPI])
        ], App);
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFLQTtRQUdJLGFBQW1CLEdBQVc7WUFBWCxRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQUksQ0FBQztRQUVuQyw2QkFBZSxHQUFmLFVBQWdCLE1BQTJCLEVBQUUsTUFBYztZQUN2RCxNQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztZQUMxQixNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNQLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7Z0JBQ3hELEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTthQUMxRSxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QixDQUFDO1FBYlEsR0FBRztZQURmLDBCQUFNLENBQUMsZ0JBQU0sQ0FBQzs2Q0FJYSxnQkFBTTtXQUhyQixHQUFHLENBY2Y7UUFBRCxVQUFDO0tBZEQsQUFjQyxJQUFBO0lBZFksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJDb25maWd1cmF0aW9uIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBXZWJBUEkgfSBmcm9tIFwiLi93ZWItYXBpXCI7XHJcblxyXG5AaW5qZWN0KFdlYkFQSSlcclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgICByb3V0ZXI6IFJvdXRlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBpOiBXZWJBUEkpIHsgfVxyXG5cclxuICAgIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24sIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgY29uZmlnLnRpdGxlID0gXCJDb250YWN0c1wiO1xyXG4gICAgICAgIGNvbmZpZy5tYXAoW1xyXG4gICAgICAgICAgICB7IHJvdXRlOiBcIlwiLCBtb2R1bGVJZDogXCJuby1zZWxlY3Rpb25cIiwgdGl0bGU6IFwiU2VsZWN0XCIgfSxcclxuICAgICAgICAgICAgeyByb3V0ZTogXCJjb250YWN0cy86aWRcIiwgbW9kdWxlSWQ6IFwiY29udGFjdC1kZXRhaWxcIiwgbmFtZTogXCJjb250YWN0c1wiIH1cclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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
        ContactDetail = __decorate([
            aurelia_framework_1.inject(web_api_1.WebAPI, aurelia_event_aggregator_1.EventAggregator),
            __metadata("design:paramtypes", [web_api_1.WebAPI, aurelia_event_aggregator_1.EventAggregator])
        ], ContactDetail);
        return ContactDetail;
    }());
    exports.ContactDetail = ContactDetail;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQWFBO1FBS0ksdUJBQW9CLEdBQVcsRUFBVSxFQUFtQjtZQUF4QyxRQUFHLEdBQUgsR0FBRyxDQUFRO1lBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBaUI7UUFBSSxDQUFDO1FBRWpFLGdDQUFRLEdBQVIsVUFBUyxNQUFNLEVBQUUsV0FBVztZQUE1QixpQkFTQztZQVJHLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBRS9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPO2dCQUNyRCxLQUFJLENBQUMsT0FBTyxHQUFZLE9BQU8sQ0FBQztnQkFDaEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzNELEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNoRSxLQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLHdCQUFhLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDckQsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsc0JBQUksa0NBQU87aUJBQVg7Z0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7WUFDckYsQ0FBQzs7O1dBQUE7UUFFRCw0QkFBSSxHQUFKO1lBQUEsaUJBT0M7WUFORyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTztnQkFDM0MsS0FBSSxDQUFDLE9BQU8sR0FBWSxPQUFPLENBQUM7Z0JBQ2hDLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMzRCxLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDaEUsS0FBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSx5QkFBYyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3RELENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELHFDQUFhLEdBQWI7WUFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLGtCQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsMkRBQTJELENBQUMsQ0FBQztnQkFFbEYsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNWLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksd0JBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDckQsQ0FBQztnQkFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2xCLENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUEzQ1EsYUFBYTtZQUR6QiwwQkFBTSxDQUFDLGdCQUFNLEVBQUUsMENBQWUsQ0FBQzs2Q0FNSCxnQkFBTSxFQUFjLDBDQUFlO1dBTG5ELGFBQWEsQ0E0Q3pCO1FBQUQsb0JBQUM7S0E1Q0QsQUE0Q0MsSUFBQTtJQTVDWSxzQ0FBYSIsImZpbGUiOiJjb250YWN0LWRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgV2ViQVBJIH0gZnJvbSAnLi93ZWItYXBpJztcclxuaW1wb3J0IHsgQ29udGFjdFVwZGF0ZWQsIENvbnRhY3RWaWV3ZWQgfSBmcm9tICcuL21lc3NhZ2VzJztcclxuaW1wb3J0IHsgYXJlRXF1YWwgfSBmcm9tICcuL3V0aWxpdHknO1xyXG5cclxuaW50ZXJmYWNlIENvbnRhY3Qge1xyXG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxufVxyXG5cclxuQGluamVjdChXZWJBUEksIEV2ZW50QWdncmVnYXRvcilcclxuZXhwb3J0IGNsYXNzIENvbnRhY3REZXRhaWwge1xyXG4gICAgcm91dGVDb25maWc7XHJcbiAgICBjb250YWN0OiBDb250YWN0O1xyXG4gICAgb3JpZ2luYWxDb250YWN0OiBDb250YWN0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBXZWJBUEksIHByaXZhdGUgZWE6IEV2ZW50QWdncmVnYXRvcikgeyB9XHJcblxyXG4gICAgYWN0aXZhdGUocGFyYW1zLCByb3V0ZUNvbmZpZykge1xyXG4gICAgICAgIHRoaXMucm91dGVDb25maWcgPSByb3V0ZUNvbmZpZztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpLmdldENvbnRhY3REZXRhaWxzKHBhcmFtcy5pZCkudGhlbihjb250YWN0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWN0ID0gPENvbnRhY3Q+Y29udGFjdDtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZUNvbmZpZy5uYXZNb2RlbC5zZXRUaXRsZSh0aGlzLmNvbnRhY3QuZmlyc3ROYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbENvbnRhY3QgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuY29udGFjdCkpO1xyXG4gICAgICAgICAgICB0aGlzLmVhLnB1Ymxpc2gobmV3IENvbnRhY3RWaWV3ZWQodGhpcy5jb250YWN0KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNhblNhdmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFjdC5maXJzdE5hbWUgJiYgdGhpcy5jb250YWN0Lmxhc3ROYW1lICYmICF0aGlzLmFwaS5pc1JlcXVlc3Rpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZSgpIHtcclxuICAgICAgICB0aGlzLmFwaS5zYXZlQ29udGFjdCh0aGlzLmNvbnRhY3QpLnRoZW4oY29udGFjdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFjdCA9IDxDb250YWN0PmNvbnRhY3Q7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVDb25maWcubmF2TW9kZWwuc2V0VGl0bGUodGhpcy5jb250YWN0LmZpcnN0TmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxDb250YWN0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmNvbnRhY3QpKTtcclxuICAgICAgICAgICAgdGhpcy5lYS5wdWJsaXNoKG5ldyBDb250YWN0VXBkYXRlZCh0aGlzLmNvbnRhY3QpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5EZWFjdGl2YXRlKCkge1xyXG4gICAgICAgIGlmICghYXJlRXF1YWwodGhpcy5vcmlnaW5hbENvbnRhY3QsIHRoaXMuY29udGFjdCkpIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGNvbmZpcm0oJ1lvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcy4gQXJlIHlvdSBzdXJlIHlvdSB3aXNoIHRvIGxlYXZlPycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWEucHVibGlzaChuZXcgQ29udGFjdFZpZXdlZCh0aGlzLmNvbnRhY3QpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
        ContactList = __decorate([
            aurelia_framework_1.inject(web_api_1.WebAPI, aurelia_event_aggregator_1.EventAggregator),
            __metadata("design:paramtypes", [web_api_1.WebAPI, aurelia_event_aggregator_1.EventAggregator])
        ], ContactList);
        return ContactList;
    }());
    exports.ContactList = ContactList;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQTtRQUlJLHFCQUFvQixHQUFXLEVBQUUsRUFBbUI7WUFBcEQsaUJBT0M7WUFQbUIsUUFBRyxHQUFILEdBQUcsQ0FBUTtZQUYvQixlQUFVLEdBQUcsQ0FBQyxDQUFDO1lBR1gsRUFBRSxDQUFDLFNBQVMsQ0FBQyx3QkFBYSxFQUFFLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQztZQUM3RCxFQUFFLENBQUMsU0FBUyxDQUFDLHlCQUFjLEVBQUUsVUFBQSxHQUFHO2dCQUM1QixJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxLQUFLLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDaEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELDZCQUFPLEdBQVA7WUFBQSxpQkFFQztZQURHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQXhCLENBQXdCLENBQUMsQ0FBQztRQUN6RSxDQUFDO1FBRUQsNEJBQU0sR0FBTixVQUFPLE9BQU87WUFDVixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBcEJRLFdBQVc7WUFEdkIsMEJBQU0sQ0FBQyxnQkFBTSxFQUFFLDBDQUFlLENBQUM7NkNBS0gsZ0JBQU0sRUFBTSwwQ0FBZTtXQUozQyxXQUFXLENBcUJ2QjtRQUFELGtCQUFDO0tBckJELEFBcUJDLElBQUE7SUFyQlksa0NBQVciLCJmaWxlIjoiY29udGFjdC1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgV2ViQVBJIH0gZnJvbSAnLi93ZWItYXBpJztcclxuaW1wb3J0IHsgQ29udGFjdFVwZGF0ZWQsIENvbnRhY3RWaWV3ZWQgfSBmcm9tICcuL21lc3NhZ2VzJztcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuQGluamVjdChXZWJBUEksIEV2ZW50QWdncmVnYXRvcilcclxuZXhwb3J0IGNsYXNzIENvbnRhY3RMaXN0IHtcclxuICAgIGNvbnRhY3RzO1xyXG4gICAgc2VsZWN0ZWRJZCA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IFdlYkFQSSwgZWE6IEV2ZW50QWdncmVnYXRvcikge1xyXG4gICAgICAgIGVhLnN1YnNjcmliZShDb250YWN0Vmlld2VkLCBtc2cgPT4gdGhpcy5zZWxlY3QobXNnLmNvbnRhY3QpKTtcclxuICAgICAgICBlYS5zdWJzY3JpYmUoQ29udGFjdFVwZGF0ZWQsIG1zZyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IG1zZy5jb250YWN0LmlkO1xyXG4gICAgICAgICAgICBsZXQgZm91bmQgPSB0aGlzLmNvbnRhY3RzLmZpbmQoeCA9PiB4LmlkID09IGlkKTtcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihmb3VuZCwgbXNnLmNvbnRhY3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5hcGkuZ2V0Q29udGFjdExpc3QoKS50aGVuKGNvbnRhY3RzID0+IHRoaXMuY29udGFjdHMgPSBjb250YWN0cyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0KGNvbnRhY3QpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSWQgPSBjb250YWN0LmlkO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHO2FBQ04scUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTFCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDckMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1cmVsaWEgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yaydcclxuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhOiBBdXJlbGlhKSB7XHJcbiAgICBhdXJlbGlhLnVzZVxyXG4gICAgICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxyXG4gICAgICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcclxuXHJcbiAgICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcclxuICAgICAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZW52aXJvbm1lbnQudGVzdGluZykge1xyXG4gICAgICAgIGF1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS10ZXN0aW5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4gYXVyZWxpYS5zZXRSb290KCkpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vLXNlbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1lBQ0ksWUFBTyxHQUFHLDBCQUEwQixDQUFDO1FBQ3pDLENBQUM7UUFBRCxrQkFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksa0NBQVciLCJmaWxlIjoibm8tc2VsZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE5vU2VsZWN0aW9uIHtcclxuICAgIG1lc3NhZ2UgPSBcIlBsZWFzZSBTZWxlY3QgYSBDb250YWN0LlwiO1xyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('utility',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function areEqual(obj1, obj2) {
        return Object.keys(obj1).every(function (key) { return obj2.hasOwnProperty(key) && (obj1[key] === obj2[key]); });
    }
    exports.areEqual = areEqual;
    ;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUEsa0JBQXlCLElBQUksRUFBRSxJQUFJO1FBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQXJELENBQXFELENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRkQsNEJBRUM7SUFBQSxDQUFDIiwiZmlsZSI6InV0aWxpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYXJlRXF1YWwob2JqMSwgb2JqMikge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iajEpLmV2ZXJ5KChrZXkpID0+IG9iajIuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAob2JqMVtrZXldID09PSBvYmoyW2tleV0pKTtcclxufTsiXSwic291cmNlUm9vdCI6InNyYyJ9

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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bkIsaUJBbUJDO1lBbEJHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0JBQ3RCLFVBQVUsQ0FBQztvQkFDUCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDbkQsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLElBQUksT0FBTyxDQUFDLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUV4RCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNSLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3BDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUM7b0JBQy9CLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osUUFBUSxDQUFDLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQzt3QkFDdEIsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDNUIsQ0FBQztvQkFFRCxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztvQkFDMUIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QixDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBQ0wsYUFBQztJQUFELENBcERBLEFBb0RDLElBQUE7SUFwRFksd0JBQU0iLCJmaWxlIjoid2ViLWFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBsYXRlbmN5ID0gMjAwO1xyXG5sZXQgaWQgPSAwO1xyXG5cclxuZnVuY3Rpb24gZ2V0SWQoKSB7XHJcbiAgICByZXR1cm4gKytpZDtcclxufVxyXG5cclxubGV0IGNvbnRhY3RzID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiBnZXRJZCgpLFxyXG4gICAgICAgIGZpcnN0TmFtZTogJ0pvaG4nLFxyXG4gICAgICAgIGxhc3ROYW1lOiAnVG9sa2llbicsXHJcbiAgICAgICAgZW1haWw6ICd0b2xraWVuQGlua2xpbmdzLmNvbScsXHJcbiAgICAgICAgcGhvbmVOdW1iZXI6ICc4NjctNTMwOSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IGdldElkKCksXHJcbiAgICAgICAgZmlyc3ROYW1lOiAnQ2xpdmUnLFxyXG4gICAgICAgIGxhc3ROYW1lOiAnTGV3aXMnLFxyXG4gICAgICAgIGVtYWlsOiAnbGV3aXNAaW5rbGluZ3MuY29tJyxcclxuICAgICAgICBwaG9uZU51bWJlcjogJzg2Ny01MzA5J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogZ2V0SWQoKSxcclxuICAgICAgICBmaXJzdE5hbWU6ICdPd2VuJyxcclxuICAgICAgICBsYXN0TmFtZTogJ0JhcmZpZWxkJyxcclxuICAgICAgICBlbWFpbDogJ2JhcmZpZWxkQGlua2xpbmdzLmNvbScsXHJcbiAgICAgICAgcGhvbmVOdW1iZXI6ICc4NjctNTMwOSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IGdldElkKCksXHJcbiAgICAgICAgZmlyc3ROYW1lOiAnQ2hhcmxlcycsXHJcbiAgICAgICAgbGFzdE5hbWU6ICdXaWxsaWFtcycsXHJcbiAgICAgICAgZW1haWw6ICd3aWxsaWFtc0BpbmtsaW5ncy5jb20nLFxyXG4gICAgICAgIHBob25lTnVtYmVyOiAnODY3LTUzMDknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBnZXRJZCgpLFxyXG4gICAgICAgIGZpcnN0TmFtZTogJ1JvZ2VyJyxcclxuICAgICAgICBsYXN0TmFtZTogJ0dyZWVuJyxcclxuICAgICAgICBlbWFpbDogJ2dyZWVuQGlua2xpbmdzLmNvbScsXHJcbiAgICAgICAgcGhvbmVOdW1iZXI6ICc4NjctNTMwOSdcclxuICAgIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWJBUEkge1xyXG4gICAgaXNSZXF1ZXN0aW5nID0gZmFsc2U7XHJcblxyXG4gICAgZ2V0Q29udGFjdExpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5pc1JlcXVlc3RpbmcgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0cyA9IGNvbnRhY3RzLm1hcCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogeC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiB4LmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU6IHgubGFzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiB4LmVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1JlcXVlc3RpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgbGF0ZW5jeSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29udGFjdERldGFpbHMoaWQpIHtcclxuICAgICAgICB0aGlzLmlzUmVxdWVzdGluZyA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGNvbnRhY3RzLmZpbHRlcih4ID0+IHguaWQgPT0gaWQpWzBdO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZvdW5kKSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1JlcXVlc3RpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgbGF0ZW5jeSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUNvbnRhY3QoY29udGFjdCkge1xyXG4gICAgICAgIHRoaXMuaXNSZXF1ZXN0aW5nID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGluc3RhbmNlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb250YWN0KSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBjb250YWN0cy5maWx0ZXIoeCA9PiB4LmlkID09IGNvbnRhY3QuaWQpWzBdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChmb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGNvbnRhY3RzLmluZGV4T2YoZm91bmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RzW2luZGV4XSA9IGluc3RhbmNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5pZCA9IGdldElkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdHMucHVzaChpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1JlcXVlc3RpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICB9LCBsYXRlbmN5KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

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
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LoadingIndicator.prototype, "loading", void 0);
        LoadingIndicator = __decorate([
            aurelia_framework_1.noView(['nprogress/nprogress.css'])
        ], LoadingIndicator);
        return LoadingIndicator;
    }());
    exports.LoadingIndicator = LoadingIndicator;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy9sb2FkaW5nLWluZGljYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFJQTtRQURBO1lBRWMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQVM5QixDQUFDO1FBUEcseUNBQWMsR0FBZCxVQUFlLFFBQVE7WUFDbkIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDWCxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdEIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNyQixDQUFDO1FBQ0wsQ0FBQztRQVJTO1lBQVQsNEJBQVE7O3lEQUFpQjtRQURqQixnQkFBZ0I7WUFENUIsMEJBQU0sQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUM7V0FDdkIsZ0JBQWdCLENBVTVCO1FBQUQsdUJBQUM7S0FWRCxBQVVDLElBQUE7SUFWWSw0Q0FBZ0IiLCJmaWxlIjoicmVzb3VyY2VzL2VsZW1lbnRzL2xvYWRpbmctaW5kaWNhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbnByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XHJcbmltcG9ydCB7IGJpbmRhYmxlLCBub1ZpZXcgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5Abm9WaWV3KFsnbnByb2dyZXNzL25wcm9ncmVzcy5jc3MnXSlcclxuZXhwb3J0IGNsYXNzIExvYWRpbmdJbmRpY2F0b3Ige1xyXG4gICAgQGJpbmRhYmxlIGxvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBsb2FkaW5nQ2hhbmdlZChuZXdWYWx1ZSkge1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICBucHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBucHJvZ3Jlc3MuZG9uZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"./styles.css\"></require><require from=\"./contact-list\"></require><nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\"><div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"#\"><i class=\"fa fa-user\"></i> <span>Contacts</span></a></div></nav><loading-indicator loading.bind=\"router.isNavigating || api.isRequesting\"></loading-indicator><div class=\"container\"><div class=\"row\"><contact-list class=\"col-md-4\"></contact-list><router-view class=\"col-md-8\"></router-view></div></div></template>"; });
define('text!styles.css', ['module'], function(module) { module.exports = "body {\r\n    padding-top: 70px;\r\n}\r\n\r\nsection {\r\n    margin: 0 20px;\r\n}\r\n\r\na:focus {\r\n    outline: none;\r\n}\r\n\r\n.navbar-nav li.loader {\r\n    margin: 12px 24px 0 6px;\r\n}\r\n\r\n.no-selection {\r\n    margin: 20px;\r\n}\r\n\r\n.contact-list {\r\n    overflow-y: auto;\r\n    border: 1px solid #ddd;\r\n    padding: 10px;\r\n}\r\n\r\n.panel {\r\n    margin: 20px;\r\n}\r\n\r\n.button-bar {\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    border-top: 1px solid #ddd;\r\n    background: white;\r\n}\r\n\r\n.button-bar>button {\r\n    float: right;\r\n    margin: 20px;\r\n}\r\n\r\nli.list-group-item {\r\n    list-style: none;\r\n}\r\n\r\nli.list-group-item>a {\r\n    text-decoration: none;\r\n}\r\n\r\nli.list-group-item.active>a {\r\n    color: white;\r\n}\r\n"; });
define('text!contact-detail.html', ['module'], function(module) { module.exports = "<template><div class=\"panel panel-primary\"><div class=\"panel-heading\"><h3 class=\"panel-title\">Profile</h3></div><div class=\"panel-body\"><form role=\"form\" class=\"form-horizontal\"><div class=\"form-group\"><label class=\"col-sm-2 control-label\">First Name</label><div class=\"col-sm-10\"><input type=\"text\" placeholder=\"first name\" class=\"form-control\" value.bind=\"contact.firstName\"></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Last Name</label><div class=\"col-sm-10\"><input type=\"text\" placeholder=\"last name\" class=\"form-control\" value.bind=\"contact.lastName\"></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Email</label><div class=\"col-sm-10\"><input type=\"text\" placeholder=\"email\" class=\"form-control\" value.bind=\"contact.email\"></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Phone Number</label><div class=\"col-sm-10\"><input type=\"text\" placeholder=\"phone number\" class=\"form-control\" value.bind=\"contact.phoneNumber\"></div></div></form></div></div><div class=\"button-bar\"><button class=\"btn btn-success\" click.delegate=\"save()\" disabled.bind=\"!canSave\">Save</button></div></template>"; });
define('text!contact-list.html', ['module'], function(module) { module.exports = "<template><div class=\"contact-list\"><ul class=\"list-group\"><li repeat.for=\"contact of contacts\" class=\"list-group-item ${contact.id === $parent.selectedId ? 'active' : ''}\"><a route-href=\"route: contacts; params.bind: {id:contact.id}\" click.delegate=\"$parent.select(contact)\"><h4 class=\"list-group-item-heading\">${contact.firstName} ${contact.lastName}</h4><p class=\"list-group-item-text\">${contact.email}</p></a></li></ul></div></template>"; });
define('text!no-selection.html', ['module'], function(module) { module.exports = "<template><div class=\"no-selection text-center\"><h2>${message}</h2></div></template>"; });
//# sourceMappingURL=app-bundle.js.map