// 注册功能模块
$(function(){
    // 调用表单插件
    $('#registerForm').validate({
        // 验证规则
        rules: {
            // 用户名验证
            username: {
                required:true,  //必填
                rangelength:[3,6]  //长度
            },
            //密码验证
            password:{
                required:true,//非空
                isPassword:true//自定义密码验证
            },
            //确认密码
            checkpassword:{
                required:true,
                equalTo:'#password'
            },
            //电话号码
            tel : {
                required:true,
                isTel:true
            }
        },
        // 提示信息
        messages:{
            // 用户名提示信息
            username:{
                required:'用户名不能为空！',//非空提示
                rangelength:'长度在3~6位！'//长度提示
            },
            //密码验证
            password:{
                required:'密码不能为空！',//非空提示
                isPassword:'请输入5-10个，以字母开头，可带数字、“_”、“.”、的字符串！',//密码格式提示
            },
            checkpassword:{
                required:'请再次输入密码！',
                equalTo:'两次密码不一致'
            },
            tel:{
                required:'电话号码不能为空！',
                isTel:'电话号码格式不正确',
            }

        }
    })

  //密码正则验证
  jQuery.validator.addMethod("isPassword",function(value,element){
    var pwdReg=/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,9}$/;
    return this.optional(element)||(pwdReg.test(value));
});

  //手机号自定义验证
  jQuery.validator.addMethod("isTel",function(value,element){
    var telReg=/^[1]+[3,8,5,7]+\d{9}$/;
    return this.optional(element)||(telReg.test(value));
});
})