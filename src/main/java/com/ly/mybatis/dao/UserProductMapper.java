package com.ly.mybatis.dao;

import com.ly.mybatis.model.UserProduct;
import com.ly.util.tools.IMap;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

public interface UserProductMapper extends Mapper<UserProduct> {
    List<IMap> queryUserProdList(IMap params);

    int insertUserProd(IMap params);

    int updateUserProd(IMap params);

    int deleteUserProd(IMap params);

}