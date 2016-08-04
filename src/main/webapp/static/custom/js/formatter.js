/**
 * Created by huangpeng on 2015/5/18.
 */
/**
 * 表格索引
 * @param value
 * @param row
 * @param index
 * @returns {*}
 */
function rowNumFormatter(value, row, index) {
    return index + 1;
}
/**
 * 性别类型转换
 * @param value
 * @param row
 * @param index
 * @returns {string}
 */
function sexFormatter(value, row, index) {
    var objValue = ('F' == value ? '女' : '男');
    return objValue;
}
/**
 * 接口人类型转换
 */
function userFlagFormater(value, row, index){
    var objValue = ('1' == value ? '是' : '否');
    return objValue;
}
/**
 * 资源类型转换
 * @param value
 * @param row
 * @param index
 * @returns {string}
 */
function rescFormatter(value, row, index) {
    var objValue;
    if("0"==value){
        objValue ="目录";
    }else if("1"==value){
        objValue ="菜单";
    }else if("2"==value){
        objValue ="按钮";
    }
    return objValue;
}

/**
 * 资源是否使用
 * @param value
 * @param row
 * @param index
 * @returns {string}
 */
function useTagFormatter(value, row, index) {
    var objValue = ('1' == value ? '使用' : '废弃');
    return objValue;
}

/**
 * 用户类型
 * @param value
 * @param row
 * @param index
 * @returns {string}
 */
function transeJobName(value, row, index){
    var objValue = ('0'==value?'联通用户':'服务商用户');
    return objValue;
}

/**
 * j角色类型
 * @param value
 * @param row
 * @param index
 * @returns {string}
 */
function jobType(value, row, index){
    var objValue;
    if("1"==value){
        objValue ="环节";
    }
    return objValue;
}

/**
 * 区域名称转换
 * @param value
 * @param row
 * @param index
 * @returns {*}
 */
function areaCodeFormatter(value, row, index) {
    var objValue;
    if("0431"==value){
        objValue ="长春";
    }else if("0432"==value){
        objValue ="吉林";
    }else if("0433"==value){
        objValue ="延边";
    }else if("0434"==value){
        objValue ="四平";
    }else if("0435"==value){
        objValue ="通化";
    }else if("0436"==value){
        objValue ="白城";
    }else if("0437"==value){
        objValue ="辽源";
    }else if("0438"==value){
        objValue ="松原";
    }else if("0439"==value){
        objValue ="白山";
    }else if("2200"==value){
        objValue ="省公司";
    }
    return objValue;
}
/**
 * 物料单位转换
 * @param value
 * @param row
 * @param index
 * @returns {*}
 */
function materialUnit(value, row, index) {
    var objValue;
    if("1"==value){
        objValue ="m3";
    }else if("2"==value){
        objValue ="kg";
    }else if("3"==value){
        objValue ="副";
    }else if("4"==value){
        objValue ="个";
    }else if("5"==value){
        objValue ="根";
    }else if("6"==value){
        objValue ="块";
    }else if("7"==value){
        objValue ="米";
    }else if("8"==value){
        objValue ="套";
    }
    return objValue;
}
/**
 * 物料主料/辅料转换
 * @param value
 * @param row
 * @param index
 * @returns {*}
 */
function isMain(value, row, index) {
    var objValue;
    if("0"==value){
        objValue ="辅材";
    }else if("1"==value){
        objValue ="主材";
    }
    return objValue;
}
/**
 * 物料甲供/乙供转换
 * @param value
 * @param row
 * @param index
 * @returns {*}
 */
function supplyTypeFormatter(value, row, index) {
    var objValue;
    if("1"==value){
        objValue ="甲供";
    }else if("2"==value){
        objValue="乙供";
    }else if("3"==value){
        objValue ="甲供/乙供";
    }
    return objValue;
}

/**
 * 指标服务对象
 * @param value
 * @param row
 * @param index
 * @returns {*}
 */
function serviceObjectFormatter(value, row, index) {
    var objValue;
    if("01"==value){
        objValue ="网格经理";
    }else if("02"==value){
        objValue ="市网建项目经理";
    }else if("03"==value){
        objValue ="省网建项目经理";
    }else if("04"==value){
        objValue ="运维";
    }else if("05"==value){
        objValue ="设计单位";
    }else if("06"==value){
        objValue ="监理单位";
    }else if("07"==value){
        objValue ="施工单位";
    }
    return objValue;
}
/**
 *
 * @param value
 * @param row
 * @param index
 * @returns {string}
 */
function statusFlag(value, row, index){
    var objValue ="";
    if('N'==value){
        objValue ="未启动";
    }else if('R'==value){
        objValue ="运行中";
    }else if('S'==value){
        objValue ="竣工";
    }else if('F'==value){
        objValue ="撤单";
    }else if('SN'==value){
        objValue ="未激活";
    }else if('SZ'==value){
        objValue ="暂不激活";
    }else if('SS'==value) {
        objValue = "已激活";
    }
    return objValue;
}

/**
 * 端口造价类型转换
 * @param value
 * @param row
 * @param index
 * @returns {*}
 */
function buildTypeFormatter(value, row, index) {
    var objValue;
    if("01"==value){
        objValue ="新建";
    }else if("02"==value){
        objValue ="扩容";
    }else if("03"==value){
        objValue ="改造";
    }
    return objValue;
}

/**
 * 公告类型转换
 * @param value
 * @param row
 * @param index
 * @returns {*}
 */
function noticeType(value, row, index) {
    var objValue;
    if("1"==value){
        objValue ="正常";
    }else if("2"==value){
        objValue ="紧急";
    }
    return objValue;
}

/**
 * 专业类型
 * @param value
 * @param row
 * @param index
 * @returns {*}
 */
function requireTypeFormatter(value, row, index) {
    var objValue;
    if("KDJR11"==value){
        objValue ="城市宽带新建";
    }else if("KDJR12"==value){
        objValue ="城市宽带扩容";
    }else if("KDJR13"==value){
        objValue ="城市宽带改造";
    }else if("KDJR21"==value){
        objValue ="商业楼宇新建";
    }else if("KDJR22"==value){
        objValue ="商业楼宇扩容";
    }else if("KDJR23"==value){
        objValue ="商业楼宇改造";
    }else if("KDJR31"==value){
        objValue ="高校校园新建";
    }else if("KDJR32"==value){
        objValue ="高校校园扩容";
    }else if("KDJR33"==value){
        objValue ="高校校园改造";
    }else if("KDJR41"==value){
        objValue ="农村宽带新建";
    }else if("KDJR42"==value){
        objValue ="农村宽带扩容";
    }else if("KDJR43"==value){
        objValue ="农村宽带改造";
    }else if("KDJR51"==value){
        objValue ="不产生能力新建";
    }else if("KDJR52"==value){
        objValue ="不产生能力扩容";
    }else if("KDJR53"==value) {
        objValue = "不产生能力改造";
    }else if("KDJR61"==value){
        objValue ="接入网网管项目";
    }else if("KDJR62"==value){
        objValue ="机房设备搬迁";
    }else if("KHJR11"==value){
        objValue ="客户工程省";
    }else if("KHJR12"==value){
        objValue ="客户工程市";
    }else if("KHJR21"==value){
        objValue ="行业应用省";
    }else if("KHJR22"==value){
        objValue ="行业应用市";
    }else if("KDHZ11"==value){
        objValue ="城市宽带新建-合作";
    }else if("KDHZ12"==value){
        objValue ="城市宽带扩容-合作";
    }else if("KDHZ13"==value){
        objValue ="城市宽带改造-合作";
    }else if("KDHZ21"==value){
        objValue ="商业楼宇新建-合作";
    }else if("KDHZ22"==value){
        objValue ="商业楼宇扩容-合作";
    }else if("KDHZ23"==value){
        objValue ="商业楼宇改造-合作";
    }else if("KDHZ31"==value){
        objValue ="高校校园新建-合作";
    }else if("KDHZ32"==value){
        objValue ="高校校园扩容-合作";
    }else if("KDHZ33"==value){
        objValue ="高校校园改造-合作";
    }else if("KDHZ41"==value){
        objValue ="农村宽带新建-合作";
    }else if("KDHZ42"==value){
        objValue ="农村宽带扩容-合作";
    }else if("KDHZ43"==value){
        objValue ="农村宽带改造-合作";
    }else if("KHJR11"==value){
        objValue ="客户工程省-合作";
    }else if("KHJR12"==value){
        objValue ="客户工程市-合作";
    }else if("KHJR21"==value){
        objValue ="行业应用省-合作";
    }else if("KHJR22"==value){
        objValue ="行业应用市-合作";
    }
    return objValue;
}

/**
 * 是否主材
 * @param value
 * @param row
 * @param index
 * @returns {*}
 */
function isMainFormatter(value, row, index) {
    var objValue;
    if ("1" == value) {
        objValue = "是";
    } else if ("0" == value) {
        objValue = "否";
    }
    return objValue;
}

/**
 * 物料类型
 * @param value
 * @param row
 * @param index
 * @returns {*}
 */
function categoryTypeFormatter(value, row, index) {
    var objValue;
    if ("1" == value) {
        objValue = "材料类";
    } else if ("2" == value) {
        objValue = "设备类";
    }
    return objValue;
}

/**
 * 设计模板上下架
 * @param value
 * @param row
 * @param index
 * @returns {*}
 */
function putAwayFlagType(value, row, index) {
    var objValue;
    if ("1" == value) {
        objValue = "上架";
    } else if ("0" == value) {
        objValue = "下架";
    }
    return objValue;
}

/**
 * 项目类型转换
 * @param value
 * @param row
 * @param index
 * @returns {string}
 */
function projectType(value, row, index){
    var objValue = ('01'==value?'正常扩容项目':'购置类项目');
    return objValue;
}

/**
 * 激活类型
 * @param value
 * @param row
 * @param index
 * @returns {*}
 */
function activateTypeFormatter(value, row, index) {
    var objValue;
    if ("2" == value) {
        objValue = "统筹";
    } else if ("3" == value) {
        objValue = "预投";
    } else{
        objValue = "正常";
    }
    return objValue;
}

/**
 * 定额对应的物料是否已编制
 * @param value
 * @param row
 * @param index
 * @returns {*}
 */
function materialFlagFormatter(value, row, index) {
    var objValue;
    if ("1" == value) {
        objValue = "已编制";
    } else  {
        objValue = "";
    }
    return objValue;
}

/*
 资源核查类型
 */
function netTypeFormatter(value, row, index){
    var objValue;
    if ("ZYHC01" == value) {
        objValue = "专线";
    } else if("ZYHC02" == value) {
        objValue = "互联网";
    }else if("ZYHC03" == value){
        objValue = "其他";
    }
    return objValue;
}

function circuitTypeFormatter(value,row,index){
    var objValue;
    if ("111001" == value) {
        objValue = "数字电路";
    } else if("111005" == value) {
        objValue = "以太网";
    }else if("111006" == value){
        objValue = "MPLS_VPN";
    }
    return objValue;
}

function interfaceTypeFormatter(value,row,index){
    var objValue;
    if ("30074" == value) {
        objValue = "RJ48(120Ω)";
    } else if("40015" == value) {
        objValue = "G.703(75Ω)";
    }else if("40016" == value){
        objValue = "G.703(120Ω)";
    }else if("40017" == value){
        objValue = "V.35";
    }else if("40018" == value){
        objValue = "以太网接口";
    }else if("40019" == value){
        objValue = "155M电口";
    }else if("40020" == value){
        objValue = "155M光口";
    }else if("40021" == value){
        objValue = "622M光口";
    }else if("40022" == value){
        objValue = "2.5G光口";
    }else if("30336" == value){
        objValue = "光口";
    }else if("30337" == value){
        objValue = "GE以太口";
    }else if("30338" == value){
        objValue = "10M/100M";
    }else if("30339" == value){
        objValue = "GE多模";
    }else if("30340" == value){
        objValue = "以太网电口";
    }
    return objValue;
}

function interfaceType2Formatter(value,row,index){
    var objValue;
    if ("30075" == value) {
        objValue = "RJ48(120Ω)";
    } else if("40030" == value) {
        objValue = "G.703(75Ω)";
    }else if("40031" == value){
        objValue = "G.703(120Ω)";
    }else if("40032" == value){
        objValue = "V.35";
    }else if("40033" == value){
        objValue = "以太网接口";
    }else if("40035" == value){
        objValue = "155M光口";
    }else if("40036" == value){
        objValue = "622M光口";
    }else if("40037" == value){
        objValue = "2.5G光口";
    }else if("30341" == value){
        objValue = "光口";
    }else if("30342" == value){
        objValue = "GE以太口";
    }else if("30343" == value){
        objValue = "10M/100M";
    }else if("30344" == value){
        objValue = "GE多模";
    }else if("30345" == value){
        objValue = "以太网电口";
    }
    return objValue;
}

function accessRouteFormatter(value,row,index){
    var objValue;
    if ("30076" == value) {
        objValue = "否";
    }else if("30077" == value) {
        objValue = "是";
    }
    return objValue;
}

function accessRoute2Formatter(value,row,index){
    var objValue;
    if ("30078" == value) {
        objValue = "否";
    }else if("30079" == value) {
        objValue = "是";
    }
    return objValue;
}

function gatheringWayFormatter(value,row,index){
    var objValue;
    if ("30332" == value) {
        objValue = "点对点";
    }else if("30333" == value) {
        objValue = "点对多点";
    }else{
        objValue = "未知";
    }
    return objValue;
}

function mainCallFormatter(value,row,index){
    var objValue;
    if ("1" == value) {
        objValue = "A端";
    }else if("2" == value) {
        objValue = "Z端";
    }else{
        objValue = "未知";
    }
    return objValue;
}

function nodeTypeFormatter(value,row,index){
    var objValue;
    if ("30346" == value || "30348" == value) {
        objValue = "汇聚";
    }else if("30347" == value || "30349" == value) {
        objValue = "分支";
    }else if("30572" == value ) {
        objValue = "单点";
    }else{
        objValue = "未知";
    }
    return objValue;
}

function gcStateFormatter(value,row,index){
    var objValue;
    if("1"==value){objValue = "新机会";}
    else if("1A"==value){objValue = "新机会-行业总监审批";}
    else if("1B"==value){objValue = "新机会-行业总监审批通过";}
    else if("1C"==value){objValue = "新机会-行业总监终止审批";}
    else if("2"==value){objValue = "初次沟通拜访";}
    else if("2C"==value){objValue = "初次沟通拜访-行业总监终止审批";}
    else if("3"==value){objValue = "达成意向";}
    else if("3C"==value){objValue = "达成意向-行业总监终止审批";}
    else if("4"==value){objValue = "初次交流";}
    else if("4C"==value){objValue = "初次交流-行业总监终止审批";}
    else if("5"==value){objValue = "客户立项";}
    else if("5C"==value){objValue = "客户立项-行业总监终止审批";}
    else if("6"==value){objValue = "正式交流";}
    else if("6C"==value){objValue = "正式交流-行业总监终止审批";}
    else if("7"==value){objValue = "入围提交方案";}
    else if("7C"==value){objValue = "入围提交方案-行业总监终止审批";}
    else if("8"==value){objValue = "合同谈判";}
    else if("8C"==value){objValue = "合同谈判-行业总监终止审批";}
    else if("9"==value){objValue = "中标";}
    else if("9A"==value){objValue = "中标-行业总监审批";}
    else if("9B"==value){objValue = "中标-行业总监审批通过";}
    else if("9C"==value){objValue = "中标-行业总监终止审批";}
    else if("10"==value){objValue = "签约成交";}
    else if("10C"==value){objValue = "签约成交-行业总监终止审批";}
    else if("11"==value){objValue = "实施";}
    else if("11C"==value){objValue = "实施-行业总监终止审批";}
    else if("12"==value){objValue = "竣工";}
    else if("12C"==value){objValue = "竣工-行业总监终止审批";}
    else if("13"==value){objValue = "售后";}
    else if("13C"==value){objValue = "售后-行业总监终止审批";}
    else if("14"==value){objValue = "失败";}
    else{objValue = "未知";}
    return objValue;
}

function resCheckStateFormatter(value,row,index){
    var objValue;
    if ("R" == value) {
        objValue = "运行中";
    }else if("S" == value) {
        objValue = "完成";
    }else if("F" == value ) {
        objValue = "撤单";
    }else{
        objValue = "未启动";
    }
    return objValue;
}

function resCheckResultFormatter(value,row,index){
    var objValue;
    if ("0" == value) {
        objValue = "无资源";
    }else if("1" == value) {
        objValue = "有资源";
    }else{
        objValue = "未启动";
    }
    return objValue;
}

function bandWidthFormatter(value,row,index){
    var objValue;
    if("30047" == value){objValue="2M";}
    else if("30048" == value){objValue="2*2M";}
    else if("30049" == value){objValue="3*2M";}
    else if("30050" == value){objValue="4*2M";}
    else if("30051" == value){objValue="5*2M";}
    else if("30052" == value){objValue="6*2M";}
    else if("30053" == value){objValue="7*2M";}
    else if("30054" == value){objValue="8*2M";}
    else if("30055" == value){objValue="9*2M";}
    else if("30056" == value){objValue="10*2M";}
    else if("30057" == value){objValue="11*2M";}
    else if("30058" == value){objValue="12*2M";}
    else if("30059" == value){objValue="13*2M";}
    else if("30060" == value){objValue="14*2M";}
    else if("30061" == value){objValue="15*2M";}
    else if("30062" == value){objValue="16*2M";}
    else if("30063" == value){objValue="34M";}
    else if("30064" == value){objValue="45M";}
    else if("30065" == value){objValue="50M";}
    else if("30066" == value){objValue="80M";}
    else if("30067" == value){objValue="100M";}
    else if("30068" == value){objValue="155M";}
    else if("30069" == value){objValue="622M";}
    else if("30070" == value){objValue="1G";}
    else if("30071" == value){objValue="2.5G";}
    else if("30072" == value){objValue="10G";}
    else if("30073" == value){objValue="其他(见备注)";}
    else if("30300" == value){objValue="2M";}
    else if("30301" == value){objValue="4M";}
    else if("30302" == value){objValue="6M";}
    else if("30303" == value){objValue="8M";}
    else if("30304" == value){objValue="10M";}
    else if("30305" == value){objValue="12M";}
    else if("30306" == value){objValue="14M";}
    else if("30307" == value){objValue="16M";}
    else if("30308" == value){objValue="18M";}
    else if("30309" == value){objValue="20M";}
    else if("30310" == value){objValue="30M";}
    else if("30311" == value){objValue="40M";}
    else if("30312" == value){objValue="50M";}
    else if("30313" == value){objValue="60M";}
    else if("30314" == value){objValue="70M";}
    else if("30315" == value){objValue="80M";}
    else if("30316" == value){objValue="90M";}
    else if("30317" == value){objValue="100M";}
    else if("30318" == value){objValue="150M";}
    else if("30319" == value){objValue="200M";}
    else if("30320" == value){objValue="250M";}
    else if("30321" == value){objValue="300M";}
    else if("30322" == value){objValue="350M";}
    else if("30323" == value){objValue="400M";}
    else if("30324" == value){objValue="450M";}
    else if("30325" == value){objValue="500M";}
    else if("30326" == value){objValue="600M";}
    else if("30327" == value){objValue="700M";}
    else if("30328" == value){objValue="800M";}
    else if("30329" == value){objValue="900M";}
    else if("30330" == value){objValue="1000M";}
    else if("30331" == value){objValue="其他(见备注)";}
    else if("40059" == value){objValue="34M";}
    else if("40060" == value){objValue="45M";}
    else if("40061" == value){objValue="155M";}
    else if("40062" == value){objValue="622M";}
    else if("40063" == value){objValue="1G";}
    else if("40064" == value){objValue="2.5G";}
    else if("40065" == value){objValue="10G";}
    else{
        objValue = "未知";
    }
    return objValue;
}

/**
 * 激活类型
 * @param value
 * @param row
 * @param index
 * @returns {*}
 */
function providerTypeFormatter(value, row, index) {
    var objValue;
    if ("01" == value) {
        objValue = "施工单位";
    } else if ("02" == value) {
        objValue = "监理单位";
    } else if ("03" == value) {
        objValue = "设计单位";
    } else if ("04" == value) {
        objValue = "厂家";
    } else if ("05" == value) {
        objValue = "第三方";
    } else{
        objValue = "正常";
    }
    return objValue;
}

/**
 * 格式化文件类型
 * @param value
 * @param row
 * @param index
 * @returns {*}
 */
function returnFilesType(value, row, index) {
    if (row.ATTR_ID != "" && row.ATTR_ID != null) {
        return "必传文件";
    } else {
        return "普通文件";
    }
}