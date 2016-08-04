<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp" %>
<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en" class="no-js">
<!--<![endif]-->
<head>
    <meta charset="utf-8"/>
    <title>人员列表</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport"/>
    <meta content="" name="description"/>
    <meta content="" name="author"/>
</head>
<body class="page-header-fixed page-quick-sidebar-over-content page-sidebar-closed-hide-logo page-container-bg-solid">
<div class="page-container">
    <div class="page-content-wrapper">
        <div class="page-content">
            <div class="container">
                <!-- BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM-->
                <div class="modal fade" id="portlet-config" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                                <h4 class="modal-title">Modal title</h4>
                            </div>
                            <div class="modal-body">
                                Widget settings form goes here
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn blue">Save changes</button>
                                <button type="button" class="btn default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                        <!-- /.modal-content -->
                    </div>
                    <!-- /.modal-dialog -->
                </div>
                <!-- END SAMPLE PORTLET CONFIGURATION MODAL FORM-->
                <!-- BEGIN PAGE BREADCRUMB -->
                <ul class="page-breadcrumb breadcrumb">
                    <li>
                        <a href="#">Home</a><i class="fa fa-circle"></i>
                    </li>
                    <li>
                        <a href="/stepForm">分布操作</a>
                        <i class="fa fa-circle"></i>
                    </li>
                    <li class="active">
                        Typography
                    </li>
                </ul>
                <!-- END PAGE BREADCRUMB -->
                <!-- BEGIN PAGE CONTENT INNER -->
                <div class="row">
                    <div class="col-md-8">
                        <!-- BEGIN GENERAL PORTLET-->
                        <div class="portlet light">
                            <div class="portlet-title">
                                <div class="caption">
                                    <i class="fa fa-gift"></i>General
                                </div>
                                <div class="tools">
                                    <a href="javascript:;" class="collapse">
                                    </a>
                                    <a href="#portlet-config" data-toggle="modal" class="config">
                                    </a>
                                    <a href="javascript:;" class="reload">
                                    </a>
                                    <a href="javascript:;" class="remove">
                                    </a>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <h3>Sample text with lead body</h3>
                                        <p class="lead">
                                            Lead body. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at. Nulla tellus elit, varius non commodo eget, mattis vel eros. In sed ornare nulla.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at. Nulla tellus elit, varius non commodo eget, mattis vel eros. In sed ornare nulla.
                                        </p>
                                    </div>
                                    <div class="col-md-6">
                                        <h3>Sample text</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at. Nulla tellus elit, varius non commodo eget, mattis vel eros. In sed ornare nulla.
                                        </p>
                                        <p>
                                            Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                        </p>
                                        <p>
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui.
                                        </p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <h3>Texts</h3>
                                        <p class="muted">
                                            Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.
                                        </p>
                                        <p class="text-warning">
                                            Etiam porta sem malesuada magna mollis euismod.
                                        </p>
                                        <p class="text-error">
                                            Donec ullamcorper nulla non metus auctor fringilla.
                                        </p>
                                        <p class="text-info">
                                            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.
                                        </p>
                                        <p class="text-success">
                                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                        </p>
                                    </div>
                                    <div class="col-md-6">
                                        <h3>Headings</h3>
                                        <h1>h1. Heading 1</h1>
                                        <h2>h2. Heading 2</h2>
                                        <h3>h3. Heading 3</h3>
                                        <h4>h4. Heading 4</h4>
                                        <h5>h5. Heading 5</h5>
                                        <h6>h6. Heading 6</h6>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <h3>Address</h3>
                                        <div class="well">
                                            <address>
                                                <strong>Loop, Inc.</strong><br/>
                                                795 Park Ave, Suite 120<br/>
                                                San Francisco, CA 94107<br/>
                                                <abbr title="Phone">P:</abbr> (234) 145-1810 </address>
                                            <address>
                                                <strong>Full Name</strong><br/>
                                                <a href="mailto:#">
                                                    first.last@email.com </a>
                                            </address>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <h3>Some more text here</h3>
                                        <p>
                                            Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                        </p>
                                        <p>
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- END GENERAL PORTLET-->
                        <!-- BEGIN BLOCKQUOTES PORTLET-->
                        <div class="portlet light">
                            <div class="portlet-title">
                                <div class="caption">
                                    <i class="fa fa-gift"></i>Blockquotes
                                </div>
                                <div class="tools">
                                    <a href="javascript:;" class="collapse">
                                    </a>
                                    <a href="#portlet-config" data-toggle="modal" class="config">
                                    </a>
                                    <a href="javascript:;" class="reload">
                                    </a>
                                    <a href="javascript:;" class="remove">
                                    </a>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <h3></h3>
                                <blockquote>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Duis mollis, est non commodo luctus, nisi erat porttitor ligula integer posuere erat a ante.
                                    </p>
                                </blockquote>
                                <blockquote>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                    </p>
                                    <small>Someone famous <cite title="Source Title">Source Title</cite></small>
                                </blockquote>
                                <div class="clearfix">
                                    <blockquote class="pull-right">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                        </p>
                                        <small>Someone famous <cite title="Source Title">Source Title</cite></small>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <!-- END BLOCKQUOTES PORTLET-->
                        <!-- BEGIN WELLS PORTLET-->
                        <div class="portlet light">
                            <div class="portlet-title">
                                <div class="caption">
                                    <i class="fa fa-gift"></i>Alignments
                                </div>
                                <div class="tools">
                                    <a href="javascript:;" class="collapse">
                                    </a>
                                    <a href="#portlet-config" data-toggle="modal" class="config">
                                    </a>
                                    <a href="javascript:;" class="reload">
                                    </a>
                                    <a href="javascript:;" class="remove">
                                    </a>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <p class="text-left">
                                    Left aligned text.
                                </p>
                                <p class="text-center">
                                    Center aligned text.
                                </p>
                                <p class="text-right">
                                    Right aligned text.
                                </p>
                            </div>
                        </div>
                        <!-- END WELLS PORTLET-->
                        <!-- BEGIN WELLS PORTLET-->
                        <div class="portlet light">
                            <div class="portlet-title">
                                <div class="caption">
                                    <i class="fa fa-gift"></i>Wells
                                </div>
                                <div class="tools">
                                    <a href="javascript:;" class="collapse">
                                    </a>
                                    <a href="#portlet-config" data-toggle="modal" class="config">
                                    </a>
                                    <a href="javascript:;" class="reload">
                                    </a>
                                    <a href="javascript:;" class="remove">
                                    </a>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <div class="well">
                                    <h4>Default well</h4>
                                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.Integer molestie lorem at massa Integer molestie lorem at massa Integer molestie lorem at massa Integer molestie lorem at massa.
                                </div>
                                <div class="well well-large">
                                    <h4>Large Well</h4>
                                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. Integer molestie lorem at massa Integer molestie lorem at massa Integer molestie lorem at massa
                                </div>
                            </div>
                        </div>
                        <!-- END WELLS PORTLET-->
                    </div>
                    <div class="col-md-4">
                        <!-- BEGIN UNORDERED LISTS PORTLET-->
                        <div class="portlet box red-sunglo">
                            <div class="portlet-title">
                                <div class="caption">
                                    <i class="fa fa-gift"></i>Unordered Lists
                                </div>
                                <div class="tools">
                                    <a href="javascript:;" class="collapse">
                                    </a>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <ul>
                                    <li>
                                        Lorem ipsum dolor sit amet
                                    </li>
                                    <li>
                                        Consectetur adipiscing elit
                                    </li>
                                    <li>
                                        Integer molestie lorem at massa
                                    </li>
                                    <li>
                                        Facilisis in pretium nisl aliquet
                                    </li>
                                    <li>
                                        Nulla volutpat aliquam velit
                                        <ul>
                                            <li>
                                                Phasellus iaculis neque
                                            </li>
                                            <li>
                                                Purus sodales ultricies
                                            </li>
                                            <li>
                                                Vestibulum laoreet porttitor sem
                                            </li>
                                            <li>
                                                Ac tristique libero volutpat at
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Faucibus porta lacus fringilla vel
                                    </li>
                                    <li>
                                        Aenean sit amet erat nunc
                                    </li>
                                    <li>
                                        Eget porttitor lorem
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- END UNORDERED LISTS PORTLET-->
                        <!-- BEGIN ORDERED LISTS PORTLET-->
                        <div class="portlet box blue-hoki">
                            <div class="portlet-title">
                                <div class="caption">
                                    <i class="fa fa-gift"></i>Ordered Lists
                                </div>
                                <div class="tools">
                                    <a href="javascript:;" class="collapse">
                                    </a>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <ol>
                                    <li>
                                        Lorem ipsum dolor sit amet
                                    </li>
                                    <li>
                                        Consectetur adipiscing elit
                                    </li>
                                    <li>
                                        Integer molestie lorem at massa
                                    </li>
                                    <li>
                                        Facilisis in pretium nisl aliquet
                                    </li>
                                    <li>
                                        Nulla volutpat aliquam velit
                                    </li>
                                    <li>
                                        Faucibus porta lacus fringilla vel
                                    </li>
                                    <li>
                                        Aenean sit amet erat nunc
                                    </li>
                                    <li>
                                        Eget porttitor lorem
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <!-- END ORDERED LISTS PORTLET-->
                        <!-- BEGIN UNSTYLED LISTS PORTLET-->
                        <div class="portlet box yellow-crusta">
                            <div class="portlet-title">
                                <div class="caption">
                                    <i class="fa fa-gift"></i>Unstyled Lists
                                </div>
                                <div class="tools">
                                    <a href="javascript:;" class="collapse">
                                    </a>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <ul class="list-unstyled">
                                    <li>
                                        Lorem ipsum dolor sit amet
                                    </li>
                                    <li>
                                        Consectetur adipiscing elit
                                    </li>
                                    <li>
                                        Integer molestie lorem at massa
                                    </li>
                                    <li>
                                        Facilisis in pretium nisl aliquet
                                    </li>
                                    <li>
                                        Nulla volutpat aliquam velit
                                        <ul>
                                            <li>
                                                Phasellus iaculis neque
                                            </li>
                                            <li>
                                                Purus sodales ultricies
                                            </li>
                                            <li>
                                                Vestibulum laoreet porttitor sem
                                            </li>
                                            <li>
                                                Ac tristique libero volutpat at
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Faucibus porta lacus fringilla vel
                                    </li>
                                    <li>
                                        Aenean sit amet erat nunc
                                    </li>
                                    <li>
                                        Eget porttitor lorem
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- END UNSTYLED LISTS PORTLET-->
                        <!-- BEGIN UNSTYLED LISTS PORTLET-->
                        <div class="portlet box red-intense">
                            <div class="portlet-title">
                                <div class="caption">
                                    <i class="fa fa-gift"></i>Inline List
                                </div>
                                <div class="tools">
                                    <a href="javascript:;" class="collapse">
                                    </a>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <ul class="list-inline">
                                    <li>
                                        1. Lorem
                                    </li>
                                    <li>
                                        2. Phasellus
                                    </li>
                                    <li>
                                        3. Nulla
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- END UNSTYLED LISTS PORTLET-->
                        <!-- BEGIN DESCRIPTION LISTS PORTLET-->
                        <div class="portlet box purple-soft">
                            <div class="portlet-title">
                                <div class="caption">
                                    <i class="fa fa-gift"></i>Description Lists
                                </div>
                                <div class="tools">
                                    <a href="javascript:;" class="collapse">
                                    </a>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <dl>
                                    <dt>Description lists</dt>
                                    <dd>A description list is perfect for defining terms.</dd>
                                    <dt>Euismod</dt>
                                    <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                                    <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                                    <dt>Malesuada porta</dt>
                                    <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                                </dl>
                            </div>
                        </div>
                        <!-- END DESCRIPTION LISTS PORTLET-->
                        <!-- BEGIN DESCRIPTION LISTS PORTLET-->
                        <div class="portlet box green-haze">
                            <div class="portlet-title">
                                <div class="caption">
                                    <i class="fa fa-gift"></i>Text States
                                </div>
                                <div class="tools">
                                    <a href="javascript:;" class="collapse">
                                    </a>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <p class="text-muted">
                                    Muted text here
                                </p>
                                <p class="text-primary">
                                    Primary text here
                                </p>
                                <p class="text-success">
                                    Success text here
                                </p>
                                <p class="text-info">
                                    Info text here
                                </p>
                                <p class="text-warning">
                                    Warning text here
                                </p>
                                <p class="text-danger">
                                    Danger text here
                                </p>
                            </div>
                        </div>
                        <!-- END DESCRIPTION LISTS PORTLET-->
                    </div>
                </div>
                <!-- END PAGE CONTENT INNER -->
            </div>
        </div>
    </div>
</div>
</body>
</html>