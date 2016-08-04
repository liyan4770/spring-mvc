package com.ly.mybatis.dao;

import com.ly.mybatis.model.SysUser;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;
import java.util.Map;

public interface SysUserMapper extends Mapper<SysUser> {
    List<Map> querySysUserList(Map params);
}