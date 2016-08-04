package com.ly.module.system.service;

import com.ly.mybatis.dao.SysUserMapper;
import com.ly.mybatis.model.SysUser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by Liyan on 2016/7/27.
 */
@Service
@Transactional
public class SysUserService {
    public static final String HASH_ALGORITHM = "SHA-1";
    public static final int HASH_INTERATIONS = 1024;
    private static final int SALT_SIZE = 8;

    private static Logger logger = LoggerFactory.getLogger(SysUserService.class);

    @Autowired
    private SysUserMapper sysUserMapper;
    public SysUser findUserByLoginName(String loginId){
        return sysUserMapper.selectByPrimaryKey(loginId);
    }
}
