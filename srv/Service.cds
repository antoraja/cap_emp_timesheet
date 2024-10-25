using { employee.db as empdb } from '../db/Database';


service EmployeeManagementService @(path:'/employeemanagement') @(impl: '/srv/handlers/empmgt.js') {

  // entity Employee as projection on empdb.Employee { 
  //   * } where DELETED = false;

 
  entity BusinessPart as projection on empdb.BusinesPartner{ 
    BusinessPartner
    }

 
  entity Company @(restrict: [
    { grant: ['CREATE', 'READ', 'UPDATE', 'DELETE'], to: 'Admin' }
  ]) as projection on empdb.Company;

  // Editor can only read and update Products, but not create or delete
  entity Employee @(restrict: [
    { grant: ['READ', 'UPDATE'], to: 'Editor' },
    { grant: ['READ'], to: 'Viewer' }
  ]) as projection on empdb.Employee;


} 