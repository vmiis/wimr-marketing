(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    //var api="wimr-staff-roster";
    //-------------------------------------------------------------------------------------
    m[p+"diagram"]      ={url:H+"/business/diagram/page.html",    router:1},
    m[p+"records"]      ={url:H+"/business/records/data.html",    Table:"flow-snapforms",  form_module:"jsonv", router:1}
    m[p+"2022-03"]      ={url:H+"/business/2022-03/data.html",    Table:"flow-snapforms",  form_module:"jsonv", router:1}
    m[p+"2022-04"]      ={url:H+"/business/2022-04/data.html",    Table:"flow-snapforms",  form_module:"jsonv", router:1}
    m[p+"2022-05"]      ={url:H+"/business/2022-05/data.html",    Table:"flow-snapforms",  form_module:"jsonv", router:1}
    m[p+"2022-06"]      ={url:H+"/business/2022-06/data.html",    Table:"flow-snapforms",  form_module:"jsonv", router:1}
    m[p+"2022-07"]      ={url:H+"/business/2022-07/data.html",    Table:"flow-snapforms",  form_module:"jsonv", router:1}
    m[p+"2022-08"]      ={url:H+"/business/2022-08/data.html",    Table:"flow-snapforms",  form_module:"jsonv", router:1}
    m[p+"2022-09"]      ={url:H+"/business/2022-09/data.html",    Table:"flow-snapforms",  form_module:"jsonv", router:1}
    m[p+"2022-10"]      ={url:H+"/business/2022-10/data.html",    Table:"flow-snapforms",  form_module:"jsonv", router:1}
    m[p+"2022-11"]      ={url:H+"/business/2022-11/data.html",    Table:"flow-snapforms",  form_module:"jsonv", router:1}
    m[p+"2022-12"]      ={url:H+"/business/2022-12/data.html",    Table:"flow-snapforms",  form_module:"jsonv", router:1}
})();
