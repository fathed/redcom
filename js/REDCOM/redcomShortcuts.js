/*
 * get all commands given and determine what the user means. shorts cuts are a pain in the ass for the programmer but a life saver for the end user
 * so here we will simply convert all short cuts to the long version and see what is what
 * 
 * i need to get the shortcuts for logout - i am assuming that it is like everything else in that as long as the first
 * two characters are present the redcom can resolve the command - but i hate assumption
 */
function redcomShortcuts(val) {

    var value = val, finVal = "";
    if (value == 'cl' || value == 'cle' || value == 'clea' || value == 'clear') {
        finVal = "clear";
    } else if (value == 'ex' || value == 'exi' || value == 'exit') {
        finVal = "exit";
    } else if (value == 'ac' || value == 'act' || value == 'acti' || value == 'activ' || value == 'activa' || value == 'activat' || value == 'activate') {
        finVal = "activate";
    } else if (value == 'lo' || value == 'log' || value == 'logo' || value == 'logou' || value == 'logout') {
        finVal = "logout";
    } else if (value == 'au' || value == 'aut' || value == 'auth' || value == 'autho' || value == 'author') {
        finVal = "author";
    }


    //name
    else if (value.match(/^name/gi)) {
        finVal = value.replace(/^name/, "name");
    } else if (value.match(/^nam/gi)) {
        finVal = value.replace(/^nam/, "name");
    }
    //class
    else if (value.match(/^class/gi)) {
        finVal = value.replace(/^class/, "class");
    } else if (value.match(/^clas/gi)) {
        finVal = value.replace(/^clas/, "class");
    } else if (value.match(/^cla/gi)) {
        finVal = value.replace(/^cla/, "class");
    }


    //station
    else if (value.match(/^station/gi)) {
        finVal = value.replace(/^station/, "station");
    } else if (value.match(/^statio/gi)) {
        finVal = value.replace(/^statio/, "station");
    } else if (value.match(/^stati/gi)) {
        finVal = value.replace(/^stati/, "station");
    } else if (value.match(/^stat/gi)) {
        finVal = value.replace(/^stat/, "station");
    } else if (value.match(/^sta/gi)) {
        finVal = value.replace(/^sta/, "station");
    }


    //stn_lst
    else if (value.match(/^stn_lst/gi)) {
        finVal = value.replace(/^stn_lst/, "stn_lst");
    } else if (value.match(/^stn_ls/gi)) {
        finVal = value.replace(/^stn_ls/, "stn_lst");
    } else if (value.match(/^stn_l/gi)) {
        finVal = value.replace(/^stn_l/, "stn_lst");
    } else if (value.match(/^stn/gi)) {
        finVal = value.replace(/^stn/, "stn_lst");
    }


    //type
    else if (value.match(/^type/gi)) {
        finVal = value.replace(/^type/, "type");
    } else if (value.match(/^typ/gi)) {
        finVal = value.replace(/^typ/, "type");
    }


    //location
    else if (value.match(/^location/gi)) {
        finVal = value.replace(/^location/, "location");
    } else if (value.match(/^locatio/gi)) {
        finVal = value.replace(/^locatio/, "location");
    } else if (value.match(/^locati/gi)) {
        finVal = value.replace(/^locati/, "location");
    } else if (value.match(/^locat/gi)) {
        finVal = value.replace(/^locat/, "location");
    } else if (value.match(/^loca/gi)) {
        finVal = value.replace(/^loca/, "location");
    } else if (value.match(/^loc/gi)) {
        finVal = value.replace(/^loc/, "location");
    }


    //description
    else if (value.match(/^description/gi)) {
        finVal = value.replace(/^description/, "description");
    } else if (value.match(/^descriptio/gi)) {
        finVal = value.replace(/^descriptio/, "description");
    } else if (value.match(/^descripti/gi)) {
        finVal = value.replace(/^descripti/, "description");
    } else if (value.match(/^descript/gi)) {
        finVal = value.replace(/^descript/, "description");
    } else if (value.match(/^descrip/gi)) {
        finVal = value.replace(/^descrip/, "description");
    } else if (value.match(/^descri/gi)) {
        finVal = value.replace(/^descri/, "description");
    } else if (value.match(/^descr/gi)) {
        finVal = value.replace(/^descr/, "description");
    } else if (value.match(/^desc/gi)) {
        finVal = value.replace(/^desc/, "description");
    } else if (value.match(/^des/gi)) {
        finVal = value.replace(/^des/, "description");
    }


    //tonetable
    else if (value.match(/^tonetable/gi)) {
        finVal = value.replace(/^tonetable/, "tonetable");
    } else if (value.match(/^tonetabl/gi)) {
        finVal = value.replace(/^tonetabl/, "tonetable");
    } else if (value.match(/^tonetab/gi)) {
        finVal = value.replace(/^tonetab/, "tonetable");
    } else if (value.match(/^toneta/gi)) {
        finVal = value.replace(/^toneta/, "tonetable");
    } else if (value.match(/^tonet/gi)) {
        finVal = value.replace(/^tonet/, "tonetable");
    } else if (value.match(/^tone/gi)) {
        finVal = value.replace(/^tone/, "tonetable");
    } else if (value.match(/^ton/gi)) {
        finVal = value.replace(/^ton/, "tonetable");
    }


    //sc - dial code table
    else if (value.match(/^sc/gi)) {
        finVal = value.replace(/^sc/, "sc");
    }


    //pattern
    else if (value.match(/^pattern/gi)) {
        finVal = value.replace(/^pattern/, "pattern");
    } else if (value.match(/^patter/gi)) {
        finVal = value.replace(/^patter/, "pattern");
    } else if (value.match(/^patte/gi)) {
        finVal = value.replace(/^patte/, "pattern");
    } else if (value.match(/^patt/gi)) {
        finVal = value.replace(/^patt/, "pattern");
    } else if (value.match(/^pat/gi)) {
        finVal = value.replace(/^pat/, "pattern");
    }


    //ip_mask
    else if (value.match(/^ip_mask/gi)) {
        finVal = value.replace(/^ip_mask/, "ip_mask");
    } else if (value.match(/^ipmask/gi)) {
        finVal = value.replace(/^ipmask/, "ip_mask");
    }


    //iplist
    else if (value.match(/^iplist/gi)) {
        finVal = value.replace(/^iplist/, "iplist");
    } else if (value.match(/^iplis/gi)) {
        finVal = value.replace(/^iplis/, "iplist");
    } else if (value.match(/^ipli/gi)) {
        finVal = value.replace(/^ipli/, "iplist");
    } else if (value.match(/^ipl/gi)) {
        finVal = value.replace(/^ipl/, "iplist");
    } else if (value.match(/^ip/gi)) {
        finVal = value.replace(/^ip/, "iplist");
    }


    //tdmp
    else if (value.match(/^tdmp/gi)) {
        finVal = value.replace(/^tdmp/, "tdmp");
    } else if (value.match(/^tdm/gi)) {
        finVal = value.replace(/^tdm/, "tdmp");
    }


    //maui
    else if (value.match(/^maui/gi)) {
        finVal = value.replace(/^maui/, "maui");
    } else if (value.match(/^mau/gi)) {
        finVal = value.replace(/^mau/, "maui");
    }


    //note
    else if (value.match(/^note/gi)) {
        finVal = value.replace(/^note/, "note");
    } else if (value.match(/^not/gi)) {
        finVal = value.replace(/^not/, "note");
    }


    //smdr
    else if (value.match(/^smdr/gi)) {
        finVal = value.replace(/^smdr/, "smdr");
    } else if (value.match(/^smd/gi)) {
        finVal = value.replace(/^smd/, "smdr");
    }


    //host
    else if (value.match(/^host/gi)) {
        finVal = value.replace(/^host/, "host");
    } else if (value.match(/^hos/gi)) {
        finVal = value.replace(/^hos/, "host");
    }

    //stelnet
    else if (value.match(/^stelnet/gi)) {
        finVal = value.replace(/^stelnet/, "stelnet");
    } else if (value.match(/^stelne/gi)) {
        finVal = value.replace(/^stelne/, "stelnet");
    } else if (value.match(/^steln/gi)) {
        finVal = value.replace(/^steln/, "stelnet");
    } else if (value.match(/^stel/gi)) {
        finVal = value.replace(/^stel/, "stelnet");
    } else if (value.match(/^ste/gi)) {
        finVal = value.replace(/^ste/, "stelnet");
    }


    //telnet
    else if (value.match(/^telnet/gi)) {
        finVal = value.replace(/^telnet/, "telnet");
    } else if (value.match(/^telne/gi)) {
        finVal = value.replace(/^telne/, "telnet");
    } else if (value.match(/^teln/gi)) {
        finVal = value.replace(/^teln/, "telnet");
    } else if (value.match(/^tel/gi)) {
        finVal = value.replace(/^tel/, "telnet");
    }


    //entry
    else if (value.match(/^entry/gi)) {
        finVal = value.replace(/^entry/, "entry");
    } else if (value.match(/^entr/gi)) {
        finVal = value.replace(/^entr/, "entry");
    } else if (value.match(/^ent/gi)) {
        finVal = value.replace(/^ent/, "entry");
    }


    //activate
    else if (value.match(/^activate/gi)) {
        finVal = value.replace(/^activate/, "activate");
    } else if (value.match(/^activat/gi)) {
        finVal = value.replace(/^activat/, "activate");
    } else if (value.match(/^activa/gi)) {
        finVal = value.replace(/^activa/, "activate");
    } else if (value.match(/^activ/gi)) {
        finVal = value.replace(/^activ/, "activate");
    } else if (value.match(/^acti/gi)) {
        finVal = value.replace(/^acti/, "activate");
    } else if (value.match(/^act/gi)) {
        finVal = value.replace(/^act/, "activate");
    }


    //system
    else if (value.match(/^system/gi)) {
        finVal = value.replace(/^system/, "system");
    } else if (value.match(/^syste/gi)) {
        finVal = value.replace(/^syste/, "system");
    } else if (value.match(/^syst/gi)) {
        finVal = value.replace(/^syst/, "system");
    } else if (value.match(/^sys/gi)) {
        finVal = value.replace(/^sys/, "system");
    }


    //consecutive
    else if (value.match(/^consecutively/gi)) {
        finVal = value.replace(/^consecutively/, "consecutively");
    } else if (value.match(/^consecutive/gi)) {
        finVal = value.replace(/^consecutive/, "consecutively");
    } else if (value.match(/^consecutiv/gi)) {
        finVal = value.replace(/^consecutiv/, "consecutively");
    } else if (value.match(/^consecuti/gi)) {
        finVal = value.replace(/^consecuti/, "consecutively");
    } else if (value.match(/^consecut/gi)) {
        finVal = value.replace(/^consecut/, "consecutively");
    } else if (value.match(/^consecu/gi)) {
        finVal = value.replace(/^consecu/, "consecutively");
    } else if (value.match(/^consec/gi)) {
        finVal = value.replace(/^consec/, "consecutively");
    } else if (value.match(/^conse/gi)) {
        finVal = value.replace(/^conse/, "consecutively");
    } else if (value.match(/^cons/gi)) {
        finVal = value.replace(/^cons/, "consecutively");
    } else if (value.match(/^con/gi)) {
        finVal = value.replace(/^con/, "consecutively");
    }


    //sequenced
    else if (value.match(/^sequenced/gi)) {
        finVal = value.replace(/^sequenced/, "sequenced");
    } else if (value.match(/^sequence/gi)) {
        finVal = value.replace(/^sequence/, "sequenced");
    } else if (value.match(/^sequenc/gi)) {
        finVal = value.replace(/^sequenc/, "sequenced");
    } else if (value.match(/^sequen/gi)) {
        finVal = value.replace(/^sequen/, "sequenced");
    } else if (value.match(/^seque/gi)) {
        finVal = value.replace(/^seque/, "sequenced");
    } else if (value.match(/^sequ/gi)) {
        finVal = value.replace(/^sequ/, "sequenced");
    } else if (value.match(/^seq/gi)) {
        finVal = value.replace(/^seq/, "sequenced");
    }


    //table
    else if (value.match(/^table/gi)) {
        finVal = value.replace(/^table/, "table");
    } else if (value.match(/^tabl/gi)) {
        finVal = value.replace(/^tabl/, "table");
    } else if (value.match(/^tab/gi)) {
        finVal = value.replace(/^tab/, "table");
    }


    //database
    else if (value.match(/^database/gi)) {
        finVal = value.replace(/^database/, "database");
    } else if (value.match(/^databas/gi)) {
        finVal = value.replace(/^databas/, "database");
    } else if (value.match(/^databa/gi)) {
        finVal = value.replace(/^databa/, "database");
    } else if (value.match(/^datab/gi)) {
        finVal = value.replace(/^datab/, "database");
    } else if (value.match(/^data/gi)) {
        finVal = value.replace(/^data/, "database");
    } else if (value.match(/^dat/gi)) {
        finVal = value.replace(/^dat/, "database");
    }


    //delete
    else if (value.match(/^delete/gi)) {
        finVal = value.replace(/^delete/, "delete");
    } else if (value.match(/^delet/gi)) {
        finVal = value.replace(/^delet/, "delete");
    } else if (value.match(/^dele/gi)) {
        finVal = value.replace(/^dele/, "delete");
    } else if (value.match(/^del/gi)) {
        finVal = value.replace(/^del/, "delete");
    }


    //redcomShortcuts
    else if (value.match(/^current/gi)) {
        finVal = value.replace(/^current/, "current");
    } else if (value.match(/^curren/gi)) {
        finVal = value.replace(/^curren/, "current");
    } else if (value.match(/^curre/gi)) {
        finVal = value.replace(/^curre/, "current");
    } else if (value.match(/^curr/gi)) {
        finVal = value.replace(/^curr/, "current");
    } else if (value.match(/^cur/gi)) {
        finVal = value.replace(/^cur/, "current");
    }


    //comment
    else if (value.match(/^comment/gi)) {
        finVal = value.replace(/^comment/, "comment");
    } else if (value.match(/^commen/gi)) {
        finVal = value.replace(/^commen/, "comment");
    } else if (value.match(/^comme/gi)) {
        finVal = value.replace(/^comme/, "comment");
    } else if (value.match(/^comm/gi)) {
        finVal = value.replace(/^comm/, "comment");
    } else if (value.match(/^com/gi)) {
        finVal = value.replace(/^com/, "comment");
    }


    //start
    else if (value.match(/^start/gi)) {
        finVal = value.replace(/^start/, "start");
    } else if (value.match(/^star/gi)) {
        finVal = value.replace(/^star/, "start");
    } else if (value.match(/^sta/gi)) {
        finVal = value.replace(/^sta/, "start");
    }


    else {
        finVal = value;
    }

    return finVal;
}

