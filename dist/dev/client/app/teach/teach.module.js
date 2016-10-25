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
var core_1 = require('@angular/core');
var shared_module_1 = require("../shared/shared.module");
var teach_routing_1 = require("./teach.routing");
var teach_component_1 = require("./teach.component");
var teach_list_component_1 = require("./teach-list/teach-list.component");
var add_course_component_1 = require("./add-course/add-course.component");
var edit_teacher_component_1 = require("./edit-teacher/edit-teacher.component");
var TeachModule = (function () {
    function TeachModule() {
    }
    TeachModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                teach_routing_1.teachRouting,
            ],
            declarations: [
                teach_component_1.TeachComponent,
                teach_list_component_1.TeachListComponent,
                add_course_component_1.AddCourseComponent,
                edit_teacher_component_1.EditTeacherComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TeachModule);
    return TeachModule;
}());
exports.TeachModule = TeachModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90ZWFjaC90ZWFjaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5Qyw4QkFBMkIseUJBQXlCLENBQUMsQ0FBQTtBQUVyRCw4QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3QyxnQ0FBNkIsbUJBQW1CLENBQUMsQ0FBQTtBQUNqRCxxQ0FBaUMsbUNBQW1DLENBQUMsQ0FBQTtBQUNyRSxxQ0FBaUMsbUNBQW1DLENBQUMsQ0FBQTtBQUNyRSx1Q0FBbUMsdUNBQXVDLENBQUMsQ0FBQTtBQWMzRTtJQUFBO0lBQTBCLENBQUM7SUFaM0I7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsNEJBQVk7Z0JBQ1osNEJBQVk7YUFDYjtZQUNELFlBQVksRUFBRTtnQkFDWixnQ0FBYztnQkFDZCx5Q0FBa0I7Z0JBQ2xCLHlDQUFrQjtnQkFDbEIsNkNBQW9CO2FBQ3JCO1NBQ0YsQ0FBQzs7bUJBQUE7SUFDd0Isa0JBQUM7QUFBRCxDQUExQixBQUEyQixJQUFBO0FBQWQsbUJBQVcsY0FBRyxDQUFBIiwiZmlsZSI6ImFwcC90ZWFjaC90ZWFjaC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NoYXJlZE1vZHVsZX0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5cbmltcG9ydCB7dGVhY2hSb3V0aW5nfSBmcm9tIFwiLi90ZWFjaC5yb3V0aW5nXCI7XG5pbXBvcnQge1RlYWNoQ29tcG9uZW50fSBmcm9tIFwiLi90ZWFjaC5jb21wb25lbnRcIjtcbmltcG9ydCB7VGVhY2hMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi90ZWFjaC1saXN0L3RlYWNoLWxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQge0FkZENvdXJzZUNvbXBvbmVudH0gZnJvbSBcIi4vYWRkLWNvdXJzZS9hZGQtY291cnNlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtFZGl0VGVhY2hlckNvbXBvbmVudH0gZnJvbSBcIi4vZWRpdC10ZWFjaGVyL2VkaXQtdGVhY2hlci5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNoYXJlZE1vZHVsZSxcbiAgICB0ZWFjaFJvdXRpbmcsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRlYWNoQ29tcG9uZW50LFxuICAgIFRlYWNoTGlzdENvbXBvbmVudCxcbiAgICBBZGRDb3Vyc2VDb21wb25lbnQsXG4gICAgRWRpdFRlYWNoZXJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUZWFjaE1vZHVsZSB7fVxuIl19
