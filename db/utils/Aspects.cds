namespace demo.util.aspects;

aspect common{

    DELETED : Boolean enum {
        Yes = true;
        No = false;
        
    } default false;
}