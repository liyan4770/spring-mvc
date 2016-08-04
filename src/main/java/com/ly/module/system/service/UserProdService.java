package com.ly.module.system.service;

import com.ly.mybatis.dao.UserProductMapper;
import com.ly.util.tools.IMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

/**
 * Created by Liyan on 2016/7/30.
 */
@Service
@Transactional
public class UserProdService {

    @Autowired
    private UserProductMapper userProductMapper;

    public List<IMap> queryUserProdList(IMap params){
        return userProductMapper.queryUserProdList(params);
    }

    public int insertUserProd(IMap params) {
        params.put("CREATE_DATE",new Date());
        params.put("UPDATE_DATE",new Date());
        return userProductMapper.insertUserProd(params);
    }

    public int updateUserProd(IMap params) {
        params.put("UPDATE_DATE",new Date());
        return userProductMapper.updateUserProd(params);
    }

    public int deleteUserProd(IMap params) {
        return userProductMapper.deleteUserProd(params);
    }
}
