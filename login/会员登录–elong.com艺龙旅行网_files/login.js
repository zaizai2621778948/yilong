/****************************************************************************************************
* *
* *        File Name		: Login.js
* *        Creator			: yonghong.zhang
* *        Create Time		: 2010-12-2
* *        Functional Description  : 地址信息列表页js
* *        Remark      	:
* *        History			:
* *
* *
* *  Copyright (c) eLong Corporation.  All rights reserved.
* ****************************************************************************************************/

//创建日期的扩展方法 add by 张鸿
Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //month      
        "d+": this.getDate(), //day      
        "h+": this.getHours(), //hour      
        "m+": this.getMinutes(), //minute      
        "s+": this.getSeconds(), //second      
        "q+": Math.floor((this.getMonth() + 3) / 3),
        //quarter      
        "S": this.getMilliseconds() //millisecond    
    };
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(format))
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    return format;
};


Date.prototype.addDays = function (d) {
    this.setDate(this.getDate() + d);
};
Date.prototype.addWeeks = function (w) {
    this.addDays(w * 7);
};
Date.prototype.addMonths = function (m) {
    var d = this.getDate();
    this.setMonth(this.getMonth() + m);
    if (this.getDate() < d) {
        this.setDate(0);
    }
};
Date.prototype.addYears = function (y) {
    var m = this.getMonth();
    this.setFullYear(this.getFullYear() + y);
    if (m < this.getMonth()) {
        this.setDate(0);
    }
};

//取得指定日期的年月日时分秒   
//参数：dateValue 是格式形如：2014/07/02    add by 张鸿
function TimeSpan(dateValue) {
    var newCom = new Date(dateValue);
    this.year = newCom.getFullYear();
    this.month = newCom.getMonth() + 1;
    this.day = newCom.getDate();
    this.hour = newCom.getHours();
    this.minute = newCom.getMinutes();
    this.second = newCom.getSeconds();
    this.msecond = newCom.getMilliseconds();
    this.week = newCom.getDay();
};


//取得两个日期之间的时间差  add by 张鸿
//参数：interval : y或year-表示取得相差的年份 n或month-表示相差的月份 d或day表示相差的天数 h或hour-表示相差的小时 m或minute-表示相差的分钟 
//                 s或second-表示相差的秒数 ms或msecond-表示相差的毫秒数 w或week-表示相差的周数
//      date1:起始日期
//      date2:结束日期
function DateDiff(interval, date1, date2) {
    var TimeSpan1 = new TimeSpan(date1);
    var TimeSpan2 = new TimeSpan(date2);
    var result;
    switch (String(interval).toLowerCase()) {
        case "y":
        case "year":
            result = TimeSpan1.year - TimeSpan2.year;
            break;
        case "n":
        case "month":
            result = (TimeSpan1.year - TimeSpan2.year) * 12 + (TimeSpan1.month - TimeSpan2.month);
            break;
        case "d":
        case "day":
            result = Math.round((Date.UTC(TimeSpan1.year, TimeSpan1.month - 1, TimeSpan1.day) - Date.UTC(TimeSpan2.year, TimeSpan2.month - 1, TimeSpan2.day)) / (1000 * 60 * 60 * 24));
            break;
        case "h":
        case "hour":
            result = Math.round((Date.UTC(TimeSpan1.year, TimeSpan1.month - 1, TimeSpan1.day, TimeSpan1.hour) - Date.UTC(TimeSpan2.year, TimeSpan2.month - 1, TimeSpan2.day, TimeSpan2.hour)) / (1000 * 60 * 60));
            break;
        case "m":
        case "minute":
            result = Math.round((Date.UTC(TimeSpan1.year, TimeSpan1.month - 1, TimeSpan1.day, TimeSpan1.hour, TimeSpan1.minute) - Date.UTC(TimeSpan2.year, TimeSpan2.month - 1, TimeSpan2.day, TimeSpan2.hour, TimeSpan2.minute)) / (1000 * 60));
            break;
        case "s":
        case "second":
            result = Math.round((Date.UTC(TimeSpan1.year, TimeSpan1.month - 1, TimeSpan1.day, TimeSpan1.hour, TimeSpan1.minute, TimeSpan1.second) - Date.UTC(TimeSpan2.year, TimeSpan2.month - 1, TimeSpan2.day, TimeSpan2.hour, TimeSpan2.minute, TimeSpan2.second)) / 1000);
            break;
        case "ms":
        case "msecond":
            result = Date.UTC(TimeSpan1.year, TimeSpan1.month - 1, TimeSpan1.day, TimeSpan1.hour, TimeSpan1.minute, TimeSpan1.second, TimeSpan1.msecond) - Date.UTC(TimeSpan2.year, TimeSpan2.month - 1, TimeSpan2.day, TimeSpan2.hour, TimeSpan2.minute, TimeSpan2.second, TimeSpan1.msecond);
            break;
        case "w":
        case "week":
            result = Math.round((Date.UTC(TimeSpan1.year, TimeSpan1.month - 1, TimeSpan1.day) - Date.UTC(TimeSpan2.year, TimeSpan2.month - 1, TimeSpan2.day)) / (1000 * 60 * 60 * 24)) % 7;
            break;
        default:
            result = "invalid";
    }
    return (result);
}

//兼容IE8下的日期计算
function parseISO8601(dateStringInRange) {
    var isoExp = /^\s*(\d{4})-(\d\d)-(\d\d)\s*$/,
        date = new Date(NaN), month,
        parts = isoExp.exec(dateStringInRange);

    if (parts) {
        month = +parts[2];
        date.setFullYear(parts[1], month - 1, parts[3]);
        if (month != date.getMonth() + 1) {
            date.setTime(NaN);
        }
    }
    return date;
}



var LoginClient = Elong.Page.LoginClient;
LoginClient = Class.create();

Object.extend(LoginClient.prototype, {
    name: "LoginClient",

    // 初始化
    initialize: function () {
        this.initializeServerData();
        this.initializeDOM();
        this.initializeEvent();
        this.render();
    },
    // 初始化服务端数据
    initializeServerData: function () {
        this.LoginData = LoginController.ViewModel;
        this.LoginNextUrl = LoginController.NextUrl;
        this.ValidateUrl = LoginController.UrlConfig.Myelong_Validate;

        this.RegUrl = LoginController.UrlConfig.Myelong_Reg;
        this.FindPwd = new Template(LoginController.UrlConfig.Myelong_ForgetPass);
        this.FindPwdByName = LoginController.UrlConfig.Myelong_ForgetPassLoginName;
        this.MyelongRes = LoginController.Resources;
        this.isEn = LoginController.isEn;
        this.PollingTime = LoginController.pollingTime;
        this.PollingInterval = LoginController.pollingInterval;
    },

    // 初始化DOM元素
    initializeDOM: function () {
        this.ElongLoginRegion = $("#ElongLogin");
        this.UserName = $("#UserName");
        this.PassWord = $("#PassWord");
        this.ValidateCode = $("#ValidateCode");
        this.IsRememberMe = $("#pageinputRememberMe");
        this.rememberMe = $("span[name='rememberMe']");
        this.HomeSite = $("div#RedirectHomeSite");
        //动态登录
        this.LoginTypeChoose = $("#LoginTypeChoose");
        this.DynamicLoginRegin = $("#DynamicLogin");
        this.UserPhone = $("#userPhone");
        this.DynamicCode = $("#input_DynamicCode");
        this.GetDynamicCodeBTN = $("#GetDynamicCode");
        this.ValidateCodeDynamic = $("#ValidateCode_Dynamic");
        //二维码登陆
        this.SwitchCodeLogin = $("#switchCodeLogin");
        this.CodeLoginRegion = $("#CodeLogin");
    },
    destroyDOM: function () {
        this.ElongLoginRegion = null;
        this.UserName = null;
        this.PassWord = null;
        this.ValidateCode = null;
        this.IsRememberMe = null;
        this.HomeSite = null;

        this.LoginTypeChoose = null;
        this.DynamicLoginRegin = null;
        this.UserPhone = null;
        this.DynamicCode = null;
        this.GetDynamicCodeBTN = null;
        this.ValidateCodeDynamic = null;
        this.SwitchCodeLogin = null;
        this.CodeLoginRegion = null;
    },
    initializeEvent: function () {
        this.ElongLoginRegion.bind("click", this.onClickElongLoginRegion.bindAsEventListener(this));
        this.ElongLoginRegion.bind("keydown", this.onClickElongLoginRegion.bindAsEventListener(this));
        this.ElongLoginRegion.bind("keydown", this.LoginClick.bindAsEventListener(this));
        this.UserName.bind("blur", this.FoucsLeaveLoginAreaClick.bindAsEventListener(this));
        this.PassWord.bind("blur", this.FoucsLeaveLoginAreaClick.bindAsEventListener(this));
        this.ValidateCode.bind("blur", this.FoucsLeaveLoginAreaClick.bindAsEventListener(this));
        this.rememberMe.bind("click", this.ClickRemeberMe.bindAsEventListener(this));
        this.ValidateCode.bind("click", this.ClickValidateInputArea.bindAsEventListener(this));
        this.ValidateCode.bind("keydown", this.ClickValidateInputArea.bindAsEventListener(this));
        this.HomeSite.bind("click", this.HomeSiteClick.bindAsEventListener(this));

        this.LoginTypeChoose.bind("click", this.SwitchLoginType.bindAsEventListener(this));
        this.DynamicLoginRegin.bind("click", this.onClickDynamicLoginRegion.bindAsEventListener(this));

        this.UserPhone.bind("blur", this.FoucsLeaveDynamicLoginAreaClick.bindAsEventListener(this));
        this.DynamicCode.bind("blur", this.FoucsLeaveDynamicLoginAreaClick.bindAsEventListener(this));
        this.ValidateCodeDynamic.bind("blur", this.FoucsLeaveDynamicLoginAreaClick.bindAsEventListener(this));
        this.GetDynamicCodeBTN.bind("click", this.GetDynamicCodeBTNClick.bindAsEventListener(this));
        this.SwitchCodeLogin.bind("click", this.SwitchCodeLoginClick.bindAsEventListener(this));
        this.CodeLoginRegion.bind("mouseover", this.ShowHelp.bindAsEventListener(this));
        this.CodeLoginRegion.bind("mouseout", this.CloseHelp.bindAsEventListener(this));
        this.CodeLoginRegion.bind("click", this.ClickCodeLogin.bindAsEventListener(this));
    },

    SwitchCodeLoginClick: function (evt) {
        var element = Event.element(evt);
        var eleValue = element.attr("method");
        switch (eleValue) {
            case "QrCodeLogin":
                // alert(1);
                //alert($.browser.version);
                var cookieSessionGuid = Globals.cookie("SessionGuid"); //检测是否存在cookie，不存在提示用户
                if (String.isNullOrEmpty(cookieSessionGuid)) {
                    var dialog = new Dialog({
                        title: "温馨提示",
                        htmlContent: '<div class="tipBox"><p style="margin-top:15px;width:290px;text-align:center;" class="tl">出错啦，请点击刷新后重试。</p></div>',
                        height: 100,
                        width: 300,
                        initEvent: function (windowElement) {
                        } .bind(this),
                        closeEvent: function () {
                            window.location.reload();
                        }
                    });
                    dialog.show();
                    return false;
                }
                //                LoginController.UpdateCacheStatus(function(res) {
                //                    $("#NoCodeLogin").hide();
                //                    element.attr("style", "top: -50px; left: -50px;");
                //                    element.next().attr("style", "top: -50px; left: 0px;");
                //                    $("#CodeLogin").show();
                //                    //this.PollingTime, this.PollingInterval, this.LoginNextUrl
                //                    var asyncPoolingStartTime = new Date();
                //                    var requestCount = 0;
                //                    this.AsyncAjaxPolling(asyncPoolingStartTime, requestCount);
                //                }.bind(this,null,"get"));

                $("#NoCodeLogin").hide();
                $("#ScanTimeout2").hide();
                $("#CodeLogin").show();
                $("#SearchCodeStep").show();
                this.CloseHelp($("#SearchCodeStep").find("a[method='showHelp']"));
                element.attr("style", "top: -50px; left: -50px;");
                element.next().attr("style", "top: -50px; left: 0px;");

                //this.PollingTime, this.PollingInterval, this.LoginNextUrl
                var asyncPoolingStartTime = new Date();
                var requestCount = 0;
                this.AsyncAjaxPolling(asyncPoolingStartTime, requestCount);
                break;
            case "NormalLogin":
                $("#NoCodeLogin").show();
                $(".a_one").attr("style", "top: 0px; left: 0px;");
                $(".a_two").attr("style", "top: 0px; left: 50px;");
                $("#CodeLogin").css("display", "none").find("div .scanning_code").css("display", "none");
                $("#ScanTimeout2").hide();
                break;
            default:
                break;
        }
        return false;
    },
    AsyncAjaxPolling: function (asyncPoolingStartTime, requestCount) {
        var ajaxPollingInterval = window.setInterval(function () {
            //var isScanSuccess = false;
            if (parseInt(DateDiff("s", new Date(), asyncPoolingStartTime)) > (parseInt(LoginController.pollingTime) * 60)) {//轮询超时
                window.clearInterval(ajaxPollingInterval); //清除轮询
                $("#SearchCodeStep").hide(); //隐藏扫码登陆
                //                if ($("#ScanSuccess").is(":visible")) {
                //                    $("#ScanSuccess").hide();
                //                }
                $("#ScanSuccess").hide();

                $("#ScanTimeout2").show(); //显示未扫码超时提示
            } else {//继续轮询
                if (!$("#NoCodeLogin").is(":visible")) {//只有正常登陆隐藏时才发送请求
                    LoginController.GetQRCodeData(function (res) {
                        if (res.success) {
                            if (res.value == "0") {//未进行扫码操作
                                requestCount++;
                                asyncPoolingStartTime.toString();
                                //去判断此时用户是否点击了普通登录
                                if ($("#NoCodeLogin").is(":visible")) {//用户切换到了普通登录,终止此时的轮询
                                    window.clearInterval(ajaxPollingInterval);
                                }
                            } else if (res.value == "1") {//扫码成功
                                requestCount++;
                                asyncPoolingStartTime.toString();
                                //window.clearInterval(ajaxPollingInterval);//清除当前的轮询
                                //arguments.callee(new Date(), 0);
                                //this.AsyncAjaxPolling(0);
                                //testArgu = 0;
                                if ($("#NoCodeLogin").is(":visible")) {//此时用户取消了扫码登陆，回到正常登陆态
                                    window.clearInterval(ajaxPollingInterval);
                                    $("#CodeLogin").css("display", "none").find("div .scanning_code").css("display", "none");
                                } else {
                                    $("#CodeLogin").css("display", "block");
                                    $("#ScanSuccess").css("display", "block").prevAll("div").eq(0).css("display", "none");
                                }
                            } else if (res.value == "2") {//登陆成功
                                requestCount++;
                                asyncPoolingStartTime.toString();
                                window.clearInterval(ajaxPollingInterval); //清除当前的轮询
                                LoginController.QRCodeLogin(function (loginRes) {
                                    if (loginRes.value == "fail") {
                                        //                                    $("#CodeSuccess").hide();
                                        //                                    $("#CodeLoginTimeOut").show();
                                    }
                                    //网站登录成功 跳转
                                    else {
                                        if (typeof (LoginController.NextUrl) == "undefined") {
                                            //before
                                            //window.location.href = "http://my.elong.net/Connection_en.html?SessionTag=" + loginRes.value.SessionTag + "&SessionGuid=" + loginRes.value.SessionGuid + "&nextUrl=" + encodeURIComponent("http://my.elong.com/index_cn.html"); 
                                            //after:yuxing.cheng 2015-05-19
                                            //跳转的Connection里面加上expireTime参数，用于保证和中文站点中注入的lgid的过期时间一样。
                                            window.location.href = "http://my.elong.net/Connection_en.html?SessionTag=" + loginRes.value.SessionTag + "&SessionGuid=" + loginRes.value.SessionGuid + "&nextUrl=" + encodeURIComponent("http://my.elong.com/index_cn.html") + "&expireTime=0";
                                        } else {
                                            //before
                                            //window.location.href = "http://my.elong.net/Connection_en.html?SessionTag=" + loginRes.value.SessionTag + "&SessionGuid=" + loginRes.value.SessionGuid + "&nextUrl=" + encodeURIComponent(LoginController.NextUrl);   
                                            //after:yuxing.cheng 2015-05-19
                                            //跳转的Connection里面加上expireTime参数，用于保证和中文站点中注入的lgid的过期时间一样。
                                            window.location.href = "http://my.elong.net/Connection_en.html?SessionTag=" + loginRes.value.SessionTag + "&SessionGuid=" + loginRes.value.SessionGuid + "&nextUrl=" + encodeURIComponent(LoginController.NextUrl) + "&expireTime=0";
                                        }
                                    }
                                } .bind(this), null, "GET");
                            } else if (res.value == "3") {//取消扫码
                                requestCount++;
                                asyncPoolingStartTime.toString();
                                window.clearInterval(ajaxPollingInterval); //清除轮询
                                $("#CodeLogin").css("display", "none").find("div .scanning_code").css("display", "none");
                                $("#NoCodeLogin").css("display", "block");
                                $(".a_one").attr("style", "top: 0px; left: 50px;");
                                $(".a_two").attr("style", "top: 0px; left: 0px;");
                            }
                        }
                    } .bind(this), null, "GET");
                } else {
                    window.clearInterval(ajaxPollingInterval);
                }
            }
        }, parseInt(LoginController.pollingInterval) * 1000);
    },
    ClickCodeLogin: function (evt) {
        var element = Event.element(evt);
        var eleValue = element.attr("method");
        switch (eleValue) {
            case "RefreshQrCode":
                $("#SearchCodeStep").show(); //隐藏扫码登陆
                $("#ScanTimeout2").hide(); //显示未扫码超时提示
                var asyncPoolingStartTime = new Date();
                var requestCount = 0;
                this.AsyncAjaxPolling(asyncPoolingStartTime, requestCount);
                break;
            default:
        }
    },
    ShowHelp: function (evt) {
        var element = Event.element(evt);
        var method = element.attr("method");
        switch (method) {
            case "showHelp":
                function showLastAnimate() {
                    if (element.parent().prev().find("div").eq(0).is(":animated")) { } else {
                        element.parent().prev().find("div").eq(0).fadeIn(150, function () { });
                    }
                }
                function showMidAnimate() {
                    if (element.parent().prev().is(":animated")) { } else {
                        element.parent().prev().fadeIn(35, function () { }).animate({ left: "85px" }, 70, function () { showLastAnimate(); });
                    }
                }
                showMidAnimate();
                break;
        }
    },

    CloseHelp: function (evt) {
        var element = Event.element(evt);
        var method = element.attr("method");
        switch (method) {
            case "showHelp":
                function closeLastAnimate() {
                    if (element.parent().prev().is(":animated")) { } else {
                        element.parent().prev().animate({ left: "0px" }, 70, function () { element.parent().prev().fadeOut(35, function () { }); });
                    }
                }
                function closeMidAnimate() {
                    if (element.parent().prev().find("div").eq(0).is(":animated")) { } else {
                        element.parent().prev().find("div").eq(0).fadeOut(150, function () {
                            closeLastAnimate();
                        });
                    }
                }
                closeMidAnimate();
                break;
        }
    },
    SwitchLoginType: function (evt) {
        var element = Event.element(evt);
        var method = element.attr("method");
        switch (method) {
            case "normalLogin":
                this.ShowNormalLogin();
                break;
            case "dynamicLogin":
                this.ShowDynamicLogin();
                break;

        }

    },
    ShowNormalLogin: function () {

        this.DynamicLoginRegin.hide();
        $("#NoCodeLogin").attr("class", "formbox errorBox");
        this.ElongLoginRegion.show();
    },
    ShowDynamicLogin: function () {

        this.ElongLoginRegion.hide();
        $("#NoCodeLogin").attr("class", "formbox phonebox errorBox");
        LoginController.Dynamic_isValidateCode(function (res) {
            if (res.value == "true") {
                $("#ValidateInput_Dynamic").show();
            }
        } .bind(this), null, "GET");
        /*
        if (LoginController.IsShowValidateCode_Dynamic) {
        $("#ValidateInput_Dynamic").show();
        }
        */
        this.DynamicLoginRegin.show();
    },
    GetDynamicCodeBTNClick: function (evt) {
        $("#PhoneTypeList").hide();
        var userPhone = $("#userPhone").attr("value");
        /*
        if (userPhone.indexOf("+86") > -1) {
        userPhone = userPhone.substr(3);
        }
        */
        //为兼容ie，使用if语句，不适用switch 

        //var extendUserPhone=new StringBuilder();

        var extendUserPhone;
        var phoneType = $("#PhoneType").attr("value");

        if (phoneType == "1" || phoneType == "5") {
            extendUserPhone = userPhone;
        }
        if (phoneType == "2" || phoneType == "6") {
            extendUserPhone = "852" + userPhone;
        }
        if (phoneType == "3" || phoneType == "7") {
            extendUserPhone = "853" + userPhone;
        }
        if (phoneType == "4" || phoneType == "8") {
            extendUserPhone = "886" + userPhone;
        }
        /*
        switch (phoneType) {
        case "1":
        case "5":
        // extendUserPhone.append(userPhone);
        extendUserPhone = userPhone;
        break;
        case "2":
        case "6":
        //extendUserPhone.append("852");
        // extendUserPhone.append(userPhone);
        extendUserPhone = "852" + userPhone;
        break;
        case "3":
        case "7":
        //extendUserPhone.append("853");
        //extendUserPhone.append(userPhone);
        extendUserPhone = "853" + userPhone;
        break;
        case "4":
        case "8":
        //extendUserPhone.append("886");
        //extendUserPhone.append(userPhone);
        extendUserPhone = "886" + userPhone;
        break;

        }
        */
        //extendUserPhone = "85212345678";
        if (String.isNullOrEmpty(userPhone) || (!validator.valid(extendUserPhone, "mobile"))) {

            var tip = this.isEn ? "Enter right phone number" : "请输入合法手机号";
            $("#UserPhoneErroTip").html(tip).show();

        }
        else {
            if ($("#GetDynamicCode").attr("useful") == "true") {
                var validateCode = "";
                if ($("div#ValidateInput_Dynamic").is(":visible")) {
                    validateCode = $("input#ValidateCode_Dynamic").attr("value");
                }


                LoginController.GetDynamicCode(extendUserPhone, validateCode, function (res) {
                    if (res.value == null || res.value.toString() == "erro") {
                        var tip = this.isEn ? "other erro" : "出现其他错误";
                        $("#UserPhoneErroTip").html(tip).show();
                        return;
                    }
                    /*
                    if (res.value.toString() == "IpLimit") {
                    $("#ValidateInput_Dynamic").show();
                    $("img[method='ChangeVidateCode']").attr("src", this.ValidateUrl + "?" + new Date());
                    return;
                    }
                    */
                    if (res.value == "ErroValidate") {

                        $("#ValidateInput_Dynamic").show();
                        $("#validate_result_Dynamiic").html(this.isEn ? "Graphical verification code error, please enter again to get the password" : "图形验证码错误，请重新输入以获取验证码").show();
                        $("img[method='ChangeVidateCode']").attr("src", this.ValidateUrl + "?" + new Date());

                        return;

                    }

                    if (res.value == "TimeLimit") {

                        var tip = this.isEn ? "One minute for verification code too frequently, please get later" : "一分钟内获取验证码太频繁，请稍后获取";
                        $("#UserPhoneErroTip").html(tip).show();
                    }
                    else {
                        /*
                        if (res.value.ClientIPInvokeCount >= res.value.ClientIPMaxCount) {
                        $("#ValidateInput_Dynamic").show();
                        $("img[method='ChangeVidateCode']").attr("src", this.ValidateUrl + "?" + new Date());
                        }
                        */
                        switch (res.value.ReturnCode) {

                            case "100":
                                if (res.value.ClientIPInvokeCount >= res.value.ClientIPMaxCount) {
                                    $("#ValidateInput_Dynamic").show();
                                    //$("img[method='ChangeVidateCode']").attr("src", this.ValidateUrl + "?" + new Date());
                                }
                                //  var tip = "对不起，您的手机号绑定多个艺龙账号，暂不支持手机动态密码登录，请使用" + "<a href=\"#\" method=\"NormalLoginLink\">普通登录方式</a>";
                                var tip = this.isEn ? "Sorry, your phone numbe is  binding more than one elong account, not support the mobile sign in, please try" + "<a href=\"#\" method=\"NormalLoginLink\">normal sign in</a>" : "对不起，您的手机号绑定多个艺龙账号，暂不支持手机动态密码登录，请使用" + "<a href=\"#\" method=\"NormalLoginLink\">普通登录方式</a>";
                                $("#UserPhoneErroTip").html(tip).show();
                                if ($("#ValidateInput_Dynamic").is(":visible")) {
                                    $("img[method='ChangeVidateCode']").attr("src", this.ValidateUrl + "?" + new Date());
                                }


                                break;
                            case "101": //当前手机未注册
                                if (res.value.ClientIPInvokeCount >= res.value.ClientIPMaxCount) {
                                    $("#ValidateInput_Dynamic").show();
                                    //$("img[method='ChangeVidateCode']").attr("src", this.ValidateUrl + "?" + new Date());
                                }
                                var tip = this.isEn ? "Your mobile phone number has not been registered. Please login in after " + "<a href=\"register_en.html\">registration</a>" : "当前手机未注册，请 " + "<a href=\"register_cn.html\">注册</a>";
                                $("#UserPhoneErroTip").html(tip).show();
                                if ($("#ValidateInput_Dynamic").is(":visible")) {
                                    $("img[method='ChangeVidateCode']").attr("src", this.ValidateUrl + "?" + new Date());
                                }

                                break;
                            case "102":
                                if (res.value.ClientIPInvokeCount >= res.value.ClientIPMaxCount) {
                                    $("#ValidateInput_Dynamic").show();
                                    //$("img[method='ChangeVidateCode']").attr("src", this.ValidateUrl + "?" + new Date());
                                }
                                if (!this.isEn) {
                                    var tip = "您已达到今天获取动态密码的最高次数，请使用" + "<a href=\"#\" method=\"NormalLoginLink\">普通登录方式</a>";
                                    $("#UserPhoneErroTip").html(tip).show();
                                }
                                else {
                                    var tip = "You have to take the maximum number of dynamic password today，please try " + "<a href=\"#\" method=\"NormalLoginLink\">normal sign in</a>";
                                    $("#UserPhoneErroTip").html(tip).show();
                                }
                                if ($("#ValidateInput_Dynamic").is(":visible")) {
                                    $("img[method='ChangeVidateCode']").attr("src", this.ValidateUrl + "?" + new Date());
                                }

                                break;
                            case "103":
                            case "104":
                                if (res.value.ClientIPInvokeCount >= res.value.ClientIPMaxCount) {
                                    $("#ValidateInput_Dynamic").show();
                                    // $("img[method='ChangeVidateCode']").attr("src", this.ValidateUrl + "?" + new Date());
                                }
                                var tip = this.isEn ? "Verification code sent failure" : "验证码发送失败";
                                $("#UserPhoneErroTip").html(tip).show();
                                if ($("#ValidateInput_Dynamic").is(":visible")) {
                                    $("img[method='ChangeVidateCode']").attr("src", this.ValidateUrl + "?" + new Date());
                                }

                                break;
                            case "500":
                            case "":
                                if (res.value.ClientIPInvokeCount >= res.value.ClientIPMaxCount) {
                                    $("#ValidateInput_Dynamic").show();
                                    // $("img[method='ChangeVidateCode']").attr("src", this.ValidateUrl + "?" + new Date());
                                }
                                var tip = this.isEn ? "other erro" : "出现其他错误";
                                $("#UserPhoneErroTip").html(tip).show();
                                if ($("#ValidateInput_Dynamic").is(":visible")) {
                                    $("img[method='ChangeVidateCode']").attr("src", this.ValidateUrl + "?" + new Date());
                                }

                                break;
                            case "000":
                                if (res.value.ClientIPInvokeCount >= res.value.ClientIPMaxCount) {
                                    $("#ValidateInput_Dynamic").show();
                                    // $("img[method='ChangeVidateCode']").attr("src", this.ValidateUrl + "?" + new Date());
                                }
                                //var tip = "请求成功";
                                //$("#UserPhoneErroTip").html(tip).show();
                                function Time(isEn) {

                                    var left = 60;
                                    return function () {
                                        if (left == 0) {
                                            clearInterval(count);
                                            var tip = isEn ? "Get password" : "获取动态密码";
                                            $("#GetDynamicCode").html(tip);

                                            $("#GetDynamicCode").attr("useful", "true");
                                            $("#GetDynamicCode").attr("class", "btn");
                                            left = 60;


                                        }
                                        else {
                                            if (!isEn) {
                                                $("#GetDynamicCode").html(left + "秒后重新发送");
                                            }
                                            else {
                                                $("#GetDynamicCode").html("Resend " + left + " s");
                                            }
                                            left--;


                                        }
                                    }

                                };
                                if ($("#GetDynamicCode").attr("useful") == "true") {
                                    var cc = Time(this.isEn);
                                    $("#GetDynamicCode").attr("useful", "false");
                                    $("#GetDynamicCode").attr("class", "btn rebtn");
                                    var count = setInterval(function () { cc(); }, 1000);
                                }

                                break;



                        }
                    }

                } .bind(this), null, "POST");

            }
        }



    },
    FoucsLeaveDynamicLoginAreaClick: function (evt) {
        var element = Event.element(evt);
        var method = element.attr("method");
        switch (method) {
            case "ValidateUserPhone":

                if (String.isNullOrEmpty($("input[method='ValidateUserPhone']").attr("value"))) {
                    var userPhone = this.isEn ? "please enter your phone number" : "请输入手机号";
                    $("input[method='ValidateUserPhone']").attr("value", userPhone);
                }
                break;

            case "CheckValidateCode_Dynamic":

                if (String.isNullOrEmpty($("input[method='CheckValidateCode_Dynamic']").attr("value"))) {
                    var username = this.isEn ? "Security code" : "验证码";
                    $("input[method='CheckValidateCode_Dynamic']").attr("value", username);
                }
                break;
            case "ValidateDynamicCode":
                if (String.isNullOrEmpty($("input[method='ValidateDynamicCode']").attr("value"))) {
                    var userPhone = this.isEn ? "Enter Dynamic password" : "输入动态密码";
                    $("input[method='ValidateDynamicCode']").attr("value", userPhone);
                }
                break;



        }
    },
    onClickDynamicLoginRegion: function (evt) {
        var element = Event.element(evt);
        var method = element.attr("method");
        switch (method) {
            case "DynamicLoginSubmit":
                //防止重复提交
                if ($("a[method='DynamicLoginSubmit']").attr("usable") == "true") {
                    //校验手机号，动态密码，验证码格式
                    $("#PhoneTypeList").hide();
                    this.hideErroTip_Dynamic();

                    if (!this.DynamicValidateLogin()) return;

                    if ($("a[method='DynamicLoginSubmit']").attr("usable") == "true") {
                        $("a[method='DynamicLoginSubmit']").attr("usable", "false");
                        if (!this.isEn) {
                            this.DynamicLoginRegin.find("a[method='DynamicLoginSubmit']").html("登录中…");
                        }
                        else {
                            this.DynamicLoginRegin.find("a[method='DynamicLoginSubmit']").html("Sign in…");
                        }
                    }

                    var validateCode = "";
                    if ($("div#ValidateInput_Dynamic").is(":visible")) {
                        validateCode = $("input#ValidateCode_Dynamic").attr("value");
                    }
                    var dynamicCode = $("#input_DynamicCode").attr("value");

                    var userPhone = $("#userPhone").attr("value");
                    /*
                    if (userPhone.indexOf("+86") > -1) {
                    userPhone = userPhone.substr(3);
                    }
                    */
                    // var extendUserPhone = userPhone;
                    var phoneType = $("#PhoneType").attr("value");
                    var extendUserPhone;

                    if (phoneType == "1" || phoneType == "5") {
                        extendUserPhone = userPhone;
                    }
                    if (phoneType == "2" || phoneType == "6") {
                        extendUserPhone = "852" + userPhone;
                    }
                    if (phoneType == "3" || phoneType == "7") {
                        extendUserPhone = "853" + userPhone;
                    }
                    if (phoneType == "4" || phoneType == "8") {
                        extendUserPhone = "886" + userPhone;
                    }
                    /*
                    switch (phoneType) {
                    case "1":
                    case "5":
                    extendUserPhone = userPhone;
                    break;
                    case "2":
                    case "6":
                    extendUserPhone = "852" + userPhone;
                    break;
                    case "3":
                    case "7":
                    extendUserPhone = "853" + userPhone;
                    break;
                    case "4":
                    case "8":
                    extendUserPhone = "886" + userPhone;
                    break;

                    }
                    */
                    var isRemember4Dynamic = false;
                    if ($("span#remember4Dynamic").attr("class").toLowerCase().indexOf("off") != -1) {
                        isRemember4Dynamic = true;
                    }
                    LoginController.DynamicLogin(dynamicCode, extendUserPhone, validateCode, isRemember4Dynamic, function (res) {

                        if (res.value.toString() == "ErroValidate") {

                            $("#ValidateInput_Dynamic").show();
                            $("#validate_result_Dynamiic").html(this.isEn ? "Graphical verification code error, please enter again" : "图形验证码错误，请重新输入").show();
                            $("img[method='ChangeVidateCode']").attr("src", this.ValidateUrl + "?" + new Date());
                            $("a[method='DynamicLoginSubmit']").attr("usable", "true");
                            this.DynamicLoginRegin.find("a[method='DynamicLoginSubmit']").html(this.isEn ? "Sign in" : "登录");

                        }
                        else {
                            switch (res.value.returnCode) {
                                case "000":
                                    var currentUrl = window.location.href;
                                    if (this.LoginNextUrl != null) {
                                        currentUrl = this.LoginNextUrl;
                                        if (this.LoginNextUrl.toLowerCase().indexOf("huoche.com") != -1) {
                                            var sessionesid = LoginController.SessionEsid;
                                            var sessionguid = LoginController.SessionGuid;
                                            if (currentUrl.charAt(currentUrl.length - 1) == "/") {
                                                currentUrl = currentUrl.substring(0, currentUrl.length - 1);
                                            }
                                            if (this.LoginNextUrl.indexOf('?') != -1) {
                                                currentUrl = currentUrl + "&esid=" + sessionesid + "&guid=" + sessionguid;
                                            }
                                            else {
                                                currentUrl = currentUrl + "?esid=" + sessionesid + "&guid=" + sessionguid;
                                            }
                                        }
                                    }

                                    //yuxing.cheng
                                    //2015-05-19 加入expireTime,lgid过期时间
                                    if (isRemember4Dynamic) {
                                        window.location.href = "http://my.elong.net/Connection_en.html?SessionTag=" + res.value.SessionTag + "&SessionGuid=" + res.value.SessionGuid + "&nextUrl=" + encodeURIComponent(currentUrl) + "&expireTime=1";
                                    } else {
                                        window.location.href = "http://my.elong.net/Connection_en.html?SessionTag=" + res.value.SessionTag + "&SessionGuid=" + res.value.SessionGuid + "&nextUrl=" + encodeURIComponent(currentUrl) + "&expireTime=0";
                                    }
                                    break;
                                case "201": //当前验证码已过期
                                    $("#DynamicCodeErroTip").html(this.isEn ? "Dynamic password fails, please get it again." : "您的动态密码已过期，请重新获取").show();
                                    $("img[method='ChangeVidateCode']").attr("src", this.ValidateUrl + "?" + new Date());
                                    $("#ValidateInput_Dynamic").show();

                                    $("a[method='DynamicLoginSubmit']").attr("usable", "true");
                                    this.DynamicLoginRegin.find("a[method='DynamicLoginSubmit']").html(this.isEn ? "Sign in" : "登录");
                                    break;
                                case "202": //当前验证码输入次数过多已失效
                                    $("#DynamicCodeErroTip").html(this.isEn ? "Dynamic password fails, please get it again." : "您的动态密码已过期，请重新获取").show();
                                    $("img[method='ChangeVidateCode']").attr("src", this.ValidateUrl + "?" + new Date());
                                    $("#ValidateInput_Dynamic").show();

                                    $("a[method='DynamicLoginSubmit']").attr("usable", "true");
                                    this.DynamicLoginRegin.find("a[method='DynamicLoginSubmit']").html(this.isEn ? "Sign in" : "登录");
                                    break;
                                case "203":

                                    $("#DynamicCodeErroTip").html(this.isEn ? "The current verification code input errors" : "您的动态密码输入有误，请重新输入").show();
                                    if (res.value.ValideCodeErrCount == (res.value.ValideCodeMaxCount - 1)) {
                                        $("#DynamicCodeErroTip").html(this.isEn ? "There is only one chance to enter" : "还有一次输入机会").show();
                                    }
                                    else {
                                        if (res.value.ValideCodeErrCount == res.value.ValideCodeMaxCount) {
                                            $("#DynamicCodeErroTip").html(this.isEn ? "Dynamic password fails, please get it again." : "您的动态密码已过期，请重新获取").show();
                                        }
                                    }

                                    //输入动态码错误即出图形验证码
                                    $("img[method='ChangeVidateCode']").attr("src", this.ValidateUrl + "?" + new Date());
                                    $("#ValidateInput_Dynamic").show();

                                    $("a[method='DynamicLoginSubmit']").attr("usable", "true");
                                    this.DynamicLoginRegin.find("a[method='DynamicLoginSubmit']").html(this.isEn ? "Sign in" : "登录");

                                    break;

                                default:

                                    $("#UserPhoneErroTip").html(this.isEn ? "unknown error" : "未知错误").show();
                                    $("img[method='ChangeVidateCode']").attr("src", this.ValidateUrl + "?" + new Date());
                                    $("#ValidateInput_Dynamic").show();
                                    $("a[method='DynamicLoginSubmit']").attr("usable", "true");
                                    this.DynamicLoginRegin.find("a[method='DynamicLoginSubmit']").html(this.isEn ? "Sign in" : "登录");

                                    break;
                            }

                        }
                    } .bind(this), null, "POST");
                }
                break;
            case "showPhoneTypes":
                if ($("#PhoneTypeList").is(":visible")) {
                    $("#PhoneTypeList").hide();
                }
                else {
                    var lan = this.isEn ? 2 : 1;
                    LoginController.getPhoneAcList(lan, function (res) {
                        if (res.value == "null") {

                            return;
                        }
                        else {
                            var phonelist = "";
                            for (var i = 0; i < res.value.length; i++) {
                                if (res.value[i].AcId == 1 || res.value[i].AcId == 5) {
                                    phonelist = phonelist + "<li value=\"" + res.value[i].AcId + "\"" + "method=\"selectPhoneType\">" + res.value[i].AcDsc + "</li>";
                                }
                                else {

                                    phonelist = phonelist + "<li value=\"" + res.value[i].AcId + "\"" + "method=\"selectPhoneType\">" + res.value[i].AcDsc + "</li>";
                                }


                            }

                            $("#PhoneTypeList").html(phonelist);
                        }

                    } .bind(this), null, "GET");
                    $("#PhoneTypeList").show();
                }
                break;
            case "selectPhoneType":
                var phoneType = element.attr("value");
                $("#PhoneTypeList").hide();

                $("#PhoneType").attr("value", phoneType);
                switch (phoneType) {
                    case 1:
                    case 5:

                        var phoneAc = this.isEn ? "CN(+86)" : "中国大陆+86";
                        $("#PhoneType").html(phoneAc);
                        break;
                    case 2:
                    case 6:

                        var phoneAc = this.isEn ? "HK(+852)" : "中国香港+852";
                        $("#PhoneType").html(phoneAc);
                        break;
                    case 3:
                    case 7:

                        var phoneAc = this.isEn ? "MC(+853)" : "中国澳门+853";
                        $("#PhoneType").html(phoneAc);
                        break;
                    case 4:
                    case 8:

                        var phoneAc = this.isEn ? "TW(+886)" : "中国台湾+886";
                        $("#PhoneType").html(phoneAc);
                        break;

                }
                break;
            case "ValidateUserPhone":
                $("#PhoneTypeList").hide();
                var tipMemberInfo = element.attr("value");
                if (tipMemberInfo.indexOf("输入") > -1 || tipMemberInfo.indexOf("enter") > -1) element.attr("value", "");

                $("#UserPhoneErroTip").hide();
                break;
            case "ValidateDynamicCode":
                $("#PhoneTypeList").hide();
                var value = element.attr("value");
                if (value.indexOf("输入") > -1 || value.indexOf("Enter") > -1) {
                    element.attr("value", "");
                }
                $("#DynamicCodeErroTip").hide();
                break;
            case "CheckValidateCode_Dynamic":
                $("#PhoneTypeList").hide();
                var value = element.attr("value");
                if (value.indexOf("验证") > -1 || value.indexOf("Security code") > -1) {
                    element.attr("value", "");
                }
                $("#validate_result_Dynamiic").hide();
                break;
            case "NormalLoginLink":
                this.LoginTypeChoose.find("input[method='normalLogin']").click();
                break;

            case "ChangeVidateCode":
                {
                    element.attr("src", this.ValidateUrl + "?" + new Date());
                }
                break;
            case "HrefVlidateCode":
                {
                    this.DynamicLoginRegin.find("a[id='ValidateHref_Dynamic']").prev().attr("src", this.ValidateUrl + "?" + new Date());
                }
                break;
            case "hrefSina":
                {
                    var url = "http://openapi.elong.com/sina.html";
                    this.opennewWind(url);
                    //window.location.href = url;
                }
                break;
            case "hrefQQ":
                {
                    var url = "http://openapi.elong.com/qq.html";
                    this.opennewWind(url);

                }
                break;
            case "hrefWeixin":
                {
                    var url = "http://openapi.elong.com/weixin.html";
                    this.opennewWind(url);

                }
                break;
            case "hrefAlipay":
                {
                    var url = "http://openapi.elong.com/alipay.html";
                    this.opennewWind(url);
                }
                break;
            case "hrefBidu":
                {
                    var url = "http://openapi.elong.com/baidu.html";
                    this.opennewWind(url);
                }
                break;
            case "href360":
                {
                    var url = "http://openapi.elong.com/360.html";
                    this.opennewWind(url);
                }
                break;
            case "hrefRenRen":
                var url = "http://openapi.elong.com/renren.html";
                this.opennewWind(url);
                break;
        }

    },

    HomeSiteClick: function (evt) {
        if (window.location.href.toLowerCase().indexOf(".com")) {
            window.location.href = "http://www.elong.com";
        }
        else {
            window.location.href = "http://www.elong.net";
        }
    },
    FoucsLeaveLoginAreaClick: function (evt) {
        var element = Event.element(evt);
        var method = element.attr("method");
        switch (method) {
            case "ValidateUserName":
                if (String.isNullOrEmpty($("input[method='ValidateUserName']").attr("value"))) {
                    var username = this.isEn ? "User name / Card number / Email" : "用户名/卡号/手机号/邮箱";
                    $("input[method='ValidateUserName']").attr("value", username);
                }
                break;
            case "PassWord":
                var value = $("input[method='PassWord']").attr("value");
                if (value == "" || value == null || !value) {
                    $("div#input_password").hide();
                    $("div#password_tip").show();
                }
                break;
            case "ValidateCode":
                if (String.isNullOrEmpty($("input[method='CheckValidateCode']").attr("value"))) {
                    var username = this.isEn ? "Security code" : "验证码";
                    $("input[method='CheckValidateCode']").attr("value", username);
                }
                break;
        }
    },
    ClickValidateInputArea: function (evt) {
        var element = Event.element(evt);
        var value = element.attr("value");
        if (value.indexOf("验证码") > -1 || value.indexOf("Security code") > -1) {
            element.attr("value", "");
        }
    },
    LoginClick: function (evt) {
        if (evt.keyCode == 13) {
            this.ElongLoginRegion.find("a[method='LoginSubmit']").click();
        }
    },
    onClickElongLoginRegion: function (evt) {
        var element = Event.element(evt);
        var method = element.attr("method");
        switch (method) {
            case "LoginSubmit":
                {
                    this.hideErrorTip();
                    if (!this.ValidateLogin()) return;
                    this.WirteLoginCookie();
                    if ($("a[method='LoginSubmit']").attr("usable") == "true") {
                        $("a[method='LoginSubmit']").attr("usable", "false");
                        this.ElongLoginRegion.find("a[method='LoginSubmit']").html(this.isEn ? "Sign in ..." : "登录中…");
                    }
                    this.GetLoginInfo();
                    var validateCode = "";
                    var remeberMe = false;
                    if ($("div#ValidateInput").is(":visible")) {
                        validateCode = $("input#ValidateCode").attr("value");
                    }
                    if ($("span#pageinputRememberMe").attr("class").toLowerCase().indexOf("off") != -1) {
                        remeberMe = true;
                    }
                    LoginController.LoginAgent("login", this.LoginData.UserName, encodeURIComponent(this.LoginData.PassWord), validateCode, "", remeberMe, function (res) {
                        if (res.MemberLoginCode != 1 && res.IsShowVCode) {//显示验证码输入框
                            this.ElongLoginRegion.find("div[id='ValidateInput']").show();
                            //每一次请求都会改变验证码
                            $("img[method='ChangeVidateCode']").attr("src", this.ValidateUrl + "?" + new Date());
                        }
                        switch (res.MemberLoginCode) {
                            case 1:
                                {
                                    this.ElongLoginRegion.find("a[method='LoginSubmit']").unbind("click");
                                    this.ElongLoginRegion.find("a[method='LoginSubmit']").unbind("keydown");
                                    var currentUrl = window.location.href;
                                    if (this.LoginNextUrl != null) {
                                        currentUrl = this.LoginNextUrl;
                                        if (this.LoginNextUrl.toLowerCase().indexOf("huoche.com") != -1) {
                                            var sessionesid = LoginController.SessionEsid;
                                            var sessionguid = LoginController.SessionGuid;
                                            if (currentUrl.charAt(currentUrl.length - 1) == "/") {
                                                currentUrl = currentUrl.substring(0, currentUrl.length - 1);
                                            }
                                            if (this.LoginNextUrl.indexOf('?') != -1) {
                                                currentUrl = currentUrl + "&esid=" + sessionesid + "&guid=" + sessionguid;
                                            }
                                            else {
                                                currentUrl = currentUrl + "?esid=" + sessionesid + "&guid=" + sessionguid;
                                            }
                                        }
                                    }

                                    //yuxing.cheng
                                    //2015-05-19
                                    //lgid expire time added

                                    if (remeberMe) {
                                        window.location.href = "http://my.elong.net/Connection_en.html?SessionTag=" + res.SessionTag + "&SessionGuid=" + res.SessionGuid + "&nextUrl=" + encodeURIComponent(currentUrl) + "&expireTime=1";
                                    } else {
                                        window.location.href = "http://my.elong.net/Connection_en.html?SessionTag=" + res.SessionTag + "&SessionGuid=" + res.SessionGuid + "&nextUrl=" + encodeURIComponent(currentUrl) + "&expireTime=0";
                                    }
                                }
                                break;
                            case 100:
                                this.showErrorTip(this.UserName, this.isEn ? "Your username and password didn't match." : "您输入的用户名和密码不匹配，请重新输入！");
                                if ($("a[method='LoginSubmit']").attr("usable") == "false") {
                                    $("a[method='LoginSubmit']").attr("usable", "true");
                                }
                                break; // 登录名不存在
                            case 101:
                                this.showErrorTip(this.PassWord, this.isEn ? "You have entered an incorrect password." : "登录密码错误");
                                if ($("a[method='LoginSubmit']").attr("usable") == "false") {
                                    $("a[method='LoginSubmit']").attr("usable", "true");
                                }
                                break; // 登录密码错误
                            case 102:
                                if ($("a[method='LoginSubmit']").attr("usable") == "false") {
                                    $("a[method='LoginSubmit']").attr("usable", "true");
                                }
                                break; // 匹配了多个用户名,而且用户没有选择卡号
                            case 104:
                                if (!this.isEn) {
                                    $("#validate_result").html("您输入的验证码有误").show();
                                }
                                else {
                                    $("#validate_result").html("Not match").show();
                                }
                                if ($("a[method='LoginSubmit']").attr("usable") == "false") {
                                    $("a[method='LoginSubmit']").attr("usable", "true");
                                }
                                break; // 验证码错误
                            case 105:
                                alert(res.MemberCardList);
                                if ($("a[method='LoginSubmit']").attr("usable") == "false") {
                                    $("a[method='LoginSubmit']").attr("usable", "true");
                                }
                                break;
                            default:
                                $error(this.UserName, this.isEn ? "There is an unknown error." : "未知错误");
                                if ($("a[method='LoginSubmit']").attr("usable") == "false") {
                                    $("a[method='LoginSubmit']").attr("usable", "true");
                                }
                                break; //未知错误
                        }
                        this.ElongLoginRegion.find("a[method='LoginSubmit']").html(this.isEn ? "Sign in" : "登录");

                    } .bind(this), null, "POST");
                    return false;
                }
                break;
            case "ValidateUserName":
                {
                    var tipMemberInfo = element.attr("value");
                    if (tipMemberInfo.indexOf("卡号") > -1 || tipMemberInfo.indexOf("Card number") > -1) element.attr("value", "");
                }
                break;
            case "ValidatePassword":
                $("#password_tip").hide();
                $("#input_password").show();
                $("#input_password").find("input").focus();

                break;
            case "CheckValidateCode":
                {
                    $("#validate_result").show();
                    if ($("#validate_result").is(":visible")) {
                        $("#validate_result").hide();
                    }
                }
                break;
            case "ChangeVidateCode":
                {
                    element.attr("src", this.ValidateUrl + "?" + new Date());
                }
                break;
            case "HrefVlidateCode":
                {
                    this.ElongLoginRegion.find("a[id='ValidateHref']").prev().attr("src", this.ValidateUrl + "?" + new Date());
                }
                break;
            case "ChangeVidateCodeNew":
                {
                    var obj = element,
                        img_src = obj.attr("src");

                    var new_img_src = img_src.indexOf('?') === -1 ? img_src : img_src.substr(0, img_src.indexOf('?'));
                    obj.attr("src", new_img_src + "?" + new Date());
                }
                break;
            case "HrefVlidateCodeNew":
                {
                    var obj = this.ElongLoginRegion.find("a[id='ValidateHref']").prev(),
                        img_src = obj.attr("src");
                    var new_img_src = img_src.indexOf('?') === -1 ? img_src : img_src.substr(0, img_src.indexOf('?'));
                    obj.attr("src", new_img_src + "?" + new Date());
                }
                break;
            case "RegHref":
                {
                    var regTemplate = new Template(this.RegUrl);
                    window.location.href = regTemplate.eval({ language: LoginController.Language });
                }
                break;
            case "hrefSina":
                {
                    var url = "http://openapi.elong.com/sina.html";
                    this.opennewWind(url);
                    //window.location.href = url;
                }
                break;
            case "hrefQQ":
                {
                    var url = "http://openapi.elong.com/qq.html";
                    this.opennewWind(url);

                }
                break;
            case "hrefWeixin":
                {
                    var url = "http://openapi.elong.com/weixin.html";
                    this.opennewWind(url);

                }
                break;
            case "hrefAlipay":
                {
                    var url = "http://openapi.elong.com/alipay.html";
                    this.opennewWind(url);
                }
                break;
            case "hrefBidu":
                {
                    var url = "http://openapi.elong.com/baidu.html";
                    this.opennewWind(url);
                }
                break;
            case "href360":
                {
                    var url = "http://openapi.elong.com/360.html";
                    this.opennewWind(url);
                }
                break;
            case "hrefRenRen":
                var url = "http://openapi.elong.com/renren.html";
                this.opennewWind(url);
                break;
            case "hrefFindPassWord":
                {
                    var url = this.FindPwd.eval({
                        language: this.isEn ? "en" : "cn"
                    });
                    if (validator.valid(this.UserName.val(), "notEmpty")) {
                        var userName = this.UserName.val();
                        userName = userName.replace("_", "$");
                        location.href = String.format("{0}?loginname={1}", url, userName);
                    } else {
                        window.location.href = url;
                    }
                }
                break;
        }
    },
    ClickRemeberMe: function (evt) {
        var element = Event.element(evt);
        var iconType = element.attr("class");
        switch (iconType) {
            case "icon on":
                element.attr("class", "icon off");
                //$("#remberMeText").html(this.isEn ? "Free Login Within Two Months" : "两个月内免登录");
                break;
            case "icon off":
                element.attr("class", "icon on");
                //$("#remberMeText").html(this.isEn ? "Remeber me" : "记住我");
                break;
        }
    },
    RedLoginCookie: function () {
        if (Globals.cookie("member") != "" && !String.isNullOrEmpty(Globals.cookie("member"))) {
            this.UserName.val(Globals.cookie("member"));
        }
    },
    WirteLoginCookie: function () {
        //没有选择记住我的时候写cookie
        if (!String.isNullOrEmpty(this.UserName.val())) {
            var options = { expires: 60 };
            Globals.cookie("member", "", this.UserName.val(), options);
        }

    },
    GetLoginInfo: function () {
        this.LoginData.UserName = this.UserName.val();
        this.LoginData.PassWord = this.PassWord.val();
        if (this.ValidateCode.val() != "验证码")
            this.LoginData.ValidateCode = this.ValidateCode.val();
    },
    DynamicValidateLogin: function () {
        var userPhone = $("#userPhone").attr("value");
        /*
        if (userPhone.indexOf("+86") > -1) {
        userPhone = userPhone.substr(3);
        }
        */
        // var extendUserPhone = userPhone;
        var phoneType = $("#PhoneType").attr("value");
        var extendUserPhone;

        if (phoneType == "1" || phoneType == "5") {
            extendUserPhone = userPhone;
        }
        if (phoneType == "2" || phoneType == "6") {
            extendUserPhone = "852" + userPhone;
        }
        if (phoneType == "3" || phoneType == "7") {
            extendUserPhone = "853" + userPhone;
        }
        if (phoneType == "4" || phoneType == "8") {
            extendUserPhone = "886" + userPhone;
        }
        /*
        switch (phoneType) {
        case "1":
        case "5":
        extendUserPhone = userPhone;
        break;
        case "2":
        case "6":
        extendUserPhone = "852" + userPhone;
        break;
        case "3":
        case "7":
        extendUserPhone = "853" + userPhone;
        break;
        case "4":
        case "8":
        extendUserPhone = "886" + userPhone;
        break;

        }
        */
        if (String.isNullOrEmpty(userPhone) || (!validator.valid(extendUserPhone, "mobile"))) {
            var tip = this.isEn ? "Enter right phone number" : "请输入合法手机号";
            $("#UserPhoneErroTip").html(tip).show();
            return false;

        }
        if (userPhone == "请输入手机号" || userPhone == "pleasr enter your phone number") {
            var tip = this.isEn ? "Enter right phone number" : "请输入手机号";
            $("#UserPhoneErroTip").html(tip).show();
            return false;
        }
        var dynamicCode = $("input[method='ValidateDynamicCode']").attr("value");
        if (String.isNullOrEmpty(dynamicCode) || dynamicCode == "输入动态密码" || dynamicCode == "Enter Dynamic password") {
            var tip = this.isEn ? "please enter dynamic password" : "请输入动态密码";
            $("#DynamicCodeErroTip").html(tip).show();
            return false;
        }
        if ($("#ValidateInput_Dynamic").is(":visible")) {
            var validateCode = $("input[method='CheckValidateCode_Dynamic']").attr("value");
            if (String.isNullOrEmpty(validateCode) || validateCode == "验证码" || validateCode == "Security code") {
                var tip = this.isEn ? "please enter Security code" : "请输入验证码";
                $("#validate_result_Dynamiic").html(tip).show();
                return false;
            }
        }
        return true;

    },
    ValidateLogin: function () {
        this.hideErrorTip(this.UserName);
        this.hideErrorTip(this.PassWord);
        if (!validator.valid(this.UserName.val(), "notEmpty")) {
            this.showErrorTip(this.UserName, this.isEn ? "Please input your account" : "请输入账户名");
            return false;
        }
        if (!$("#input_password").is(":visible")) {
            this.showErrorTip($("input[method='ValidatePassword']"), this.isEn ? "Please input your password" : "请输入密码");
            return false;
        }
        else if (this.PassWord.val() == "" || this.PassWord.val() == null || !this.PassWord.val()) {
            this.showErrorTip(this.PassWord, this.isEn ? "Please input your password" : "请输入密码");
            return false;
        }
        return true;
    },
    opennewWind: function (url) {
        window.location.href = url;
    },
    render: function () {
        if (LoginController.IsShowValidateCode) {
            this.ElongLoginRegion.find("div[id='ValidateInput']").show();
            //            this.ElongLoginRegion.find("dd[method='ValidateText']").show();
            //            this.ElongLoginRegion.find("dd[method='ValidateInput']").show();
        }
        /*
        if (LoginController.IsShowValidateCode_Dynamic) {
        $("#ValidateInput_Dynamic").show();
        }
        */
        //this.DynamicLoginRegin.find("a[method='DynamicLoginSubmit']")
        this.LoginTypeChoose.find("input[method='normalLogin']").click();
        this.RedLoginCookie();
        $("span#pageinputRememberMe").attr("class", "icon off");
        $("span#remember4Dynamic").attr("class", "icon off");
        $("#remberMeText").html(this.isEn ? "Free Login Within Two Months" : "两个月内免登录");

    },
    showErrorTip: function (element, content) {
        var errorTip = new Template("<div class=\"input_tip\" name=\"input_error_tip\">#{htmlContent}</div>");
        element.after(errorTip.eval({ htmlContent: content }));
    },
    hideErrorTip: function () {
        $("div[name='input_error_tip']").hide();
    },
    hideErroTip_Dynamic: function () {
        $("#UserPhoneErroTip").hide();
        $("#DynamicCodeErroTip").hide();
        $("#validate_result_Dynamiic").hide();

    },
    dispose: function () {
        this.destroyEvent();
        this.destroyDOM();
    }
});

var client = null;
$ready(function () {
    client = new LoginClient;
});