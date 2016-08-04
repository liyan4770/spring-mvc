package com.ly.module.system.controller;

import com.github.pagehelper.Page;
import com.ly.module.system.service.UserProdService;
import com.ly.util.tools.IMap;
import com.ly.util.tools.MediaTypes;
import com.ly.util.tools.PageView;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Liyan on 2016/7/30.
 */
@Controller
@RequestMapping("/userProdController")
public class UserProdController {
    private static final Logger log = LoggerFactory.getLogger(UserProdController.class);

    @Autowired
    UserProdService userProdService;

    @RequestMapping("/list")
    public String forwordUserProdList(){
        log.debug("forwordUserProdList");
        return "module/search/user_prod_list";
    }

    @RequestMapping(value = "/queryUserProdList",method = RequestMethod.POST)
    @ResponseBody
    public Map<String,Object> queryUserProdList(HttpServletRequest request){
        log.debug("queryUserProdList");
        IMap params = new IMap(request);
        Page page = PageView.startPageForTable(params);
        List<IMap> list = userProdService.queryUserProdList(params);
        Map<String, Object> result = PageView.getResultForTable(page, list);
        return result;
    }

    @RequestMapping("showAddUserProdObj")
    public String showAddUserProdObj(){
        return "module/search/user_prod_cfg/add_user_prod";
    }

    @RequestMapping(value = "/addUserProdObj",method = RequestMethod.POST,produces = MediaTypes.JSON_UTF_8)
    @ResponseBody
    public Map<String,Object> addUserProdObj(HttpServletRequest request)  {
        IMap params = new IMap(request);
        Map<String, Object> result = new HashMap<String, Object>();
//        SysUser user = (SysUser) request.getSession().getAttribute("sysUser");
//        params.put("CREATE_USER", user.getId());
//        params.put("UPDATE_USER", user.getId());
        int row = userProdService.insertUserProd(params);
        if (row > 0) {
            result.put("flag", "1");
            result.put("msg", "添加成功");
        } else {
            result.put("flag", "0");
            result.put("msg", "添加失败");
        }
        return result;
    }


    @RequestMapping("showUpdateUserProdObj")
    public ModelAndView showUpdateUserProdObj(HttpServletRequest request,HttpServletResponse response){
        IMap params = new IMap(request);
        ModelAndView mav = new ModelAndView("module/search/user_prod_cfg/update_user_prod");
        List<IMap> objList = userProdService.queryUserProdList(params);
        if(objList!=null&&objList.size()>0){
            mav.addObject("obj", objList.get(0));
        }
        return mav;
    }

    @RequestMapping(value = "/updateUserProdObj",method = RequestMethod.POST,produces = MediaTypes.JSON_UTF_8)
    @ResponseBody
    public Map<String,Object> updateUserProdObj(HttpServletRequest request)  {
        IMap params = new IMap(request);
        Map<String, Object> result = new HashMap<String, Object>();
//        SysUser user = (SysUser) request.getSession().getAttribute("sysUser");
//        params.put("UPDATE_USER", user.getId());
        if("".equals(params.getString("ID",""))){
            result.put("flag", "0");
            result.put("msg", "修改失败,ID为空!");
            return result;
        }
        int row = userProdService.updateUserProd(params);
        if (row > 0) {
            result.put("flag", "1");
            result.put("msg", "修改成功");
        } else {
            result.put("flag", "0");
            result.put("msg", "修改失败");
        }
        return result;
    }

    @RequestMapping(value = "/deleteUserProdObj",method = RequestMethod.POST)
    @ResponseBody
    public Map<String,Object> deleteUserProdObj(HttpServletRequest request)  {
        IMap params = new IMap(request);
        Map<String, Object> result = new HashMap<String, Object>();
//        SysUser user = (SysUser) request.getSession().getAttribute("sysUser");
//        params.put("UPDATE_USER", user.getId());
        if("".equals(params.getString("ID",""))){
            result.put("flag", "0");
            result.put("msg", "删除失败,ID为空!");
            return result;
        }
        int row = userProdService.deleteUserProd(params);
        if (row > 0) {
            result.put("flag", "1");
            result.put("msg", "删除成功");
        } else {
            result.put("flag", "0");
            result.put("msg", "删除失败");
        }
        return result;
    }


}
