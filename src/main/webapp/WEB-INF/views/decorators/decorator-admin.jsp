<%@ page contentType="text/html;charset=UTF-8"%>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<html>
<head>
  <title>财务效益评价 | <sitemesh:write property='title'/></title>
  <script>
    var rootPath="${rootPath}", isLoginLogin = true;
    var pim2RootPath = '${pim2RootPath}';
  </script>
  <%@include file="/WEB-INF/views/include/head-admin.jsp"%>
  <sitemesh:write property='head'/>
</head>
<body>
<sitemesh:write property='body'/>
</body>
</html>
