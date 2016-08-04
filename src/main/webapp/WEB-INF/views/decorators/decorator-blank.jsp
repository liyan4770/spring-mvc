<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>财务效益评价 | <sitemesh:write property='title'/></title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <script>
        var rootPath = "${rootPath}", isLoginLogin = true;
        var pim2RootPath = '${pim2RootPath}';
    </script>
    <%@include file="/WEB-INF/views/include/head.jsp" %>

    <shiro:hasRole name="admin">
        <script>
            function iframeheightauto() {
                var main = $(window.parent.document).find("#urliframe");
                if (main.length > 0) {
                    var thisheight = $("body").innerHeight();
                    if (document.getElementsByTagName("body")[0].scrollHeight) thisheight = document.getElementsByTagName("body")[0].scrollHeight;
                    main.attr("height", thisheight);
                }
            }
            $(function () {
                iframeheightauto();

                $("body").mouseover(function () {
                    iframeheightauto();
                });

            });
        </script>
    </shiro:hasRole>

    <sitemesh:write property='head'/>
</head>
<body>
<sitemesh:write property='body'/>
</body>
</html>