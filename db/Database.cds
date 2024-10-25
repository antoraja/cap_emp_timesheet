namespace employee.db;

using {
    managed
} from '@sap/cds/common';

using {demo.util.aspects as localaspects} from './utils/Aspects';

 
using {API_BUSINESS_PARTNER as external} from '../srv/external/API_BUSINESS_PARTNER';


entity Employee : managed, localaspects.common {
    key ID           : UUID;
        EmployeeID   : String(10);
        EmployeeName : String(40);
        CompanyName  : String(40);
        ItsAddress   : Composition of one Address
                       on ItsAddress.parent = $self;
        BPartner : String(80);
                
}

entity BusinesPartner as projection on external.A_BusinessPartner;

entity Address : managed, localaspects.common  {
    parent : Association to  Employee;
    key ID           : UUID;
        EmployeeID   : String(10);
        Address      : String(80);
        City         : String(10);
        PostCode     : String(10);
}

entity Company : managed, localaspects.common  {
    key ID           : UUID;
        CompanyCode   : String(5);
        CompanyName : String(50);
}

@cds.persistence.exists 
@cds.persistence.calcview 
Entity testcal {
key     EMPLOYEEID: String(10)  @title: 'EMPLOYEEID: EMPLOYEEID' ; 
        COMPANYNAME: String(40)  @title: 'COMPANYNAME: COMPANYNAME' ; 
        ADDRESS: String(80)  @title: 'ADDRESS: ADDRESS' ; 
        CITY: String(10)  @title: 'CITY: CITY' ; 
        POSTCODE: String(10)  @title: 'POSTCODE: POSTCODE' ; 
}

@cds.persistence.exists 
@cds.persistence.calcview 
Entity mycalview {
key     EMPLOYEEID: String(10)  @title: 'EMPLOYEEID: EMPLOYEEID' ; 
        COMPANYNAME: String(40)  @title: 'COMPANYNAME: COMPANYNAME' ; 
        BPARTNER: String(80)  @title: 'BPARTNER: BPARTNER' ; 
        ADDRESS: String(80)  @title: 'ADDRESS: ADDRESS' ; 
        CITY: String(10)  @title: 'CITY: CITY' ; 
}



