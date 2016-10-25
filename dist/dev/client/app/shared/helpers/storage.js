"use strict";
var Storage = (function () {
    function Storage() {
    }
    Storage.prototype.getAuthToken = function () {
        return localStorage.getItem('token');
    };
    Storage.prototype.setAuthToken = function (token) {
        localStorage.setItem('token', token);
    };
    Storage.prototype.removeAuthToken = function () {
        localStorage.clear();
    };
    Storage.prototype.setRoleToken = function (role) {
        localStorage.setItem('role', role);
    };
    Storage.prototype.setNameToken = function (name) {
        localStorage.setItem('name', name);
    };
    Storage.prototype.getRoleToken = function () {
        return localStorage.getItem('role');
    };
    Storage.prototype.getNameToken = function () {
        return localStorage.getItem('name');
    };
    Storage.prototype.getIdToken = function () {
        return localStorage.getItem('id');
    };
    return Storage;
}());
exports.storage = new Storage();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaGVscGVycy9zdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUFBO0lBeUNBLENBQUM7SUF2Q0MsOEJBQVksR0FBWjtRQUVFLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw4QkFBWSxHQUFaLFVBQWEsS0FBUztRQUVwQixZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsaUNBQWUsR0FBZjtRQUVFLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsOEJBQVksR0FBWixVQUFhLElBQVE7UUFFbkIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELDhCQUFZLEdBQVosVUFBYSxJQUFRO1FBRW5CLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCw4QkFBWSxHQUFaO1FBRUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELDhCQUFZLEdBQVo7UUFFRSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsNEJBQVUsR0FBVjtRQUVFLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0F6Q0EsQUF5Q0MsSUFBQTtBQUVZLGVBQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDIiwiZmlsZSI6ImFwcC9zaGFyZWQvaGVscGVycy9zdG9yYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU3RvcmFnZSB7XG5cbiAgZ2V0QXV0aFRva2VuKCkge1xuICAgIC8vbm9pbnNwZWN0aW9uIFR5cGVTY3JpcHRVbnJlc29sdmVkRnVuY3Rpb25cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gIH1cblxuICBzZXRBdXRoVG9rZW4odG9rZW46YW55KSB7XG4gICAgLy9ub2luc3BlY3Rpb24gVHlwZVNjcmlwdFVucmVzb2x2ZWRGdW5jdGlvblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcbiAgfVxuXG4gIHJlbW92ZUF1dGhUb2tlbigpIHtcbiAgICAvL25vaW5zcGVjdGlvbiBUeXBlU2NyaXB0VW5yZXNvbHZlZEZ1bmN0aW9uXG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gIH1cblxuICBzZXRSb2xlVG9rZW4ocm9sZTphbnkpe1xuICAgIC8vbm9pbnNwZWN0aW9uIFR5cGVTY3JpcHRVbnJlc29sdmVkRnVuY3Rpb25cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncm9sZScsIHJvbGUpO1xuICB9XG5cbiAgc2V0TmFtZVRva2VuKG5hbWU6YW55KXtcbiAgICAvL25vaW5zcGVjdGlvbiBUeXBlU2NyaXB0VW5yZXNvbHZlZEZ1bmN0aW9uXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25hbWUnLCBuYW1lKTtcbiAgfVxuXG4gIGdldFJvbGVUb2tlbigpe1xuICAgIC8vbm9pbnNwZWN0aW9uIFR5cGVTY3JpcHRVbnJlc29sdmVkRnVuY3Rpb25cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JvbGUnKTtcbiAgfVxuXG4gIGdldE5hbWVUb2tlbigpe1xuICAgIC8vbm9pbnNwZWN0aW9uIFR5cGVTY3JpcHRVbnJlc29sdmVkRnVuY3Rpb25cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25hbWUnKTtcbiAgfVxuXG4gIGdldElkVG9rZW4oKXtcbiAgICAvL25vaW5zcGVjdGlvbiBUeXBlU2NyaXB0VW5yZXNvbHZlZEZ1bmN0aW9uXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcbiJdfQ==
