<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp" %>
<!DOCTYPE html>
<head>
    <meta charset="utf-8"/>
    <title>财务效益评价 | <sitemesh:write property='title'/></title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <script>
        var rootPath = '${rootPath}', isLoginLogin = true ;
    </script>
    <%@include file="/WEB-INF/views/include/head.jsp" %>

    <sitemesh:write property='head'/>
</head>
<body>
<%@include file="/WEB-INF/views/include/page-header.jsp" %>
<sitemesh:write property='body'/>
<%@include file="/WEB-INF/views/include/page-footer.jsp" %>
</body>
</html>