"use strict";
var router_1 = require('@angular/router');
var teach_component_1 = require("./teach.component");
var teach_list_component_1 = require("./teach-list/teach-list.component");
var auth_guard_service_1 = require("../auth/auth-guard.service");
var add_course_component_1 = require("./add-course/add-course.component");
var edit_teacher_component_1 = require("./edit-teacher/edit-teacher.component");
var teachRoutes = [
    {
        path: 'teach',
        component: teach_component_1.TeachComponent,
        canActivate: [auth_guard_service_1.AuthGuard],
        children: [
            {
                path: '',
                component: teach_list_component_1.TeachListComponent,
            },
            {
                path: 'add-course',
                component: add_course_component_1.AddCourseComponent
            },
            {
                path: 'edit-teacher',
                component: edit_teacher_component_1.EditTeacherComponent
            }
        ]
    }
];
exports.teachRouting = router_1.RouterModule.forChild(teachRoutes);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90ZWFjaC90ZWFjaC5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx1QkFBcUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN2RCxnQ0FBNkIsbUJBQW1CLENBQUMsQ0FBQTtBQUNqRCxxQ0FBaUMsbUNBQW1DLENBQUMsQ0FBQTtBQUNyRSxtQ0FBd0IsNEJBQTRCLENBQUMsQ0FBQTtBQUNyRCxxQ0FBaUMsbUNBQW1DLENBQUMsQ0FBQTtBQUVyRSx1Q0FBbUMsdUNBQXVDLENBQUMsQ0FBQTtBQUUzRSxJQUFNLFdBQVcsR0FBVztJQUMxQjtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsU0FBUyxFQUFFLGdDQUFjO1FBQ3pCLFdBQVcsRUFBRSxDQUFDLDhCQUFTLENBQUM7UUFDeEIsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLHlDQUFrQjthQUM5QjtZQUNEO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixTQUFTLEVBQUUseUNBQWtCO2FBQzlCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLFNBQVMsRUFBRSw2Q0FBb0I7YUFDaEM7U0FDRjtLQUVGO0NBQ0YsQ0FBQztBQUVXLG9CQUFZLEdBQXdCLHFCQUFZLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC90ZWFjaC90ZWFjaC5yb3V0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9ICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7VGVhY2hDb21wb25lbnR9IGZyb20gXCIuL3RlYWNoLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtUZWFjaExpc3RDb21wb25lbnR9IGZyb20gXCIuL3RlYWNoLWxpc3QvdGVhY2gtbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7QXV0aEd1YXJkfSBmcm9tIFwiLi4vYXV0aC9hdXRoLWd1YXJkLnNlcnZpY2VcIjtcbmltcG9ydCB7QWRkQ291cnNlQ29tcG9uZW50fSBmcm9tIFwiLi9hZGQtY291cnNlL2FkZC1jb3Vyc2UuY29tcG9uZW50XCI7XG5pbXBvcnQge1NpZ25pbkNvbXBvbmVudH0gZnJvbSBcIi4uL2F1dGgvc2lnbmluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtFZGl0VGVhY2hlckNvbXBvbmVudH0gZnJvbSBcIi4vZWRpdC10ZWFjaGVyL2VkaXQtdGVhY2hlci5jb21wb25lbnRcIjtcblxuY29uc3QgdGVhY2hSb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICd0ZWFjaCcsXG4gICAgY29tcG9uZW50OiBUZWFjaENvbXBvbmVudCxcbiAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGNvbXBvbmVudDogVGVhY2hMaXN0Q29tcG9uZW50LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2FkZC1jb3Vyc2UnLFxuICAgICAgICBjb21wb25lbnQ6IEFkZENvdXJzZUNvbXBvbmVudFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2VkaXQtdGVhY2hlcicsXG4gICAgICAgIGNvbXBvbmVudDogRWRpdFRlYWNoZXJDb21wb25lbnRcbiAgICAgIH1cbiAgICBdXG5cbiAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IHRlYWNoUm91dGluZzogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZCh0ZWFjaFJvdXRlcyk7XG4iXX0=
