package com.ly.util.tools;


import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * //分页封装函数
 */
public class PageView {

    /**
     *
     * @param params
     * @return
     */
    public static Page startPage(IMap params) {
        double start = params.getDouble("start", 0);
        int length = params.getInt("length", 10) == -1?999999:params.getInt("length", 10) ;
        int pageNum = (int) Math.ceil(start / length) + 1;
        return PageHelper.startPage(pageNum, length);
    }
    public static Page startPageForTable(IMap params) {
        double start = params.getDouble("offset", 0);
        int length = params.getInt("limit") == 0 ? 999999 : params.getInt("limit", 10) ;
        int pageNum = (int) Math.ceil(start / length) + 1;
        return PageHelper.startPage(pageNum, length);
    }

    /**
     * 可排序分页
     * @param params
     * @param orderFlag 排序标识 true 可以排序 false 不可以排序
     * @return
     */
    public static Page startPageForTable(IMap params, boolean orderFlag) {
        double start = params.getDouble("offset", 0);
        int length = params.getInt("limit") == 0 ? 999999 : params.getInt("limit", 10) ;
        int pageNum = (int) Math.ceil(start / length) + 1;
        if (orderFlag){
            String sort = params.getString("sort");
            String order = params.getString("order");
            String orderby = sort+" "+order;
            PageHelper.orderBy(orderby);
        }
        return PageHelper.startPage(pageNum, length);
    }
    /**
     *
     * @param page
     * @param list
     * @return
     */
    public static Map<String, Object> getResult(Page page, List<?> list) {
        Map<String,Object> result = new HashMap<>();
        result.put("sEcho","sEcho");
        result.put("iTotalRecords",page.getTotal());
        result.put("iTotalDisplayRecords",page.getTotal());
        result.put("aaData",list);
        return result;
    }

    public static Map<String, Object> getResultForTable(Page page, List<?> list) {
        Map<String,Object> result = new HashMap<>();
        result.put("total",page.getTotal());
        result.put("rows",list);
        return result;
    }


}