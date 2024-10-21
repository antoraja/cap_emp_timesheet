using { employee.db as empdb } from '../db/Database';



service EmployeeManagementService @(path:'/employeemanagement') @(impl: '/srv/handlers/empmgt.js') {

  entity Employee as projection on empdb.Employee { 
    * } where DELETED = false;

  entity Company as projection on empdb.Company;
  
  entity BusinessPart as projection on empdb.BusinesPartner{ 
    BusinessPartner
    }
}